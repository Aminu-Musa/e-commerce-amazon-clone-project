function Grid_item_nested(props) {
  return (
<>
<div className="grid_card">
      <h3 className="product_name">{props.title}</h3>
      <div className="product_image">
        <img src={props.image} alt="product_image" />
      </div>
      <p className="shop_link">Shop now</p>
    </div>
</>
  )
}

export default Grid_item_nested