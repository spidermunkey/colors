Array.prototype.toHslString = function() {
    if (!this.every(index => {!isNaN(index) && Number(index)}))
    return `hsl(${this[0]}deg,${this[1]}%,${this[2]}%)`
}

Array.prototype.toHslaString = function(alpha) {
    if (!isNaN(this[3]) && Number(this[3]))
        alpha = this[3]
    if (alpha > 1)
        alpha = 1
    if (alpha < 0)
        alpha = 0;
    if (isNaN(alpha))
        return NaN;

    return `hsla(${this[0]}deg,${this[1]}%,${this[2]}%,${alpha})`
}

export class Color {
    constructor(props = {}) {    
        this.name = props.name || '';
        this.hex = props.hex || '';
        if (!this.hex)
            throw new Error('new colors require a hex value to be instatiated... contructor({hex:value})');
        
        this.uid = props.id || props._id || null;
        
        this.rgb = props.rgb?.slice() || hexToRgb(this.hex);
        this.hsl = props.hsl?.slice() || rgbToHsl(...this.rgb);
        this.hsv = props.hsv?.slice() || hslToHsv(...this.hsl);
        this.tone = props.tone || getTone( this.hsl[2] , this.hsl[1] )[0];
        this.alpha = null;
        this.primaryColor = props.primaryColor || '';
        console.log(this)
    }

    get red() {
        // this.rgb = hslToRgb(...this.selected.hsl);

        return this.rgb[0];
    }

    set red(num) {
        this.rgb[0] = num;
        this.hex = rgbToHex(...this.rgb);
        this.hsl = rgbToHsl(...this.rgb);
        this.hsv = hslToHsv(...this.hsv);
        this.tone = getTone(this.hsl[2],this.hsl[1])[0];
    }

    get green() {
        return this.rgb[2];
    }

    set green(num) {
        this.rgb[2] = num
        this.hex = rgbToHex(...this.rgb);
        this.hsl = rgbToHsl(...this.rgb);
        this.hsv = hslToHsv(...this.hsv);
        this.tone = getTone(this.hsl[2],this.hsl[1])[0];
    }

    get blue() {
        return this.rgb[3];
        
    }

    set blue(num) {
        this.rgb[3] = num;
        this.hex = rgbToHex(...this.rgb);
        this.hsl = rgbToHsl(...this.rgb);
        this.hsv = hslToHsv(...this.hsv);
        this.tone = getTone(this.hsl[2],this.hsl[1])[0];
    }

    get hue() {
        return this.hsl[0];
    }

    set hue(num) {
        console.log('setting hue',this.hsv,this.hsl,this.rgb)
        this.hsl[0] = num;
        this.hsv = hslToHsv(...this.hsl);
        this.rgb = hslToRgb(...this.hsl);
        this.hex = rgbToHex(...this.rgb);

        console.log('set hue',this.hsv,this.hsl,this.rgb)
        
    }


    get saturation() {
        return this.hsl[1];
    }

    set saturation(num) {
        this.hsl[1] = num;
        this.hsv = hslToHsv(...this.hsv);
        this.rgb = hslToRgb(...this.hsl);
        this.hex = rgbToHex(...this.rgb);
    }

    get lightness() {
        return this.hsl[2];
    }

    set lightness(num) {
        this.hsl[2] = num;
        this.hsv = hslToHsv(...this.hsv);
        this.rgb = hslToRgb(...this.hsl);
        this.hex = rgbToHex(...this.rgb);
        this.tone = getTone(this.hsl[2],this.hsl[1])[0];

    }

    get hsvSaturation() {
        return this.hsv[1];
    }

    set hsvSaturation(num) {
        this.hsv[1] = num;
        this.hsl = hsvToHsl(...this.hsv);
        this.rgb = hslToRgb(...this.hsl);
        this.hex = rgbToHex(...this.rgb);
        this.tone = getTone(this.hsl[2],this.hsl[1])[0];

    }

    get hsvValue() {
        return this.hsv[2]
    }

    set hsvValue(num) {
        this.hsv[2] = num;
        this.hsl = hsvToHsl(...this.hsv);
        this.rgb = hslToRgb(...this.hsl);
        this.hex = rgbToHex(...this.rgb);
        this.tone = getTone(this.hsl[2],this.hsl[1])[0];
    }

    get tints() {
        return getTints(this.hex);
    }

    get shades() {
        return getShades(this.hex);
    }

    get lights() {
        return getLights(this.hex);
    }

    get darks() {
        return getDarks(this.hex);
    }

