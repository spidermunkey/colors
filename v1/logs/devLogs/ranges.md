function isColor(index) {
    let min = index[0];
    let max = index[1];
    let bucket = index[2];

}

function getRange(hue) {
    if(hue) {

    }
    let bucket;
    let rangeFinder = [
        [0,15,'red'],
        [15,45,'orange'],
        [45,60,'yellow'],
        [60,165,'green'],
        [165,240,'blue'],
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


const ranges = {
    'red': {
        hue: [0,15],
        lightness: [10,45],
        trueHue: 0,
        trueHex: '#c10430',
        naturalHex: '#c50030',
        variants: ['pinkish','vivid','deep','cherry'],
        variantRanges: undefined,
        proHex: undefined,
        
        isDerivative: false,
    }, 
    'orange': {
        hue: [15,45],
        lightness: [30,59],
        trueHue: 39,
        trueHex: '#f68600',

        isDerivative: false,
    },
        'brown' : {
            hue: [34,36],
            lightness: [10,35],
            trueHex: '#964b00',
            trueHue: 30,
            variants: ['beige', 'coffee','sandstone','tan','auburn'],
            descriptors: ['muddy','reddish','tan'],
            variantRanges: undefined,

            isDerivative: true,
        },
    'yellow': {
        naturalHex: '#ffd400',
        hue: [45,60],
        variants: ['greenish','golden','pale','bright','orangish'],

        isDerivative: false
    },
        'olive': {

        },
        'lime': {

        },
    'green': {
        hue:[60,165],
        naturalHex: '#00a568',

        isDerivative: false,
    },
    'blue': {
        hue:[165,240],
        naturalHex: '#0089c0',
        isDerivative: false,
    },
    'purple': {
        hue: [240,300],
        isDerivative: false,
    },

    'rose': {
        hue: [300,360],
    },
    'grey': {
        saturation: [0,5],
        lightness: [15,80],
        trueHue: 45,
        trueHex: '#282724',
    },
    'white': {

    },
}

/*

https://en.wikipedia.org/wiki/Hue

    hue angle 	color code 	color name[citation needed] 	luminance
    0° 	    #FF0000 	red 	30%
    15° 	#FF4000 	vermilion 	45%
    30° 	#FF8000 	orange 	59%
    45° 	#FFBF00 	golden yellow 	74%
    60° 	#FFFF00 	yellow (web color)=lemon yellow 	89%
    75° 	#BFFF00 	yellowish green 	81%
    90° 	#80FF00 	yellowish green, chartreuse 	74%
    105° 	#40FF00 	leaf green 	66%
    120° 	#00FF00 	green 	59%
    135° 	#00FF40 	cobalt green 	62%
    150° 	#00FF80 	emerald green 	64%
    165° 	#00FFBF 	turquoise green, bluish green 	67%
    180° 	#00FFFF 	turquoise blue, cyan (web color) 	70%
    195° 	#00BFFF 	cerulean blue 	55%
    210° 	#0080FF 	azure 	41%
    225° 	#0040FF 	blue, cobalt blue 	26%
    240° 	#0000FF 	blue (web color)=ultramarine 	11%
    255° 	#4000FF 	hyacinth 	19%
    270° 	#8000FF 	violet 	26%
    285° 	#BF00FF 	purple 	34%
    300° 	#FF00FF 	magenta (web color) 	41%
    315° 	#FF00BF 	reddish purple 	38%
    330° 	#FF0080 	ruby red, crimson 	36%
    345° 	#FF0040 	carmine 	33% 

*/
// tone = +- saturation
// shade - lightness
// tint + lightness

// tones
// light -> warm -> dark -> cool

// vibrant -> pale
/*

  pink (Pk)
  red (R)
  orange (O)
  brown (Br)
  yellow (Y)
  olive (Ol)
  yellow green (YG)
  green (G)
  blue (B)
  purple (P)
  white (Wh)
  gray (Gy)
  black (Bk)

Between these lie a further 16 intermediate categories:

  reddish orange (rO)
  orange yellow (OY)
  greenish yellow (gY)
  yellowish green (yG)
  bluish green (bG)
  greenish blue (gB)
  purplish blue (pB)
  violet (V)
  reddish purple (rP)
  purplish red (pR)
  purplish pink (pPk)
  yellowish pink (yPk)
  reddish brown (rBr)
  yellowish brown (yBr)
  olive brown (OlBr)
  olive green (OlGr)

These categories can be further subdivided into 267 named categories by combining a hue name with modifiers (the example centroids shown here are for the hue name "purple"):

  vivid (v.)
  brilliant (brill.)
  strong (s.)
  deep (deep)
  very deep (v. deep)
  very light (v.l.)
  light (l.)
  moderate (m.)
  dark (d.)
  very dark (v.d.)
  very pale (v.p.)
  pale or light grayish (p., l. gy.)
  grayish (gy.)
  dark grayish (d. gy.)
  blackish (bk.)
  -ish white (-ish Wh)
  light -ish gray (l. -ish Gy)
  -ish gray (-ish Gy)
  dark -ish gray (d. -ish Gy)
  -ish black (-ish Bk)

*/