import { useEffect,useRef, useState } from "react"
import { Color, sortByHue, sortByLightness, toneUnknown } from "./utils/color"
import { cc } from "./utils/conditionalClassList"
import { MiniPreview } from "./MiniPreview";
import { Preview } from "./Preview";

function transform(colors = []) { 
  return colors                    
        .slice()
        .filter(value => !toneUnknown(value))
        .filter(value => value.hex && value.name )
        .sort(sortByHue)
        .sort(sortByLightness)
}

function ColorElement(color,index) {
  const {name,hex,_id} = color;
  return <div className="color-wrapper db-color" name={name} id={_id} key={index} style={{background:hex}}></div>
}


export const Search = ({query, result , active, setActive }) => {
    const colors = useRef(transform(result))
    const [previewState,setPreviewState] = useState(null);
    const [selected,updateSelected] = useState(result[0] ? result[0] : new Color({hex: '#fff'}));
    const handleClick = ({target}) => {
      const color = target.closest('.db-color')
      if (color) {
        const id = color.getAttribute('id');
        const info = colors.current.find(c => c._id === id);
        if (info) {
          updateSelected(info)
        }
      }
    }
  useEffect(() => {
    console.log('updated results: ',result)
    colors.current = result;
    updateSelected(result[0])
  },[result,query])
  return (
    <>
      <MiniPreview selected={selected} state={previewState} setState={setPreviewState} />
      <Preview color={selected} state={previewState} setState={setPreviewState}/>
      <div className={cc(['search-modal', active && 'active'])} onClick={handleClick}>
      <div className="modal-header">
        <div className="modal-label">Search Colors</div>
        <div className="modal-close btn-close" onClick={() => setActive(false)}>close</div>
      </div>
      <div className="modal-content">
        {query != '' && <div className="query-header">Searching For <span className="query">{query}</span></div> }
        <div className="search-results">
          {colors.current && colors.current.map(ColorElement)}
        </div>
      </div>
    </div>
    </>

  )
}
