import { TYPE } from "./Tab"

function setEl(el: string | undefined, type: TYPE): HTMLElement {
    if (!el) {
        throw new Error('"el" must be exist')
    }
    const isMark: boolean = /\^(\.|\#)/.test(el)
    let _el: HTMLElement | null

    if (!isMark) {
        _el = document.querySelector(`.${el}`) || document.querySelector(`#${el}`)
    } else {
        _el = document.querySelector(el)
    }

    if (!_el) {
        throw new Error('this element with the class or Id name is need')
    }

    _el.className += ' ' + type
    return _el
}

function setType(type: string | TYPE | undefined): TYPE {
    if (!type) {
        return TYPE.FADE
    }

    for (let k in TYPE) {
        if (TYPE[k] === type) {
            return type as TYPE
        }
    }

    return TYPE.FADE
}

export {
    setEl,
    setType
}