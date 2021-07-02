import glob
import re
import shutil
import os
import datetime
import csv
import json

from datetime import datetime as dt

matchedStr =""
def getMatched(match):
    global matchedStr
    matchedStr = match.groups()[0]
    return ""

# パンくずリスト生成
def makeBreadcrumbs(fp, fileName, heading):
    pathDir = "/" + re.sub(r"(/?[^/]*\.md)", "", fp) # /, /test1/test2
    breadcrumbsHtml = ""
    if (pathDir in breadcrumbs) :
        if(pathDir == "/") :
            directories = ['']
        else :
            directories = pathDir.split("/")
        # [''], ['', 'test1', 'test2']

        accumDir = "/"
        itemListElements = []
        position = 1
        for i, d in enumerate(directories) :
            if(d != "") :
                accumDir += d + "/"
            # loop1："/", loop2: "/test1/", loop3: "/test1/test2/"

            backDir = ""
            for j in range(len(directories) - i -1) :
                backDir += "../"
            
            bi = "/" if accumDir == "/" else accumDir[:-1] # /, /test1/test2

            if (backDir == "") : backDir = "./"
            if (i == len(directories) - 1) : # /test1/test2/ 
                if (fileName == "index.html") : # test2/index.md の場合リンクなし
                    breadcrumbsHtml += f'{breadcrumbs[bi]}'
                    itemListElements.append({
                        "@type": "ListItem",
                        "position": position,
                        "name": heading
                    })
                else : # test2/other.md の場合、h1をつけてリンクなし
                    breadcrumbsHtml += f'<a href="./">{breadcrumbs[bi]}</a> <i class="fa fa-angle-right" aria-hidden="true"></i> {heading}'
                    itemListElements.append({
                        "@type": "ListItem",
                        "position": position,
                        "name": breadcrumbs[bi],
                        "item": backDir
                    })
                    position += 1
                    itemListElements.append({
                        "@type": "ListItem",
                        "position": position,
                        "name": heading
                    })
            else :  # たとえば/test1/
                breadcrumbsHtml += f'<a href="{backDir}">{breadcrumbs[bi]}</a> <i class="fa fa-angle-right" aria-hidden="true"></i> '
                itemListElements.append({
                    "@type": "ListItem",
                    "position": position,
                    "name": breadcrumbs[bi],
                    "item": backDir
                })
                position += 1
        j = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": itemListElements
        }
        return '''<p class="breadcrumbs">{breadcrumbsHtml}</p>
        <script type="application/ld+json">
            {json}
        </script>
        '''.format(
                json = json.dumps(j, indent = 2, ensure_ascii=False),
                breadcrumbsHtml = breadcrumbsHtml
            )
    else :
        print(pathDir + " not listed in breadcrumbs.csv")
        return ""


removeIndexRe1 = r"(href\s*?\=\s*?\")index\.html(.*?\")"
subst1 = "\\1./\\2"

removeIndexRe2 = r"(href\s*?\=\s*?\")(.*?)\/index\.html(.*?\")"
subst2 = "\\1\\2/\\3"

descriptionRe = r"<p>.*?{{description:(.*)}}.*?</p>"

