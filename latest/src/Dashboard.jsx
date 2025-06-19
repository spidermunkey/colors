import { useEffect } from 'react';
import { CollectionSummary } from './CollectionSummary';
import { Collection } from './Collection';
import { useTabState } from './TabContext'
export const Dashboard = () => {
  const { collections, collection, setTab } = useTabState();
  useEffect(() => {
    console.log('rendering',collection)
  },[collection])
  return (
    <div className="db_res" onClick={(e) => {
      const {target} = e;
      const tab = target.closest('.panel-name');
      if (tab) {
        const cid = tab.getAttribute('cid');
        if (cid) {
          setTab(cid)
          console.log('tabbed',cid)
        }
      }
    }}>
      { collection == null 
        ? collections.map((collection,index) => <CollectionSummary collection={collection} key={index} />)
        : <Collection collection={collection}/>
      }
    </div>
  )
}
