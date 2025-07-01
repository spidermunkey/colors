import { useRef,useState } from "react"
import { useTabState } from "./TabContext"
import { cc } from "./utils/conditionalClassList"

export const CopyOutline = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512" pid="mbi2zcbr-011N0IZ0XY24"><title fill="#000" pid="mbi2zcbr-02EJJUV95T1C">ionicons-v5-e</title><rect x="128" y="128" width="336" height="336" rx="57" ry="57" 
  style={{fill:"none",strokeLinejoin:"round",strokeWidth:"32px"}} fill="none" stroke="#000" pid="mbi2zcbr-00TV2JYXWDF4"></rect><path d="M383.5,128l.5-24a56.16,56.16,0,0,0-56-56H112a64.19,64.19,0,0,0-64,64V328a56.16,56.16,0,0,0,56,56h24" 
  style={{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}} fill="none" stroke="#000" pid="mbi2zcbr-01OTOQ6EF054"></path></svg>) 

export const StarR1 = () => (<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" pid="m91dimcd-00D7WAT98FIB">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.72511 6.58313C4.09307 7.40833 3.75 8.5551 3.75 9.76667C3.75 11.0047 4.23649 12.2494 5.03174 13.4514C5.8256 14.6513 6.89786 15.7637 7.99347 16.721C9.0862 17.6757 10.1825 18.4591 11.0074 19.0044C11.4191 19.2766 11.7613 19.4883 11.9993 19.6312C11.9996 19.6313 11.9998 19.6315 12 19.6316C12.0002 19.6315 12.0004 19.6313 12.0007 19.6312C12.2387 19.4883 12.5809 19.2766 12.9926 19.0044C13.8175 18.4591 14.9138 17.6757 16.0065 16.721C17.1021 15.7637 18.1744 14.6513 18.9683 13.4514C19.7635 12.2494 20.25 11.0047 20.25 9.76667C20.25 8.55376 19.9094 7.40711 19.2791 6.58253C18.6651 5.77922 17.7568 5.25 16.5 5.25C15.2226 5.25 14.2616 5.7791 13.6051 6.32617C13.2765 6.60007 13.0298 6.87427 12.8669 7.0779C12.7858 7.1793 12.7264 7.26201 12.6889 7.31672C12.6701 7.34405 12.6569 7.36427 12.6493 7.37621C12.6455 7.38218 12.643 7.38607 12.642 7.38774C12.6415 7.38857 12.6413 7.38884 12.6415 7.38854L12.0027 8.45329L11.3599 7.39084C11.3601 7.39113 11.3599 7.39084 11.3594 7.39C11.3588 7.38905 11.3577 7.3874 11.3563 7.38507C11.3551 7.38325 11.3537 7.38101 11.352 7.37837C11.3442 7.36636 11.3309 7.34607 11.312 7.31867C11.2741 7.26381 11.2142 7.18095 11.1325 7.07938C10.9685 6.87542 10.7205 6.60087 10.3908 6.32666C9.73179 5.77865 8.77065 5.25 7.5 5.25C6.25019 5.25 5.34128 5.77864 4.72511 6.58313ZM12 20.5L12.3639 21.1558L12 21.3577L11.6361 21.1558L12 20.5ZM3.53427 5.67104C4.42122 4.51302 5.76231 3.75 7.5 3.75C9.21685 3.75 10.5057 4.47135 11.3499 5.17334C11.6042 5.38481 11.8203 5.59616 11.9985 5.78869C12.176 5.59624 12.3914 5.38509 12.6449 5.17383C13.4884 4.4709 14.7774 3.75 16.5 3.75C18.2432 3.75 19.5849 4.51245 20.4709 5.67164C21.3406 6.80956 21.75 8.29624 21.75 9.76667C21.75 11.3986 21.1115 12.9305 20.2192 14.2791C19.3256 15.6298 18.1479 16.842 16.9935 17.8506C15.8362 18.8617 14.6825 19.6854 13.8199 20.2557C13.3878 20.5414 13.027 20.7646 12.7728 20.9172C12.6456 20.9936 12.5451 21.0523 12.4755 21.0924C12.4407 21.1124 12.4136 21.1278 12.3948 21.1384C12.3854 21.1438 12.3781 21.1479 12.3729 21.1508C12.3703 21.1522 12.3683 21.1534 12.3668 21.1542L12.3643 21.1556C12.3641 21.1557 12.3639 21.1558 12 20.5C11.6361 21.1558 11.6359 21.1557 11.6357 21.1556L11.6332 21.1542C11.6317 21.1534 11.6297 21.1522 11.6271 21.1508C11.6219 21.1479 11.6146 21.1438 11.6052 21.1384C11.5864 21.1278 11.5593 21.1124 11.5245 21.0924C11.4549 21.0523 11.3544 20.9936 11.2272 20.9172C10.973 20.7646 10.6122 20.5414 10.1801 20.2557C9.3175 19.6854 8.1638 18.8617 7.00653 17.8506C5.85214 16.842 4.6744 15.6298 3.78076 14.2791C2.88851 12.9305 2.25 11.3986 2.25 9.76667C2.25 8.2949 2.66318 6.80834 3.53427 5.67104Z" fill="black" pid="m91dimcd-0299505YBTY9"></path>
</svg>)

