import { collections, indexes } from "../data/fakeDB.js";
import { model } from "../data/colors.js";
const test_model = model(indexes);
console.log(test_model.palettes)

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

// CLICKED COLOR FUNCTION
// currentList.addEventListener('click',(e) => {
//     let clicked;
//     if (clicked = e.target.closest('.view-panel--clr')) {
//         const title = clicked.dataset.ttl;
//         const color = clicked.dataset.clr;

//         updateInterface(title,color)
//     }
// })

tabSection.addEventListener('click', (e) => {
    const engaged = e.target.closest('.tab-tggler');
    if (engaged) {
        const ref = engaged.dataset.tggler.toString();
        const el = document.querySelector(`[data-tab="${ref}"]`);
        showTab(el);
        toggleMenu();
    }
})
menuClose.addEventListener('click',closeMenu);

const app = {
    
    init: function() {
        // refactor me

        // push all colors into home page
        test_model.palettes.allColors.COLOR_INDEX.flat().forEach(appendEachThenPush);
        document.querySelector('.view-panel--section.home').classList.add('active');

        // make all palettes in the model
        dashboard_VIEW.appendChild(test_model.makeAllPalletes());
        document.querySelector('.nav-list--tab').addEventListener('click', (e) => {
            if (e.target.classList.contains('page-link')) {
            let clicked = e.target;
            let target = clicked.dataset.target;
                if (document.querySelector(`[data-page=${target}]`)) {
                    app.hideActive();
                    app.showTab(target);
                    app.updateHeader(target);
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

    scrollToSection: function(name) {
        let section = document.querySelector(`.active [data-panel=${name}]`);
        window.scrollTo(section);
    },
    showPreview: function(color) {
        return function(previewType) {
            switch (previewType) {
                case 'interface':
                    updateInterface(color);
                case 'background':
                    showBackgroundPreview(color);
                case 'set':
                    showHotPicks(...color);
            }
        }

    },
    copyColor: function(color) {
        
    },
    editColorName: function(name) {

    },
    createCollection: function(name) {

    },
    addToCollection: function(name) {

    },
    removeFromCollection: function(name) {

    },

}
app.init();

    // -----------------------------
    // LOGGERS
    // --------------------------------------------

console.log(test_model)
console.warn(`${errorLog.length} invalid colors in the model`,errorLog);


    // -----------------------------
    // VIEW CONTROLLERS
    // --------------------------------------------

function toggleMenu() {
    menuWrapper.classList.add('engaged');
}
 
 function closeMenu() {
     hideTab(document.querySelector('.nav-list--tabs .close ~ .active'));
     menuWrapper.classList.remove('engaged');
}
 
 function showTab(el) {
     el.classList.add('active');
     return el;
}
 
 function hideTab(el) {
     if (el.classList.contains('active'))
         el.classList.remove('active');
     return el;
}


    // -----------------------------
    // MODEL CONTROLLERS
    // --------------------------------------------

function updateInterface(name,hex) {
    console.log(name,hex)
    console.log(rootElement,rootElement.style,rootElement.style.getPropertyValue('--currentColor'));

    rootElement.style.setProperty('--currentColor', `${hex}`);
    rootElement.style.getPropertyValue('--currentColor')
    currentHex.innerText = hex;
    currentName.innerText = name;
}

function makeElement(name,hex) {
    const element = document.createElement('div');
    element.setAttribute('class', 'view-panel--clr');
    element.style.backgroundColor = hex;
    element.dataset.clr = hex;
    element.dataset.ttl = name;
    return element;
}

function appendEachThenPush(color) {
    // console.log(color[1])
    const element = makeElement(color.title,color.hex);
    currentList.appendChild(element);
}

function renderBucket(bucketList) {
    currentList.innerHTML = ''
    bucketList.forEach(obj => {
        let {title,hex,props} = obj;
        currentList.appendChild(makeElement(title,hex));
    })
}