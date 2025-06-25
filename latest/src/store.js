import { createStore } from "./utils/createStore";

async function get(endpoint) {
  const response = await fetch(endpoint);
  const resy = await response.json();
  return resy;
}
export const store = {

  meta: {
    ...createStore('api/')
  },
  async collection(cid){
    const endpoint = `api/collections/${cid}`;
    const data = await get(endpoint);
    return data;
  },

  async project(projectName){

  },

  // async meta(){
  //   const endpoint = 'api/'
  //   const data = await get(endpoint);
  //   return data;
  // },

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