    get monochrome() {
        return {
            shades: this.shades,
            tints: this.tints,
            darks: this.darks,
            lights: this.lights,
        }
    }

    get analogous() {
            // const anologies15 = 
            const toHex = (hsl) => rgbToHex(...hslToRgb(...hsl));
            const a15 = [];
            const a30 = [];
    
            for(let i = 15; i <= 90; i += 15) {
    
                let newArr = this.hsl.slice();
                newArr[0] += i;
    
                a15.push(toHex(newArr));
            }

            return  a15
    }

    get complimentary() {
        const toHex = (hsl) => rgbToHex(...hslToRgb(...hsl));
        const c15 = [];
        const hsl = this.hsl.slice();
            hsl[0] = Math.abs((hsl[0] + 180) - 360);

        // for(let i = 15; i <= 45; i += 15){
        //     let newArr = hsl.slice();
        //     newArr[0] -= i;
        //     c15.push(toHex(newArr));
        // }
        // for(let i = 15; i <= 45; i += 15){
        //     let newArr = hsl.slice();
        //     newArr[0] += i;
        //     c15.push(toHex(newArr));
        // }
        for(let i = hsl[0] - 45; i < hsl[0] + 45; i += 15){
            let newArr = hsl.slice();
            newArr[0] = i;
            c15.push(toHex(newArr));
        }

        return c15;
    }

    get squared() {
        const toHex = (hsl) => rgbToHex(...hslToRgb(...hsl));
        const s15 = [];

        for (let i = 90; i <= 360; i += 90) {
            const hsl = this.hsl.slice();
            hsl[0] += i;
            s15.push(toHex(hsl))
        }

        return s15;
        
    }

    get compound() {
        const toHex = (hsl) => rgbToHex(...hslToRgb(...hsl));
        // const hsl = this.hsl.slice();
        // hsl[0] = Math.abs((hsl[0] + 300) - 360);
        const cp15 = [];
        
        const cp1 = this.hsl.slice();
        cp1[0] =+ 90;
        cp15.push(toHex(cp1))
        
        const cp2 = this.hsl.slice();
        cp2[0] += 210;
        cp15.push(toHex(cp2))

        const cp3 = this.hsl.slice();
        cp3[0] += 300;
        cp15.push(toHex(cp3))

        console.log(cp15)
        // cp15.push(toHex(hsl))

        return cp15;

    }

    // get triadic() {
    //     const toHex = (hsl) => rgbToHex(...hslToRgb(...hsl));
    //     const t15 = [];
    //     const hsl = this.hsl.slice();
    //     const hsl1 = this.hsl.slice();
    //     const hsl2 = this.hsl.slice();

    //     hsl[0]

    //     for (let i = hsl[0]; i < hsl[0] + 240)

    //     hsl1[0] += 120;

    //     const t1 = hsl1.slice();
    //     t15.push(toHex(t1));

    //     const t2 = hsl1.slice();
    //     t2[0] += 15;
    //     t15.push(toHex(t2));

    //     const t3 = hsl1.slice();
    //     t3[0] -= 15;
    //     t15.push(toHex(t3));
    //     hsl2[0] += 240;

    //     const d1 = hsl2.slice();
    //     t15.push(toHex(d1));
        
    //     const d2 = hsl2.slice();
    //     d2[0] += 15;
    //     t15.push(toHex(d2));
        
    //     const d3 = hsl2.slice();
    //     d3[0] -= 15;
    //     t15.push(toHex(d3))

    //     return t15;


    // }

    get compliments() {
        return {
            monochrome: this.monochrome,
            analogous: this.analogous,
            complimentary: this.complimentary,
            // triadic: this.triadic,
            squared: this.squared,
            compound: this.compound,
        }
    }

    get gradients() {
        return {
            'analogous': this.analogousGradient(),
            'mono': this.monoGradient(),
            'monolight': this.lightGradient(),
            'tinted': this.tintedGradient(),
            'shaded': this.shadedGradient(),
            'complimentary': this.complimentaryGradient(),
            // 'triadic': this.triadicGradient(),
        }
    }

    createGradient( angle = 180 , clrSet , n = clrSet.length - 1 ){
        return `linear-gradient(${angle}deg, ${clrSet.length >= 2 ? clrSet.slice(0,n <= clrSet.length -1 ? n : clrSet.length - 1) : ['#fff','#fff'].join(',')})`;
    }

