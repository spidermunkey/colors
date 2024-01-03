export function Store() {
    
    this.currentHex = undefined;
    this.currentTitle = undefined;
    this.currentColor = undefined;
    this.currentPalette = undefined;
    this.currentTab = undefined;

    this.getCollectionNames = async () => await axios.get('http://localhost:1279/colors/meta');
    this.getCategoryData = async name => await axios.get(`http://localhost:1279/colors/${name}`);


    this.getPaletteData = function(name) {

    }

    this.throttle = function() {

    }
}