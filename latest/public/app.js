'use strict'

import axios from "axios";

import { Dashboard } from "./js/components/Dashboard.js";
import { ColorPreview } from "./js/components/ColorPreview.js";
import { ColorContextMenu } from "./js/components/Context.js";
import { SearchPanel } from "./js/components/SearchPanel.js";
import { ScrollStacker } from "./js/components/ScrollStacker.js";

// const ScrollStack = new ScrollStacker( $('.search-info .scroll-stacker'), $('.search-info .content') );
const dPanelStacker = app.components.stackers.dPanel = new ScrollStacker($('.cc-variants.shades'));
const lPanelStacker = app.components.stackers.lPanel = new ScrollStacker($('.cc-variants.tints'));
const TaskManager = app.emitter = new EventEmitter();

const menus = app.menus;
const palettes = app.palettes;
const collections = app.collections;

const copyButtons = $$('.btn-copy');

const hueFilterOptions = $$('.hue-options .option input');
const toneFilterOptions = $$('.tone-options .option input');
const sliderInputFields = $$('.val-label input');

const defaultCollectionsMenu = $('.palettes .option__modal');
const userPalettesMenu = $('.collections .option__modal .option__modal--list');
const addToCollectionFromPreviewMenu = $('.a2c_modal ul');
const nestedMenuElements = $$('[data-role="tabButton"][data-type="nested"]');
const dashboardModal = $('.dashboard__modal');
const dashboardPanel = $('.dashboard__panel');
const fsDashboardPreview = $('.dashboard__overlay.dashboard__fullscreen');

const previewElement = $('.dashboard-preview');
const passivePreviewElement = $('.passive-preview');
const infoElement = $('.preview__mini-modal .info',passivePreviewElement);

const preview = app.preview = {

    element: previewElement,
    passiveElement:passivePreviewElement,
    infoElement,

    tinter: $('.tinter',previewElement),
    shader: $('.shader',previewElement),
    btnLiteMode: $('.liter',previewElement),
    btnDarkMode: $('.darker',previewElement),
    btnColorizer: $('.colorizer',previewElement),
    btnFavorite: $('.btn.like'),

    nameFieldPreview: $('.color-title .edit-text'),
    nameFieldEditor: $('.color-content .color-title'),

}


const colorPreview = preview.interface = new ColorPreview();
const colorContextMenu = new ColorContextMenu();
const searchPanel = new SearchPanel();
const menuTabber = new Tabber();
const sortingAndFilteringMenu = new Modal($('.menu-options'),'active'); sortingAndFilteringMenu.bindToggler($('.filter-options'));


listenAll( copyButtons , copyCurrentHex );

listenAll( hueFilterOptions, filterHuesOnInput , 'input');

listenAll( toneFilterOptions, filterTonesOnInput , 'input');

listenAll( sliderInputFields, focusInputOnClick )

// listen(cpCanvas, handleCanvasPosition);

listen($('.option.reset-hues'), resetHueFilterCheckBoxesThenRender);

listen($('.reset-current-color'), colorPreview.returnToSelectedColor.bind(colorPreview))


listen($('.btn.info'), showFullScreenPreview)

listen($('.close-editor'), closeFullScreenPreview)

listen($('.search-results'), updateSearchPreviewColorOnClick)

$('.theme-color .current-color').listen();
const ready = ( async function 
    
    fetchMenuDataThenCreateCorrespondingElements() 
{
    
    const { collections , palettes } = await api.listCollectionsAndPalettes();

    collections.forEach( createPalette );
    palettes.forEach( createCollection );

    const defaultCollections = app.menus.defaultCollections = new MenuList(collections,['menu-items']);
    const userPalettes = app.menus.userPalettes = new MenuList(palettes,['menu-items']);
    const a2cMenu = app.menus.a2cMenu = new MenuList(palettes,['menu-items']);

    defaultCollections.items.map( ({element}) => hydratePaletteLink(element) );
    userPalettes.items.map( ({element}) => createCollectionLink(element) );
    a2cMenu.items.map( ({element}) => hydrateA2CLink(element) );

    defaultCollectionsMenu.innerHTML = '';
    defaultCollections.render(defaultCollectionsMenu);
    userPalettes.render(userPalettesMenu);
    a2cMenu.render(addToCollectionFromPreviewMenu);

    // allow show hide of rendered menu elements container only after names have been rendered
    nestedMenuElements.forEach( element => listen( element, toggleActiveMenuOnClick(element)));


})();

