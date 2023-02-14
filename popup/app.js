browser.tabs.executeScript({ file: "/content_scripts/inject.js" }).then((e) => {
  console.log(e);
  document.addEventListener("click", () => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        form: Object.fromEntries(new FormData(document.querySelector("form"))),
      });
    });
  });
});
