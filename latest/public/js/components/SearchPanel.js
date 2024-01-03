export class SearchPanel {
    constructor() {
        
        this.status = 'off';
        this.data = '';

        this.element = $('.fs-search');
        this.input = $('.search-inp-text + input');
        this.closer = $('.fs-search .control.close');
        this.mainInput = $('.search-inp');

        this.KeyMap = new KeyBinder();

        listen( this.closer, () => this.close() );

        listen( this.input, (inputEvent) => {

            log('input event triggered',inputEvent)

            const input = inputEvent.data;
            const data = inputEvent.target.value;
            
            if (/[a-zA-Z0-9-_ ]/.test(input)) {
                log('typewriting',data)
              
                this.data = data;
                this.mainInput.value = data;

                this.searchQuery();
            
            }
        }, 'input');

        listen( this.mainInput , (inputEvent) => {
        
            const input = inputEvent.data;
            const data = inputEvent.target.value;
    
            if (/[a-zA-Z0-9-_ ]/.test(input)) {

                this.open();
                this.input.value = data;
                this.input.focus();
                this.data = data;

            }
        }, 'input');

        document.addEventListener('keyup', (e) => {

            console.log(e.key)
            if (e.ctrlKey || e.key === 'Control'){
                this.ctrl = true;
                console.log('ctrl mapper on');
                setTimeout(() => {
                    this.ctrl = false;
                    console.log('ctrl mapper off')
                },1000)
            }

            if (e.shiftKey || e.key === 'Shift'){

                this.shift = true;
                console.log('shift mapper on')
                setTimeout(() => {
                    this.shift = false;
                    console.log('shift mapper off')
                },1000)
            }


            if (this.ctrl && this.shift && (e.key == 'f' || e.key == 'F' )) {
                console.log('keybinding activated calling back')
                log(this)

                const isActive = document.activeElement == this.mainInput;
    
                if (isActive || this.status == 'on'){
    
                    log('focused')
                    log(document.activeElement)
                    
                    return;
                } 
    
                log('open sesame')
                this.open();
            }

        })

        this.KeyMap.addGlobalShift(['s','S'], (e) => {

            log(this)
            const isActive = document.activeElement == this.mainInput;

            if (isActive || this.status == 'on'){

                log('focused')
                log(document.activeElement)
                
                return;
            } 

            log('open sesame')
            this.open();
            
        })

    }

    open() {

        if (this.status !== 'off') return;

        document.addEventListener('keyup', this.captureKeys.bind(this))
        this.element.classList.add('active');
        this.status = 'on';
        this.input.focus();

    }

    close() {
        
        log('closing')

        if (this.status !== 'on') return;
        
        log(this)
        
        this.element.classList.remove('active');
        this.status = 'off';
        this.input.blue
        document.removeEventListener('keyup', this.captureKeys.bind(this))
    
    }

    setData(inputValue) {

        this.data = inputValue;

    }

    typeWrite(inputEvent) {
        
        const input = inputEvent.data;
        const data = inputEvent.target.value;

        if (/[a-zA-Z0-9-_ ]/.test(input)) {
            this.open();
            this.input.value = data;
            this.input.focus();
            this.data = data;
        }

    }

    captureKeys(e) {
        if (e.key === 'Escape') 
            this.close()
        else if (e.key === 'Enter')
            this.searchQuery()
    }

    searchQuery() {
        const query = this.data;

        console.log('searching db for',query);
        console.log(appState);

        if (appState.tabName && appState.currentTab) {
            console.log('searching in', appState.tabName, 'first')
            appState.currentTab.queryColors(query);
            // app.queryColors(query);
        }
        else {
            alert('nothing here')
        }
    }
}