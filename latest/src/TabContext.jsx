import {createContext,useContext,useState,useEffect} from 'react';
import { sortByHue, sortByLightness, toneUnknown } from "./utils/color"
import { store } from './store';

function transform(colors = []) { 
  return colors                    
        .slice()
        .filter(value => !toneUnknown(value))
        .filter(value => value.hex && value.name )
        .sort(sortByHue)
        .sort(sortByLightness)
}
export const TabContext = createContext({});
export const useTabState = () => useContext(TabContext);

export const TabProvider = ({children}) => {
  const [collection,setCollection] = useState(null);
  const [tab,setTab] = useState(null)
  const [collections,setCollections] = useState([]);
  const [menuActive,setMenuActive] = useState(false);
  const [previous,setPreviousState] = useState([{tab:'home',color:'null',collection:{name:'home'}}]);
  const [selected,updateSelected] = useState(null)
  useEffect(() => {
      const getData = async () => {
        const resy = await store.meta.getData();
        setCollections(resy)
      }
      getData();
    },[])

   const handleTab = (tab,color) => {
      const cid = tab;
      const found = collections.find(c => c.id === cid);
      const getCollection = async (cid) => {
        const collection = await store.collection(cid);
        collection.colors = transform(collection?.colors || [])
        const color = collection?.color ? collection.color : collection.colors[0];
        setPreviousState(prev => [...prev,{
          tab,
          collection:{ ...collection, color:color},
        }])
        updateSelected(color);
        setCollection(collection);
        setTab(tab);
      }
      if (found){
        getCollection(found.id);
      } else if (tab === 'home') {
        setPreviousState(prev => [...prev,{
          tab,
          collection:{name:'home',color:color},
        }])
        setCollection({name:'home'})
        setTab(tab)
      } else if (tab === 'editor'){
        console.log('pushing color',color)
        setPreviousState(prev => [...prev,{
          tab,
          collection:{ name:'editor', color:color },
        }])
        setCollection({ name:'editor', color:color })
        setTab(tab)
      }
   }
   const toggleBack = () => {
    const history = previous.slice();
    const recentState = history.length > 1 
      ? history.pop()
      : history[history.length - 1]
    const currentState = history[history.length - 1]
    setPreviousState(history)
    const cid = currentState.tab;
    const found = collections.find(c => c.id === cid);
    const getCollection = async (cid) => {
      const collection = await store.collection(cid);
      collection.colors = transform(collection?.colors || [])
      setCollection(collection);
      setTab(cid);
    }
    if (found){
      getCollection(found.id);
    } else if (cid === 'home') {
      setCollection({name:'home'})
      setTab(cid)
    } else if (cid === 'editor'){
      console.log('back here', currentState)
      setCollection({ name:'editor', color:currentState.collection.color })
      setTab(cid)
    }
   }
  return (
    <TabContext.Provider value={
      {
        collection,
        collections,
        tab,
        setTab,
        handleTab,
        menuActive,
        setMenuActive,
        toggleBack,
        history:previous,
        selected,updateSelected,

      }
    }>{children}</TabContext.Provider>
  )
}
