import { map } from "ramda";

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


export class ColorPreview {
    
    constructor() {
        
        const self = this;
        // ---------------------------------------------------------------
        // STATEFUL ELEMENTS

        this.color = new Color({hex:'#fff'});

        this.selected = { /* edit me irt not current color */}
        
        this.edits = [ /* previous edits */ ];

        this.cursor = new Cursor(this.edits);
        
        this.once = false; // new color has changed


        this.state = 'passive';
        this.editorState = 'passive';
        this.variationTabState = 'passive';
        this.a2cMenuState = 'passive';

        this.variationTabToggled = 'tinter';

        // ---------------------------------------------------------------
        // DOM ELEMENTS

        this.element = $('.dashboard-preview');
        this.previewElement = $('.passive-preview');

        this.mainTitle = $('.dashboard-preview .color-content .color-title');
        this.panelTitle = $('.color-panel .color-title');

        this.hexToggler = new Toggler($('.hex-toggler'), $('.cp-hex'));
        this.gradientToggler = new Toggler($('.gd-toggler'), $('.cp-gradient'));

        this.variationToggleList = createToggleList([ $('.tinter',this.element), $('.shader',this.element), $('.grader',this.element) ]);
        
        this.canvas = new Canvas(
        {
            canvas: $('.cp-canvas'),
            pointer: $('.cp-canvas .cp-canvas--pointer'),
        
        },
        { 
            onMouseMove: ({event}) => this.handleCanvasPosition(event), 
            onMouseDown: ({event}) => this.handleCanvasPosition(event)
        });

        this.themer = new FsContext();




        this.editor = {

            self,
            parent: this.element,
            element: $('.color-panel'),

            state: 'passive',

            hueSlider: new Slider($('.hue-slider'), {
                onMouseMove: self.updateCurrentHue.bind(self),
                onMouseDown: self.updateCurrentHue.bind(self),
            }),
            satSlider: new Slider($('.sat-slider'),{
                onMouseMove: self.updateCurrentSat.bind(self),
                onMouseDown: self.updateCurrentSat.bind(self),
            }),
            lightSlider: new Slider($('.light-slider'), {
                onMouseMove: self.updateCurrentLight.bind(self),
                onMouseDown: self.updateCurrentLight.bind(self),
            }),

            hueInput: $('.hue-slider .val-label input'),
            satInput: $('.sat-slider .val-label input'),
            lightInput: $('.light-slider .val-label input'),


            show() {

                this.self.addToCollectionModal.hide();
                this.parent.classList.add('editor-active');
                this.element.classList.add('active')
                this.state = 'active';

            },

            hide() {
                
                this.parent.classList.remove('editor-active');
                this.element.classList.remove('active');
                this.state = 'passive';
                this.self.hexToggler.disable();

            },

            toggle() {

                if (this.state === 'passive') this.show();
                else if (this.state === 'active') this.hide();


            },

            setSlider(which,value) {
                switch(which) {
                    case 'hue' : this.hueSlider.setDegrees(value); break ;
                    case 'sat' : this.satSlider.setPercent(value); break ;
                    case 'light' : this.lightSlider.setPercent(value); break;

                }
            },

            setInput(which,value) {
                switch(which) {
                    case 'hue' : this.hueInput.value = value; break;
                    case 'sat' : this.satInput.value = value; break; 
                    case 'light' : this.lightInput.value = value; break;
                }
            },

            setState(which, value) {
                switch(which) {
                    case 'hue' : {
                        this.setSlider('hue',value);
                        this.setInput('hue',value)
                    } break;
                    case 'sat' : {
                        this.setSlider('sat',value);
                        this.setInput('sat',value);
                    } break;
                    case 'light' : {
                        this.setSlider('light',value);
                        this.setInput('light',value);
                    } break;
                }
            },

            update(h,s,l) {
                this.setState('hue',h);
                this.setState('sat',s);
                this.setState('light',l);
            }
        }

        this.fsPanel = {
            self,
            parent: this.element,
            state: 'passive',

            show() {
                this.parent.classList.add('compare-colors');
                this.state = 'active';
            },
            hide() {
                this.parent.classList.remove('compare-colors');
                this.state = 'passive';
            },
            toggle() {
                if (this.state === 'passive') this.show();
                else if (this.state === 'active') this.hide();
            }
        }

        this.addToCollectionModal = {

            self,
            parent: this.element,
            state: 'passive',

            show() {
                this.self.editor.hide();
                $('.dashboard-preview .wrapper .a2c_modal').classList.add('active');
                this.state = 'active';
            },
            hide() {

                $('.dashboard-preview .wrapper .a2c_modal').classList.remove('active');
                this.state = 'passive';

            },
            toggle() {
                console.log(this)
                if (this.addToCollectionModal.state === 'passive') this.addToCollectionModal.show();
                else if (this.addToCollectionModal.state === 'active') this.addToCollectionModal.hide();
            }
        }

        // ---------------------------------------------------------------
        // INITIATIVES
        
        listen(this.editor.hueInput, 
            this.updateSliderOnInput('hue').bind(this) ,'input');

        listen(this.editor.satInput, 
            this.updateSliderOnInput('sat').bind(this) ,'input')

        listen(this.editor.lightInput, 
            this.updateSliderOnInput('light').bind(this) ,'input')

        listen(this.canvas.element, 
            this.handleCanvasPosition.bind(this));

        listen($('.header .close',this.element), 
            this.close.bind(this) )
            
        listen($('.tools .btn.compare',this.element), 
            this.fsPanel.toggle.bind(this.fsPanel) )
        
        listen($('.tools .edit'), 
            this.editor.toggle.bind(this.editor) )
        
        listen($('.tools .export'), 
            this.addToCollectionModal.toggle.bind(this))
        
        listen($('.redo'), 
            this.redo.bind(this))

        listen($('.undo'), 
            this.undo.bind(this))

        listen($('.color-label.color-hex'), 
            toClipboard.bind(this,this.selected.hex))


        // ---------------------------------------------------------------

    }


