(function () {
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

  // 監視の開始
  observer.observe(sidebarToggle, {
    attributes: true
  })

})()