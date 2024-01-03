import { collections, indexes } from "../../data/fakeDB.js";

/*
 returns a Map {
    ['indexName', [colorSet]],
    ['indexName', [colorSet]],
    ['indexName', [colorSet]],
    ...
*/


    // -----------------------------
            // MODEL
            // --------------------------------------------

let errorLog = [];


class Color {
    constructor(name,colorFormat) {

        function setProps() {
            // let from = indexName;
            let rgb = hexToRgb(colorFormat);

            if (rgb == 'invalid hex') {
                errorLog.push(name);
                return 'invalid color';
            }
            
            let hsl = rgbToHsl(...rgb);
            let hex = colorFormat;

            let [hue,saturation,lightness] = hsl;
            let primary = getRange(hue);
            let tone = greyscale(lightness,saturation)[0];
    
            return {
                primary,
                tone,
                name,
                // from,

                rgb,
                hsl,
                hex,

                hue,
                saturation,
                lightness,
                values: [hue,saturation,lightness],
            }
        }
        
        this.title = name;
        this.hex = colorFormat;

        this.props = setProps();
    }

    make() {
        const element = document.createElement('div');
        element.setAttribute('class', 'view-panel--clr');
        element.style.backgroundColor = this.hex;
        element.dataset.clr = this.hex;
        element.dataset.ttl = this.title;
        return element;
    }
}

// creates a sorted object for each index/palette in the defined map
// defines methods to get elements for a set of colors
/*
    indexName = {
        title,
        undefinded,
        errorLog,
        
        hues {}
        tones {}

        getAll()
        getSection()

    }
*/
class Palette {
    constructor(indexName,colorSet) {

        /*
            SORT/MAP
                    COLOR INDEX
            SET/GET 
                    HUES & TONES

            1) FOR EACH COLOR IN THE SORTED COLORSET OF ['NAME','HEX']
                - CREATE CLASS
                -- COPY TO BUCKET(S)
            3) SORT EACH INDEX/BUCKET BY HUE
            4) MAP OVER EACH BUCKETS BY HUE TO CREATE ALL COLOR INDEX
            
            5) GENERATE ALL COLOR MODEL BY MAPING OVER EACH PALETTE/ALL COLOR INDEX;

        */
        this.title = indexName;
        this.errorLog = [];
        this.notFound = [];
        this.greysFound = [];
                
        this.HUE_BUCKETS = {
            'red': [], 
            'orange': [],
                'brown': [],
            
            'yellow': [],
            
            'green': [],
                'lime': [],
                'emerald': [],
                'aqua': [],
                'teal': [],
            
            'blue': [],
                'cyan': [],
                'sky': [],
                'azure': [],
        
            'purple': [],
                'indigo': [],
                'lavender': [],
                'violet': [],
        
            'rose': [],
                'magenta': [],
        
            'undefined': [],
        }
        this.TONE_BUCKETS = {
            'pastel': [],
            'washed': [],
            'muted': [],
            'clean': [],
            'earth': [],
            'jewel': [],
            'vivid': [],
            'luminous': [],
            'neon': [],
        
            'grey' : [],
            'white' : [],
            'black' : [],
        
            'no dice': [],
        }

        colorSet.forEach(color => {
            this.sift(MAKE_COLOR(color));
        })

        Object.entries(this.HUE_BUCKETS).forEach(entry => {
            this.sort(entry[1])
        })

        this.COLOR_INDEX = this.make(this.HUE_BUCKETS);
    
    }
    
