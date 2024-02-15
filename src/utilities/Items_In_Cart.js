import productImage from '../images/img1.jpg'
import Seller_Tags from './Seller_Tags'
import berge from '../images/climate_friendly_berge.jpg'

function Items_In_Cart(props) {
    const { } = props

    return (
        <div>
            <div className="items-in-cart-container items">
                <div className="product-image cols">
                    <img src={productImage} alt="" />
                </div>

                <div className="product-description cols">
                    <h3>3 in 1 Charging Station for iPhone, Wireless Charger for iPhone 15 14 13 12 11 X Pro Max & Apple Watch - Charging Stand Dock for…</h3>
                    <div className="product-category">
                        <Seller_Tags text='#1 Best Seller' />
                        <span>in Cell Phone Wireless C…</span>
                        <p className='product_status'>In Stock</p>
                        <p className="nature"><img src={berge} alt="" />Climate Pledge Friendly</p>
                        <p className='gift'> <input type="checkbox" name="" id="" />This is gift <span>Learn more</span></p>
                        <p className='color'> <span>Color: </span>Black</p>
                        <div className="product_action">
                            <div className="product-qnty">

                                <select name="" id="" placeholder='product-quantity'>
                                    <option value="delete">Qty: 1</option>
                                    <option value="1">1</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">9</option>
                                    <option value="10">10+</option>
                                    
                                </select>
                            </div>

                            <div className="delete">Delete</div>
                            <div className="save">Save for later</div>
                        </div>
                       <div className="share-product">
                       <p>Compare with similar items</p>
                        <p>Share</p>
                       </div>
                    </div>

                </div>


                <div className="product-price_deals ">
                    <h4>$19.93</h4>
                </div>
            </div>
        </div>
    )
}

export default Items_In_Cart