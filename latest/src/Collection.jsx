import { sortByHue, sortByLightness, toneUnknown } from "./color"
import { Preview } from "./Preview";
import { MiniPreview } from "./MiniPreview";
import {useState,useRef} from "react";

function transform(colors) { 
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
  const colors = useRef(transform(collection.colors))
  const [previewState,setPreviewState] = useState(null);
  const [selected,updateSelected] = useState(colors.current[0]);
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

  return (
    <>
      <MiniPreview selected={selected} state={previewState} setState={setPreviewState} />
      <div className="collection" onClick={handleClick}>
        {colors.current && transform(colors.current).map(colorElement)}
      </div>
      <Preview color={selected} state={previewState} setState={setPreviewState} />
    </>


  )
}