// ---------- just a loading animation
(function getDefaultColorsForHomePage() 

{

    const defaultHues = ['red','green','blue','yellow','purple','orange','rose'];
    defaultHues.forEach(getDefaultHueAndPaint);
    
    // -------- paint n hue dots with first n number of colors of same hue in db
    async function getDefaultHueAndPaint(hue) {

        const {data} = await axios.get(`http://localhost:1279/colors/crayolaExtended?hue=${hue}`);
        let previewColors = [...document.querySelectorAll(`.h-panel.${hue} .panel-preview .clr`)];
        // -------- count hue dots & for each number of dots...
        for (let i = 0; i < previewColors.length; i++) {
            // -------- paint
            previewColors[i].style.backgroundColor = data[i].hex;
        };

    };
    
})();

(function handleRightClickOnColor() {
    listen(document, colorContextMenu.handleClickOutside.bind(colorContextMenu) );
    listen(document, handleContextMenuEvent, 'contextmenu');
})();

(function handleClickOnColor() {
    document.addEventListener('dblclick', openPreviewOnDoubleClick);
    dashboardPanel.addEventListener('mousedown', updateCurrentColorOnClick);
})();

(function hydratePreviewElement() {

    listen(preview.infoElement, colorPreview.open.bind(colorPreview), 'click', true);

    listen(preview.tinter, toggleTinter);
    listen(preview.shader, toggleShader);
    listen(preview.btnLiteMode, togglePreviewLight);
    listen(preview.btnDarkMode, togglePreviewDark);
    listen(preview.btnColorizer,togglePreviewCurrentColor);

    listen(preview.btnFavorite, addCurrentColorToFavorites);

    listen(preview.nameFieldPreview,handleNameChange);
    listen(preview.nameFieldEditor,handleNameChange,'dblclick');
    
})();

const createCollectionControls = (function hydrateCreateCollectionModal() {
    
    let ccModalFormState = 'inactive';
    const ccModal =  document.querySelector('.ccModal');
    const ccForm = document.querySelector('.ccForm');
    const nameInput = document.getElementById('cName')

    // handle click outside
    ccModal.addEventListener('click',(e) => {
        if (!e.target.closest('.ccForm')) { e.preventDefault(); createCollectionControls.closeContext(); }
    });

    document.querySelector('[data-tab="collections"] button').addEventListener('click',function toggleOnClick(e) {
        createCollectionControls.openContext();
        return        
    })

    ccForm.querySelector('form').addEventListener('submit', async function postData(e) {

        e.preventDefault();
        let name = document.getElementById('cName').value.trim();
        let desc = document.getElementById('cDesc').value.trim();

        const res = await api.routes.create( name, desc );

        console.log('submiting form');

        if (res) {
            const link = (await menus).collectionMenu.addItem(name)
            const link2 = (await menus).a2cMenu.addItem(name)
            createCollectionLink(link)
            createCollection(name)
            hydrateA2CLink(link2);
        }
    })

    function openContext() {
        ccForm.classList.add('active');
        ccModal.classList.add('active');
        ccModalFormState = 'active';
        nameInput.setAttribute('tabIndex', '0')
        nameInput.focus();
        console.log('opening context')
        return ccModalFormState;
    }
    
    function closeContext() {
        ccModal.classList.remove('active');
        ccForm.classList.remove('active');
        ccModalFormState = 'inactive';
        console.log('closing context')
        return ccModalFormState;
    }

    return {
        state: ccModalFormState,
        openContext,
        closeContext,
    }

}());

(function logAppIdentity() {
    let stamp = DateTime.stamp();
    console.log('%cCOLORS -- PORT 3333', "color: aqua; font-family: arial; font-size:20px");
    console.log(`%c${stamp.day}, ${stamp.month} ${stamp.date}  ${ stamp.time}`, "color:orange; font:arial; font-size:18px");
    console.log(app)
})();


