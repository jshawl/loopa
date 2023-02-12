/**
 * @jest-environment jsdom
 */

import { init, setMax, getVideo } from '../app.js'
import { mount } from '../extension.js'

describe("ui mounting", () => {
  it("waits for the selector to be present before mounting", (done) => {
    document.body.innerHTML = ''
    const fn = jest.fn()
    mount('.future-element', fn)
    expect(fn).not.toHaveBeenCalled()
    document.body.innerHTML = `<div class='future-element'></div>`
    setTimeout(() => {
      expect(fn).toHaveBeenCalledTimes(1)
      done()
    }, 501)
  })
  it("attaches a <div class='ui' />", () => {
    init(document.body)
    expect(document.querySelector(".ui")).toBeTruthy()
  })
  it("adds inputs", () => {
    expect(document.querySelectorAll("input").length).toBe(3)
  })
  it("updates inputs if the video changes", () => {
    expect(document.querySelector("input").max).toBe("0")
    setMax(42)
    expect(document.querySelector("input").max).toBe("42")
  })
  it("gets the video", () => {
    expect(getVideo()).toBe(null)
    document.body.innerHTML = `<video />`
    expect(getVideo()).toBeTruthy()
  })
})
