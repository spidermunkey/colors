import { createStore } from "./utils/createStore";
import { get, search, post } from "./utils/api";
export const store = {

  meta: {
    ...createStore('api/')
  },
  async collection(cid){
    return get(`api/collections/${cid}`);
  },

  async project(projectName){

  },

  async collections(){
    return get('api/meta/collections');
  },

  async projects(){
    return get('api/meta/projects');
  },

  async search({query}){
    return search('/api/search',{
      query:query
    })
  },

  async update(cid,color){
    return post(`api/collections/${cid}`,{
      color,
    })
  },

  async searchCollection(cid){

  }

}