async function updatePreview(colorElement) {

    let { id } = colorElement.dataset;

    const props = await currentPalette.checkColor(id);

    if (!props )
        return console.error('invalid color');

    console.dir('color validated', props );
    
    app.color = props;
    colorPreview.update(props);
    // themebarControls.toFirst();

    console.log('app and colorPreview updated', app.color);
    console.log('tab name is', app.tab.name);
    console.log(app)

}

function openPreviewOnDoubleClick(event) {
    if (clickedColorElement(event)) 
        colorPreview.open();
}

function updateCurrentColorOnClick(event) {

    console.log(previewIsOpen())
    const rightClick = !mouseClickLeft(event);
    
    if (rightClick) 
        return

    else if (colorContextMenu && colorContextMenu.state === 'active')
        return colorContextMenu.close();

    const clickedColor = clickedColorElement(event);
    
    if (clickedColor) updatePreview(clickedColor);

    // handle click outside
    if ( !clickedColor &&
        previewIsOpen() &&
         !clickedColorElement(event) && 
          !clickedPreviewElement(event) &&
           !clickedPassivePreviewElement(event) ) colorPreview.close();


}

function updateSearchPreviewColorOnClick(event) {
    
    const rightClick = !mouseClickLeft(event)
    if (rightClick) 
        return;

    else if (colorContextMenu && colorContextMenu.state === 'active')
        return colorContextMenu.close();


    const clickedColor = clickedColorElement(event);

    if (clickedColor){
        if (app.tab.set){
            const found = app.tab.set.find(clr => {
                if (clr._id == clickedColor.dataset.id)
                    return clr;
            })

            if (found) {
                let clr = new Color(found)
                let {tints,shades,darks,lights} = clr;

                let tPanel = frag();
                let sPanel = frag();
                let dPanel = frag();
                let lPanel = frag();


                for (let i = tints.length - 1 ; i >= 0; i--) {
                    // log(i)
                    let vari = div();
                    vari.classList.add('vari','view-panel--clr');
                    vari.style.background = tints[i];
                    vari.dataset.hex = tints[i];
                    tPanel.appendChild(vari);
        
                }
                for (let i = shades.length - 1 ; i >= 0; i--) {

                    let vari = div();
                    vari.classList.add('vari','view-panel--clr');
                    vari.style.background = shades[i];
                    vari.dataset.hex = shades[i];
                    sPanel.appendChild(vari);
        
                }
                for (let i = 0 ; i <= darks.length - 1; i++) {

                    let vari = div();
                    vari.classList.add('vari','view-panel--clr');
                    vari.style.background = darks[i];
                    vari.dataset.hex = darks[i];
                    dPanel.appendChild(vari);
        
                }
                for (let i = 0 ; i <= lights.length - 1; i++) {

                    let vari = div();
                    vari.classList.add('vari','view-panel--clr');
                    vari.style.background = lights[i];
                    vari.dataset.hex = lights[i];
                    lPanel.appendChild(vari);
        
                }

                log('darks',darks,dPanel)
                log('lights',lights,lPanel)

                $('.cc-variants.tints .variants.p1').innerHTML = '';
                $('.cc-variants.tints .variants.p1').appendChild(lPanel);

                $('.cc-variants.shades .variants.p1').innerHTML = '';
                $('.cc-variants.shades .variants.p1').appendChild(dPanel);

                $('.cc-variants.tints .variants.p2').innerHTML = '';
                $('.cc-variants.tints .variants.p2').appendChild(tPanel);

                $('.cc-variants.shades .variants.p2').innerHTML = '';
                $('.cc-variants.shades .variants.p2').appendChild(sPanel);

                $('.cc-banner').style.backgroundColor = found.hex;
                $('.cc-name').textContent = found.name;
                $('.cc-hex').textContent = found.hex;
                $('.cc-tone').textContent = found.primaryTone
            }
        }
    }

    // handle click outside
    // if ( colorPreview.state === 'active' &&
    //      !clickedColor && 
    //       !clickedPreview &&
    //        !clickedPassivePreview ) colorPreview.close();
}