export const FolderPlus = () => (<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" pid="m90dboez-00RLYWIU155W">
<path d="M8.75 13.5C8.75 13.0858 9.08579 12.75 9.5 12.75H11.25V11C11.25 10.5858 11.5858 10.25 12 10.25C12.4142 10.25 12.75 10.5858 12.75 11V12.75H14.5C14.9142 12.75 15.25 13.0858 15.25 13.5C15.25 13.9142 14.9142 14.25 14.5 14.25H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V14.25H9.5C9.08579 14.25 8.75 13.9142 8.75 13.5Z" fill="black" pid="m90dboez-00NYZ3YHM7SE"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1613 9.74679C21.5581 12.233 21.5297 14.7686 21.0771 17.2453C20.8748 18.353 19.9484 19.1833 18.8253 19.2636L17.1874 19.3808C13.7335 19.6279 10.2665 19.6279 6.81261 19.3808L5.2986 19.2725C4.10258 19.1869 3.11607 18.3027 2.90055 17.1232C2.46388 14.7333 2.38913 12.2913 2.67879 9.87915L2.95127 7.61004C3.11298 6.26343 4.25538 5.25 5.61167 5.25H7.90323C9.02099 5.25 9.95226 6.04846 10.1578 7.10612L18.4722 7.10612C19.7786 7.10612 20.8913 8.05533 21.0972 9.34535L21.1613 9.74679ZM19.6016 16.9757C20.0236 14.6662 20.0501 12.3017 19.68 9.98322L19.6159 9.58178C19.5262 9.0197 19.0414 8.60612 18.4722 8.60612H9.75936C9.17429 8.60612 8.7 8.13183 8.7 7.54677C8.7 7.10672 8.34328 6.75 7.90323 6.75H5.61167C5.01464 6.75 4.51176 7.19611 4.44057 7.78888L4.16809 10.058C3.89636 12.3208 3.96649 14.6116 4.37612 16.8536C4.46865 17.36 4.89217 17.7396 5.40565 17.7763L6.91965 17.8846C10.3022 18.1266 13.6978 18.1266 17.0804 17.8846L18.7182 17.7674C19.1588 17.7359 19.5222 17.4102 19.6016 16.9757Z" fill="black" pid="m90dboez-00ODMMYWQYYJ"></path>
</svg>) 

export const MiniPreview = ({selected,state,setState}) => {
  const {collections} = useTabState();
  const [a2cActive,seta2cActive ] = useState(false)
  const setActive = () => {
    console.log('yo')
    setState('active')
    console.log(state)
  }
  const copyRef = useRef();
  const copy = () => {
    copyRef.current.classList.add('animate')
    window.navigator.clipboard.writeText(selected.hex)
    setTimeout(() => copyRef.current.classList.remove('animate'), 350)
  }
  return (
      <div className={["mini-preview",state == 'active' ? false : 'active'].filter(Boolean).join(' ')}>
        <div className="selected-color" 
        style={{ background: selected?.hex }}
        onClick={() => setActive()}></div>
        
        <div className="selected-info">
          <div className="name ">{selected?.name}</div>
          <div className="hex">{selected?.hex}</div>
                  <div className="controls">
          <div className="copy icon" onClick={() => copy()} ref={copyRef}>
            <CopyOutline/>
          </div>
          <div className="favorite icon">
            <StarR1/>
          </div>
        <div className="a2c icon" onClick={() => seta2cActive(prev => !prev)}>
            <FolderPlus/>
          </div>
        </div>
        </div>

        <div className={cc(["a2c-menu",a2cActive && 'active'])}>
          <div className="modal-header">
            <div className="modal-title">Add To Collection</div>
          </div>
          <div className="btn-create">
            <div className="btn-label">New Collection</div>
          </div>
          <div className="collection-list">
            {collections.filter(({collection_type}) => collection_type === 'project').map(({name}) => {
              return (
                <div className="collection-label" onClick={
                  async({target}) => {
                    const sibling = target.querySelector('.success');
                      sibling.classList.add('animate')
                      setTimeout(() => {sibling.classList.remove('animate')},2000)
                  }
                  }>
                  {name}
                  <div className="success">
                    <div className="content">
                      <div className="success-marker" style={{background:selected.hex}}></div>
                      <div className="success-text">color added</div>
                    </div>
                  </div>
                </div>
                )
              })}
          </div>
        </div>

      </div>
  )
}