    update(props, once = false) {

        let currentColor = this.updateCurrentColor(props);

        this.once = once;
        
        if (this.once === false) {
            this.clearPreviousEdits();
            this.pushEdit(currentColor)
        }

        let selectedColor = new Color({
            ...currentColor,
            name: 'New Color',
        })

        selectedColor.nameHasChanged = false;

        this.selected = selectedColor;

        this.updateDocumentStyles(...currentColor.hsl);
        this.updateDocumentPreviewStyles(...currentColor.hsl);
        this.updatePreviewTitles(currentColor.name);
        this.updateEditor(currentColor);
        this.updateFS(currentColor);
        this.updateColorTone(currentColor.primaryTone);
        this.updateContrast(currentColor.hsl);
        this.updateCanvas();
        this.updateSidebar(currentColor);

    
        return currentColor
    }

    updateCurrentColor(props) {
        this.color = new Color(props);
        
        return this.color
    }

    editCurrentColor(props) {
        let newColor = mergeObj(this.selected,props);
        return newColor;
    }

    updateColor(props) {

        let copy = {...this.selected};
        this.pushEdit(copy);

        console.log('edits',this.edits);
        this.color = copy;

        if (props)
            this.updateCurrentColor(props);
    }

    updateEditor(props) {

        this.updatePreviewTitles(props.name);
        this.updateHexCodes(props.hex);
        this.updateContrast(...props.hsl);

        this.editor.update(...props.hsl);


    }

    updateFS(props) {
        $('.controls .color-hex').textContent = props.hex;
        $('.controls .color-title').textContent = props.title || props.name;
        $('.controls .color-tone').textContent = props.primaryTone || props.tone;
    }

    updateCurrentHue({deg}) {
        if (!this.color) return;

        this.once = true;

        if( this.mainTitle.textContent !== this.selected.name || this.panelTitle.textContent !== this.selected.name)
            this.updatePreviewTitles(this.selected.name);

        this.selected.hue = deg;
        // this.updateHsl(...newColor.hsl)
        this.updateDocumentStyles(...this.selected.hsl);
        this.updateHexCodes(this.selected.hex);
        this.updateCanvas();

        this.editor.setState('hue',deg);
        setVar('--selected-hue',deg);

    }
    
