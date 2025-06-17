class Canvas {
    constructor(canvas, pointer, options ) {

        this.element = canvas;
        this.pointer = pointer;
        this.tracker = new MouseTrackingSlider(canvas,options);
        this.hex = undefined;
        this.hsl = undefined;
        this.hsv = undefined;
    }

    get coords() {
        return this.element.getBoundingClientRect();
    }

    get x() {
        if (this.hsl)
            return toDecimal(this.hsl[1])
    }
    set x(val) {
        if (this.hsv)
            this.setPointer(this.hsv[1]);
    }


    get y() {
        if (this.hsl)
            return toDecimal(this.hsl[2])
    }
    set y(val) {
        if (this.hsv)
            this.setPointer(this.hsv[2]);
    }

    get width() {
        return this.coords.width;
    }
    
    get height() {
        return this.coords.height;
    }

    update(hsv,hsl,hex) {
        this.hsv = hsv;
        this.hsl = hsl;
        this.hex = hex;
        this.setPointer();
    }

    setPointer() {
        let x = this.hsv[1];
        let xToDecimal = x/100;
        let xDistance = this.width * xToDecimal;

        let y = this.hsv[2];
        let yToDecimal = 1 - y/100;
        let yDistance = this.width * yToDecimal

        
        this.pointer.style.setProperty('--x',`${xDistance}px`);
        this.pointer.style.setProperty('--y',`${yDistance}px`)

    }

}

export class FsContext {
    constructor() {
        this.element = $('.themer-options');
        this.options = $$('.themer');
        this.currentContext = null;

        this.positions = (() => {

            let count = 0;

            return this.options.map(element => {
                let dta = [ count, element, Math.round(element.getBoundingClientRect().x) ]
                count += 1;
                return dta
            })

        })()
        

        listenAll(this.options, function() {

            const element = last(arguments);
            const event = first(arguments);
            console.log(arguments);

            const position = this.positions.find(index => 
                index[1] == element
            )[2];

            this.element.style.transform = `translateX(${position - 30}px)`
            this.toggle();

        }.bind(this))

        console.log(this.positions);
    }

    update(color) {

    }

    position(x,y) {

    }

    show() {
        this.element.classList.add('active');
    }

    hide() {
        this.element.classList.remove('active');
    }

    toggle() {
        this.element.classList.toggle('active');
    }
}

// So to change the wallpapper

// Starting with the first element in the menu;

const hexToggler = $('.themer-options .cc .tggler');

listen(hexToggler, function() {
    $('.hex-editor').classList.toggle('active')
})

const canvas = new Canvas($('.hex-editor'),$('.hex-editor .cp-canvas--pointer'), {
    onMouseMove: function() {
        console.log('mouse moving');
    },
    onMouseUp: function() {
        console.log('mouse up');
    },
    onMouseDown: function() {
        console.log('mouse down');
    }
})
