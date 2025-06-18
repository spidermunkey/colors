async function get(endpoint) {
  const response = await fetch(endpoint);
  const resy = await response.json();
  return resy;
}
export const store = {

  async collection(collectionName){

  },

  async project(projectName){

  },

  async meta(){
    const endpoint = 'api/'
    const data = await get(endpoint);
    return data;
  },
  async collections(){
    const endpoint = 'api/meta/collections'
    const data = await get(endpoint);
    return data;
  },
  async projects(){
    const endpoint = 'api/meta/projects'
    const data = await get(endpoint);
    return data;
  },

}
