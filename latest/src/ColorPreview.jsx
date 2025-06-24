import { useState, useRef, useEffect } from "react";
import { Color,getDarks,getLights,getShades, getTints } from "./color";
import { Slider } from "./mouseTracker";



function colorElement(hex,index) {
  return <div className="color-wrapper" key={index} style={{background:hex}}></div>
}
const Tints = ({color}) => {
  return (
    <div className="preview-modal editor"> {getTints(color.hex).map(colorElement)} </div>
  )
}
const Shades = ({color}) => {
  return (
    <div className="preview-modal editor"> {getShades(color.hex).map(colorElement)} </div>
  )
}
const Lights = ({color}) => {
  return (
    <div className="preview-modal editor"> {getLights(color.hex).map(colorElement)} </div>
  )
}
const Darks = ({color}) => {
  return (
    <div className="preview-modal editor"> 
      {getDarks(color.hex).map(colorElement)} 
    </div>
  )
}
const Err = () => {
  return (
    <div className="preview-modal err">Errm</div>
  )
}

const HSL_Editor = ({ color, setColor }) => {
  const { hue, saturation, lightness } = color;
  const [current,setCurrent] = useState(color);

  const huebarRef = useRef();
  const hueInputRef = useRef();
  const hueSlider = useRef();

  const satbarRef = useRef();
  const satInputRef = useRef();
  const satSlider = useRef();

  const lightbarRef = useRef();
  const lightInputRef = useRef();
  const lightSlider = useRef();
  
  const setHue = deg => {
    setVar('--hue', deg);
    setCurrent((prev) => {
      const cpy = new Color(prev);
      cpy.hue = deg;
      setColor(cpy);
      return cpy;

    });
  }
  const setSaturation = pct => {
    setVar('--sat', pct + '%')
    setCurrent((prev) => {
      const cpy = new Color(prev);
      cpy.saturation = pct;
      setColor(cpy);
      return cpy;
    });

  }
  const setLightness = pct => {
    setVar('--sat', pct + '%')
    setCurrent((prev) => {
      const cpy = new Color(prev);
      cpy.lightness = pct;
      setColor(cpy);
      return cpy;
    });
  }

  const setVar = (variableName,value) => {
    document.documentElement.style.setProperty(variableName,value);
  }

  const updateStyles = () => {
    setVar('--hue', hue);
    setVar('--sat', saturation + '%')
    setVar('--light', lightness + '%')
  }

  const hydrateSliders = (color) => {
    hueSlider.current = new Slider({
      targetElement: huebarRef.current,
      actions: {
        onMouseMove: ({deg}) => setHue(deg),
        onMouseUp: ({deg}) => setHue(deg)
      }
    })
    satSlider.current = new Slider({
      targetElement: satbarRef.current,
      actions: {
        onMouseMove: ({pct}) => setSaturation(pct),
        onMouseUp: ({pct}) => setSaturation(pct)
      }
    })
    lightSlider.current = new Slider({
      targetElement: lightbarRef.current,
      actions: {
        onMouseMove: ({pct}) => setLightness(pct),
        onMouseUp: ({pct}) => setLightness(pct)
      }
    })
  }
  const setHS = (deg) => {
    hueInputRef.value = deg;
    setHue(deg)
    hueSlider.current.setDegrees(deg)
  }
  const setSS = (pct) => {
    hueInputRef.value = pct;
    setSaturation(pct)
    satSlider.current.setPercent(pct)
  }
  const setLS = (pct) => {
    lightInputRef.value = pct;
    setLightness(pct)
    lightSlider.current.setPercent(pct)
  }
  const updateSliders = () => {
    hueSlider.current.setDegrees(color.hue)
    satSlider.current.setPercent(color.saturation)
    lightSlider.current.setPercent(color.lightness)
  }

  useEffect(() => {
    updateStyles();
    hydrateSliders(color);
    updateSliders();
  },[color])

  return (
    <div className="editor">
      <div class="box current-color">
        <div class="hue-wheel">
            <div class="inner-clip rainbow-clip">
                <div class="knob"></div>
            </div>
            <div class="outer-clip"></div>
        </div>
      </div>
      <div className="box">
        <div className="sliders">
          <div class="slider-field hue-slider">
              <div class="hue-bar input-bar slider-track" ref={huebarRef}>
                  <div class="hue-thumb input-thumb slider-handle"></div>
              </div>
              <div class="val-label">
                  <input type="text" inputmode="numeric" pattern="\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360)\b" min-length="1" maxlength="3" autocomplete="off" value={current.hue} onChange={({target}) => setHS(target.value)}/>
              </div>
          </div>
          <div class="slider-field sat-slider">
              <div class="sat-bar input-bar slider-track" ref={satbarRef}>
                  <div class="sat-thumb input-thumb slider-handle"></div>
              </div>
              <div class="val-label">
                  <input type="text" inputmode="numeric" pattern="\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360)\b" min-length="1" maxlength="3" autocomplete="off" value={current.saturation} onChange={({target}) => setSS(target.value)}/>
              </div>
          </div>
          <div class="slider-field light-slider">
              <div class="light-bar input-bar slider-track" ref={lightbarRef}>
                  <div class="light-thumb input-thumb slider-handle"></div>
              </div>
              <div class="val-label">
                  <input type="text" inputmode="numeric" pattern="\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360)\b" min-length="1" maxlength="3" autocomplete="off" value={current.lightness} onChange={({target}) => setLS(target.value)}/>
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export const ColorPreview = ({color}) => {

  const [tabIndex,setTabIndex] = useState(0);
  const [current,setCurrent] = useState(color);
  const update = (color) => {
    console.log('UPDATE',{
      hex:color.hex,
      hue:color.hue,
      sat:color.saturation,
    })
    setCurrent(color)
  }
  const initial = useRef(color);
  return (
    <div className="color-preview active">
      <div className="modal-header">
        <div className="modal-label">Preview</div>
        <div className="btn-close"> close </div>
      </div>
      {/* <div className="current-color">
        <div className="current-color-preview" style={{background: color.hex}}></div>
      </div> */}
      <HSL_Editor color={initial.current} setColor={update}/>
      <div className="tab-tray">
        <div className="tab" tab="darks" tabIndex="0" onClick={() => setTabIndex("0")}>Darks</div>
        <div className="tab" tab="lights" tabIndex="1" onClick={() => setTabIndex("1")}>Lights</div>
        <div className="tab" tab="shades" tabIndex="2" onClick={() => setTabIndex("2")}>Shades</div>
        <div className="tab" tab="tints" tabIndex="3" onClick={() => setTabIndex("3")}>Tints</div>
      </div>
      {
        tabIndex == "0" ? <Darks color={current} /> :
        tabIndex == "1" ? <Lights color={current} /> :
        tabIndex == "2" ? <Tints color={current} /> :
        tabIndex == "3" ? <Shades color={current} /> :
        <Err/>
      }
    </div>
  )
}