    sift(color) {
        // console.log(color)
        let {hue,saturation,lightness} = color.props;
        let primaryColor = color.props.primary
        let tone = color.props.tone;
        let trutone = (tone !== 'grey' && tone !== 'earth' && tone !== 'muted' && tone !== 'washed');
        /*
    
            GET PRIMARY COLOR AND TONE 
            THEN PUSH TO CORRESPONDING BUCKET
    
        */
            // PUSH PRIMARY FIRST
            if (tone == 'grey')
                this.greysFound.push(color)
            else 
                this.HUE_BUCKETS[primaryColor].push(color);

            // CHECK FOR TONE
            if (this.TONE_BUCKETS[tone])
                this.TONE_BUCKETS[tone].push(color);
    
    
            // IF RED/ORANGE CHECK FOR BROWN
            if ((primaryColor === 'red' || primaryColor === 'orange') && isBrown(hue,saturation,lightness)) {
                color.props['derivative'] = 'brown';
                this.HUE_BUCKETS['brown'].push(color);
            }
            // IF YELLOW CHECK FOR GOLD
    
            // CHECK FOR GREEN [ LIME , AQUA , EMERALD, TEAL ]
            if (primaryColor === 'green') {
                if (isLime(hue,saturation,lightness)) {
                    color.props['derivative'] = 'lime';
                    this.HUE_BUCKETS['lime'].push(color);
                } else if (isAqua(hue,saturation,lightness)) {
                    color.props['derivative'] = 'aqua';
                    this.HUE_BUCKETS['aqua'].push(color);
                } else if (isEmerald(hue,lightness) && trutone) {
                    color.props['derivative'] = 'emerald';
                    this.HUE_BUCKETS['emerald'].push(color);
                } else if (isTeal(hue,lightness)) {
                    color.props['derivative'] = 'teal';
                    this.HUE_BUCKETS['teal'].push(color);
                }
            } 
    
            // CHECK FOR BLUE [ CYAN , SKY, AZURE ]
            if (primaryColor === 'blue' && trutone) {
                if (isCyan(hue,lightness)) {
                    color.props['derivative'] = 'cyan';
                    this.HUE_BUCKETS['cyan'].push(color);
                }
    
                if (isSky(hue,saturation,lightness)) {
                    color.props['derivative'] = 'sky';
                    this.HUE_BUCKETS['sky'].push(color);
                }
    
                if (isAzure(hue) && trutone && tone !== 'pastel') {
                    color.props['derivative'] = 'azure';
                    this.HUE_BUCKETS['azure'].push(color);
                }
            }
    
    
            // CHECK FOR INDIGO
            if (primaryColor === 'purple' && trutone )
    
                if (isIndigo(hue)) {
                    if (saturation < 60 || tone === 'pastel') {
                        color.props['derivative'] = 'lavender';
                        this.HUE_BUCKETS['lavender'].push(color);
                    } else if (tone !== 'pastel') {
                        color.props['derivative'] = 'indigo';
                        this.HUE_BUCKETS['indigo'].push(color);
                    }
                }
    
                if (isViolet(hue)) {
                    color.props['derivative'] = 'violet';
                    this.HUE_BUCKETS['violet'].push(color);
                }
    
            // CHECK PINK
            if (primaryColor === 'rose' && trutone && lightness > 10) {
                if (isMagenta(hue)) {
                    color.props['derivative'] = 'magenta';
                    this.HUE_BUCKETS['magenta'].push(color);
                }
            }
            
    }
    sort(index) {
        return index.sort(byHue).sort(byLightness).sort(byTone).filter(invalidColor);
    }
    make(bucketList) {
        let index = [];
        // DERIVATIVES ARE COPIES USED FOR CHECKBOX FILTERS
        let skippers = ['brown','lime','emerald','aqua','teal','cyan','sky','azure','indigo','lavender','violet','magenta'];
        
        Object.entries(bucketList).forEach(entry => {
            // skip derivative copies
            if (!skippers.includes(entry[0])) {
                index.push(entry[1]);
            }
        })
        return index
    }

    createFrag() {
        return document.createDocumentFragment();
    }

    createDashboardElement() {
        let dashboardElement = document.createElement('div');
        let colorset = document.createElement('div');

        dashboardElement.classList.add('view-panel--section');
        dashboardElement.dataset.page = this.title;

        colorset.classList.add('view-panel--set');

        dashboardElement.appendChild(colorset);

        colorset.append(this.getAllHues());
        return dashboardElement;
    }

    getAllHues() {
        let frag = this.createFrag();
        // DERIVATIVES ARE COPIES USED FOR CHECKBOX FILTERS
        let skippers = ['brown','lime','emerald','aqua','teal','cyan','sky','azure','indigo','lavender','violet','magenta'];

        Object.entries(this.HUE_BUCKETS).forEach(entry => {
            if (!skippers.includes(entry[0])) {
                if (entry[1].length > 0) {
                    let sectionTitle = entry[0];
                    let elements = entry[1];
                    frag.appendChild(this.createSection(sectionTitle,elements));
                }
            }
        })
    
        return frag;
    }

