import { collections, indexes } from "./color-fakeDB.js";

let errorLog = [];
let notFound = [];
let greysFound = [];

let palettes = {

}

let buckets = {
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

let tones = {
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
};

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
}

// class Palette {
//     constructor(indexName,colorSet) {

//         /*
//             SORT/MAP
//                     COLOR INDEX
//             SET/GET 
//                     HUES & TONES

//             1) FOR EACH COLOR IN THE SORTED COLORSET OF ['NAME','HEX']
//                 - CREATE CLASS
//                 -- COPY TO BUCKET(S)
//             3) SORT EACH INDEX/BUCKET BY HUE
//             4) MAP OVER EACH BUCKETS BY HUE TO CREATE ALL COLOR INDEX
            
//             5) GENERATE ALL COLOR MODEL BY MAPING OVER EACH PALETTE/ALL COLOR INDEX;

//         */
//         this.title = indexName;
//         this.errorLog = [];
//         this.notFound = [];
//         this.greysFound = [];        
//         this.HUE_BUCKETS = {
//             'red': [],
//             'orange': [],
//                 'brown': [],
            
//             'yellow': [],
            
//             'green': [],
//                 'lime': [],
//                 'emerald': [],
//                 'aqua': [],
//                 'teal': [],
            
//             'blue': [],
//                 'cyan': [],
//                 'sky': [],
//                 'azure': [],
        
//             'purple': [],
//                 'indigo': [],
//                 'lavender': [],
//                 'violet': [],
        
//             'rose': [],
//                 'magenta': [],
        
//             'undefined': [],
//         }
//         this.TONE_BUCKETS = {
//             'pastel': [],
//             'washed': [],
//             'muted': [],
//             'clean': [],
//             'earth': [],
//             'jewel': [],
//             'vivid': [],
//             'luminous': [],
//             'neon': [],
        
//             'grey' : [],
//             'white' : [],
//             'black' : [],
        
//             'no dice': [],
//         }
//         this.COLOR_INDEX = []

//         colorSet.forEach(color => {
//             let newColor = backPacker(color) // => [ 'hex', { 'name', 'hex', { PROPS } } ]
//         })
//     }
// }


const testRGB = document.querySelector('.info-panel .compare_rgb');
const testHEX = document.querySelector('.info-panel .compare_hex');
const testHSL = document.querySelector('.info-panel .compare_hsl');

// DASHBOARD VIEW
const currentList = document.querySelector('.view-panel--set');
// INTERFACE HEX CODE
const currentHex = document.querySelector('.current-hex');
// INTERFACE CURRENT COLOR NAME
const currentName = document.querySelector('.current-title');


const rootElement= document.documentElement;
// CLICKED COLOR FUNCTION
currentList.addEventListener('click',(e) => {
    let clicked;
    if (clicked = e.target.closest('.view-panel--clr')) {
        const title = clicked.dataset.ttl;
        const color = clicked.dataset.clr;
        let clr = allColors.find(i => i[0] == color)[1].props
        console.log(clr, getRange(clr.hue));

        updateInterface(title,color)
    }
})
// FIRST BUILD
const allColors = collections
                    .reduce(make_Collection,[])
                    .sort(byHue)
                    .filter(invalidColor);

allColors.forEach(appendEachThenPush);


            // -----------------------------
            // LOGGERS
            // --------------------------------------------

console.log(allColors);
console.log(buckets);
console.log(tones);
console.log(notFound)
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
    const element = makeElement(color[1].title,color[1].hex);
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

function make_Collection(model,collection) {
    console.log(collection)
    return model.concat(collection.map(backPacker));
}

function backPacker(colorCollectionIndex) { // => [ '#hexcode', colorClass ] => [ 'hex', { 'title', 'name', {props} } ]
    // hexName
    let title = colorCollectionIndex[0];
    // properties
    let color = colorCollectionIndex[1];
    // class with props and methods
    let obj = new Color(title,color);
    
    sift(obj);

        return [color,obj];
}





            // -----------------------------
            // SIFTERS
            // --------------------------------------------
