import { crayolaColors as fakeConnection} from './color-Collection-Crayola.js';
import { collections } from "./color-fakeDB.js";
import { app } from './color-API-v2.js';

// COMPARE TAB
const testRGB = document.querySelector('.info-panel .compare_rgb');
const testHEX = document.querySelector('.info-panel .compare_hex');
const testHSL = document.querySelector('.info-panel .compare_hsl')

// DASHBOARD VIEW
const currentList = document.querySelector('.view-panel--set')

// INTERFACE HEX CODE
const currentHex = document.querySelector('.hex');
// INTERFACE CURRENT COLOR NAME
const currentName = document.querySelector('.current-title');

const rootElement= document.documentElement;

function makeElement(name,hex) {
    const element = document.createElement('div');
    element.setAttribute('class', 'view-panel--clr');
    element.style.backgroundColor = hex;
    element.dataset.clr = hex;
    element.dataset.ttl = name;
    const meta = {
        name,
        hex,
    }
    return {element,meta}
}

fakeConnection.forEach(i => {
    let el = makeElement(i[0],i[1]).element;
    currentList.appendChild(el);
});

currentList.addEventListener('click',(e) => {
    let clicked;
    if (clicked = e.target.closest('.view-panel--clr')) {
        const title = clicked.dataset.ttl;
        const color = clicked.dataset.clr;
        updateInterface(title,color)
    }
})



function updateInterface(name,hex) {
    console.log(name,hex)
    console.log(rootElement,rootElement.style,rootElement.style.getPropertyValue('--currentColor'));

    rootElement.style.setProperty('--currentColor', `${hex}`);
    rootElement.style.getPropertyValue('--currentColor')
    currentHex.innerText = hex;
    currentName.innerText = name;
}





// SIFTERS
function rgbToHex(r,g,b) {
    const values = [
        b16(r),
        b16(g),
        b16(b),
    ]

    let string = '#' + values
        .map(b16)
        .join('');

    return {
        values,
        string,
    }
}

function hexToRgb(hex) {
    
    let a = hex.replace('#','');
    let b = a.split('');
    let c = b.length;

    return c === 3 ? convertThreeDigitHex(b) :
            c === 6 ? convertSixDigitHex(a) :
            'invalid hex'
}

function b16(base10) {
    if (base10 === 0) {
        return '00'
    }
    if (base10 > 255) {
        return 'TooHigh'
    }
    if (!Number.isInteger(base10)) {
        return 'NeedANumber'
    }
    return base10.toString(16);
}

function b10(base16) {

    if (base16.toString().length == 1) {
        let hex = base16.toString.repeat(2);
        return parseInt(hex,16); 
    }
    if (base16.toString().length > 2) {
        return 'too many digits for css'
    }

    return parseInt(base16,16);
}

function repeatThenConvertBase10(hexNumber) {
    return b10(hexNumber.repeat(2))
}

function create_RGB_String(arrOfThree) {
    return `rgb(${arrOfThree[0]},${arrOfThree[1]},${arrOfThree[2]})`
}

function convertThreeDigitHex(arrOfThree) {
    let rgb = arrOfThree.map(repeatThenConvertBase10);
    return create_RGB_String(rgb);
}

function convertSixDigitHex(sixDigitHex) {
    let rgb = sixDigitHex
        .replace('#','')
            .split(/(..)/g)
                .filter(s => s)
                    .map(b10);
        return create_RGB_String(rgb);
}



// ****************************************************
// IDRK YET
// ****************************************************

// /www.w3.org/TR/css-color-3/
function hslToRgb (hue, sat, light) {
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

// https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion
// https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion/9493060#9493060
// https://en.wikipedia.org/wiki/HSL_and_HSV
function rgbToHsl (...rgb) {

    let [red,green,blue] = [...rgb];
    
    red = red / 255;
    green = green / 255;
    blue = blue / 255;

    let colorMax = Math.max(red,green,blue);
    let colorMin = Math.min(red,green,blue);

    let delta = colorMax - colorMin;
    
    let lightness = getLightness();
    let saturation = getSaturation();
    let hue = getHue();
    // midrange 
     // lightness is the average of the largest and smallest color components
    function getLightness() {
        let l = (colorMax + colorMin) / 2;
        return l * 100;
    }
    // range
    // saturation is simply the chroma scaled to fill
    // the interval [0, 1] for every combination of hue and lightness
    function getSaturation() {
        let s = delta / (1 - Math.abs(2 * (lightness / 100 )- 1));
        return  s * 100;
    }
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

    let values = [hue,saturation,lightness]
        .map(Math.round);

    return [values]
}

function subtractOverDelta(delta) {
    return function(expression1,expression2) {
        return ((expression1 - expression2) / delta);
    }
}

// https://stackoverflow.com/questions/56512436/how-to-sort-colors-of-a-particular-hue
  function HexToHSB(hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
      green = parseInt(hex.substr(2, 2), 16) / 255,
      blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
      cMin = Math.min(red, green, blue),
      delta = cMax - cMin,
      saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case 0:
        return [0, 0, 0];
      case cMin:
        return [0, 0, cMax];
      case red:
        return [60 * (((green - blue) / delta) % 6) || 0, saturation, cMax];
      case green:
        return [60 * (((blue - red) / delta) + 2) || 0, saturation, cMax];
      case blue:
        return [60 * (((red - green) / delta) + 4) || 0, saturation, cMax];
    }
  }



// arr.reduce(function(prev,current) {
//     return expression
// })
// function _reduce(arr) {


// }
// function _reduceObject(obj) {
//     return function(cb) {
//         return Array.prototype.reduce.call(obj,cb)
//     }
// }

function regex_everythingBut(){
    // remove
}

function regex_everythingAfter(){
    // remove
}

function regex_everythingBefore() {
    // remove
}