    // getAllTones() {
    //     let frag = this.createFrag();
    //     Object.entries(this.TONE_BUCKETS).forEach(entry => {
    //         let sectionTitle = entry[0];
    //         let elements = entry[1];
    //         frag.appendChild(createSection(sectionTitle,elements));
    //     })
    // }

    getHueSection(propString) {
        let frag = this.createFrag();
        if (!this.HUE_BUCKETS[propString]) {
            return console.log(`${propString} tone doesnt exist in this palette`)
        }
        else if (this.HUE_BUCKETS[propString].length == 0) {
            let emptyElement = document.createElement('span');
            emptyElement.classList.add('empty');
            emptyElement.innerText = 'no colors found';
            return emptyElement;
        }
        else {
            return this.createSection
            (
                propString,
                this.HUE_BUCKETS[propString]
            );
        }
    }

    getToneSection(propString) {
        let frag = this.createFrag();
        if (!this.TONE_BUCKETS[propString]) {
            return console.log(`${propString} tone doesnt exist in this palette`)
        }
        else if (this.TONE_BUCKETS[propString].length == 0) {
            let emptyElement = document.createElement('span');
            emptyElement.classList.add('empty');
            emptyElement.innerText = 'no colors found';
            return emptyElement;
        }
        else {
            return this.createSection
            (
                propString,
                this.TONE_BUCKETS[propString]
            );
        }
    }

    createSection(title,list) {
        let section = document.createElement('section');
        let header = document.createElement('span');
        section.classList.add('color-panel');
        header.classList.add('color-panel--header');

        section.dataset.panel = title;
        header.innerText = title
        section.appendChild(header)
        list.forEach(color => { 
            let el = color.make();
            section.appendChild(el);
        })
        return section;
    } 
}

class Model {
    constructor(map) {
        // ?adapter/decorator/factory? => forEach(index) => new Pallette()
        this.palettes = MAKE_PALETTES(map);
        this.collections = {};
        this.themes = {};
        this.gradients = {};
    }

    makeAllPalletes() {
        const frag = document.createDocumentFragment();
        Object.entries(this.palettes).forEach(entry => {
            if (entry[0] != 'allColors') {
                let paletteTitle = entry[0];
                let palette = entry[1].createDashboardElement();
                frag.appendChild(palette);
            }
        })
        return frag;
    }
}

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


// FIRST BUILD
const test_model = new Model(indexes);
console.log(test_model.palettes)


// VIEW CONTROLLERS
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



// DATA HANDLERS

            // -----------------------------
            // LOGGERS
            // --------------------------------------------

console.log(test_model)
console.warn(`${errorLog.length} invalid colors in the model`,errorLog);

            // -----------------------------
            // CONTROLLERS
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





            // -----------------------------
            // BUILDERS
            // --------------------------------------------

function MAKE_PALETTES(indexes) {
    let name;
    let collection;
    let marker = indexes.keys();
    let obj = {};
    indexes.forEach(index => {
        name = marker.next().value;
        collection = indexes.get(name);

        obj[name] = new Palette(name,collection)
    })
    return obj;

}

function MAKE_COLOR(colorCollectionIndex) { // (['hex','title']) => [ '#hexcode', colorClass ] => [ 'hex', { 'title', 'name', {props} } ]
    // hexName
    let title = colorCollectionIndex[0];
    // properties
    let color = colorCollectionIndex[1];
    // class with props and methods
    let obj = new Color(title,color);

        return obj;
}





            // -----------------------------
            // SIFTERS
            // --------------------------------------------