// -------------------------
// ROUTES
// -----------------------------------------

async function addCurrentColorToFavorites() {

    if (!ColorPreview.color)
        return;

    let {name,hex} = ColorPreview.color;
    const response = await api.routes.add('favorites', name , hex );
    alert('success')
    
    return response;

}

async function addCurrentColorToCollection(collectionName) {

    if (!ColorPreview.color)
        return;

    let {name,hex} = ColorPreview.color;
    const response = await api.routes.add(collectionName, name , hex );
    alert('success')
    
    return response;

}

function resetHueFilterCheckboxes() {
    each($$('.hue-options .option input'),input => input.checked = false);
    currentPalette.filters.hues = [];
}

function resetHueFilterCheckBoxesThenRender() {
    resetHueFilterCheckboxes();
    if (currentPalette) currentPalette.render();
}

async function filterHuesOnInput(option) {
    option = option.srcElement
    let hue = option.name;
    let inputSelected = option.checked === true;
    let checkedOptions = currentPalette.filters.hues;
    let indexOfHueSelected = checkedOptions.indexOf(hue);

    if (!currentPalette || !hue){
        option.checked = false;
        return
    }

    if ( inputSelected && indexOfHueSelected === -1) 
        checkedOptions.push(hue)

    else if (indexOfHueSelected !== -1) {
        checkedOptions.splice(indexOfHueSelected , 1)
    }
    
    (checkedOptions.length === 0 && currentPalette.filters.hues.length === 0)
        ? currentPalette.render()
        : currentPalette.renderFilteredState();

}

async function filterTonesOnInput(option) {
    option = option.srcElement
    let tone = option.name;
    let inputSelected = option.checked === true;
    let checkedOptions = currentPalette.filters.tones;
    let indexOfToneSelected = checkedOptions.indexOf(tone);
    // console.log(tone)
    // console.log(checkedOptions,currentPalette)

    if (!currentPalette || !tone){
        option.checked = false;
        return
    }

    if (inputSelected && indexOfToneSelected === -1)
        checkedOptions.push(tone)

    else if (indexOfToneSelected !== -1) {
        // console.log(indexOfToneSelected)
        checkedOptions.splice(indexOfToneSelected , 1)
    }

    // console.log(checkedOptions,currentPalette)
    (checkedOptions.length === 0 && currentPalette.filters.hues.length === 0)
        ? currentPalette.render()
        : currentPalette.renderFilteredState();
}


function createPalette(name) {
    const palette = new Dashboard(`http://localhost:1279/colors/${name}`, name , 'palette');
    palettes[name] = palette
}

function createCollection(name) {
    collections[name] = new Dashboard(`http://localhost:1279/colors/collections/${name}`,name, 'collection');
}

function hydratePaletteLink(link) {
    // console.log('creating palette link',link)
    link.addEventListener('click', async function() {
        const tabName = link.dataset.tab;
        
        if (palettes[tabName]) {

            const clrSet = await palettes[tabName].getAllColors();

            currentPalette = palettes[tabName];
            resetHueFilterCheckBoxesThenRender();

            app.tab.name = tabName;
            app.tab.component = palettes[tabName]
            app.tab.set = clrSet;
        }

    });

    return link;
}

function hydrateA2CLink(link) {

    // console.log('creating add to collection link',link);
    link.addEventListener('click', async function(e) {

        const tabName = link.dataset.tab;

        if (collections[tabName] && colorPreview.color)
            addCurrentColorToCollection(tabName)
        
    })

}

