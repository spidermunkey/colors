export const MiniPreview = ({selected,state,setState}) => {
  const setActive = () => {
    console.log('yo')
    setState('active')
    console.log(state)
  }
  return (
      <div className={["mini-preview",state == 'active' ? false : 'active'].filter(Boolean).join(' ')}>
        <div className="selected-color" 
        style={{ background: selected.hex }}
        onClick={() => setActive()}></div>
        <div className="selected-info">
          <div className="name ">{selected.name}</div>
          <div className="hex">{selected.hex}</div>
        </div>
      </div>
  )
}
