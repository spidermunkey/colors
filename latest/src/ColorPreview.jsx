import { useState, useRef } from "react";
import { Color } from "./color";

function colorElement(hex,index) {
  return <div className="color-wrapper" key={index} style={{background:hex}}></div>
}
const Tints = ({color}) => {
  const current = new Color({hex:color.hex});
  const tints = current.tints;
  return (
    <div className="preview-modal editor"> {tints.map(colorElement)} </div>
  )
}
const Shades = ({color}) => {
  const current = new Color({hex:color.hex});
  const shades = current.shades;
  return (
    <div className="preview-modal editor"> {shades.map(colorElement)} </div>
  )
}
const Lights = ({color}) => {
  const current = new Color({hex:color.hex});
  const lights = current.lights;
  return (
    <div className="preview-modal editor"> {lights.map(colorElement)} </div>
  )
}
const Darks = ({color}) => {
  const current = new Color({hex:color.hex});
  const darks = current.darks;
  return (
    <div className="preview-modal editor"> {darks.map(colorElement)} </div>
  )
}

const Err = () => {
  return (
    <div className="preview-modal err">Errm</div>
  )
}

export const ColorPreview = ({color}) => {
  const currentColor = useRef(color);
  const [tabIndex,setTabIndex] = useState(0);
  return (
    <div className="color-preview active">
      <div className="modal-header">
        <div className="modal-label">Preview</div>
        <div className="btn-close"> close </div>
      </div>
      <div className="current-color">
        <div className="current-color-preview" style={{background: color.hex}}></div>
      </div>
      <div className="tab-tray">
        <div className="tab" tab="tints" tabIndex="0" onClick={() => setTabIndex("0")}>Tints</div>
        <div className="tab" tab="shades" tabIndex="1" onClick={() => setTabIndex("1")}>Shades</div>
        <div className="tab" tab="lights" tabIndex="2" onClick={() => setTabIndex("2")}>Lights</div>
        <div className="tab" tab="darks" tabIndex="3" onClick={() => setTabIndex("3")}>Darks</div>
      </div>

      {
        tabIndex == "0" ? <Tints color={currentColor.current} /> :
        tabIndex == "1" ? <Shades color={currentColor.current} /> :
        tabIndex == "2" ? <Lights color={currentColor.current} /> :
        tabIndex == "3" ? <Darks color={currentColor.current} /> :
        <Err/>
      }
    </div>
  )
}
