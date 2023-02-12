import {mount} from './extension';
import {init, setMax, getVideo, getFinish, getStart, getSpeed, isDisabled} from './app';

mount('#player-container-inner', (container) => {
  init(container.parentElement, 0)
  setInterval(() => {
    const video = getVideo()
    if(isDisabled()){
      video.playbackRate = 1
      return
    }
    
    setMax(Math.floor(video.duration))
    video.playbackRate = getSpeed() / 100
    if(video.currentTime > getFinish()){
      video.currentTime = getStart()
    }
  }, 500)
})