    monoGradient(deg = 180, type = 'darks', n = 8) {
        console.log(type)
        if (type !== 'lights' && type !== 'darks')
            return console.warn('monogradient functions needs type of lights or darks', type);
        if (type == 'darks')
            deg = 0;
        return this.createGradient(deg,this[type],n)
    }

    lightGradient(deg) {
        return this.monoGradient(deg = 180,type='lights')
    }

    tintedGradient(deg = 0) {
        return this.createGradient(deg,this.tints.slice(4,10));
    }

    shadedGradient(deg = 180) {
        return this.createGradient(deg,this.shades.slice(4,10))
    }

    analogousGradient(deg = 180) {
        return this.createGradient(deg,this.analogous);
    }

    complimentaryGradient(deg = 180) {
        return this.createGradient(deg,this.complimentary);
    }

    // triadicGradient(deg = 180) {
    //     return this.createGradient(deg,this.triadic)
    // }

    squaredGradient(deg = 180) {
        return this.createGradient(deg,this.squared)
    }

    compoundGradient(deg = 180) {
        return this.createGradient(deg,this.compound)
    }

    deconstruct_HSL_String(strVal) {
        return strVal
              .replace('hsla','')
              .replace('(','')
              .replace(')','')
              .replace('deg', '')
              .replaceAll('%','')
              .split(',')
              .map(Number)
    }
}

