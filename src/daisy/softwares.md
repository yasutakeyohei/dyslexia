# デイジー図書再生・製作ソフトウェア
さまざまなソフトウェアがあります。しかしメンテナンスされていないものもあり、まずはすべてを試してから使用されると良いのかもしれません。私がざっと使ってみて、使いやすいように感じたのは、ChattyBooksとReadiumです。
## DAISY 図書再生ソフト（Windows）

| ソフト/機器名 | 無料 | DAISY 1.0 | DAISY 2.0 | DAISY 2.02 | DAISY 3.0 | EPUB 3 (DAISY 4.0) |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| [AMIS](https://www.dinf.ne.jp/doc/daisy/software/amis3_1_4_install.html) | 〇 | × | × | 〇 | 〇 | × |
| [ChattyBooks](https://www.sciaccess.net/jp/ChattyBooks/) | 〇 | × | × | 〇 | 〇 | △ |
| [EasyReader6.03](https://blog.normanet.ne.jp/atdo/?q=node/105) | △ | × | × | 〇 | 〇 | ？ |
| [いーリーダー](http://www.plextalk.com/jp/education/products/e-reader/) | × | × | × | 〇 | 〇 | ？ |
| [デイジーポッド5](https://www.dinf.ne.jp/doc/daisy/book/daisytext_pod.html) | 〇 | × | × | ？ | ？ | ？ |
| [MyBook V](http://www.aok-net.com/products/mybook.html) | × | × | × | 〇 | 〇 | 〇 |

* AMISは最近アップデートされていない（ハイライトが途中から移動しないバグあり）。
* デイジーポッドはデイジー教科書専用で、利用には登録が必要（担任、通級指導担当、校長、教育委員会、支援者、保護者、児童生徒本人、学校図書館、教育委員会が登録可能）。
* [Easy Reader Express](https://blog.normanet.ne.jp/atdo/?q=node/113)というソフトもあるが、単体での配布はなく、すぐ再生できるDAISY書籍に同梱されているもののみが流通。

## DAISY 図書再生ソフト（iOS/Android）
| ソフト/機器名 | 無料 | DAISY 1.0 | DAISY 2.0 | DAISY 2.02 | DAISY 3.0 | EPUB 3 (DAISY 4.0) |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| [ChattyBooks(iOS/Android)](https://chattybooks.sciaccess.net/) | 〇 | × | × | 〇 | 〇 | △ |
| [いーリーダー(iOS)](https://apps.apple.com/jp/app/%E3%81%84%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC/id1023283265?mt=8&ign-mpt=uo%3D4) | × | × | × | 〇 | 〇 | ？ |
| [EasyReader(iOS/Android)](https://yourdolphin.com/en-gb/products/individuals/easyreader-app) | △ | × | × | 〇 | 〇 | 〇 |
| [デイジーポッド5（iOS）](https://apps.apple.com/jp/app/%E3%83%87%E3%82%A4%E3%82%B8%E3%83%BC%E3%83%9D%E3%83%83%E3%83%89/id1109664926) | 〇 | × | × | ？ | ？ | ？ |
| [のじぎく（iOS）](https://apps.apple.com/jp/app/nojigiku-shinpuru-deijipureiya/id1159185461) | 〇 | × | × | 〇 | 〇 | ？ |
| [ボイス オブ デイジー 5（iOS/iPadOS）](http://www.cypac.co.jp/ja/products/vodi5/) | × | × | × | 〇 | 〇 | 〇 |

* のじぎくは、ひなぎくで作成されたコンテンツを再生可能。
* デイジーポッドはデイジー教科書専用で、利用には登録が必要（担任、通級指導担当、校長、教育委員会、支援者、保護者、児童生徒本人、学校図書館、教育委員会が登録可能）。

## EPUB 3 再生ソフト（Media OVerlays 録音音声の再生 に対応）
| 個人的<br>評価 | ソフト/機器名 | OS |
| ---- | ---- | ---- | 
| 〇 | [Adobe Digital Editions 4.5.11 ](https://www.dinf.ne.jp/doc/daisy/software/amis3_1_4_install.html) | Win, Mac, iOS, iPadOS, Android, Linux |
| 〇 | [Apple Books（旧iBooks）](https://apps.apple.com/jp/app/apple-books/id364709193) | Mac, iOS, iPadOS|
| ◎ | [Readium](https://chrome.google.com/webstore/detail/readium/fepbnnnkkadjhjahcafoaglimekefifl?hl=ja) | Win, Mac, iOS, Android, Linux |
| △ | [Readium CloudReader](http://readium.github.io/readium-js-viewer/?) | Win, Mac, iOS, Android, Linux |

* Adobe Digital Editions 4.5.11は、EPUB Media Overlaysなら読んでいる箇所のハイライト表示機能あり。EPUB Media Overlaysでなければ[スクリーンリーダー](https://parashuto.com/rriver/others/screen-reader-market-share)（[NVDA](https://www.nvaccess.org/)）が必要で、ハイライト表示なし。iOS, Android版は不具合多い。
* Apple Books（旧iBooks）は、Media Overlaysの固定レイアウトモードのみに対応。非対応の図書は[固定レイアウトモードに変更](https://www.slideshare.net/youjisakai/media-overlays-30fxl-epubepub-34)することで閲覧が可能になる。
* Readiumは2022年に終了するChromeアプリで提供されているため、それまでの利用となる。
* Readium CloudReaderはブラウザを閉じると内容がクリアされる（EPUB3を保存できず）。

## EPUB 3 再生ソフト（その他）
| ソフト/機器名 | OS |
| ---- | ---- | 
| [Thorium Reader](https://github.com/readium/readium-desktop) | Win, Mac, iOS, iPadOS, Android, Linux |
| [iPhone等で画面の読み上げ](https://support.apple.com/ja-jp/HT202362) | iOS, iPadOS |

* Thorium Readerは録音音声や日本語には未対応。ただしアップデートが比較的活発なオープンソースソフトウェアのため期待できる。
* iPhone等で画面の読み上げに関しては、ハイライト表示もあるものの、音声と一致しないなど、かなりの難あり。

## （番外）Amazon Polly
深層学習によって文章をリアルタイムで読み上げることのできるAmazonのサービス。有料ではあるものの、低コストで自然な合成音声が得られます。Amazon Pollyは単体でそのまま使うものではなく、アプリを製作する必要があります。

## （番外）Read Speaker（WEBサイト読み上げ・契約サイトのみ）
小平市のサイト（ホームページ）でも使われている「Read Speaker」は非常に良い読み上げソフトだと思います。有料で契約したサイトでしか実行できないものの、文節毎にハイライトが移動しながら自然な合成音声の読み上げを行うものです。小平市のサイトではハイライトは移動しませんが、例えば[東京都のサイト](https://www.metro.tokyo.lg.jp/)ではハイライトが移動して読み上げられます（なにか文字列を選択すると「読み上げる」ボタンが表示されます）。ただ、東京都のサイトでも肝心の「東京都福祉保健局」などではそもそもRead Speakerが導入されていないなど、コストが高いのかもしれません。



## 製作・変換ソフト
- [DAISY Pipeline 2（形式変換）](http://daisy.github.io/pipeline/)
    - [DAISY4からEPUB3への橋渡し役、DAISY Pipeline 2](https://code.kzakza.com/2012/08/daisy-pipeline-2/)
- [DAISY Translator日本語版（製作&音声合成）](https://www.dinf.ne.jp/doc/daisy/software/save_as_daisy.html)
- [GoogleドキュメントのEPUB出力＋Tobiでの音声付与](https://blog.normanet.ne.jp/atdo/?q=node/420)
- [Obi（音声DAISY製作）](https://daisy.org/activities/software/obi/)
- [Tobi（音声の録音編集）](https://daisy.org/info-help/guidance-training/tags/tobi/)

## その他参考サイト
- [製作・再生ツール](https://atdo.website/tools/)
- [DAISY/EPUB再生・製作ツール](https://www.normanet.ne.jp/~atdo/tool.html#tobi)
- [media overlaysによる音声付き電子書籍の作成](https://t2aki.doncha.net/?id=1424168919)