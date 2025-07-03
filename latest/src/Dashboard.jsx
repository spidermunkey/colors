import { useEffect } from 'react';
import { Collection } from './Collection';
import { Home } from './Home';
import { Search } from './Search';
import { useTabState } from './TabContext';
import { useSearch } from './useSearch';
import { Editor } from './Editor';
export const Dashboard = () => {
  const { collections, collection, tab, handleTab } = useTabState();
  const { query, result, active, setActive } = useSearch();
  const navigate = ({target}) => {
    const tab = target.closest('.panel-name');
    if (tab) {
      const cid = tab.getAttribute('cid');
      if (cid) {
        handleTab(cid)
      }
    }
  }
  const render = () => {
    if (active) {
      return <Search active={active} setActive={setActive} query={query} result={result}/>
    } else if (tab === 'home'){
      return <Home collections={collections}/>
    } else if (tab === 'editor'){
      return <Editor/>
    } else if (collection) {
      return <Collection collection={collection}/>
    } else {
      return <Home collections={collections}/>
    }
  }
  return (
    <div className="db_res" onClick={navigate}>
      { render() }
    </div>
  )
}
