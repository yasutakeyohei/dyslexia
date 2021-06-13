/* サイドバーを開く・閉じるアイコンの変更 */
(() => {
  'use strict'
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebarToggleIcon = document.getElementById('sidebar-toggle-icon');

  if (sidebarToggle.getAttribute("aria-expanded") === "true") {
    sidebarToggleIcon.classList.replace("fa-chevron-circle-right", "fa-chevron-circle-left");
  }

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === "aria-expanded") {
        if (sidebarToggle.getAttribute("aria-expanded") === "true") {
          sidebarToggleIcon.classList.replace("fa-chevron-circle-right", "fa-chevron-circle-left");
        } else {
          sidebarToggleIcon.classList.replace("fa-chevron-circle-left", "fa-chevron-circle-right");
        }
      }
    })
  })
  observer.observe(sidebarToggle, {
    attributes: true
  })
})();


/* アクセシビリティツール */
(() => {
  const html = document.querySelector('html');
  const a11yToggleButton = document.getElementById('a11y-toggle');
  const a11yPopup = document.getElementById('a11y-list');

  const defaultState = {
    theme: default_theme,
    fontFamily: "",
    lineSpacing: "",
    letterSpacing: "",
    fontSize: "",
    ruby: "",
  }

  let state = {
    theme: "",
    fontFamily: "",
    lineSpacing: "",
    letterSpacing: "",
    fontSize: "",
    ruby: "",
  };

  const setState = (newState, store = true) => {
    state = {...state, ...newState}; //merge state
    if (store) {
      try {
        localStorage.setItem('mdbook-state', JSON.stringify(state));
      } catch (e) {}
    }
  }
  const getState = () => {
    let state;
    try {
      state = JSON.parse(localStorage.getItem('mdbook-state'));
    } catch (e) {}
    if (state === null || state === undefined) {
      return defaultState;
    } else {
      return state;
    }
  }
  setState(getState(), false);


  showA11yPopup = () => {
    a11yPopup.style.display = 'block';
    a11yToggleButton.setAttribute('aria-expanded', true);
    a11yPopup.querySelector("button#" + getTheme()).focus();
  }
  hideA11yPopup = () => {
    a11yPopup.style.display = 'none';
    a11yToggleButton.setAttribute('aria-expanded', false);
    a11yToggleButton.focus();
  }
  updatePopup = () => {
    [...a11yPopup.querySelectorAll("button.theme")].forEach((elm) => {
      elm.classList.remove("selected");
    });
    a11yPopup.querySelector("button#" + getTheme()).classList.add("selected");
  }

  getTheme = () => {
    let theme;
    try {
      theme = localStorage.getItem('mdbook-theme');
    } catch (e) {}
    if (theme === null || theme === undefined) {
      return default_theme;
    } else {
      return theme;
    }
  }

  setTheme = (theme, store = true) => {
    let previousTheme = getTheme();
    if (store) {
      try {
        localStorage.setItem('mdbook-theme', theme);
      } catch (e) {}
    }
    html.classList.remove(previousTheme);
    html.classList.add(theme);
    updatePopup();
  }
  setTheme(getTheme(), false);


  a11yToggleButton.addEventListener('click', () => {
    a11yPopup.style.display === 'block' ? hideA11yPopup() : showA11yPopup();
  });

  a11yPopup.addEventListener('click', (e) => {
    let a11y = e.target.id || e.target.parentElement.id;

    if (e.target.classList.contains("theme")) {
      setTheme(a11y);
    } else if (e.target.classList.contains("font-family")) {
      setFontFamily(a11y);
    } else if (e.target.classList.contains("line-spacing")) {
      setLineSpacing(a11y);
    } else if (e.target.classList.contains("letter-spacing")) {
      setLetterSpacing(a11y);
    } else if (e.target.classList.contains("font-size")) {
      setFontSize(a11y);
    } else if (e.target.classList.contains("ruby")) {
      setRuby(a11y);
    }

  });

  a11yPopup.addEventListener('focusout', (e) => {
    // e.relatedTarget is null in Safari and Firefox on macOS (see workaround below)
    if (!!e.relatedTarget && !a11yToggleButton.contains(e.relatedTarget) && !a11yPopup.contains(e.relatedTarget)) {
      hideA11yPopup();
    }
  });

  // Should not be needed, but it works around an issue on macOS & iOS: https://github.com/rust-lang/mdBook/issues/628
  document.addEventListener('click', (e) => {
    if (a11yPopup.style.display === 'block' && !a11yToggleButton.contains(e.target) && !a11yPopup.contains(e.target)) {
      hideA11yPopup();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
      return;
    }
    if (!a11yPopup.contains(e.target)) {
      return;
    }

    let li;
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        hideA11yPopup();
        break;
      case 'ArrowUp':
        e.preventDefault();
        li = document.activeElement.parentElement;
        if (li && li.previousElementSibling) {
          li.previousElementSibling.querySelector('button').focus();
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        li = document.activeElement.parentElement;
        if (li && li.nextElementSibling) {
          li.nextElementSibling.querySelector('button').focus();
        }
        break;
      case 'Home':
        e.preventDefault();
        a11yPopup.querySelector('li:first-child button').focus();
        break;
      case 'End':
        e.preventDefault();
        a11yPopup.querySelector('li:last-child button').focus();
        break;
    }
  });
})();