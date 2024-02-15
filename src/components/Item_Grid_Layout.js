import Grid_item from "../utilities/Grid_item"
import productImage from '../images/img1.jpg'
function Item_Grid_Layout() {
  return (
    <div >
        <div className="item_grid_layout">
        <Grid_item title="Toy under" image={productImage}/>
        <Grid_item title="Toy under" image={productImage}/>
        <Grid_item title="Toy under" image={productImage}/>
        <Grid_item title="Toy under" image={productImage}/>
        <Grid_item title="Toy under" image={productImage}/>
        <Grid_item title="Toy under" image={productImage}/>
        <Grid_item title="Toy under" image={productImage}/>
        <Grid_item title="Toy under" image={productImage}/>
        </div>
    </div>
  )
}

export default Item_Grid_Layout