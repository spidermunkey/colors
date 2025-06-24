function setVar(variableName,value) {
    return document.documentElement.style.setProperty(variableName,value);
}
function nextTick(fn) {
    setTimeout(fn,0)
}
export class MouseTrackingSlider {
    constructor( targetElement, actions = {}) {
        this.initialPosition_x = null;
        this.initialPosition_y = null;
        this.targetElement = targetElement;
        this.onMouseMove = actions.onMouseMove || function() { console.log( targetElement, 'triggering mouseMove' ) };
        this.onMouseDown = actions.onMouseDown || function() { console.log( targetElement, 'triggered mouseDown' )};
        this.onMouseUp = actions.onMouseUp     || function() { console.log( targetElement, 'triggered mouseUp' ) };
        targetElement.addEventListener('mousedown', this.track.bind(this), true )
        targetElement.addEventListener('click', this.handleClick.bind(this))
    }
    track(event) {
        if (event.button !== 0)
            return
        if (!this.initialPosition_x) this.initialPosition_x = event.pageX;
        if (!this.initialPosition_y) this.initialPosition_y = event.pageY;
        let controller = new AbortController();
        document.addEventListener( 'mousemove', this.handleDrag.bind(this) , { signal: controller.signal }, true )
        document.addEventListener( 'mouseup' , () => {
            controller.abort();
            this.initialPosition_x = null;
            this.initialPosition_y = null;
            event.stopImmediatePropagation();
        })
    }
    handleDrag(event) {
        let distanceFromInitialPosition_x = event.clientX - this.initialPosition_x;
        let distanceFromInitialPosition_y = event.clientY - this.initialPosition_y;
        let debounced_x = Math.floor(distanceFromInitialPosition_x / 3);
        let debounced_y = Math.floor(distanceFromInitialPosition_y / 3);
        this.onMouseMove( { x: Number(debounced_x), y: Number(debounced_y), event } )
    }
    handleClick(event) {
        if (!this.initialPosition_x) this.initialPosition_x = event.pageX;
        if (!this.initialPosition_y) this.initialPosition_y = event.pageY;
        let x = event.clientX - this.initialPosition_x;
        let y = event.clientY - this.initialPosition_y;
        this.onMouseUp({x,y,event});
    }

}

class Canvas extends MouseTrackingSlider {
    constructor({ 
        canvas , 
        pointer, 
        target, 
        actions = {}, 
        props = { hex: '#fff' } 
      }){
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
        let yDistance = this.height * yToDecimal
        let yClamp = Math.min(yDistance,this.width)
        this.pointer.style.setProperty('--x',`${xClamp}px`);
        this.pointer.style.setProperty('--y',`${yClamp}px`);
    }
};