# パンくずリストのCSVを読み、辞書を作成
breadcrumbs = {}
with open('../../breadcrumbs.csv', 'r', encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        breadcrumbs[str(row[0])] = str(row[1]) # {"/": "ディスレクシアまとめ", "/assessments":"だれも見過ごさないためのアセスメント", }

# index.htmlの削除
for filePath in glob.iglob('../../book/**/*.html', recursive=True):
    filePath = os.path.normpath(filePath)
    fileName = os.path.basename(filePath)

    if(os.sep == "/") :
        fpFromHtml = re.sub(r"../../book/html/(.+)/.html", "\\1.md", filePath, 0) # filepath from html
    else :
        fpFromHtml = re.sub(r"..\\..\\book\\html\\(.+)\.html", "\\1.md", filePath, 0)
        fpFromHtml = fpFromHtml.replace("\\", "/")

    githubp = "https://github.com/yasutakeyohei/dyslexia/commits/master/src/" + fpFromHtml
    fp = "../../src/" + fpFromHtml
    # print(fp)
    # print(githubp)

    key = ""
    if os.path.exists(fp) :
        dt = datetime.datetime.fromtimestamp(os.stat(fp).st_mtime)
        keyGTM = dt.strftime('%Y-%m-%dT%H:%M:%S+09:00')
        key = dt.strftime('%Y-%m-%d')

    with open(filePath, encoding="utf8") as file:
        s = file.read()

    s = re.sub(removeIndexRe1, subst1, s, 0) #"index.html"の削除
    s = re.sub(removeIndexRe2, subst2, s, 0) #"~/~/index.html"の削除

    # <!-- breadcrumbs -->をパンくずリストに変換
    # nobreadcrumbsがある場合（トップページ）は表示せず
    # headingがある場合はそれをヘディングに設定、それ以外は<h1 id=のタグから取得
    if (not re.search(r"<!-- nobreadcrumbs -->", s)) :
        m = re.search(r"<!-- heading:\s*(.*) -->", s)
        if(m) :
            heading = m.group(1)
        else :
            m = re.search(r'<h1 id=.+><a.+>(.+?)</a></h1>', s)
            if(m) :
                heading = m.group(1)
            else :
                heading = "No title"
                print("heading missing: " + fpFromHtml)

        breadcrumbsHtml = makeBreadcrumbs(fpFromHtml, fileName, heading)
        if (breadcrumbsHtml != "") :
            s = s.replace("<!-- breadcrumbs -->", breadcrumbsHtml, 1)


    matchedStr = ""
    s = re.sub(r"<p>.*{{description:(.*)}}.*</p>", getMatched, s, 0)
    if (matchedStr != "") :
        meta = f'<meta name="description" content="{matchedStr}">'
        s = s.replace("<!-- yield meta description here -->", meta, 1)
        meta = f'<meta property="og:description" content="{matchedStr}" />'
        s = s.replace("<!-- yield og:description here -->", meta, 1)

    matchedStr = ""
    s = re.sub(r"<p>.*{{og-image:\s*(.*)}}.*</p>", getMatched, s, 0)

    if (matchedStr != "") :
        imageURL, w, h = [x.strip() for x in matchedStr.split(',')]
        meta = '''<meta property="og:image" content="{imageURL}" />
        <meta property="og:image:secure_url" content="{imageURL}" />
        <meta property="og:image:width" content="{w}" />
        <meta property="og:image:height" content="{h}" />'''.format(imageURL = imageURL, w = w, h = h)
        s = s.replace("<!-- yield og:image:* here -->", meta, 1)

    if key != "" :
        replace = '''
            <ul class="published-at-updated-at">
                <li><a href="{githubp}"><i class="fa fa-refresh" aria-hidden="true" title="更新日" alt="更新日"></i> <span class="screen-reader-only">更新日</span><time datetime="{keyGTM}" timeprop="modified" title="更新日">{key}</time></a></li>
                <li><i class="fa fa-file-text-o" aria-hidden="true" title="公開日" alt="公開日"></i> <span class="screen-reader-only">公開日</span><time datetime="\\1" timeprop="datepublished" title="公開日">\\1</time></li>
            </ul>
            <!-- <lastmod>{keyGTM}</lastmod> -->
        '''.format(keyGTM = keyGTM, key = key, githubp = githubp)
        s = re.sub(r"<p>.*{{first:(.*)}}.*</p>", replace, s, 0)
    
    with open(filePath, "w", encoding="utf8") as file:
        file.write(s)

# sitemap作成
sitemap = []
sitemap.append('<?xml version="1.0" encoding="UTF-8"?>\n')
sitemap.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n\n')

for filePath in glob.iglob('../../book/**/*', recursive=True):
    filePath = os.path.normpath(filePath)
    if(not re.match(r".*\.(html|docx|xlsx|txt|svg)$", filePath)) :
        continue
    if(re.match(r"..(/|\\)..(/|\\)book(/|\\)html(/|\\)(src(/|\\)|fonts(/|\\)|FontAwesome(/|\\)|theme|404\.html$|favicon\.svg$)", filePath)) :
        continue
    if(os.sep == "/") :
        fp = re.sub(r"../../book/html/(.+)", "\\1", filePath, 0)
    else :
        fp = re.sub(r"..\\..\\book\\html\\(.+)", "\\1", filePath, 0)
        fp = fp.replace("\\", "/")
    srcfp = "../../src/" + fp.replace(".html", ".md")

    url = "https://yasutakeyohei.com/books/dyslexia/" + fp.replace("index.html", "")

    key = ""
    if os.path.exists(srcfp) :
        dt = datetime.datetime.fromtimestamp(os.stat(srcfp).st_mtime)
        keyGTM = dt.strftime('%Y-%m-%dT%H:%M:%S+09:00')
        # key = dt.strftime('%Y-%m-%d')

        sitemap.append("<url>\n")
        sitemap.append("<loc>" + url + "</loc>\n")
        sitemap.append("<lastmod>" + keyGTM + "</lastmod>\n")
        sitemap.append("</url>\n")

sitemap.append("</urlset>")
with open("../html/sitemap.xml", "w", encoding="utf8") as file: # zからの相対パス指定
    file.writelines(sitemap)




# 個別ページ用javascriptディレクトリのコピー
# shutil.copytree('../../js-each/','../../book/html/js-each/')

#個別ページ用CSSディレクトリのコピー
# shutil.copytree('../../css-each/','../../book/html/css-each/')




