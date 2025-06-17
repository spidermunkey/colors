export class ScrollStacker {
    constructor(stacker, tick = 226, bouncer = 10) {

        this.trigger = stacker.querySelector('.scroll-stacker');
        this.content = stacker.querySelector('.stack-wrapper');
        this.tracer = stacker.querySelector('.stack-tracer');
        this.tick = tick;
        this.ticker = 0;
        this.bouncer = bouncer;
        this.lastKnownPosition = 0;
        this.onScroll = () => this.debounce(this.onTick)
        this.activePanel = null;

        if (!this.trigger || !this.content)
            return console.log('stacker failed to instaciate',trigger,content);
        // function debounce(callback){
        //     return function() {

        //     clearTimeout(callback.timeoutId);

        //     callback.timeoutId = setTimeout(
        //         function() { callback() }, 
        //         bouncer )

        //     }


        // }
        this.reset();

        if (this.tracer) {
            console.log(this.tracer)
            const t = this.tracer;
            [...t.querySelectorAll('.tracer')].forEach(el => {
                this.mapTracer(el);
            })
        }
            

        this.trigger.addEventListener(
            'scroll', 
            () => this.debounce(this.onTick) )

        this.tracer.addEventListener(
            'click',
            (e) => {
                if (!e.target.classList.contains('tracer')) this.step()
            }
        )
            
    }

    step() {
        console.log(this)
        const p1 = this.content.querySelector('[data-pos="1"]');
        const p2 = this.content.querySelector('[data-pos="2"]');
        const p3 = this.content.querySelector('[data-pos="3"]');

        p1.dataset.pos = "3";
        p2.dataset.pos = "1";
        p3.dataset.pos = "2";
    
        p2.classList.add('active');
        this.tracer.querySelector(`[data-tracer="${p2.dataset.ipos}"]`).classList.add('active');
        this.activeTracer = this.tracer.querySelector(`[data-tracer="${p2.dataset.ipos}"]`);
        this.activePanel = p2;

        p1.classList.remove('active');
        this.tracer.querySelector(`[data-tracer="${p1.dataset.ipos}"]`).classList.remove('active');

    }

    // pick(element) {
    //     let p;
    //     element.position = element.dataset.pos;
    //     if (Number(element.position) && Number(element.position) === 3){
    //         // if last element is picked 1(first)element becomes 3(last)
    //     }
    //     else if (Number(element.position && Number(element.position) === 1)){
    //         // if last element is picked 1(first)element becomes 3(last)

    //     }
        
    //     element.dataset.pos = "1";
    // }

    reverse() {
        console.log(this)
        const p1 = this.content.querySelector('[data-pos="1"]');
        const p2 = this.content.querySelector('[data-pos="2"]');
        const p3 = this.content.querySelector('[data-pos="3"]');
    
        p3.dataset.pos = "1";
        p2.dataset.pos = "3";
        p1.dataset.pos = "2";

        p3.classList.add('active');
        this.tracer.querySelector(`[data-tracer="${p3.dataset.ipos}"]`).classList.add('active');
        this.activeTracer = this.tracer.querySelector(`[data-tracer="${p3.dataset.ipos}"]`);
        this.activePanel = p3;

        p1.classList.remove('active');
        this.tracer.querySelector(`[data-tracer="${p1.dataset.ipos}"]`).classList.remove('active');
    
    }

    skip(tracer) {

        let tracerPosition = tracer.dataset.tracer;

            let next = Number(tracerPosition) + 1;
            if (next == 4)
                next = 1;

            let last = next + 1;
            if (last == 4)
                last = 1

            let current = Number(tracerPosition);

            let p1 = this.content.querySelector(`[data-ipos="${current}"]`);
            let p2 = this.content.querySelector(`[data-ipos="${next}"]`);
            let p3 = this.content.querySelector(`[data-ipos="${last}"]`);

            p1.dataset.pos = 1
            p2.dataset.pos = 2
            p3.dataset.pos = 3

            tracer.classList.add('active');
            this.activeTracer.classList.remove('active');

            p1.classList.add('active');
            this.activePanel.classList.remove('active');
            
            this.activePanel = p1;
            this.activeTracer = tracer;

            log('current',current, 'next',next,'last',last);
    
    };
    
    onTick() {
        // console.log(this)

        let scrollPos = this.trigger.scrollTop;
        let ticks = Math.floor(scrollPos/this.tick);
        console.log(ticks > this.ticker);

        if (ticks > this.ticker)
            this.step();
        else if (ticks < this.ticker)
            this.reverse();

        this.ticker = ticks;

    }
    
    debounce(callback){
            clearTimeout(callback.timeoutId);

            callback.timeoutId = setTimeout(
                () => callback.call(this) , 
                this.bouncer )
    }

    mapTracer(tracer) {

        tracer.addEventListener('click', () => this.skip(tracer))

    }

    reset() {
        this.trigger.scrollTo(0,0)
        this.activePanel = this.content.querySelector('[data-ipos="1"]');
        this.activeTracer = this.tracer.querySelector('[data-tracer="1"]');
        this.activePanel.classList.add('active');
        this.activeTracer.classList.add('active')
    }
    
    
}