    updateCurrentSat({pct}) {
        if (!this.color) return;

        this.once = true;

        if( this.mainTitle.textContent !== this.selected.name || this.panelTitle.textContent !== this.selected.name)
            this.updatePreviewTitles(this.selected.name);

        this.selected.saturation = pct;

        this.updateDocumentStyles(...this.selected.hsl);
        this.updateHexCodes(this.selected.hex);
        this.updateCanvas();

        this.editor.setState('sat',pct);
        setVar('--selected-sat',pct);

        return this.selected;

    }
    
    updateCurrentLight({pct}) {
        if (!this.color) return;

        this.once = true;

        if( this.mainTitle.textContent !== this.selected.name || this.panelTitle.textContent !== this.selected.name)
            this.updatePreviewTitles(this.selected.name);

        this.selected.lightness = pct;

        this.updateDocumentStyles(...this.selected.hsl);
        this.updateHexCodes(this.selected.hex);
        this.updateCanvas();

        this.editor.setState('light',pct);
        setVar('--selected-light',pct);
    
    }

    updateSidebar(color) {

        const {
            monochrome,
            analogous,
            complimentary,
            squared,
            compound
        } = color.compliments

        const createThemeElements = () => {


            const createColorElement = hex => div( ['view-panel--clr'], { background:hex } ),
            
            appendElement = parent => element => parent.appendChild(element),

            createThemeBarElements = clrSet => clrSet.map(createColorElement),
            
            appendCorrespondingColorSet = ([parent, childColorSet]) => childColorSet.forEach( appendElement(wipeElement(parent)) );

            [
                [ $('.a15'), createThemeBarElements(analogous) ],
                [ $('.m15'), createThemeBarElements(monochrome.darks.slice(0,6))],
                [ $('.ml15'), createThemeBarElements(monochrome.lights.slice(0,6))],
                [ $('.mt15'), createThemeBarElements(monochrome.tints.slice(5,11))],
                [ $('.ms15'), createThemeBarElements(monochrome.shades.slice(5,11))],
                [ $('.c15'), createThemeBarElements(complimentary)],
                [ $('.s15'), createThemeBarElements(squared) ],
                [ $('.cp15'), createThemeBarElements(compound)]

            ].forEach(appendCorrespondingColorSet);


            $('.side-panel .current-color').style.background = color.hex;
            
            $$('.side-panel .current-title').forEach(element => element.textContent = color.name);
            $('.side-panel .current-data .current-hex .data').textContent = lowercase(color.hex);
            $('.side-panel .current-data .current-tone .data').textContent = lowercase(color.tone);

            $('.side-panel .current-data .current-color .data').textContent = color.primaryColor;
            $('.side-panel .current-data .current-hue .data').textContent = color.hue;
            $('.side-panel .current-data .current-sat .data').textContent = color.saturation;
            $('.side-panel .current-data .current-light .data').textContent = color.lightness;
        
            const tints = [...Color.getTints(color.hex)];
            const shades = [...Color.getShades(color.hex)];

            $('.side-panel .lights-modal .light-colors .tints').innerHTML = '';
            $('.side-panel .shades-modal .dark-colors .shades').innerHTML = '';

            tints.forEach(clr => {
                $('.side-panel .lights-modal .light-colors .tints').appendChild(div( ['view-panel--clr'], { background:clr } ));
            })
            shades.forEach(clr => {
                $('.side-panel .shades-modal .dark-colors .shades').appendChild(div( ['view-panel--clr'], { background:clr } ));
            })
        }
        // log(app.components.themebar.theme)
        createThemeElements();
        this.requestGradientUpdate(app.components.themebar.theme)

    }

    updateSidebarGradient(clrset) {

        if (clrset.length == 4)
            $('.current-theme-gradient').classList.add('quad');
        else if (clrset.length == 3)
            $('.current-theme-gradient').classList.add('trips');
        else 
            $('.current-theme-gradient').classList.remove('quad','trips');
                
        let denominator = clrset.length - 1;

        let toPct = (index) => Math.floor((index / denominator) * 100);

        let stops = [];
        
        for (let i = 0; i < clrset.length; i++){

            stops.push([clrset[i],toPct(i)]);

            setVar(`--sbg-s${i + 1}`,clrset[i]);
        
        }

    
    }

