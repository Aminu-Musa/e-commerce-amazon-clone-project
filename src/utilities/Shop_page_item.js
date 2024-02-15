import productImage from '../images/shop-img.jpg'
import { IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";

function Shop_page_item(props) {
    return (
        <div className="shop-item">
            <div className="item-img">
                <img src={productImage} alt="" />
            </div>

            <div className="item-name">
                <p className='product-name'>Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone</p>
                <div className="rating">
                    <TiStarFullOutline size={18} />
                    <TiStarFullOutline size={18} />
                    <TiStarFullOutline size={18} />
                    <TiStarFullOutline size={18} />
                    <TiStarHalfOutline size={18} />
                    <span className="rating-number">
                        599,848
                    </span>
                </div>
                <div className="feature-offers">
                    <p>10K+ bought in past month</p>
                    <p>No featured offers available</p>
                    <p>$98.01 <span>(6 used & new offers)</span></p>
                </div>
                <div className="pricing">
                    <p>$</p>
                    <p className="product-price">149</p>
                </div>
                <div className="delivery-location">
                    <p>Delivery <span>Mon, Jan 1</span></p>
                    <p>Ships to Nigeria</p>
                </div>
            </div>
        </div>
    )
}

export default Shop_page_item