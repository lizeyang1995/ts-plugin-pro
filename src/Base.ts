import { TYPE } from "./Tab";

abstract class Base {
    private _curIndex: number = 0
    private _el: HTMLElement
    private _tabItems: HTMLCollection
    constructor(el: HTMLElement, type: TYPE) {
        this._el = el
        this._tabItems = this._el.getElementsByClassName('tab-item')
        this.init()
    }

    private init() {
        this.bindEvent()
    }

    private bindEvent() {
        this._el.addEventListener('click', this.setTab.bind(this), false)
    }

    private setTab(e: MouseEvent) {
        const tar = e.target as HTMLElement
        const className = tar.className

        if (className === 'tab-item') {
            this._tabItems[this._curIndex].className = 'tab-item'
            //找到当前点击的那一项tar，在_tabItems里的下标
            this._curIndex = [].indexOf.call(this._tabItems, tar)
            this._tabItems[this._curIndex].className += ' active'
        }
    }
}

export default Base