const appState = {
    nameChange: undefined,
    color: undefined,
    tabName: '',
    currentTab: '',
    currentClrSet: [],
};

const app = {

    // state: appState,

    color: undefined,

    tab: {
        name:'',
        set: [],
        component: undefined,
    },

    emitter: {},
    
    preview: {},
    
    fsPreview: {},

    search: {},
    menu: {},
    filterMenu: {},

    palettes: {},
    collections: {},
    menus: {},

    components: {
        contextMenu: undefined,
        stackers: {
            dPanel: undefined,
            lPanel: undefined,
        },
    }
}

const api = {

    routes: {
        async add(collectionName,colorName,colorHex){
            const response = await axios.post(`http://localhost:1279/colors/add/${collectionName}`,{ colorName, colorHex })
            return response;
        },

        async create(collectionName,desc){
            const response = await axios.post(`http://localhost:1279/colors/collection/create`,{
                cName:collectionName,
                desc,
            }).catch(function(e){
        
                if (e.response.data.reason) console.warn(e.response.data.reason)
        
                console.dir(e.response)
                alert('something went wrong creating collection');
        
                return false;
            })
            if (responseOk(response)) {
                alert(`created collection ${collectionName}`)
                createCollectionControls.closeContext();
                return response;
            }
            return false;
        },

        async delete(name){
            const response = await axios.delete(`http://localhost:1279/colors/collection`, 
            {
                data: {
                    cName:name
                }
            }).catch(function(e){
        
                if (e.response.data.reason) console.warn(e.response.data.reason)
                
                console.dir(e);
                alert('something went wrong deleting collection');
        
                return false;
            })
        
            if (responseOk(response)) {
                alert(`${name} collection successfully deleted`)
                return response
            } 
              return false 
        }
    },

    async listPalettes() {
        const {data} = await axios.get('http://localhost:1279/colors/meta');
        // ---------- get current list of collections
        return data.userPalettes;
    },

    async listCollections() {
        const {data} = await axios.get('http://localhost:1279/colors/meta');
        // ---------- get current list of collections
        return data.defaultPalettes;
    },
    
    async listCollectionsAndPalettes() {
    
        const {data} = await axios.get('http://localhost:1279/colors/meta');
    
        return { 
            collections: data.defaultPalettes, 
            palettes: data.userPalettes
        }
    
    }

}
const palettes = {};
const collections = {};

const blogTheme = {

    heading: undefined,
    headline: undefined,
    support: undefined,
    body: undefined,
    accent: undefined,
    iconStroke: undefined,
    iconFill: undefined,
}

let nameChange;

let currentPalette = undefined;