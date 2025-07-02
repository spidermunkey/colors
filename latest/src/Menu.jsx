import { useTabState } from './TabContext'
import { useEffect, useState } from 'react';
import { ago } from './utils/ago';
function CollectionMenu({collection, handleTab, handleClose }) { 
  const {id,name,collection_type = '',size, uploaded_at = undefined, sample = [], created_at = null, updated_on = null} = collection
  const getAgo = msDate => ago(new Date(msDate)).string;
  const navigate = () => {
    handleTab(id);
    handleClose();
  }
  return (
    <div className="menu-list-item md" role="tab" modal={name} cid={id}>
    <div className="item-header">
      <div className="item-menu">
        <div className="btn-menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" pid="m1grjzmg-01MKTQZTQE6Y">
            <path d="M6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5Z" fill="black" pid="m1grjzmg-00JKHYCR2TOO"></path>
            <path d="M10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12Z" fill="black" pid="m1grjzmg-0116CZ8R720N"></path>
            <path d="M16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12Z" fill="black" pid="m1grjzmg-00RDOKP0EOPM"></path>
          </svg>
        </div>
        <div className="item-menu-window" modal={name} cid={id}>
          <div className="option-delete">
            <div className="option-label">
              { collection_type == 'project' ? 'delete project' : collection_type == 'upload' ? 'remove from uploads' : ''}
            </div>
            <div className="icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" pid="m1gwi4v5-01N853XU935N">
            <path d="M10 2.25C9.58579 2.25 9.25 2.58579 9.25 3V3.75H5C4.58579 3.75 4.25 4.08579 4.25 4.5C4.25 4.91421 4.58579 5.25 5 5.25H19C19.4142 5.25 19.75 4.91421 19.75 4.5C19.75 4.08579 19.4142 3.75 19 3.75H14.75V3C14.75 2.58579 14.4142 2.25 14 2.25H10Z" fill="black" pid="m1gwi4v5-01G3NB3KBBSM"></path>
            <path d="M10 10.65C10.4142 10.65 10.75 10.9858 10.75 11.4L10.75 18.4C10.75 18.8142 10.4142 19.15 10 19.15C9.58579 19.15 9.25 18.8142 9.25 18.4L9.25 11.4C9.25 10.9858 9.58579 10.65 10 10.65Z" fill="black" pid="m1gwi4v5-015R7Q72UCJ3"></path>
            <path d="M14.75 11.4C14.75 10.9858 14.4142 10.65 14 10.65C13.5858 10.65 13.25 10.9858 13.25 11.4V18.4C13.25 18.8142 13.5858 19.15 14 19.15C14.4142 19.15 14.75 18.8142 14.75 18.4V11.4Z" fill="black" pid="m1gwi4v5-01AE006BOUG4"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99142 7.91718C6.03363 7.53735 6.35468 7.25 6.73684 7.25H17.2632C17.6453 7.25 17.9664 7.53735 18.0086 7.91718L18.2087 9.71852C18.5715 12.9838 18.5715 16.2793 18.2087 19.5446L18.189 19.722C18.045 21.0181 17.0404 22.0517 15.7489 22.2325C13.2618 22.5807 10.7382 22.5807 8.25108 22.2325C6.95954 22.0517 5.955 21.0181 5.81098 19.722L5.79128 19.5446C5.42846 16.2793 5.42846 12.9838 5.79128 9.71852L5.99142 7.91718ZM7.40812 8.75L7.2821 9.88417C6.93152 13.0394 6.93152 16.2238 7.2821 19.379L7.3018 19.5563C7.37011 20.171 7.84652 20.6612 8.45905 20.747C10.8082 21.0758 13.1918 21.0758 15.5409 20.747C16.1535 20.6612 16.6299 20.171 16.6982 19.5563L16.7179 19.379C17.0685 16.2238 17.0685 13.0394 16.7179 9.88417L16.5919 8.75H7.40812Z" fill="black" pid="m1gwi4v5-029HZD8WIJVF"></path>
            </svg></div>
          </div>
        </div>
      </div>
    </div> 
        <div className="label title" onClick={navigate}>{name}</div>
        <div className="sample-window" onClick={navigate}>
          {sample.slice(0,20).map((color) => {
            return (
              <div className="color-wrapper menu-wrapper" 
              style={{backgroundColor:color.hex}}
              ></div>)
          })
        }
        </div>
          <div className="label count">saved colors: {size}</div>
          <div className="label updated_on"> last updated: {
            updated_on ? getAgo(updated_on)
            : created_at ? getAgo(created_at)
            : uploaded_at ? getAgo(uploaded_at)
            : 'never'
          }</div>
          <div className="label dashboard-link" onClick={navigate}>open preview</div>
        </div>)
        
}
export const Menu = () => {
  const { collections, collection, menuActive, setMenuActive, tab, handleTab } = useTabState();
  const [modal,setModal] = useState('collections');
  const toggle = (modalName) => {
    if (modal === modalName) {
      setModal(null);
    } else {
      setModal(modalName)
    }
  }
  const handleClose = () => {
    setMenuActive(false)
    setModal(null)
  }
  const collectionList = () => collections.filter(c => c.collection_type === 'local').map((collection) => <CollectionMenu collection={collection} handleTab={handleTab} handleClose={handleClose}/>)
  const projectList = () => collections.filter(c => c.collection_type === 'project').map((collection) => <CollectionMenu collection={collection} handleTab={handleTab} handleClose={handleClose}/>)
  const indexList = () => collections.filter(c => c.collection_type === 'index').map((collection) => <CollectionMenu collection={collection} handleTab={handleTab} handleClose={handleClose}/>)
  return ( 
  <div className={["menu-cosm", menuActive ? 'active' : false ].filter(Boolean).join(' ')}>
    <div className={["menu", menuActive ? 'active' : false ].filter(Boolean).join(' ')}>
    <div className="btn-close" onClick={handleClose}>close</div>
        <div className="nav-list">
            <div className="menu-item"><div className="menu-label" type="link" link="home" onClick={()=>{handleTab('home');handleClose()}}>Home</div></div>
            <div className="menu-item" type="link" link="editor"><div className="menu-label" onClick={()=>{handleTab('editor');handleClose()}}>Editor</div></div>
            <div className="menu-item"><div className="menu-label" type="nav" role="tab" modal="colors" onClick={() => toggle('colors')}>Colors</div></div>
            <div className="menu-item"><div className="menu-label"  type="nav" role="tab" modal="collections" onClick={() => toggle('collections')}>Collections</div></div>
            <div className="menu-item"><div className="menu-label"  type="nav" role="tab" modal="projects" onClick={() => toggle('projects')}>Projects</div></div>
        </div>
        <div className="menu-modals">
            <div className={["menu-modal", modal === 'collections' ? 'active' : false].filter(Boolean).join(' ')} type="modal" role="tab" modal="collections">
                <div className="menu-list collections-list">{collectionList()}</div>
            </div>
            <div className={["menu-modal", modal === 'projects' ? 'active' : false].filter(Boolean).join(' ')} type="modal" role="tab" modal="projects">
                <div className="menu-list project-list">{projectList()}</div>
            </div>

            <div className={["menu-modal", modal === 'colors' ? 'active' : false].filter(Boolean).join(' ')} type="modal" role="tab" modal="colors">
                <div className="menu-list icons-list">
                    {indexList()}
                </div>
            </div>
        </div>
        <div className="menu-previews">
            <div className="peek-modal colors" type="preview" modal="colors">
                <div className="peek-modal-labels"></div>
                <div className="peek-modal-colors"></div>
            </div>
            <div className="peek-modal collections" type="preview" modal="collections">
                <div className="peek-modal-labels"></div>
                <div className="peek-modal-colors"></div>
            </div>
        </div>
    </div>
</div>
) 
}