    requestGradientUpdate(theme){
        switch(theme){
            case 'mono':{
                this.updateSidebarGradient(this.color.darks.slice(0,6))
                break;
            }
            case 'monoLight':{
                this.updateSidebarGradient(this.color.lights.slice(0,6))
                break;
            }
            case 'tinted':{
                this.updateSidebarGradient(this.color.tints.slice(4,10))
                break;
            }
            case 'shaded':{
                this.updateSidebarGradient(this.color.shades.slice(5,11))
                break;
            }
            case 'complimentary':{
                this.updateSidebarGradient(this.color.complimentary)
                
                break;
            }
            case 'analogous':{
                this.updateSidebarGradient(this.color.analogous)
                break;
            }
            case 'triadic':{
                this.updateSidebarGradient(this.color.triadic)
            }
            case 'squared':{
                this.updateSidebarGradient(this.color.squared)
                break;
            }
            case 'compound':{
                this.updateSidebarGradient(this.color.compound);
                break;
            }
        }
    }



    // CURSOR TASKS

    undo() {
        console.log('undo update with', this.cursor.prev);
        if(this.cursor.prev == 'first') return
        let previous = this.cursor.skipToPrev()
        this.updateEditor(previous,true);
        this.updateHsl(...previous.hsl)
    }

    redo() {
        console.log(this.cursor.next)
        if (this.cursor.next == 'last') return
        let next = this.cursor.skipToNext();
        this.updateEditor(next, true);
        this.updateHsl(...next.hsl);
    }

    returnToSelectedColor() {
        this.update(this.edits[0]);
    }

    pushEdit(color) {
        this.cursor.addOne(color)
        this.cursor.skipToNext();
        this.edits.push(color);
        console.log(this.cursor.items)
    }


    clearPreviousEdits() {
        this.edits = []
        this.cursor.update([])
    }

    checkOnce() {
        
        if (!this.once) {

            this.selected.name = 'New Color'
            this.updateTitles('New Color')
            this.once = true;

            this.selected = {
                ...this.color,
                name: 'New Color',
            }

            this.edits.push({...this.selected})
        }

    }


    // CANVAS TASKS

    updateCanvas() {


        const {hsv,hsl,hex} = this.selected;

        this.canvas.update(hsv,hsl,hex);
        this.themer.canvas.update(hsv,hsl,hex);

    }

    handleCanvasPosition(e) {
        
        let 
    
            yPos = e.clientY - this.canvas.coords.bottom,

            x = e.clientX - this.canvas.coords.x,
            y = Math.abs(yPos),
        
            xPct = Math.round(x / this.canvas.coords.width * 100),
            yPct = Math.round(y / this.canvas.coords.height * 100);
    
        if (xPct <= 100 && xPct >= 0) 
            this.color.hsvSaturation = xPct;

        if (yPct <= 100 && yPct >= 0 && yPos <= 0)
            this.color.hsvValue = yPct;

        this.updateCurrentSat({ pct: this.color.saturation });
        this.updateCurrentLight({ pct: this.color.lightness });

        this.updateContrast(this.color.hsl);
        
        return [x,y]
    }
    



    // CONTROLLER TASKS

    updateContrast(hsl) {
        console.log('contrast',hsl)
        hsl[2] > 50 ? root.style.setProperty('--current-contrast', 'black')   
      : hsl[2] < 50 ? root.style.setProperty('--current-contrast', 'white')
      : null;
    }

    open() {
        this.element.classList.add('open');
        this.previewElement.classList.remove('active');
        this.state = 'active';
        return this.state;
    }

    close() {
        this.element.classList.remove('open');
        this.previewElement.classList.add('active');
        this.editor.hide();
        this.state = 'passive';
        return this.state;
    }

    toggleTinter() {
        $('.variations').classList.remove('shade');
        $('.variations').classList.add('tint');
    }

    toggleShader() {
        $('.variations').classList.remove('tint');
        $('.variations').classList.add('shade');
    }


    updatePreviewTitles(ttl) {
        $$('.dashboard-preview .color-title .label').forEach(el => el.textContent = ttl);
        $('.passive-preview .color-title').textContent = ttl;
    }

