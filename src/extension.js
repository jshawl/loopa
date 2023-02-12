export const mount = (selector, callback) => {
  setTimeout(() => {
    const element = document.querySelector(selector)
    if(element){
      return callback(element)
    }
    mount(selector, callback)
  }, 500)
}
