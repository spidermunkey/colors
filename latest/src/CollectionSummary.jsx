import { ago } from "./utils/ago"

export const CollectionSummary = ({collection}) => {
  console.log(collection)
  return (
    <div className="collection-summary" cid={collection.id} collection={collection.name}>
      <div className="panel-header">
        <div className="panel-name" cid={collection.id} collection={collection.name}>{collection.name}</div>
            <div class="panel-options">
      <div class="dropdown-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" pid="m85vg8jg-01S9PHENZ0PX">
          <path d="M6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5Z" fill="black" pid="m85vg8jg-00JREAP4XC8Z"></path>
          <path d="M10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12Z" fill="black" pid="m85vg8jg-01U1OM0YNVHN"></path>
          <path d="M16.5 12C16.5 11.1716 17.1716 10.5 18 10.5C18.8284 10.5 19.5 11.1716 19.5 12C19.5 12.8284 18.8284 13.5 18 13.5C17.1716 13.5 16.5 12.8284 16.5 12Z" fill="black" pid="m85vg8jg-00MIE1K9JHJQ"></path>
        </svg>
      </div>
      <div class="dropdown-menu">
        <span class="dropdown-option" opt="delete-collection" cid="${cid}">delete collection</span>
        <span class="dropdown-option" opt="open-settings" cid="${cid}">open settings</span>
      </div>
    </div>
      </div>
      <div className="panel-preview">
        {collection.sample.map(color => ( <div className="color-wrapper summary-wrapper" style={{backgroundColor:color.hex}}></div>))}
      </div>
      <div className="panel-info">
        <div className="size"> size: {collection.size} </div>
        <div className="created"> created: { ago(new Date(collection.created_at)).string }</div>
      </div>
    </div>
  )
}
