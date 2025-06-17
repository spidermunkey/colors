function addToCollection_ROUTE(collectionName) {
    return async function(name,hex) {
        const response = await axios.post(`http://localhost:1279/colors/add/${collectionName}`,{ name, hex })
        return response;
    }
}

async function createCollection_ROUTE({name,desc}) {

    const response = await axios.post(`http://localhost:1279/colors/collection/create`,{
        cName:name,
        desc,
    }).catch(function(e){

        if (e.response.data.reason) console.warn(e.response.data.reason)

        console.dir(e.response)
        alert('something went wrong creating collection');

        return false;
    })
    if (responseOk(response)) {
        alert(`created collection ${name}`)
        createCollectionControls.closeContext();
        return response;
    }
    return false;

}

async function deleteCollection_ROUTE(name) {

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