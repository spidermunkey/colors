import axios from "axios";

export class Dashboard {

    constructor(endpoint,title,type) {

        this.parent = $('.dashboard__panel');

        this.type = type;
        this.endpoint = endpoint;
        this.title = title;
        this.valueHasChanged = false;
        
        this.filters = {
            hues: [],
            tones: [],
            sortingOrder: 'default',
        }
        
        this.currentColor = {
                currentName: undefined,
                previousNames: undefined,                
                hex: undefined,
                hsl: undefined,
                hsv: undefined,
                tone: undefined,
                color: undefined,

                // linked list?
                previousColor: undefined,
        };

        this.previousColors = [];

    }

    get titleCard() {
        return $('.dashboard__interface .label');
    }

    async getData () {

        const response = await axios.get(this.endpoint);
        if (response.status === 200 || response.statusText === "OK") 
            return response.data

    }

    async getAllColors() {
        
        const colorSet = await this.getData();

        if (colorSet && Array.isArray(colorSet))
            return colorSet.slice()
                    .filter(value => !toneUnknown(value))
                    .filter(value => value.hex && value.name );
    }

    async getFilteredColorset(options) {
        const response = await axios.post(this.endpoint,{options})
        if ((   
            response.status === 200 || 
            response.statusText === "OK"
            )  && Array.isArray(response.data))
            return response.data
                    .slice()
                    .filter(value => !toneUnknown(value))
                    .filter(value => value.hex && value.name );
    }

    sortedByDefault(colors) {
        return colors.sort(byHue).sort(byLightness) 
    }

    sortedByHue(colors) {
        return colors.sort(byHue)
    }

    sortedByLight(colors) {
        return colors.sort(byLightness)
    }

    sortedBySaturation(colors) {
        return colors.sort(bySaturation)
    }

    sortedByTone(colors) {
        return colors.sort(byTone);
    }

    clearDashboard() {
        this.parent.innerHTML = '';
    }

    createDashboard(colors) {

            const frag = document.createDocumentFragment();
            // const dash = $('.dashboard__panel');
            // dash.classList.add('dashboard__panel');
            // frag.append(dash);

            // dash.innerHTML = '';
            colors.forEach(color => frag.appendChild( this.createColor(color) ))

            return frag;
    }

    createPanel(colors) {

        const frag = document.createDocumentFragment();
        const dash = document.createElement('div');
        dash.classList.add('preview__panel');
        frag.append(dash);

        colors.forEach(color => dash.appendChild( this.createColor(color) ))

        return frag;

    }

    setDashboardView = (node) => {
        console.log(appState.color);
        this.clearDashboard();
        this.parent.append(node);
        this.titleCard.textContent != this.title
            ? this.titleCard.textContent = this.title
            : null

        return node;
    }
    
    createColor(props) {

        const { name, hex, isFavorite, _id, primaryTone, hue } = props;

        const element = document.createElement('div');

        isFavorite === true 
            ? element.dataset.isFavorite = 'true'
            : element.dataset.isFavorite = '';

        element.classList.add('view-panel--clr');
        element.style.backgroundColor = hex;
        element.dataset.hex = hex;
        element.dataset.name = name;
        element.dataset.id = _id;
        element.dataset.tone = primaryTone;
        element.dataset.hue = hue;

        return element;

    }

    setLoadingState() {
        this.clearDashboard();
        this.renderSuspense();
    }

    renderSuspense() {
        this.parent.innerHTML = this.suspense();
    }

    renderError() { 
        this.parent.innerHTML = this.error();
    }

    async render(dataset, sortingAlgo = this.sortedByDefault ) {

        this.setLoadingState();

        this.setDashboardView( 
            this.createDashboard(
                sortingAlgo( dataset ? dataset : (await this.getAllColors())) ));

    }

    async renderFilteredState(options = this.filters , sortingAlgo = this.sortedByHue ) {
        this.setLoadingState();

        this.setDashboardView( 
            this.createDashboard(
                sortingAlgo( (await this.getFilteredColorset(options))) ));
    }

    async checkColor(id) {
        
        // console.log(this.title,this.type, id)
        const response = await axios.get(`http://localhost:1279/colors/color/${id}?collection=${this.title}&type=${this.type}`);
        if (response.status === 200 || response.statusText === "OK" && response.data.status && response.data.color._id === id) {
            return response.data.color
        }
        return false;

    }

    async queryColors(data){

        console.log('searching for',data,'in', this.title);
        
        const found = appState.currentClrSet.filter(clr => {
            const name = clr.name;
            const regex = new RegExp(data,'ig');
            if( name.match(regex))
            return clr
        })

        console.log('found', found);
        
        if (found.length >= 0){
            let preview = this.createPanel(found);
            $('.search-results').innerHTML = '';
            $('.search-results').append(preview)
        } else alert('nothing locally')

        // fetch all and sort;
    }

    suspense() {
        return `<div class="loading-container"><span class="loader"></span></div>`;
    }

    error() {
        return `<div>Error Fetching Resources</div>`;
    }
}


function greyscale(lightness,saturation) {

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

function getRange(hue) {
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
       
// -----------------------------
// SORTERS
// ----------------------------------------------

function byHue(a,b) {
    return a.hue - b.hue
}

function byLightness(a,b) {
    return b.lightness - a.lightness
}

function byTone(a,b) { // obj.saturation / obj.lightness

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

function bySaturation(a,b) {
    let x = a.saturation + a.lightness; 
    let y = b.saturation + a.lightness;
    return x - y
}

// -------------------------
// FILTERS
// -----------------------------------------
        
// RED
function isRed(color) {

    let { hue, lightness } = color.hue;

    return (
        ( (hue >= 345 && hue <= 360) || (hue >= 0 && hue <= 15) ) 
        && 
        (lightness >= 10 && hue <= 45)
    )

}

// MOST BROWNS (HANDPICKED RANGES!)
function isBrown(hue,saturation,lightness) {

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
function isLime(hue,saturation,lightness) {
    return (hue >= 69 && hue <= 120 && saturation > 50 && lightness >= 50 && lightness < 70)
}

// GREEN
function isEmerald(hue,lightness) {
    return ((hue > 120 && hue <= 150 && lightness > 25) || (hue > 150 && hue <= 165 && lightness < 25 && lightness > 10))
}

function isAqua(hue,saturation,lightness) {
    return (hue > 150 && hue <= 165 && lightness > 25 && saturation > 30) 
}
// INTERMEDIATE COLOR [GREENISH BLUE]
function isTeal(hue,lightness) {
    if (hue >= 165 && hue <= 180) 
        return (lightness < 40)
    
    return false
}

// BLUE
function isCyan(hue,lightness) {
    if (hue >= 180 && hue <= 195) return (lightness > 40) 
        return false
}
function isSky(hue,saturation,lightness) {
    if (hue >= 195 && hue <= 210)
        return (saturation > 20 && lightness > 20 && lightness < 80)
    
    return false;
}
function isAzure(hue,satuation,lightness) {
    return (hue > 210 && hue < 225)
}

// INTERMEDIATE COLOR [PURPLISH BLUE]
function isIndigo(hue) {
    return (hue >= 140 && hue <= 255)
}
// PURPLE
function isViolet(hue) {
    return (hue > 255 && hue <= 270)
}
// PINK
function isMagenta(hue) {
    return (hue > 300 && hue <= 315)
}

// GREY COLORS
function isGrey() {

}

function toneUnknown(color) {
    let {primaryTone,lightness} = color;
    return (
        primaryTone === 'no dice'
        || lightness === 100
        || lightness === 0
    )
}