function greyscale(lightness,saturation) {
    /*  README
        SD[#] 'STANDARD DEVIATION' REPRESENTS A RANGE CATCHING ANY COLORS THERIN
        S[#] 'SATURATION'
        L[#] 'LIGHTNESS'

        [[MOODY COLORS]]
        
        Earth Tones are defined as colors low in lightness and saturation
        L[45] - S[72] -- {SD[45] IF L[30] - S[45]}

        Jewel Tones are defined as colors low in lightness high in saturation
        L[50] - S[45+]

        
        [[BRIGHT COLORS]]
        
        Neon tones are high in saturation with a centered lightness
            L[45-50] - S[99+]
        Luminous tones are high in saturation and high in lightness
            L[75] - S[90+]
        Vivid tones are high in saturation with a lightness above 50% and below vivid thresholds of 70%
            L[45-50] - S[50-70]
    
        [[FLAT COLORS]]
        
        Pastel tones take a high lightness threshold starting from 70% and 
        any saturation that isn't gray within a 60% deviation
            L[70+] S[25+] -- {SD[60] IF L[90+]}
        
        Muted tones like pastel take a high lightness threshold just under pastel 
        but are muted by a lack of saturation spaning accross a 45%-60% threshold
            L[65-70] -- {SD[60-45]}

        Clean colors represent a catch all for flat colors with an average saturation and lightness
            L[45+] - S[32-70]
        
    */ 
    let deviation = lightness - saturation;
    let result = ['no dice', false];
    // when lightness is between 90 and 10 and saturation is less than 5

    // [grey,white,black]
    if ((saturation <= 6)){
        if (lightness <= 10) {
            return result = ['black',false];
        }
        if (lightness >= 90) {
            return result = ['white',false];
        }
        return result = ['grey',true];
    }
    
    // when lightness is more than 45
    // [pastel,bright,muted]
    if (lightness > 45 && lightness <= 99 && saturation > 5) {
        if (deviation <= 60 && deviation > -5) {
            // grey catch
            if (deviation <= 60 && deviation > 56) {
                // its greyish
                return result = ['washed',true];
            }
        }
        // grey catch
        if (deviation > 62) {
            // light grey
            return result = ['grey',true]
        }
        // pastel catch
        if (lightness >= 65 && saturation > 10) {
            if (lightness >= 65  && lightness <= 80 && (deviation < 0))
                return result = ['clean',false]
            return result = ['pastel',false]
        }
        // bright catch
        if (lightness < 70 && lightness >= 45 && saturation >= 45) {
            if (saturation >= 99 && lightness >= 45 && lightness <= 55)
                return result = ['neon', false]
            if (saturation >= 90 && lightness >= 70)
                return result = ['luminous', false];
            if (saturation > 80 && lightness >= 45 && lightness < 70) 
                return result = ['vivid', false];
            // if (saturation < 80 && saturation > 70 && lightness > 40 && lightness < 70)
            //     return result = ['vivid2',false];
        }
        // clean colors
        if (saturation > 32 && lightness > 45)
            return result = ['clean',false]
        // muted colors
        if (lightness <= 65 && saturation < 70 && (deviation < 60 || saturation < 45))
            return result = ['muted',false]
        }

    // when lightness is less than 50
    // [earth,jewel]
    if (lightness <= 50 && lightness >= 10 && saturation > 5) {
        if (saturation <= 72 && lightness <= 45)
            return result = ['earth',false];
        if (saturation >= 45)
            return result = ['jewel',false];


        if (deviation < 45 && deviation > 0 && saturation < 45 && lightness < 30) {
            // its an [earth,washed,muted] tone
            return result = ['earth',false];
        }
        if (deviation <= 0) {
            return result = ['jewel', false]
        }
        return result = ['grey',true];
        // its mid/natural grey
    }
    
    // last call for pastel
    if (lightness > 90 && lightness < 99) { 
        if (deviation <= 60) {
            return result = ['pastel',false];
        }
        return result = ['grey',true];
    }

    return result;
}

function getRange(hue) {
    let bucket;
    let rangeFinder = [
        [0,15,'red'],
        [15,45,'orange'],
        [45,60,'yellow'],
        [60,180,'green'],
        [180,240,'blue'],
        [240,300,'purple'],
        [300,360,'rose'],
    ]

    for (let i = 0; i < rangeFinder.length; i++) {
        if (hue >= rangeFinder[i][0] && hue <= rangeFinder[i][1]) {
            bucket = rangeFinder[i][2];
            break
        }
    }

    return bucket;
}





            // -----------------------------
            // SORTERS
            // ----------------------------------------------
function byHue(a,b) { // obj.props.hue
    return a.props.hue - b.props.hue
}

function byLightness(a,b) { // obj.props.lightness
    return b.props.lightness - a.props.lightness
}

function byTone(a,b) { // obj.props.saturation / obj.props.lightness
    // if (a.props.saturation > b.props.saturation && a.props.lightness > b.props.lightness)
    //     return 1
    // return -1;
    let sortOrder = {
    'pastel': 1,
    'washed': 2,
    'muted': 3,
    'clean': 4,
    'earth': 5,
    'jewel': 6,
    'vivid': 7,
    'luminous': 8,
    'neon': 9,
    }
    if (sortOrder[a.props.tone] > sortOrder[b.props.tone])
        return 1
    return -1;
}

