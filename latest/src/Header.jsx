import { useTabState } from './TabContext'
import { useSearch } from './useSearch';
import { useCallback, useEffect, useRef } from "react"

function useDebouncer(invoke, delay = 1400) {
  let timeoutID = useRef(null);
  return useCallback((...args) => {
    clearTimeout(timeoutID.current);
    timeoutID.current = setTimeout(() => invoke(...args),delay)
  },[invoke,delay])
}

export const ColorPalette = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" pid="m91curqy-00204TOJLCNR" height="20" width="20"><path d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 0 1-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 0 1 2.82 0l2.83 2.83a2 2 0 0 1 0 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#5b5b5bad" pid="m91curqy-00SP8QKIQ1DF"></path></svg>) 
export const DashboardHeader = () => {
    
    const { collection, menuActive, setMenuActive, handleTab } = useTabState();
    const { inputRef,active, query, handleInput, setActive } = useSearch();
    return ( 
    <div className="dashboard-header">
      <div className="navigation-header">
        <div className="info-bar">
            <div className="current-tab">{ active ? 'search' : collection?.name ? collection.name : 'home' }</div>
        </div>
        <div className="tool-bar">
            <div className="nav-bar">
            <div className="editor-icon" onClick={() => handleTab('editor')}>
                    <ColorPalette/>
                </div>
                <a className="home" onClick={() => handleTab('home')}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="-3 -2 28 28" height="40px" width="40px" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M19.871 12.165l-8.829-9.758c-0.274-0.303-0.644-0.47-1.042-0.47-0 0 0 0 0 0-0.397 0-0.767 0.167-1.042 0.47l-8.829 9.758c-0.185 0.205-0.169 0.521 0.035 0.706 0.096 0.087 0.216 0.129 0.335 0.129 0.136 0 0.272-0.055 0.371-0.165l2.129-2.353v8.018c0 0.827 0.673 1.5 1.5 1.5h11c0.827 0 1.5-0.673 1.5-1.5v-8.018l2.129 2.353c0.185 0.205 0.501 0.221 0.706 0.035s0.221-0.501 0.035-0.706zM12 19h-4v-4.5c0-0.276 0.224-0.5 0.5-0.5h3c0.276 0 0.5 0.224 0.5 0.5v4.5zM16 18.5c0 0.276-0.224 0.5-0.5 0.5h-2.5v-4.5c0-0.827-0.673-1.5-1.5-1.5h-3c-0.827 0-1.5 0.673-1.5 1.5v4.5h-2.5c-0.276 0-0.5-0.224-0.5-0.5v-9.123l5.7-6.3c0.082-0.091 0.189-0.141 0.3-0.141s0.218 0.050 0.3 0.141l5.7 6.3v9.123z">
                        </path>
                    </svg>
                </a>
                <div class="menu-icon" onClick={() => setMenuActive(prev => !prev)}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve" height="64px" width="64px">
                        <path d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"></path>
                        <path d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"></path>
                        <path d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"></path>
                    </svg>
                </div>

                <div className="search passive-search active">
                    <div className="search-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16px" width="16px">
                                  <path fill-rule="evenodd" d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path></svg>
                    </div>
                    <input className="active" type="text" placeholder="Search" ref={inputRef} onChange={handleInput} onFocus={() => setActive(true)}/>
                </div>
                {active && <div className='btn-close' onClick={() => setActive(false)}>close</div>}
            </div>
        </div>
      </div>
    </div>
    ) 
}