export class Slider {
    constructor( {
      targetElement , 
      actions = {} 
    }) {
        const self = this;
        this.container = targetElement;
        this.track = targetElement.querySelector('.slider-track') || targetElement;
        this.handle = targetElement.querySelector('.slider-handle') || targetElement.querySelector('.slider-handle');
        this.onMouseDown = actions.onMouseDown || function(state) { console.log('mouse down',state)};
        this.onMouseUp = actions.onMouseUp || function(state) { console.log('mouse up', state)};
        this.onMouseMove = function(...args) { 
          requestAnimationFrame(actions?.onMouseMove.bind(this,...args) || function(state) { console.log('mouse moving',state)}) 
        };
        this.coords = {
            get max() {
                return this.track.width - this.handleMidpoint;
            },
            get min() {
                return 0 + this.handleMidpoint;
            },
            get handleSize() {
                return this.handle.width;
            },
            get handleMidpoint() {
                return this.handleSize / 2;
            },
            get handlePosition() {
                return this.handle.x + this.handleMidpoint;
            },
            get distanceTraveled() {
                return this.handlePosition - this.trackStart;
            },
            get trackWidth() {
                return this.track.width - this.handleSize;
            },
            get trackStart() {
                return this.trackLeft + this.handleMidpoint;
            },
            get trackLeft() {
                return this.track.x;
            },
            get track() {
                return self.track.getBoundingClientRect();
            },
            get handle() {
                return self.handle.getBoundingClientRect();
            },
            clamp(val) {
                let x;
                let max = this.max;
                let min = this.min;
                if (isNaN(val)) throw new Error(`clamp function expects a number...you passed ${val}`);
                if (val >= max) x = max;
                else if (val <= min) x = min;
                else x = val;
                return x;
            },
        };
        this.MAX = {
            px: this.coords.track.width,
            pct: 100,
            deg: 360,
        };
        this.MIN = {
            px: 0,
            pct: 0,
            deg: 0,
        };
        this.state = {
            px: undefined,
            deg: undefined,
            pct: undefined,
        };
        this.handle.addEventListener( 'mousedown', this.handleDrag.bind(this), true );
        this.track.addEventListener( 'click', this.handleClick.bind(this), true );
    }
    handleDrag(event) {
        event.stopImmediatePropagation();
        let initialMouseUpIfAny = document.onmouseup;
        let controller = new AbortController();
        let state;
        document.addEventListener('mousemove', update.bind(this) , { capture: true, signal: controller.signal });
        document.onmouseup = abort.bind(this)
        function update(event) {
            state = this.update(event);
            this.onMouseMove(state);
        }
        function cleanup() {
            document.removeEventListener('mousemove', update.bind(this),  { capture: true, signal: controller.signal } )
            document.onmouseup = initialMouseUpIfAny;
        }
        function abort() {
            controller.abort();
            this.onMouseUp(state);
            nextTick(cleanup);
        }
    }
    handleClick(event) {

        if (event.target == this.handle)
            return;

        let state = this.update(event);
        this.onMouseDown(state);
        this.onMouseUp(state);

    }
    update(event) {
        this.state = this.setHandle(this.getDistanceTraveled(event));
        return this.state;
    }
    setHandle (distanceTraveled) {
        let clamped = this.coords.clamp(distanceTraveled);
        this.handle.style.transform = `translateX(${clamped - this.coords.handleMidpoint}px)`;
        if (distanceTraveled <= 0)
            return {
                px: 0,
                pct: 0,
                deg: 0,
            };
        if (distanceTraveled >= this.coords.track.width)
            return {
                px: this.coords.track.width,
                pct: 100,
                deg: 360,
            };
        let distance = Math.trunc(distanceTraveled);
        let distanceInPercent = Math.trunc((distanceTraveled / this.coords.track.width) * 100);
        let distanceInDegrees = Math.trunc((distanceTraveled / this.coords.track.width) * 360);
        let values = {
            px: distance,
            pct: distanceInPercent,
            deg: distanceInDegrees,
        };
        return values;
    }
    reset() {
        return this.update(0);
    }
    disable () {
        this.handle.removeEventListener('mousedown', this.handleDrag.bind(this), true );
        this.track.removeEventListener('mousedown', this.handleClick.bind(this), true );
        return this.state;
    }
    getDistanceTraveled (event) {
        return event.clientX - this.coords.trackLeft;
    }
    convertValue (type, value) {
        let max = this.coords.track.width;
        if (type === 'pct') return max * (value/100);
        if (type === 'deg') return max * (value/360);
        if (type === undefined) {
            console.warn('you passed an invalid type to the sliders conver function',type,value);
            return undefined; 
        }
        console.error('something went wrong in the convert value function',type,value);
        return;
    }
    setFrom (type, value) {
        this.state = this.setHandle(this.convertValue(type, value));
        // console.log('state', state, 'slider state', this.state)
        return this.state;
    }
    setDegrees(value) {
        return this.setFrom('deg', value);
    }
    setPercent(value) {
        return this.setFrom('pct', value);
    }
    setPixels(value) {
        this.state = this.setHandle(value);
        return this.state;
    }
    detatch(){
      this.handle.removeEventListener( 'mousedown', this.handleDrag.bind(this), true );
        this.track.removeEventListener( 'click', this.handleClick.bind(this), true );
    }
}