function bySaturation(a,b) { // obj.props.saturation + obj.props.lightness
    let x = a.props.saturation + a.props.lightness; 
    let y = b.props.saturation + a.props.lightness;
    return x - y
}

function invalidColor(a) { // obj.props == 'invalid color' ??
    if (a.props == 'invalid color') {
        return false
    }
    return true
}





            // -------------------------
            // ADAPTERS
            // -----------------------------------------

// RGB CONVERSIONS 
function rgbToHsl (r,g,b) 
{
    let red = r / 255;
    let green = g / 255;
    let blue = b / 255;

    let colorMax = Math.max(red,green,blue);
    let colorMin = Math.min(red,green,blue);

    let delta = colorMax - colorMin;
    let midrange = (colorMax + colorMin) / 2;
    
    // midrange 
     // lightness is the average of the largest and smallest color components
    function getLightness() {
        let l = (colorMax + colorMin) / 2;
        return Math.round(l * 100);
    }

    // range
    // saturation is simply the chroma scaled to fill
    // the interval [0, 1] for every combination of hue and lightness
    function getSaturation() {
        let s = delta / (1 - Math.abs(2 * midrange - 1));
        return  Math.round(s * 100);
    }

    // https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion
    function getHue() {
        let h;
        let differenceOverDelta = subtractOverDelta(delta);

        if (delta === 0) {
            h = 0;
        }

        if (colorMax === red) {
            h = (differenceOverDelta(green,blue) + (g < b ? 6 : 0));
        }
        if (colorMax === green) {
            h = (differenceOverDelta(blue,red) + 2);
        }
        if (colorMax === blue) {
            h = (differenceOverDelta(red,green) + 4);
        }

        return Math.round(h * 60);
    }

    function subtractOverDelta(delta) {
        return function(expression1,expression2) {
            return ((expression1 - expression2) / delta);
        }
    }

    let lightness = getLightness();
    let saturation = getSaturation();
    let hue = getHue();

    return [hue,saturation,lightness];
}

function rgbToHex(r,g,b) 
{
    return [
        toBase16(r),
        toBase16(g),
        toBase16(b),
    ];
}

function toBase16(base10) 
{
    if (base10 === 0) {
        return '00';
    }
    if (base10 > 255) {
        return 'TooHigh';
    }
    if (!Number.isInteger(base10)) {
        console.log('NAN!');
        return parseInt(base10).toString(16)
    }
    return base10.toString(16);
}

function create_RGB_String(values) 
{   
    return `rgb(${values[0]},${values[1]},${values[2]})`
}

// HEX CONVERSIONS
function hexToRgb(hex) 
{
    let a = hex.replace('#','');
    let b = a.split('');
    let c = b.length;

    return c === 3 ? convertThreeDigitHex(b) :
            c === 6 ? convertSixDigitHex(a) :
            'invalid hex';
            // console.log(new Error(`${hex} is not a valid hex`));
}

function toBase10(base16) 
{
    if (base16.toString().length > 2) {
        return 'too many digits for css'
    }

    return parseInt(base16,16);
}

function repeatThenConvertBase10(base16) 
{
    return toBase10(base16.repeat(2))
}

function convertThreeDigitHex(arrOfThree) // [f,f,f] => [ff,ff,ff]
{
    let values = arrOfThree.map(repeatThenConvertBase10);
    return values;
}

function convertSixDigitHex(sixDigitHex)  // #ffffff => [ff,ff,ff]
{
    let values = sixDigitHex
            .split(/(..)/g)
                .filter(s => s)
                    .map(toBase10);
    return values
}

function create_HEX_String(values) 
{
    let string = '#' + values.join('');
    return string;
}

// HSL CONVERSIONS
function hslToRgb (hue, sat, light) 
{
    hue = hue % 360;

    if (hue < 0) {
        hue += 360;
    }

    sat /= 100;
    light /= 100;

    function f(n) {
        let k = (n + hue/30) % 12;
        let a = sat * Math.min(light, 1 - light);
        return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    }

    return [f(0), f(8), f(4)];
}

function create_HSL_String(values) 
{   
    return `hsl(${values[0]},${values[1]}%,${values[2]}%)`
}





            // -------------------------
            // IDENTIFIERS
            // -----------------------------------------