    updateHexCodes(hex) {
        $$('.dashboard-preview .color-hex .label').forEach(el => el.textContent = hex);
        $('.passive-preview .color-hex .label').textContent = hex;
        root.style.setProperty('--currentHex', hex);
    }

    updateColorTone(tone) {
        $$('.dashboard-preview .color-tone .label').forEach(label => label.textContent = tone);
    }

    updateDocumentStyles(hue,sat,light) {
        setVar('--current-hue',`${hue}deg`)
        setVar('--current-sat',`${sat}%`)
        setVar('--current-light',`${light}%`)
    }

    updateDocumentPreviewStyles(hue,sat,light) {
        setVar('--selected-hue',`${hue}deg`)
        setVar('--selected-sat',`${sat}%`)
        setVar('--selected-light',`${light}%`)
    }

    updateSliderOnInput(which) {

        return function(event) {

            const input = event.target;
            const value = input.value;
            const isValid = input.checkValidity;

            if (!isValid || !value || !(!isNaN(Number(value))))
                return

            switch (which) {
                case 'hue' : this.editor.setSlider('hue',value); break;
                case 'sat' : this.editor.setSlider('sat',value); break;
                case 'light' : this.editor.setSlider('light',value); break;
            }
        }
    }


};


export class FsContext {

    constructor() {

        const self = this;

        this.hexToggler = $('.themer-options .cc .tggler');
        this.menuElement = $('.themer-options');
        this.hexEditor = $('.hex-editor');
        this.browserToggler = $('.browser');

        this.options = $$('.themer');
        this.variationTogglers = $('.vars .clr-set');
        this.variationState = 'shades';

        // this.populateTints('#000000');

        this.bwTogglers = {

            element: $('.bwVariations'),
            menuElement: $('.cContrast'),
            state: 'inactive',
            context: undefined,
            primaryColor: new Color({hex:'#000'}),

            darkToggler: $('.blk'),
            lightToggler: $('.white'),
            greyToggler: $('.grey'),

            open(clickedToggler) {

                document.addEventListener('click',this.handleCOSM.bind(this));

                if (clickedToggler == this.context && this.state == 'active') return this.close();

                self.canvas.element.parentElement.classList.add('bw-active');
                this.element.classList.add('active');
                this.state = 'active';
                this.context = clickedToggler;

                return;
            },

            close(clickedToggler) {
                self.canvas.element.parentElement.classList.remove('bw-active');
                this.element.classList.remove('active');
                this.state = 'inactive';

                document.removeEventListener('click',this.handleCOSM.bind(this));
                this.context = null;

                return;
            },

            toggle(event) {


                const clickedToggler = [
                    this.darkToggler,
                    this.lightToggler,
                    this.greyToggler
                ].find(element => element == event.target)

                if (!clickedToggler) {
                    log('diden click tggler',event.target);
                    this.context = null;
                    return;
                };

                log( 'this context' , clickedToggler )

                if (this.state === 'active') {
                
                    if (clickedToggler !== this.context) {
                        this.context = clickedToggler;
                        return;
                    }

                    this.close(clickedToggler);

                }

                else this.open(clickedToggler)
                
                return;
            },

            handleCOSM(event) {
                const target = this.menuElement;
                console.log('target',event.target,'current',event.currentTarget)
                if ( event.target == $('.tggler')  || event.target.classList.contains('themer') || event.target == self.exportMenu.parentElement || self.exportMenu.parentElement.contains(event.target)) {
                    return;
                }

                if ($('.cc').contains(event.target)) {
                    this.context = null;
                    return;
                }

                if (!target.contains(event.target)) 
                    this.close()
            }

        }
        this.darkToggler = $('.blk');
        this.lightToggler = $('.white');
        this.greyToggler = $('.grey');

        this.exportMenu = $('.done span');
        
        this.menuState = 'inactive';

        this.currentContext = null;

        this.canvas = new Canvas({
            canvas: $('.hex-editor .canvas'),
            pointer: $('.hex-editor .cp-canvas--pointer')
        }, 
        {    
            handleColor: function(color) {
                self.update(color)
                return color;
            },
            mouseUp: function(color) {

                if (!self.currentContext) return;

                self.currentContext.pushEdit(new Color(color));

            }
        })

        this.hueSlider = new Slider($('.hex-editor .hue-bar'), {
            onMouseMove: self.updateCurrentHue.bind(self),
            onMouseDown: self.updateCurrentHue.bind(self),
            // onMouseUp: self.updateColor.bind(self)
        })

        this.elements = {};

        this.options.map(element => {
            
            const handleMenuOnClick = () => {

                if (this.menuState == 'active' && element !== this.currentContext.contextElement) {
                    this.setContext(obj);
                    this.update(obj.color);
                    this.position(position);
                    
                    return;
                }

                this.setContext(obj);
                this.position(position);
                this.update(obj.color);
                this.toggle();

            }

            const handleHoverEffect = () => {

                if (this.menuState == 'active') return;
                if (!this.currentContext) return;

                this.update(obj.color);
                this.position(position);

            }

            let name = element.dataset.element;
            
            let context = element;

            let variableName = `--current-${name}`;
            
            let color = new Color({hex:getVar(variableName)});
            
            let position =  Math.round(element.getBoundingClientRect().x);
            
            let elementBinding = $(`[data-themeBinding=${name}`);

            let obj = {
                name,
                variableName,
                color,
                currentColor: color,
                position,
                elementBinding,
                contextElement:context,
                edits: [color],
                cursor: [],

                update(color) {

                    this.color = new Color(color);
                    this.updateElementBindingColor(color.hex);

                    if (self.variationState == 'tints')
                        self.populateTints(color.hex);
                    else if (self.variationState == 'shades')
                        self.populateShades(color.hex);
                    else if (self.variationState == 'lights')
                        self.populateLighters(color.hex);
                    else if (self.variationState == 'darks')
                        self.populateDarkers(color.hex);


                },

                setColor(color) {
                    self.canvas.setPointer(color.hsv[1],color.hsv[2])
                    self.updateContextPreviewColor(color)
                    this.pushEdit(color);
                },

                updateElementBindingColor(hex){
                    setVar(this.variableName,hex || this.color.hex);
                },

                pushEdit(color) {
                    this.cursor.addOne(color)
                    this.cursor.skipToNext();
                    this.edits.push(color);
                    console.log(this.cursor.items)
                },

                clearPreviousEdits() {
                    this.edits = []
                    this.cursor.update([])
                },

                undo() {
                    console.log('undo update with', this.cursor.prev);
                    if(this.cursor.prev == 'first') return
                    let previous = this.cursor.skipToPrev()
                    console.log(previous)
                    this.update(previous,true);
                    return previous
                },

                redo() {
                    console.log('undo update with', this.cursor.next);
                    console.log(this.cursor.next)
                    if (this.cursor.next == 'last') return
                    let next = this.cursor.skipToNext();
                    this.update(next, true);
                    return next;
                }
            }

            obj.cursor = new Cursor(obj.edits)

            element.addEventListener('click', handleMenuOnClick)

            // element.addEventListener('mouseenter', handleHoverEffect)

            if (elementBinding)
                elementBinding.addEventListener('click', handleMenuOnClick)


            listen(this.hexToggler, this.toggleHex.bind(this));

            this.elements[name] = obj;

        })

        listen(this.darkToggler, this.update.bind(this,new Color({hex:'#000'})));
        listen(this.lightToggler, this.update.bind(this,new Color({hex:'#fff'})));
        listen(this.greyToggler, this.update.bind(this,new Color({hex:'#ccc'})));

        listen(this.exportMenu, () => $('.export-menu').classList.toggle('active'));
        listen(this.browserToggler, () => {
            this.hideHex();
            $('.browser-menu').classList.add('active')
        })
        listen($('.browser-menu .back'), () => $('.browser-menu').classList.remove('active'))
        listen(this.bwTogglers.menuElement, this.bwTogglers.toggle.bind(this.bwTogglers));

        listen(this.variationTogglers, (e) => {

            if (!e.target.classList.contains('vari')) return;

            let clr = e.target.dataset.hex
            if (!clr) return;

            let color = new Color({hex: clr});
            console.log(clr,'bBBBgGGG')
            this.update(color);
            if (!this.currentContext) return;
            this.currentContext.setColor(color);



        })
        listen($('.tin'), () => {
            if (!this.currentContext) return;
            // this.populateTints(this.currentContext.color.hex);
            this.variationState = 'tints';
            this.populateTints(this.currentContext.color.hex);
        })
        listen($('.shdy'), () => {
            if (!this.currentContext) return;
            // this.populateShades(this.currentContext.color.hex);
            this.variationState = 'shades';
            this.populateShades(this.currentContext.color.hex);
        })
        listen($('.lit'), () => {

            if (!this.currentContext) return;
            this.populateLighters(this.currentContext.color.hex);
            this.variationState = 'lights';
        })
        listen($('.drk'),() => {
            if (!this.currentContext) return;
            this.populateDarkers(this.currentContext.color.hex);
            this.variationState = 'darks';
        })
        listen($('.themer-options .red'),() => {
            if (!this.currentContext) return;
            console.log('redooey')
            const redooey = this.currentContext.redo.call(this.currentContext);
            if (!redooey) return;
            this.canvas.setPointer(redooey.hsv[1],redooey.hsv[2])
            this.updateContextPreviewColor(redooey)

        })
        listen($('.themer-options .un'), () => {
            if (!this.currentContext) return;
            console.log('undooey')
            const undooey = this.currentContext.undo.call(this.currentContext);
            if (!undooey) return;
            this.canvas.setPointer(undooey.hsv[1],undooey.hsv[2])
            this.updateContextPreviewColor(undooey);

            console.log(undooey)

        })
    }

