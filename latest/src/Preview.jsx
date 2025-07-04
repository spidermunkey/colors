import { useState, useRef, useEffect } from "react";
import { Color, getDarks, getLights, getShades, getTints } from "./utils/color";
import { Slider } from "./utils/mouseTracker";
export const CopyOutline = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512" pid="mbi2zcbr-011N0IZ0XY24"><title fill="#000" pid="mbi2zcbr-02EJJUV95T1C">ionicons-v5-e</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" 
  style={{fill:"none",strokeLinejoin:"round",strokeWidth:"32px"}} fill="none" stroke="#6c6c6c" pid="mbi2zcbr-00TV2JYXWDF4"></rect><path d="M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24" 
  style={{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}} fill="none" stroke="#6c6c6c" pid="mbi2zcbr-01OTOQ6EF054"></path></svg>) 

export const OpenFullScreen = () => (<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" pid="m9uim3d1-00TM1NE6Q8U5" height="24" width="24"><title fill="#6c6c6c" pid="m9uim3d1-002SFMJYBRAB">Open</title><path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72" fill="none" stroke="#6c6c6c" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" pid="m9uim3d1-02EDLRRLQHF8"></path></svg>) 

function colorElement(hex,index) {
  return <div className="color-wrapper" key={index} hex={hex} style={{background:hex}}></div>
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

export const ColorEditor = ({ color, setColor, toggleEditor }) => {
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
    setVar('--hue', deg + 'deg');
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
    setVar('--light', pct + '%')
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
    setVar('--hue', hue + 'deg');
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
    satInputRef.value = pct;
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
  const copyRef = useRef();
  const copy = () => {
    copyRef.current.classList.add('animate')
    window.navigator.clipboard.writeText(current.hex)
    setTimeout(() => copyRef.current.classList.remove('animate'), 350)
  }
  const copyVar = () => {

  }
  useEffect(() => {
    updateStyles();
    hydrateSliders(color);
    updateSliders();
    setCurrent(color)
  },[color])

  return (
    <div className="editor">
      <div class="box current-color">
        <div className="icon-navigate" onClick={toggleEditor}><OpenFullScreen/></div>

        <div className="icon copy" ref={copyRef} onClick={copy}>
          <CopyOutline/>
        </div>
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
export const ColorVariations = ({tabIndex,color}) => {
  const successRef = useRef();
  return (
        <div className="variation-modal" onDoubleClick={({target}) => {
        const variation = target.closest('.color-wrapper');
        if (variation) {
          const hex = variation.getAttribute('hex');
          const text = `${hex} successfully copied`;
          window.navigator.clipboard.writeText(hex);
          successRef.current.querySelector('.success-label').textContent = text;
          successRef.current.classList.add('animate');
          console.log(successRef.current.classList)
          setTimeout(() => {
            successRef.current.classList.remove('animate')},2000)
        }
      }}>
      {
        tabIndex == "0" ? <Darks color={color} /> :
        tabIndex == "1" ? <Lights color={color} /> :
        tabIndex == "2" ? <Tints color={color} /> :
        tabIndex == "3" ? <Shades color={color} /> :
        <Err/>
      }
        <div className="success-animation" ref={successRef}><div className="success-label"> successfully copied to clipboard </div></div>
      
      </div>

  )
}
export const Preview = ({ color, state, setState, toggleEditor }) => {
  const [tabIndex,setTabIndex] = useState("0");
  const [current,setCurrent] = useState(color);
  const initial = useRef(color || new Color({hex:'#fff'}));
  const close = () => setState(null)
  useEffect(() => {
    let value = color
    if (!color) value =  new Color({hex:'#fff'});
    initial.current = value
    setCurrent(value)
  },[color])
  return (
    
    <div id='color-preview' className={state == 'active' && 'active'} >
      <div className="modal-header">
        <div className="modal-label">Preview</div>
        <div className="btn-close" onClick={close}> close </div>
      </div>
      <ColorEditor color={initial.current} setColor={setCurrent} toggleEditor={() => toggleEditor(current)}/>
      <div className="tab-tray">
        <div className="tab" tab="darks" tabIndex="0" onClick={() => setTabIndex("0")}>Darker</div>
        <div className="tab" tab="lights" tabIndex="1" onClick={() => setTabIndex("1")}>Lighter</div>
        <div className="tab" tab="shades" tabIndex="2" onClick={() => setTabIndex("2")}>Shades</div>
        <div className="tab" tab="tints" tabIndex="3" onClick={() => setTabIndex("3")}>Tints</div>
      </div>
      <ColorVariations color={current} tabIndex={tabIndex}/>

    </div>
  )
}