// RED
function isRed(color) {
    let hue = color[1].props.hue;
    let lightness = color[1].props.lightness;
    if (((hue >= 345 && hue <= 360) || (hue >= 0 && hue <= 15)) 
        && (lightness >= 10 && hue <= 45))
        return true;
    else 
        return false
}
// BROWN
function isBrown(hue,saturation,lightness) {
    // let hue_Between = onorBetween(hue);
    // let sat_Between = onorBetween(saturation);
    // let lit_Between = onorBetween(lightness);

    // let hue_isin = isBetween(hue);
    // let sat_isin = isBetween(saturation);
    // let lit_isin = isBetween(lightness);
    
    // in Reds
    if (hue <= 5 && lightness <= 7) {
        // console.log('too dark1')
        return false
    }
    if (lightness < 10) {
        // console.log('too dark2');
        return false
    }
    if (lightness >= 80){
        // console.log('too light');
        return false
    }

    if (hue <= 5 && saturation >= 20 && saturation <= 40 && lightness <= 15)
        return true;
    if (hue <= 15 && saturation >= 20 && saturation <= 30 && lightness <= 15)
        return true;
    if (hue >= 5 && hue < 10 && saturation >= 20 && saturation < 50 && lightness < 30 && lightness > 7)
        return true;
    
    if (hue >= 20 && hue < 25 && saturation > 20 && saturation < 30 && lightness < 60 && lightness > 10)
        return true;
    if (hue >= 25 && hue < 30 && saturation > 17 && saturation < 50 && lightness < 70 && lightness > 10)
        return true;
   
    if (hue >= 30 && hue < 32 && saturation > 20 && saturation < 50 && lightness <= 60 && lightness > 10)
        return true;
    if (hue >= 32 && hue < 35 && saturation > 20 && saturation < 50 && lightness <= 70 && lightness > 10)
        return true;
    if (hue >= 30 && hue < 35 && saturation > 50 && lightness >= 10 && lightness <= 20)
        return true;
    
    if (hue >= 35 && hue < 45 && saturation < 50 && lightness < 25)
        return true;
    if (hue >= 35 && hue < 45 && saturation > 50 && lightness < 20)
        return true; 
    return false;
}
// INTERMEDIATE [YELLOWISH, GREEN]
function isLime(hue,saturation,lightness) {
    if(hue >= 69 && hue <= 120 && saturation > 50 && lightness >= 50 && lightness < 70)
        return true;
}
// GREEN
function isEmerald(hue,lightness) {
    if ((hue > 120 && hue <= 150 && lightness > 25) || (hue > 150 && hue <= 165 && lightness < 25 && lightness > 10))
        return true;
}

function isAqua(hue,saturation,lightness) {
    if (hue > 150 && hue <= 165 && lightness > 25 && saturation > 30) 
        return true;
}
// INTERMEDIATE COLOR [GREENISH BLUE]
function isTeal(hue,lightness) {
    if (hue >= 165 && hue <= 180) 
        if(lightness < 40)
            return true
     return false
}

// BLUE
function isCyan(hue,lightness) {
    if (hue >= 180 && hue <= 195)
        if (lightness > 40) 
        return true

      return false
}
function isSky(hue,saturation,lightness) {
    if (hue >= 195 && hue <= 210)
        if (saturation > 20 && lightness > 20 && lightness < 80)
            return true;
}
function isAzure(hue,satuation,lightness) {
    if (hue > 210 && hue < 225)
        return true;
}
// INTERMEDIATE COLOR [PURPLISH BLUE]
function isIndigo(hue) {
    if (hue >= 140 && hue <= 255)
        return true;
}
// PURPLE
function isViolet(hue) {
    if (hue > 255 && hue <= 270)
        return true;
}
// PINK
function isMagenta(hue) {
    if (hue > 300 && hue <= 315)
        return true;
}
// GREY COLORS
function isGrey(color) {
    let saturation = color[1].props.saturation;
    let lightness = color[1].props.lightness;
    
    const test = greyscale(lightness,saturation)
    if (test[0] === 'no dice')
        notFound.push(color);
    if (test[1] === true) {
        color[1].props['flag'] = test[0];
        buckets.grey.push(color)
        return false;
    }

    color[1].props['flag'] = test[0];
    return true;
}