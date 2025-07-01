import { sortByHue, sortByLightness, toneUnknown } from "./color"
import { Preview } from "./Preview";
import { MiniPreview } from "./MiniPreview";
import {useState,useRef, useEffect} from "react";

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
  const [colors,setColors] = useState(transform(collection.colors))
  const [previewState,setPreviewState] = useState(null);
  const [selected,updateSelected] = useState(colors[0]);
  
  const handleClick = ({target}) => {
    const color = target.closest('.db-color')
    if (color) {
      const id = color.getAttribute('id');
      const info = colors.find(c => c._id === id);
      if (info) {
        updateSelected(info)
      }
    }
  }

  useEffect(() => {
    console.log('new colors',collection)
    setColors(transform(collection.colors))
  },[collection,setColors])
  return (
    <>
      <MiniPreview selected={selected} state={previewState} setState={setPreviewState} />
      <div className="collection" onClick={handleClick}>
        {colors && transform(colors).map(colorElement)}
      </div>
      <Preview color={selected} state={previewState} setState={setPreviewState} />
    </>


  )
}