function hydrateCollectionLink(link) {
    
    link.addEventListener('click', async function(e) {

        const tabName = link.dataset.tab;

        if (e.target.closest('.del')){
            alert(`attempting to delete ${tabName}`)

            if(confirm(`are you sure you want to delete ${tabName}?`)){

                const response = await api.routes.delete(tabName)
                
                if (response) {
                    link.remove();
                    const ref = (await menus).a2cMenu.links.find(link => link.dataset.tab == tabName)
                    if (ref) ref.remove();
                    createCollectionControls.closeContext();
                    console.log('confirmed');
                }
                return response;

            }

            return;
        }

        else if (collections[tabName]) {
            const clrSet = await collections[tabName].getAllColors();

            console.log('rendering');
            currentPalette = collections[tabName];
            resetHueFilterCheckBoxesThenRender();


            app.tab.name = tabName;
            app.tab.component = collections[tabName];
            app.tab.set = clrSet; 
        }


    });

    return link;
}

function createCollectionLink(link) {

    hydrateCollectionLink(link)
    
    if (link.dataset.tab !== 'favorites') {
        appendDeleteButton(link)
        function appendDeleteButton(link) {
            const delButton = document.createElement('span');
            delButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"></path></svg>`
            delButton.classList.add('del');
            link.appendChild(delButton);
        }
    }

}

function handleContextMenuEvent(event) {

    const clickedColor = colorClicked(event);

    if (clickedColor && isFavorite(clickedColor)) highlightFavoriteIcon() 
    else hideFavoriteIcon();
        
    colorContextMenu.handleRightClick(event);
}



function showFullScreenPreview() {
    fsDashboardPreview.classList.toggle('active');
}

function closeFullScreenPreview() {
    fsDashboardPreview.classList.remove('active');
}



// -------------------------
// UTILITIES
// -----------------------------------------

function toggleTinter() {
    $('.variations').classList.remove('shade');
    $('.variations').classList.add('tint');
}

function toggleShader() {
    $('.variations').classList.remove('tint');
    $('.variations').classList.add('shade');
}

function togglePreviewDark() {
    preview.element.classList.add('dark')
    preview.element.classList.remove('lite','primary')

}

function togglePreviewLight() {
    preview.element.classList.add('lite')
    preview.element.classList.remove('dark','primary')
}

function togglePreviewCurrentColor() {
    preview.element.classList.add('primary')
    preview.element.classList.remove('lite','dark')
}

function toggleActiveMenuOnClick(tab) {

    console.log(arguments)
    const others = $$('.option').filter(menuTab => menuTab !== tab);
    const correspondingModal = $(`.option__modal[data-tab="${tab.dataset.tab}"]`);
    
    return function HandleTransformsOnClick(e) {

        if (!e.target.closest('[data-tab="collections"] button')
            && !e.target.closest('.del')) {

            const distanceFromLeft = correspondingModal.getBoundingClientRect().left - 20;
            const distanceToTop = tab.getBoundingClientRect().bottom - tab.parentElement.getBoundingClientRect().top;
            others.forEach(tab => tab.classList.toggle('passive'));
            
            tab.style.setProperty('--dft',`${-distanceToTop}px`);
            tab.classList.toggle('active');

            const activeModal = $('.option__modal.active');

            if (activeModal && activeModal !== correspondingModal) 
                activeModal.classList.remove('active');

            correspondingModal.style.setProperty('--dfl',`-${distanceFromLeft}px`)
            correspondingModal.classList.toggle('active');
        }

    }
}
function clickedColorElement(event) {
    return event.target.closest('.view-panel--clr');
}

function clickedPreviewElement(event) {
    return event.target.closest('.dashboard-preview');
}

function clickedPassivePreviewElement(event) {
    return event.target.closest('.passive-preview');
}

function previewIsOpen() {
    return colorPreview.state === 'active';
}

$('.theme-navigator').addEventListener('click',(e) => {
    if (e.target.closest('.tggle-right'))
        themebarControls.next();
    else if (e.target.closest('.tggle-left'))
        themebarControls.prev();
    console.log(e.target)
})

$('.theme-label').addEventListener('click',(e) => {
    if (e.target.closest('.ttl'))
        themebarControls.toggleOptions();
})

$('.theme-options').addEventListener('click',(e) => {
    let clickedOption = e.target.closest('.opt');
    if (clickedOption){
       let element = clickedOption;
       themebarControls.toOption.call(themebarControls,element.dataset.ttl)
    }
    console.log(clickedOption)
})