    populateVariations(hex = '#000',type = 'white') {
        this.variationTogglers.innerHTML = '';
        let count = 0;
        let reverse = 100;
        let inc = 5;
        const tints = generateTints(hex);

        for (let i = 0; i < 20; i ++) {
            let clr = `color-mix(in srgb, ${hex} ${count}%, ${type} ${reverse}%)`;
            let hexi = this.LightenDarkenColor(hex,count);
            // let hexi = this.adjustColor(hex,count)
            console.log(hexi)
            // log(clr)
            let vari = div();
            vari.classList.add('vari');
            vari.style.background = tints[i];
            vari.dataset.hex = hex;
            this.variationTogglers.appendChild(vari);
            
            count += inc;
            reverse -= inc;
        }


    }

    populateVariationColorset(clrSet) {

        this.variationTogglers.innerHTML = '';

        for (let i = 0; i < clrSet.length; i ++) {

            let vari = div();
            vari.classList.add('vari');
            vari.style.background = clrSet[i];
            vari.dataset.hex = clrSet[i];
            this.variationTogglers.appendChild(vari);

        }

    }


    populateTints(hex) {
        this.populateVariationColorset(Color.getTints(hex))
    }
    
    populateShades(hex) {
        this.populateVariationColorset(Color.getShades(hex))
    }

