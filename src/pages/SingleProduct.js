import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import productImage2 from '../images/single-product-image2.jpg'
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import Seller_Tags from "../utilities/Seller_Tags";
import berge from '../images/climate_friendly_berge.jpg'
import { BiMessageAltDetail } from "react-icons/bi";


function SingleProduct() {
  return (
    <div>
      <div className="single-product-pages">
        <div className="single-product-page-container">
          <div className="product-image-col">
            <div className="product-image">
              <img src={productImage2} alt="" />
            </div>
          </div>
          <div className="product-description-col">
            <h3>Airpods Case Cover, LELONG Soft Silicone Protective Case Cover with Keychain for Apple Airpods 2nd 1st Charging Case Men Women [Front LED Visible]</h3>

            <p>Visit the LELONG Store</p>

            <div className="flex">
              <p>
                <IoStarSharp size={20} />
                <IoStarSharp size={20} />
                <IoStarSharp size={20} />
                <IoStarSharp size={20} />
                <IoStarOutline size={20} />
              </p>

              <p> 10,751 ratings</p>
              <p> 10 answered questions</p>
            </div>
            <Seller_Tags text="Amazon's Choice" />
            <span>in Headphone Cases by LELONG</span>
            <p className="nature"><img src={berge} alt="" />Climate Pledge Friendly</p>
            <p>10K+ bought in past month</p>
            <p>$8.99</p>
            <p>$27.40 Shipping & Import Fees Deposit to Nigeria Details</p>

            <div>
              <p>About this item</p>
              <ul>
                <li>✅ 100% Fully fit the Airpods 2/1 Charging Case (Mar. 2019/2016 Released), it won't be any gaps. Please note it's not compatible with Apple AirPods Pro(Oct. 2019 Released) or AirPods 3rd generation(2021 Released).</li>

                <li>
                  ✅ Our case will not affect the wireless charging of your airpods case.
                </li>

                <li>✅ Compatible with Airpods 1 and 2 charging case,Our cover help your Airpods charing case prevent scratches and abrasion.</li>

                <li>✅ Additional carabiner keychain for easy carrying, which can be fixed your Airpods case on a handbag or backpack.</li>

                <li>
                ✅ Soft environmentally friendly silicone materal bring you the perfect touch,and easy to clean surface stains.
                </li>
              </ul>

              <p> <BiMessageAltDetail/> Report an issue with this product or seller</p>
              <p><span>Note:</span> Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.</p>
            </div>
          </div>





          <div className="add-to-cart-col">
            <p>$8.99</p>
            
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SingleProduct