// $('.btn-tk.ecg').addEventListener('click',() => {
//     themebarControls.toggleCtrlPanel.call(themebarControls);
//     $('.btn-tk.ecg').classList.toggle('active');
// })

// $('.btn-tk.ccg').addEventListener('click',() => {
//     $('.gradient-export--overlay').classList.toggle('active')
// })

const themebarControls = app.components.themebar = {
    index: 1,
    sections: $$('.side-menu .theme-bar'),
    options: $$('.theme-options .opt'),
    title: $('.side-menu .theme-label .ttl'),
    theme: 'mono',

    get color() {
        return colorPreview.color
    },

    next() {
        let ttl = $('.side-menu .theme-label .ttl'),
            element,
            theme;

        this.index = this.index + 1;

        if (this.index > this.sections.length - 1) this.index = 0;

        this.sections.forEach(section => {
            section.classList.remove('primary');
            section.classList.add('passive');
        })

        element = this.sections[this.index];
            element.classList.add('primary');

        theme = element.dataset.theme;
            ttl.textContent = element.dataset.ttl;
                this.theme=theme;

        $('.opt.current').classList.remove('current');
        $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add('current');
        colorPreview.requestGradientUpdate(this.theme)
    },

    prev() {

        let ttl = $('.side-menu .theme-label .ttl'),
            element,
            theme;

        this.index = this.index - 1;

        if(this.index < 0) this.index = this.sections.length - 1;

        this.sections.forEach(section => {
            section.classList.remove('primary');
            section.classList.add('passive');
        })

        element = this.sections[this.index];
            element.classList.add('primary');

        theme = element.dataset.theme;
            ttl.textContent = element.dataset.ttl;
                this.theme=theme;


        $('.opt.current').classList.remove('current');
        $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add('current')
        colorPreview.requestGradientUpdate(this.theme)

    },

    toFirst() {

        let ttl = $('.side-menu .theme-label .ttl'),
            element,
            theme;

        this.index = 0;

        this.sections.forEach(section => {
            section.classList.remove('primary');
            section.classList.add('passive');
        })

        element = this.sections[this.index]
            element.classList.add('primary');

        theme = element.dataset.theme;
            ttl.textContent = element.dataset.ttl;
                this.theme=theme;
        
        $('.opt.current').classList.remove('current');
        $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add('current')
        colorPreview.requestGradientUpdate(this.theme)


    },

    showOptions(){
        $('.theme-navigator').classList.add('passive');
        $('.theme-color').classList.add('passive');
        $('.theme-options').classList.add('active');

    },

    hideOptions(){
        $('.theme-navigator').classList.remove('passive');
        $('.theme-color').classList.remove('passive');
        $('.theme-options').classList.remove('active');

    },

    toggleOptions(){
        $('.theme-navigator').classList.toggle('passive');
        $('.theme-color').classList.toggle('passive');
        $('.theme-options').classList.toggle('active');
    },

    toOption(title) {

        // this.sections.forEach(section => {
        //     section.classList.remove('primary');
        //     section.classList.add('passive');
        // })

        let element = this.sections.find(section => section.dataset.ttl===title);
             ttl = $('.side-menu .theme-label .ttl');

        if (element) {

            console.log('found',element)
            console.log(element, this.sections.indexOf(element))

            this.index = this.sections.indexOf(element);

            this.sections.forEach(section => {
                section.classList.remove('primary');
                section.classList.add('passive');
            })

            element.classList.add('primary');
            let theme = element.dataset.theme;
                ttl.textContent = element.dataset.ttl;
                    this.theme=theme;

            this.hideOptions();
            console.log(this)

            this.title.textContent = element.dataset.ttl;
            $('.opt.current').classList.remove('current');
            $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add('current');
            colorPreview.requestGradientUpdate(this.theme)


        }


    },

    showCtrlPanel() {

    },

    hideCtrlPanel() {

    },

    toggleCtrlPanel() {
        $('.ctrl-panel').classList.toggle('active');
    },
}

colorPreview.update(new Color({name: 'Sample', hex:'#F6768E' , tone:'Clean' }))
// #F6768E
