import {mount} from './extension';
import {init, setMax, getVideo, getFinish, getStart, getSpeed} from './app';

mount('#player-container-inner', (container) => {
  init(container.parentElement, 0)
  setInterval(() => {
    const video = getVideo()
    setMax(Math.floor(video.duration))
    console.log('start, finish', getStart(), getFinish())
    video.playbackRate = getSpeed() / 100
    if(video.currentTime > getFinish()){
      video.currentTime = getStart()
    }
  }, 500)
})
