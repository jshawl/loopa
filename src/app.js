const ui = document.createElement("div");

const template = (duration = 0) => `
<style>
  .ui{
    background: #F2F2F2;
    border-radius: 10px;
    z-index: 99;
    position: relative;
    padding: 1rem;
    margin: 1rem 0 ;
  }
  [type="number"]{
    width: 50px;
  }
</style>
<strong>Loopa</strong>
<label>Start</label>
<input class='start range' type='number' min='0' max='${duration}' value='${0}' />
<label>Finish</label>
<input class='finish range' type='number' min='0' max='${duration}' />
<label>Speed</label>
<input type='number' class='speed' min="1" max="100" value="100" />
<br>
<div><input type="checkbox" checked id='enabled' class='js-enable'/><label for='enabled'>Enabled</label></div>
`

export const init = (container, duration = 0) => {
  ui.classList.add("ui")
  ui.innerHTML = template()
  Array.from(ui.querySelectorAll(".range")).map(input => {
    input.setAttribute("max", duration)
  })
  container?.appendChild(ui)
}

export const setMax = (max) => {
  Array.from(ui.querySelectorAll(".range")).map(input => {
    input.setAttribute("max", max)
    if(!input.value){
      input.value = max
    }
  })
}

export const isDisabled = () => {
  return !document.querySelector(".js-enable").checked
}

export const getVideo = () => document.querySelector("video")
export const getFinish = () => Number(ui.querySelector(".finish").value)
export const getStart = () => Number(ui.querySelector(".start").value)
export const getSpeed = () => Number(ui.querySelector(".speed").value)
