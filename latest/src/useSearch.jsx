import { useCallback, useRef, useState, createContext, useContext } from "react"
import { store } from "./store";
import { useDebouncer } from './utils/useDebouncer';

export const SearchContext = createContext(null);

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({children}) => {

  const [ query, setQuery ] = useState('');
  const [ result, setResult ] = useState([]);
  const [ active, setActive ] = useState(false);

  const inputRef = useRef(null);

  const handleSearch = useCallback(async ({target}) => {
    const currentValue = target?.value || '';
    setQuery(currentValue);
    setActive(true);
    if (currentValue === '') {
      setActive(false);
      return
    }
    const response = await store.search({query: currentValue})
    const { searchQuery , data } = response;
    const queryIsCurrent = currentValue === searchQuery || searchQuery === inputRef.current.value;
    console.log(data)
    if (queryIsCurrent) // if not expecting more recent results
        setResult(data)
  },[])
  const handleInput = useDebouncer(handleSearch)
  return (
    <SearchContext.Provider value = {{
      query,
      setQuery,
      result,
      inputRef,
      setResult,
      handleInput,
      onfocus,
      active,
      setActive
    }}>
      {children}
    </SearchContext.Provider>
  )
}
