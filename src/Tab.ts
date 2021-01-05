
interface IOptions {
    el: string,
    type: TYPE | string
}

export enum TYPE {
    FADE = 'fade',
    SLIDE = 'slide'
}

class Tab {
    constructor(options: IOptions) {
        const { el, type }: IOptions = options
    }
}

export default Tab