    populateLighters(hex) {

        const validHex = hex => hex.length === 7 && hex !== '#ffffff'
        const lights = [];
        const inc = 5;
        let count = 0;

        for (let i = 0; i < 20; i++) {

            count += inc;
            let hexi = Color.lightenColor(hex,count);
            if (validHex(hexi))
                lights.push(hexi)
            console.log(count)
        }

        this.populateVariationColorset(lights)
        console.log(lights)
    }

    populateDarkers(hex) {

        const validHex = hex => hex.length === 7 & hex !== '#000000';
        const darks = [];
        const inc = 5;
        let count = 0;

        for (let i = 0; i < 20; i++) {

            count += inc;
            let hexi = Color.darkenColor(hex,count);
            if (validHex(hexi))
                darks.push(hexi)
            console.log(count)
        }
        this.populateVariationColorset(darks)
        console.log(darks)
    }

    update(color) {

        console.log('updating with',color);

        this.updateContextPreviewColor(color);
        this.updateCanvasHue(color.hue);

        if (!this.currentContext) return;

        this.currentContext.update(color)

        console.log(this.currentContext)

    }

    updateContextPreviewColor(color) {

        this.updateContextPreviewColorLabel(color.hex);
        $('.tggler').style.setProperty('--hue',`${color.hue}`)
        $('.tggler').style.setProperty('--sat',`${color.saturation}%`)
        $('.tggler').style.setProperty('--light',`${color.lightness}%`)

    }

