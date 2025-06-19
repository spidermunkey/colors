export const Collection = ({collection}) => {
  console.log('yup', collection.colors)
  return (
    <div className="collection">
      {collection.colors && collection.colors.map((color,index) => {
        console.log('yooo')
        return (<div className="color-wrapper" style={{background:color.hex}}></div>)})}
    </div>
  )
}
