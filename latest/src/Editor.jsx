import { useState,useRef,useEffect } from "react";
import { Color } from "./utils/color";
import { Slider } from "./utils/mouseTracker";
import { CopyOutline } from "./MiniPreview";

const validate_color = (color) => {
  let c = color;
  let fallback_color = new Color({hex:'#1E90FF'});
  if (!color || !color.hex) {
    c = fallback_color;
  }
  return c;
}

export const ColorEditor = ({ color, setColor }) => {
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
    setVar('--editor-hue', deg + 'deg');
    setCurrent((prev) => {
      const cpy = new Color(prev);
      cpy.hue = deg;
      setColor(cpy);
      return cpy;

    });
  }
  const setSaturation = pct => {
    setVar('--editor-sat', pct + '%')
    setCurrent((prev) => {
      const cpy = new Color(prev);
      cpy.saturation = pct;
      setColor(cpy);
      return cpy;
    });

  }
  const setLightness = pct => {
    setVar('--editor-light', pct + '%')
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
    setVar('--editor-hue', hue + 'deg');
    setVar('--editor-sat', saturation + '%')
    setVar('--editor-light', lightness + '%')
  }
  const hydrateSliders = (color) => {
    hueSlider.current = new Slider({
      targetElement: huebarRef.current,
      actions: {
        onMouseMove: ({deg}) => setHue(deg),
        onMouseUp: ({deg}) => setHue(deg),
        cursorRight: ({deg}) => {
          console.log(this)
          setHue()
        }
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
                <div className="input-label">Hue</div>
                  <input type="text" inputmode="numeric" pattern="\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360)\b" min-length="1" maxlength="3" autocomplete="off" value={current.hue} onChange={({target}) => setHS(target.value)}/>
              </div>
          </div>
          <div class="slider-field sat-slider">
              <div class="sat-bar input-bar slider-track" ref={satbarRef}>
                  <div class="sat-thumb input-thumb slider-handle"></div>
              </div>
              <div class="val-label">
                <div className="input-label">Sat</div>
                  <input type="text" inputmode="numeric" pattern="\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360)\b" min-length="1" maxlength="3" autocomplete="off" value={current.saturation} onChange={({target}) => setSS(target.value)}/>
              </div>
          </div>
          <div class="slider-field light-slider">
              <div class="light-bar input-bar slider-track" ref={lightbarRef}>
                  <div class="light-thumb input-thumb slider-handle"></div>
              </div>
              <div class="val-label">
                <div className="input-label">Light</div>
                  <input type="text" inputmode="numeric" pattern="\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360)\b" min-length="1" maxlength="3" autocomplete="off" value={current.lightness} onChange={({target}) => setLS(target.value)}/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Editor = ({color}) => {
  const [current, setCurrent] = useState(validate_color(color));
  const initial = useRef(current);

  useEffect(() => {
    let c = validate_color(color);
    initial.current = c;
    setCurrent(c);
  },[color])

  return (
    <div className="editor-modal">
      <div className="modal-wrapper">
        <div className="color-card">
          <div className="card-editor editor">
            <ColorEditor color={initial.current} setColor={setCurrent}/>
            <div className="btn-add-preset">Save Preset</div>
          </div>
        </div>
        <div className="color-preview">
          <div className="tab-modal">
            <div className="preview-modal" modal='preview'>
              <div className="text-column col col-1">
                <div className="preview-component" component='text'>{current.hex}</div>
                <div className="preview-component" component='button'>Add To Collection</div>
                <div className="preview-component" component='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus perferendis, quis a ab beatae sed, autem magnam tenetur dolore ullam reprehenderit iste et odio eos inventore quas voluptatibus, dolores velit?</div>
              </div>
              <div className="modal-column col col-2">
                <div className="preview-component" component="modal"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-options"></div>
    </div>
  )
}
