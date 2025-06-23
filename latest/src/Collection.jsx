import { sortByHue, sortByLightness, toneUnknown } from "./color"
import { ColorPreview } from "./ColorPreview";
import {useState,useEffect} from "react";

function transform(colors) { 
  return colors                    
        .slice()
        .filter(value => !toneUnknown(value))
        .filter(value => value.hex && value.name )
        .sort(sortByHue)
        .sort(sortByLightness)
}

function colorElement({hex},index) {
  return <div className="color-wrapper" key={index} style={{background:hex}}></div>
}

function render(colors) {
  return transform(colors).map(colorElement)
}

export const Collection = ({collection}) => {
  const [currentColor,setCurrentColor] = useState(collection.colors[0]);
  return (
    <>
        <div className="collection">
          {collection.colors && render(collection.colors)}
        </div>
        <ColorPreview color={currentColor}/>
    </>


  )
}