function sift(color) {
    
    let {hue,saturation,lightness} = color.props;
    let primaryColor = color.props.primary
    let tone = color.props.tone;
    let trutone = (tone !== 'grey' && tone !== 'earth' && tone !== 'muted' && tone !== 'washed');
    /*

        GET PRIMARY COLOR AND TONE 
        THEN PUSH TO CORRESPONDING BUCKET

    */
        // PUSH PRIMARY FIRST
        buckets[primaryColor].push(color);

        // CHECK FOR TONE
        if (tones[tone])
            tones[tone].push(color);


        // IF RED/ORANGE CHECK FOR BROWN
        if ((primaryColor === 'red' || primaryColor === 'orange') && isBrown(hue,saturation,lightness)) {
            color.props['derivative'] = 'brown';
            buckets['brown'].push(color);
        }
        // IF YELLOW CHECK FOR GOLD

        // CHECK FOR GREEN [ LIME , AQUA , EMERALD, TEAL ]
        if (primaryColor === 'green') {
            if (isLime(hue,saturation,lightness)) {
                color.props['derivative'] = 'lime';
                buckets['lime'].push(color);
            } else if (isAqua(hue,saturation,lightness)) {
                color.props['derivative'] = 'aqua';
                buckets['aqua'].push(color);
            } else if (isEmerald(hue,lightness) && trutone) {
                color.props['derivative'] = 'emerald';
                buckets['emerald'].push(color);
            } else if (isTeal(hue,lightness)) {
                color.props['derivative'] = 'teal';
                buckets['teal'].push(color);
            }
        } 

        // CHECK FOR BLUE [ CYAN , SKY, AZURE ]
        if (primaryColor === 'blue' && trutone) {
            if (isCyan(hue,lightness)) {
                color.props['derivative'] = 'cyan';
                buckets['cyan'].push(color);
            }

            if (isSky(hue,saturation,lightness)) {
                color.props['derivative'] = 'sky';
                buckets['sky'].push(color);
            }

            if (isAzure(hue) && trutone && tone !== 'pastel') {
                color.props['derivative'] = 'azure';
                buckets['azure'].push(color);
            }
        }


        // CHECK FOR INDIGO
        if (primaryColor === 'purple' && trutone )

            if (isIndigo(hue)) {
                if (saturation < 60 || tone === 'pastel') {
                    color.props['derivative'] = 'lavender';
                    buckets['lavender'].push(color);
                } else if (tone !== 'pastel') {
                    color.props['derivative'] = 'indigo';
                    buckets['indigo'].push(color);
                }
            }

            if (isViolet(hue)) {
                color.props['derivative'] = 'violet';
                buckets['violet'].push(color);
            }

        // CHECK PINK
        if (primaryColor === 'rose' && trutone && lightness > 10) {
            if (isMagenta(hue)) {
                color.props['derivative'] = 'magenta';
                buckets['magenta'].push(color);
            }
        }
        
}
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
    return a[1].props.hue - b[1].props.hue
}

function byLightness(a,b) { // obj.props.lightness
    return b[1].props.lightness - a[1].props.lightness
}

function byTone(a,b) { // obj.props.saturation / obj.props.lightness
    if (a[1].props.saturation > b[1].props.saturation && a[1].props.lightness > b[1].props.lightness)
        return 1
    return -1;
}

function bySaturation(a,b) { // obj.props.saturation + obj.props.lightness
    let x = a[1].props.saturation + a[1].props.lightness; 
    let y = b[1].props.saturation + a[1].props.lightness;
    return x - y
}

function invalidColor(a) { // obj.props == 'invalid color' ??
    if (a[1].props == 'invalid color') {
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
        console.log('too dark1')
        return false
    }
    if (lightness < 10) {
        console.log('too dark2');
        return false
    }
    if (lightness >= 80){
        console.log('too light');
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