    updateContextPreviewColorHue(deg) {
        $('.tggler').style.setProperty('--hue',deg)
    }

    updateContextPreviewColorLabel(hex) {
        $('.tggler').textContent = hex;
    }

    updateCanvasColor(color) {
        
    }

    updateCanvasHue(deg) {
        this.canvas.color.hue = deg;
        $('.hex-editor .canvas').style.setProperty('--hue',deg);

    }

    updateCurrentHue({deg}) {

        if (!this.currentContext)
            return;

        const color = this.currentContext.color;
        color.hue = deg;

        console.log(color,'hello motto');

        this.updateCanvasHue(deg);
        this.updateContextPreviewColorHue(deg);
        this.updateContextPreviewColorLabel(color.hex);
        this.currentContext.update(color)
    }

    setContext(obj) {

        if (this.currentContext && this.currentContext.elementBinding)
            removeClass(this.currentContext.elementBinding,'active');
        
        this.currentContext = obj;

        if (obj.elementBinding)
            addClass(obj.elementBinding, 'active');

        return obj;

    }

    position(x) {
        let hsv = this.currentContext.color.hsv;
        this.menuElement.style.transform = `translateX(${x - 30}px)`
        this.canvas.setPointer(hsv[1],hsv[2])
    }

    show() {
        this.menuElement.classList.add('active');
        this.menuState = 'active';
    }

    showHex() {
        this.hexEditor.classList.add('active');
    }

    hide() {
        this.menuElement.classList.remove('active');
        this.menuState = 'inactive';
    }

    hideHex() {
        this.hexEditor.classList.remove('active');
    }

    toggle() {


        if (this.menuState == 'active') 
        {
            this.hide();
            this.menuState = 'inactive'
            if (this.currentContext.elementBinding)
                this.currentContext.elementBinding.classList.remove('active')
            // alert(this.menuState);
            return;
        }
        else if (this.menuState == 'inactive') {
            this.show();
            this.menuState = 'active';

            if (this.currentContext.elementBinding)
                this.currentContext.elementBinding.classList.add('active')

            // alert(this.menuState);
            return;
        }
    }

    toggleHex() {
        this.hexEditor.classList.toggle('active');
    }

};

function generateTints(hexColor) {
    // Convert hex to RGB
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    };

    // Convert RGB to hex
    const rgbToHex = (rgb) => {
        return `#${(1 << 24 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
    };

    // Linear blend function
    const linearBlend = (color1, color2, ratio) => {
        return color1 + ratio * (color2 - color1);
    };

    const tints = [];
    const baseColor = hexToRgb(hexColor);

    // Generate 20 tints
    for (let i = 0; i < 20; i++) {
        const ratio = i / 20; // Varying from 0 to 1
        const tint = {
            r: linearBlend(baseColor.r, 255, ratio),
            g: linearBlend(baseColor.g, 255, ratio),
            b: linearBlend(baseColor.b, 255, ratio),
        };
        tints.push(rgbToHex(tint));
    }

    return tints;
}

// Example usage:
const baseHexColor = "#3498db";
const tintsArray = generateTints(baseHexColor);
console.log(tintsArray);

function generateShades(hexColor) {
    // Convert hex to RGB
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    };

    // Convert RGB to hex
    const rgbToHex = (rgb) => {
        return `#${(1 << 24 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
    };

    // Linear blend function
    const linearBlend = (color1, color2, ratio) => {
        return color1 + ratio * (color2 - color1);
    };

    const shades = [];
    const baseColor = hexToRgb(hexColor);

    // Generate 20 shades
    for (let i = 0; i < 20; i++) {
        const ratio = i / 20; // Varying from 0 to 1
        const shade = {
            r: linearBlend(baseColor.r, 0, ratio),
            g: linearBlend(baseColor.g, 0, ratio),
            b: linearBlend(baseColor.b, 0, ratio),
        };
        shades.push(rgbToHex(shade));
    }

    return shades;
}

// Example usage:
const hexiColor = "#3498db";
const shadesArray = generateShades(hexiColor);
console.log(shadesArray);