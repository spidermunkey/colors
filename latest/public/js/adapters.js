function getRange(hue) {
    let color = undefined;
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
            color = rangeFinder[i][2];
            break
        }
    }
    return color;

}

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

    let lightness = getLightness() || 0;
    let saturation = getSaturation() || 0;
    let hue = getHue() || 0;

    return [hue,saturation,lightness];
}

function rgbToHex(r,g,b) 
{
    return create_HEX_String([
        toBase16(r),
        toBase16(g),
        toBase16(b),
    ]);
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
        console.log(base10);
        console.log('NAN!');
        return parseInt(base10).toString(16);
    }

    let num = base10.toString(16)

    if (base10 < 16) 
        return '0' + num;

    return num
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

function toDecimal(num) {
    return num / 100;
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
    //https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
    hue = hue % 360;

    if (hue < 0) {
        hue += 360;
    }

    sat /= 100;
    light /= 100;

    function f(n) {
        let k = (n + hue/30) % 12;
        let a = sat * Math.min(light, 1 - light);
        return Math.round(255 * (light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
    }

    return [f(0), f(8), f(4)];
}

function hslToHsv(h,sat,lightness) {
    // console.dir([h,sat,lightness])
    let s = sat / 100;
    // console.log(s)
    let l = lightness/100;
    let v = l + (s * (Math.min(l, 1 - l)));
    // console.log(h,s,v,l)
    if (v === 0) s = 0
    else s = 2 * (1 - l/v);
    s = Math.round(s * 100);
    v = Math.round(v * 100);
    // console.log(h,s,v)
    return [h,s,v]
}

function hsvToHsl(hue,sat,value) {
    let h = hue
    let s = sat/100
    let v = value/100;

    let l = v * (1 - s/2)
    if (l === 0 || l === 1) s = 0
    else s = Math.round(((v - l) /Math.min(l, 1-l)) * 100)
    l = Math.round(l * 100);
    return [h, s, l]
}

function HSLToRGB(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
};

function create_HSL_String(values) 
{   
    return `hsl(${values[0]},${values[1]}%,${values[2]}%)`
}

function deconstruct_HSL_String(strVal) {
    return color
                .replace('hsla','')
                .replace('(','')
                .replace(')','')
                .replace('deg', '')
                .replaceAll('%','')
                .split(',')
                .map(Number)
}

// function getTone(color) {
//     let { saturation, lightness } = color

//     const test = greyscale(lightness,saturation)
//     color['tone'] = test[0];

//     if (test[1] === true) {
//         return false;
//     }

//     color['tone'] = test[0];
//     return true;
// }

function getContrast(color) {

    // https://stackoverflow.com/questions/1855884/determine-font-color-based-on-background-color
    let d = 0;
    let [r,g,b] = color.rgb;
    // let [h,s,l] = color.hsl;

    // Counting the perceptive lightness - human eye favors green color...      
    let lightness = (0.299 * r + 0.587 * g + 0.114 * b)/255;
    
    if (lightness > 0.5)
        d = 0; // bright colors - black font
    else
        d = 255; // dark colors - white font
                
    return  rgbToHex(d, d, d);
}



const rotateHue = rotation => ({hue, ...rest}) => {
    const modulo = (x, n) => (x % n + n) % n;
    const newHue = modulo(hue + rotation, 360);
  return { ...rest, hue: newHue };
  }

const rotate30 = rotateHue(30);
const getComplementary = rotateHue(180);
const getTriadic = color => {
    const first = rotateHue(120);
    const second = rotateHue(-120);
        return [first(color), second(color)];
}

const saturate = x => ({saturation, ...rest}) => ({
    ...rest,
    saturation: Math.min(1, saturation + x),
});

const desaturate = x => ({saturation, ...rest}) => ({
    ...rest,
    saturation: Math.max(0, saturation - x),
});

const lighten = x => ({lightness, ...rest}) => ({
    ...rest,
    lightness: Math.min(1, lightness + x)
});

const darken = x => ({lightness, ...rest}) => ({
    ...rest,
    lightness: Math.max(0, lightness - x)
});

function LightenDarkenColor(col, amt) {
//    https://css-tricks.com/snippets/javascript/lighten-darken-color/
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

function getTone(lightness,saturation) {
    /*  README
        SD[#] 'STANDARD DEVIATION' A RANGE CATCHING ANY COLORS THERIN
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

    if (lightness <= 5 && saturation <= 50){
        return result = ['black', false]
    }
    if (lightness > 4 && lightness < 9 && saturation < 20)
        return result = ['black', false]

    if (lightness > 4 && lightness <= 9 && saturation >= 20)
        result = ['earth', false]

    if (lightness === 100)
        return result = ['white',false]
    if (lightness < 5)
        return result = ['black', false]
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


// function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}

// function toHex(n) {
//     // http://www.javascripter.net/faq/rgbtohex.htm
//  n = parseInt(n,10);
//  if (isNaN(n)) return "00";
//  n = Math.max(0,Math.min(n,255));
//  return "0123456789ABCDEF".charAt((n-n%16)/16)
//       + "0123456789ABCDEF".charAt(n%16);

//       /*
// Notes: The script parses the input R, G, B values as integers using 
// the standard function parseInt(string,10); 
// the second, optional argument 10 specifies 
// that the value must be parsed as a decimal number. 
// (If we omit the 10, the script would still work, 
//     except for some input values starting with 0, e.g. 009 or 011,
//      where it might incorrectly assume octal input.) 
//      We use the standard functions Math.min and Math.max to 
//      make sure that the input values are within the range from 0 to 255. 
//      The interested reader might notice that a nicer way to convert n to 
//      a hexadecimal string is to use n.toString(16); 
//      however, the above code was written back in the ancient era when 
//      JavaScript 1.0 was still around,
//      and the construct n.toString(16) won't work in JavaScript 1.0! 
//       */
//     }

