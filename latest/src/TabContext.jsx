import {createContext,useContext,useState,useEffect} from 'react';
import { store } from './store';

export const TabContext = createContext({});
export const useTabState = () => useContext(TabContext);

export const TabProvider = ({children}) => {
  const [collection,setCollection] = useState(null);
  const [tab,setTab] = useState(null)
  const [collections,setCollections] = useState([]);
  const [menuActive,setMenuActive] = useState(false);

  useEffect(() => {
      const getData = async () => {
        const resy = await store.meta.getData();
        setCollections(resy)
      }
      getData();
    },[])

  useEffect(() => {
    const cid = tab;
    const found = collections.find(c => c.id === cid);
    const getCollection = async (cid) => {
      const collection = await store.collection(cid);
      console.log('got it!',collection)
      setCollection(collection)
    }
    console.log(found,collections,cid)
    if (found){
      getCollection(found.id);
    }
  },[tab])
  return (
    <TabContext.Provider value={
      {
        collection,
        collections,
        tab,
        setTab,
        menuActive,
        setMenuActive
      }
    }>{children}</TabContext.Provider>
  )
}
