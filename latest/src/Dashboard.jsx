import { store } from './store';
import { useEffect, useState } from 'react';
import { CollectionSummary } from './CollectionSummary';

export const Dashboard = () => {
  const [collections,setCollections] = useState([])
  useEffect(() => {
    const getData = async () => {
      const resy = await store.meta();
      console.log(resy)
      setCollections(resy)
    }
    getData();
  },[])
  return (
    <div className="db_res">
      {collections.map(collection => <CollectionSummary collection={collection}/> )}
    </div>
  )
}
