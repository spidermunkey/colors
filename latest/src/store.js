import { createStore } from "./utils/createStore";
import { get, search, post } from "./utils/api";
export const store = {

  meta: {
    ...createStore('/colors/meta')
  },
  async collection(cid){
    return get(`/colors/collections/${cid}`);
  },

  async project(projectName){

  },

  async collections(){
    return get('/colors/meta/collections');
  },

  async projects(){
    return get('/colors/meta/projects');
  },

  async search({query}){
    return search('//colors/search',{
      query:query
    })
  },

  async update(cid,color){
    return post(`/colors/collections/${cid}`,{
      color,
    })
  },

  async searchCollection(cid){

  }

}
