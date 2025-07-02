import { useEffect } from 'react';
import { Collection } from './Collection';
import { Home } from './Home';
import { Search } from './Search';
import { useTabState } from './TabContext';
import { useSearch } from './useSearch';
export const Dashboard = () => {
  const { collections, collection, tab, setTab } = useTabState();
  const { query, result, active, setActive } = useSearch();
  const navigate = ({target}) => {
    const tab = target.closest('.panel-name');
    if (tab) {
      const cid = tab.getAttribute('cid');
      if (cid) {
        setTab(cid)
      }
    }
  }
  const render = () => {
    if (active) {
      return <Search active={active} setActive={setActive} query={query} result={result}/>
    } else if (tab === 'home'){
      return <Home collections={collections}/>
    } else if (tab === 'editor'){
      return <div className="editor"></div>
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