// [black, white, grey, earth, pastel, washed, muted, clean, pastel, neon, luminous, vivid]
export function getTone(lightness,saturation) {
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

export function getTextContrast(RGB) {
        // https://stackoverflow.com/questions/1855884/determine-font-color-based-on-background-color
        let d = 0;
        let [r,g,b] = RGB;
        // let [h,s,l] = color.hsl;
        // Counting the perceptive lightness - human eye favors green color...      
        let lightness = (0.299 * r + 0.587 * g + 0.114 * b)/255;
        if (lightness > 0.5)
            d = 0; // bright colors - black font
        else
            d = 255; // dark colors - white font
        return rgbToHex(d, d, d);
}

export function getHue(hue){
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

export function blend(color1, color2, ratio) {
    return color1 + ratio * (color2 - color1);
}

export function getDarks(hex){
        const darks = [];
        const inc = 5;
        let count = 0;
        for (let i = 0; i < 20; i++) {
            count += inc;
            let hexi = darkenColor(hex,count);
            if (validHex(hexi))
                darks.push(hexi)
        }
        
        return darks
}

export function getLights(hex) {

  const validHex = hex => hex.length === 7 && hex !== '#ffffff'
  const lights = [];
  const inc = 5;
  let count = 0;

  for (let i = 0; i < 20; i++) {
      count += inc;
      let hexi = lightenColor(hex,count);
      if (validHex(hexi))
          lights.push(hexi)
      console.log(count)
  }
  return lights
}


export function adjustColor(col = '#000000', pct) {

        var usePound = false;
          
        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }
     
        var num = parseInt(col,16);
     
        var r = ((num >> 16) & 0xFF) + pct;
        var g = ((num >> 8) & 0xFF) + pct;
        var b = (num & 0xFF) + pct;

        r = r > 255 ? 255 : r < 0 ? 0 : r;
        g = g > 255 ? 255 : g < 0 ? 0 : g;
        b = b > 255 ? 255 : b < 0 ? 0 : b;

        r = ("0" + r.toString(16)).slice(-2);
        g = ("0" + g.toString(16)).slice(-2);
        b = ("0" + b.toString(16)).slice(-2);

        return (usePound ? "#" : "") + r + g + b;
}

export function lightenColor(hex,pct) {
    return adjustColor(hex, pct);
}

export function darkenColor(hex,pct) {
    return adjustColor(hex, -pct)
}

export function getTints(hex){
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

    const tints = [];
    const baseColor = hexToRgb(hex);
    const {r,g,b} = baseColor
    // Generate 20 tints
    for (let i = 0; i < 20; i++) {
        const ratio = i / 20; // Varying from 0 to 1
        const tint = {
            r: blend(r, 255, ratio),
            g: blend(g, 255, ratio),
            b: blend(b, 255, ratio),
        };
        tints.push(rgbToHex(tint));
    }

    return tints;
}

export function getShades(hex) {
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

    const shades = [];
    const baseColor = hexToRgb(hex);
    const {r,g,b} = baseColor
    // Generate 20 shades
    for (let i = 0; i < 20; i++) {
        const ratio = i / 20; // Varying from 0 to 1
        const shade = {
            r: blend(r, 0, ratio),
            g: blend(g, 0, ratio),
            b: blend(b, 0, ratio),
        };
        shades.push(rgbToHex(shade));
    }

    return shades;
}

export function validHex(hex) {
  return hex.length === 7 && hex !== '#ffffff'
}


export function rgbToHsl (r,g,b) 
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

export function rgbToHex(r,g,b) {
    function create_HEX_String(values) 
    {
        let string = '#' + values.join('');
        return string;
    }

    function toBase16(base10) {
        if (base10 === 0) {
            return '00';
        }
        if (base10 > 255) {
            return 'TooHigh';
        }
        if (!Number.isInteger(base10)) {
            console.log(base10)
            console.log('NAN!');
            return parseInt(base10).toString(16)
        }
        if (base10 < 16) {
            const num = base10.toString(16);
            return '0' + num
        }
        return base10.toString(16);
    }

    return create_HEX_String([
        toBase16(r),
        toBase16(g),
        toBase16(b),
    ]);
}

export function hslToRgb (hue, sat, light) {
    //https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB
    hue = hue % 360;

    if (hue < 0) 
        hue += 360;

    sat /= 100;
    light /= 100;

    console.log(hue,sat,light)
    function f(n) {
        let k = (n + hue/30) % 12;
        let a = sat * Math.min(light, 1 - light);
        return Math.round(255 * (light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
    }

    return [f(0), f(8), f(4)];
}

export function hslToHsv(h,sat,lightness) {
    let s = sat / 100;
    let l = lightness/100;
    let v = l + (s * (Math.min(l, 1 - l)));

    if (v === 0) s = 0
    else s = 2 * (1 - l/v);
    
    s = Math.round(s * 100);
    v = Math.round(v * 100);
    
    return [h,s,v]
}

export function hslToHex(hsl) {
  return rgbToHex(...hslToRgb(...hsl));
}

export function hexToRgb(hex) 
{
    let a = hex.replace('#','');
    let b = a.split('');
    let c = b.length;

    return c === 3 ? convertThreeDigitHex(b) :
            c === 6 ? convertSixDigitHex(a) :
            'invalid hex';
            // console.log(new Error(`${hex} is not a valid hex`));
}

export function hexToHsv(hex){
    return hslToHsv(...hexToHsl(hex))
}

export function hexToHsl(hex){
    return rgbToHsl(...hexToRgb(hex))
}

export function hsvToHsl(hue,sat,value) {
    let h = hue
    let s = sat/100
    let v = value/100;

    let l = v * (1 - s/2)
    if (l === 0 || l === 1) s = 0
    else s = Math.round(((v - l) /Math.min(l, 1-l)) * 100)
    l = Math.round(l * 100);
    return [h, s, l]
}

export function toBase16(base10) {

    if (base10 === 0) {
        return '00';
    }
    if (base10 > 255) {
        return 'TooHigh';
    }
    if (!Number.isInteger(base10)) {
        console.warn('toBase16: [ ', base10,' ] isNAN!');
        return parseInt(base10).toString(16)
    }
    let num = base10.toString(16)
    if (num < 10)
        return '0' + num;
    return base10.toString(16);
}

export function toBase10(base16) {
    if (base16.toString().length > 2) 
        return 'too many digits for css'

    return parseInt(base16,16);
}

export function repeatThenConvertBase10(base16) {
    return toBase10(base16.repeat(2))
}

export function convertThreeDigitHex(arrOfThree) { // [f,f,f] => [ff,ff,ff]
    let values = arrOfThree.map(repeatThenConvertBase10);
    return values;
}

export function convertSixDigitHex(sixDigitHex) { // #ffffff => [ff,ff,ff]
    let values = sixDigitHex
            .split(/(..)/g)
                .filter(s => s)
                    .map(toBase10);
    return values
}


export function toHex(n) {
  n = parseInt(n,10);
  if (isNaN(n)) return "00";
  n = Math.max(0,Math.min(n,255));
  return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}

export function greyscale(lightness,saturation) {

    let deviation = lightness - saturation;
    let result = ['unknown', false];
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


export function sortByHue(a,b) {
    return a.hue - b.hue
}

export function sortByLightness(a,b) {
    return b.lightness - a.lightness
}

export function sortByTone(a,b) { // obj.saturation / obj.lightness

    let order = {
        'pastel': 1,
        'washed': 2,
        'muted': 3,
        'clean': 4,
        'earth': 5,
        'jewel': 6,
        'vivid': 7,
        'luminous': 8,
        'neon': 9,
        'unknown': 10,
        'no dice': 11,
    }

    if (order[a.primaryTone] > order[b.primaryTone]) return 1
    return -1;
}

export function sortBySaturation(a,b) {
    let x = a.saturation + a.lightness; 
    let y = b.saturation + a.lightness;
    return x - y
}
        
export function getRange(hue) {
    let bucket;

    let ranges = [
        [0,15,'red'],
        [15,45,'orange'],
        [45,60,'yellow'],
        [60,180,'green'],
        [180,240,'blue'],
        [240,300,'purple'],
        [300,360,'rose'],
    ]

    for (let i = 0; i < ranges.length; i++) {
        if (hue >= ranges[i][0] && hue <= ranges[i][1]) {
            bucket = ranges[i][2];
            break
        }
    }

    return bucket;
}

// RED
export function isRed(hue,lightness) {
    return (
        ( (hue >= 345 && hue <= 360) || (hue >= 0 && hue <= 15) ) 
        && 
        (lightness >= 10 && hue <= 45)
    )

}

// MOST BROWNS (HANDPICKED RANGES!)
export function isBrown(hue,saturation,lightness) {
    if (hue <= 5 && lightness <= 7 || lightness < 10 || lightness >= 80) return false
    return (
        ( hue <= 5 && saturation >= 20 && saturation <= 40 && lightness <= 15 )
         || ( hue <= 15 && saturation >= 20 && saturation <= 30 && lightness <= 15 )
         || ( hue >= 5 && hue < 10 && saturation >= 20 && saturation < 50 && lightness < 30 && lightness > 7 )
         || ( hue >= 20 && hue < 25 && saturation > 20 && saturation < 30 && lightness < 60 && lightness > 10 )
         || ( hue >= 25 && hue < 30 && saturation > 17 && saturation < 50 && lightness < 70 && lightness > 10 )
         || ( hue >= 30 && hue < 32 && saturation > 20 && saturation < 50 && lightness <= 60 && lightness > 10 )
         || ( hue >= 32 && hue < 35 && saturation > 20 && saturation < 50 && lightness <= 70 && lightness > 10 )
         || ( hue >= 30 && hue < 35 && saturation > 50 && lightness >= 10 && lightness <= 20 )
         || ( hue >= 35 && hue < 45 && saturation < 50 && lightness < 25 )
         || ( hue >= 35 && hue < 45 && saturation > 50 && lightness < 20 )
        
        )
}

// INTERMEDIATE [YELLOWISH, GREEN]
export function isLime(hue,saturation,lightness) {
    return (hue >= 69 && hue <= 120 && saturation > 50 && lightness >= 50 && lightness < 70)
}

// GREEN
export function isEmerald(hue,lightness) {
    return ((hue > 120 && hue <= 150 && lightness > 25) || (hue > 150 && hue <= 165 && lightness < 25 && lightness > 10))
}

export function isAqua(hue,saturation,lightness) {
    return (hue > 150 && hue <= 165 && lightness > 25 && saturation > 30) 
}
// INTERMEDIATE COLOR [GREENISH BLUE]
export function isTeal(hue,lightness) {
    if (hue >= 165 && hue <= 180) 
        return (lightness < 40)
    
    return false
}

// BLUE
export function isCyan(hue,lightness) {
    if (hue >= 180 && hue <= 195) return (lightness > 40) 
        return false
}

export function isSky(hue,saturation,lightness) {
    if (hue >= 195 && hue <= 210)
        return (saturation > 20 && lightness > 20 && lightness < 80)
    
    return false;
}

export function isAzure(hue,satuation,lightness) {
    return (hue > 210 && hue < 225)
}

// INTERMEDIATE COLOR [PURPLISH BLUE]
export function isIndigo(hue) {
    return (hue >= 140 && hue <= 255)
}
// PURPLE
export function isViolet(hue) {
    return (hue > 255 && hue <= 270)
}
// PINK
export function isMagenta(hue) {
    return (hue > 300 && hue <= 315)
}

export function toneUnknown(color) {
    let {primaryTone,lightness} = color;
    return (
        primaryTone === 'no dice'
        || lightness === 100
        || lightness === 0
    )
}


// chat gpt version
// export function hexToRgb(hex) {
//     const bigint = parseInt(hex.slice(1), 16);
//     const r = (bigint >> 16) & 255;
//     const g = (bigint >> 8) & 255;
//     const b = bigint & 255;
//     return { r, g, b };
// };

// export function rgbToHex(R,G,B) {
//   return toHex(R)+toHex(G)+toHex(B)
// }
