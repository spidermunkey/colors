/*
    renderCollection(page) {
        if (page == 'home')
            do something different
        else
            return app.palette.GET_FRAG('home')

            return a document fragment with each element for the 
            page/section;
    }    

    renderCollection(palette,page) {

    }
*/
            // -----------------------------
            // DOM REFERENCES
            // --------------------------------------------
const testRGB = document.querySelector('.info-panel .compare_rgb');
const testHEX = document.querySelector('.info-panel .compare_hex');
const testHSL = document.querySelector('.info-panel .compare_hsl');

// DASHBOARD VIEW
const dashboard_VIEW = document.querySelector('.view-panel')
const currentList = document.querySelector('.view-panel--set');
// INTERFACE HEX CODE
const currentHex = document.querySelector('.current-hex');
// INTERFACE CURRENT COLOR NAME
const currentName = document.querySelector('.current-title');


const menuWrapper = document.querySelector('.nav-list')
const menuClose = document.querySelector('.nav-list--tabs .close');

const tabSection = document.querySelector('.nav-list--options');
const linkSection = document.querySelector('.nav-list--tabs');


const rootElement= document.documentElement;


            
            // -----------------------------
            // LOGGERS
            // --------------------------------------------
const app = {
    
    init: function() {
        // refactor me
        test_model.palettes.allColors.COLOR_INDEX.flat().forEach(appendEachThenPush);
        document.querySelector('.view-panel--section.home').classList.add('active');

        dashboard_VIEW.appendChild(test_model.makeAllPalletes());
        document.querySelector('.nav-list--tab').addEventListener('click', (e) => {
            if (e.target.classList.contains('page-link')) {
            let clicked = e.target;
            let target = clicked.dataset.target;
                if (document.querySelector(`[data-page=${target}]`)) {
                    app.toggleTab(target);
                }
            }
        })
    },

    currentTab: function() {
        return document.querySelector('.view-panel--section.active')
    },
        
    hideActive: function() {
        this.currentTab().classList.remove('active');
    },
    showTab: function(name) {
        let corresponding = document.querySelector(`[data-page=${name}]`)
        if (corresponding)
            corresponding.classList.add('active')
    },
    updateHeader: function(name) {
        document.querySelector('.view-panel > .view-panel--header .label').innerText = name;
    },
    toggleTab(name) {
        this.hideActive();
        this.showTab(name);
        this.updateHeader(name);

    },
    scrollToSection: function(name) {
        let section = document.querySelector(`.active [data-panel=${name}]`);
        window.scrollTo(section);
    }
}

app.init();



            // -----------------------------
            // LOGGERS
            // --------------------------------------------

console.log(test_model)
console.warn(`${errorLog.length} invalid colors in the model`,errorLog);

