(() => {
  let start = 0;
  let finish = 10000;
  let speed = 100;

  browser.runtime.onMessage.addListener((message) => {
    start = message.form.start;
    finish = message.form.finish;
    speed = message.form.speed;
  });

  setInterval(() => {
    const video = document.querySelector("video");
    video.playbackRate = speed / 100;
    if (video.currentTime > finish) {
      video.currentTime = start;
    }
  }, 500);
})();
