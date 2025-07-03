export const Editor = () => {
  return (
    <div className="editor-modal">
      <div className="modal-wrapper">
        <div className="color-card">
          <div className="card-info info">
            <div className="name-label info-label editor-component" component='name'>Name</div>
            <div className="hex-label info-label editor-component" component='hex'>hex</div>
          </div>
          <div className="card-editor editor">
            <div className="editor-wheel"></div>
            <div className="editor-sliders">
              
            </div>
            <div className="editor-values">
              <div className="hue-label value-label editor-component" component='hue'>Hue</div>
            <div className="sat-label value-label editor-component" component='sat'>Saturation</div>
            <div className="light-label value-label editor-component" component='light'>Light</div>
            </div>
          </div>
        </div>

        <div className="color-preview"></div>
      </div>

      <div className="modal-options"></div>
    </div>
  )   
}
