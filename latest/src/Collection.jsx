import { sortByHue, sortByLightness, toneUnknown } from "./utils/color"
import { Preview } from "./Preview";
import { MiniPreview } from "./MiniPreview";
import {useState,useRef, useEffect} from "react";
import { useTabState } from "./TabContext";
function transform(colors = []) { 
  return colors                    
        .slice()
        .filter(value => !toneUnknown(value))
        .filter(value => value.hex && value.name )
        .sort(sortByHue)
        .sort(sortByLightness)
}

function colorElement(color,index) {
  const {name,hex,_id} = color;
  return <div className="color-wrapper db-color" name={name} id={_id} key={index} style={{background:hex}}></div>
}

export const Collection = ({collection}) => {
  const {handleTab,selected,updateSelected} = useTabState()
  const [previewState,setPreviewState] = useState(null);
  const handleClick = ({target}) => {
    const color = target.closest('.db-color')
    if (color) {
      const id = color.getAttribute('id');
      const info = collection.colors.find(c => c._id === id);
      if (info) {
        updateSelected(info)
      }
    }
  }

  return (
    <>
      <MiniPreview selected={selected} state={previewState} setState={setPreviewState} toggleEditor={handleTab.bind(this,'editor')} />
      <div className="collection" onClick={handleClick}>
        {collection.colors && collection.colors.map(colorElement)}
      </div>
      <Preview color={selected} state={previewState} setState={setPreviewState} toggleEditor={handleTab.bind(this,'editor')} />
    </>


  )
}
