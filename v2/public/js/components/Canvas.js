class Canvas extends MouseTrackingSlider {

    constructor( 

        { canvas , pointer } , 
        actions = {}, 
        props = { hex: '#fff' } ) 
    
    {

        super( canvas, actions);

        const self = this;
        this.element = canvas;
        this.pointer = pointer;
        this.color = new Color(props);
        this.element.style.setProperty('--hue',`${this.color.hue}`);

        console.log(this.color.hue.toString())

        this.onMouseMove = function(state) {

                let event = state.event;
                this.handleCanvasPosition(event);

                if (actions.handleColor)
                    actions.handleColor(this.color);

                this.element.style.setProperty('--hue',`${this.color.hue}`);
                
                return state
        }

        this.onMouseUp = function(state) {
            
            let event = state.event;
            this.handleCanvasPosition(event);

            if (actions.handleColor)
                actions.handleColor(this.color);
            if (actions.mouseUp)
                actions.mouseUp(this.color);
            
            this.element.style.setProperty('--hue',`${this.color.hue}`);

            console.log(this.color)
            return state
        }

        console.log(this)
    }

    get coords() {
        return this.element.getBoundingClientRect();
    }

    get width() {
        return this.coords.width;
    }
    
    get height() {
        return this.coords.height;
    }

    handleCanvasPosition(event) {
        
        let 
    
            yPos = event.clientY - this.coords.bottom,

            x = event.clientX - this.coords.x,
            y = Math.abs(yPos),

            xPct = Math.round(x / this.coords.width * 100),
            yPct = Math.round(y / this.coords.height * 100);

            if (xPct <= 100 && xPct >= 0) 
                this.color.hsvSaturation = xPct;

            if (yPct <= 100 && yPct >= 0 && yPos <= 0)
                this.color.hsvValue = yPct;
        
            this.setPointer( this.color.hsv[1] , this.color.hsv[2] );

        return this.color
    }

    update(props) {
        // this.color = new Color(props);
        this.setPointer(this.color.hsv[1], this.color.hsv[2]);
    }

    setPointer(x,y) {
        
        let xToDecimal = x/100;
        let xDistance = this.width * xToDecimal;
        let xClamp = Math.min(xDistance,this.width)


        let yToDecimal = 1 - y/100;
        let yDistance = this.width * yToDecimal
        let yClamp = Math.min(yDistance,this.width)

        this.pointer.style.setProperty('--x',`${xClamp}px`);
        this.pointer.style.setProperty('--y',`${yClamp}px`);

    }

};