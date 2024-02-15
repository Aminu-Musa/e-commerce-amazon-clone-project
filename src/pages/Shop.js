import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Shop_page_item from "../utilities/Shop_page_item"
import { FaAngleLeft } from "react-icons/fa6";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";


function Shop() {
  return (
    <div>
      <div className="shop-pages">
        <div className="shop-pages-container">

          <div className="col-1-shop-filter small-font">
            <div>
              <p className="bold-font small-font">More-sustainable Products</p>
              <input type="checkbox" name="" id="" /> Climate Pledge Friendly
            </div>
            <div>
              <p className="bold-font">Department</p>
              <p className="small-font">International Shipping Electronics</p>
              <p className="small-font"><FaAngleLeft /> Electionics</p>
              <p className="bold-font small-font">Electronics Accessories & Supplies</p>

              <ul className="small-font other-shop-link">
                <li>Camera & Photo Accessories </li>
                <li>Cell Phone Accessories</li>
                <li>GPS System Accessories</li>
                <li>Office Electronics Accessories</li>
                <li>Car Electronics Accessories</li>
                <li>Power Strips & Surge Protectors</li>
                <li>Telephone Accessories</li>
                <li>Electronics Cables</li>
                <li>Electronics Mounts</li>
                <li>Recording Microphones & Accessories</li>
                <li>Electronics Power Protection Products</li>
                <li>Electrical Cord Management</li>
                <li>Cable Organizer Bags & Cases</li>
              </ul>
            </div>

        <div className="stars">
        <p className="bold-font"> <span> Customer Reviews</span> </p>
            <p>
              <IoStarSharp  size={20}/>
              <IoStarSharp  size={20}/>
              <IoStarSharp  size={20}/>
              <IoStarSharp  size={20}/>
              <IoStarOutline  size={20}/> <span>& Up</span>
            </p>
            <p>
              <IoStarSharp size={20}/>
              <IoStarSharp size={20}/>
              <IoStarSharp size={20}/>
              <IoStarOutline size={20}/>
              <IoStarOutline size={20}/> <span>& Up</span>
            </p>
            <p>
              <IoStarSharp size={20}/>
              <IoStarSharp size={20}/>
              <IoStarOutline size={20}/>
              <IoStarOutline size={20}/>
              <IoStarOutline size={20}/> <span>& Up</span>
            </p>
            <p>
              <IoStarSharp size={20}/>
              <IoStarOutline size={20}/>
              <IoStarOutline size={20}/>
              <IoStarOutline size={20}/>
              <IoStarOutline size={20}/> <span>& Up</span>
            </p>
        </div>


            <div>
              <p className="bold-font small-font">Featured Brands</p>
              <p><input type="checkbox" name="" id="" />Amazon Basics</p>
              <p><input type="checkbox" name="" id="" /> Belkin</p>
              <p><input type="checkbox" name="" id="" />Anker</p>
              <p><input type="checkbox" name="" id="" />GE</p>
              <p><input type="checkbox" name="" id="" />APC</p>
              <p><input type="checkbox" name="" id="" />VELCRO Brand</p>
              <p><input type="checkbox" name="" id="" />Addtam</p>
            </div>
            <div>
              <p className="bold-font small-font">Price</p>
              <p>Under $25</p>
              <p>$25 to $50</p>
              <p>$50 to $100</p>
              <p>$100 to $200</p>
              <p>$200 & Above</p>
            </div>

            <div className="price-range">
              <input type="text" name="" id="" placeholder="$ Min" />
              <input type="text" name="" id="" placeholder="$ Max" />
              <input type="button" value="Go" />
            </div>

            <div>
              <p className="bold-font small-font">Deals & Discounts</p>
              <p>All Discounts</p>
              <p>Today's Deals</p>
            </div>

            <div>
              <p className="bold-font small-font">Business Type</p>
              <p><input type="checkbox" name="" id="" />Small Business</p>
            </div>

            <div>
              <p className="bold-font small-font">Amazon Certified</p>
              <p><input type="checkbox" name="" id="" />Works with Alexa</p>
            </div>

            <div>
              <p className="bold-font small-font">Top Brands in Electronics</p>
              <p><input type="checkbox" name="" id="" />Top Brands</p>
            </div>

            <div>
              <p className="bold-font small-font">Packaging Option</p>
              <p><input type="checkbox" name="" id="" />Frustration-Free Packaging</p>
            </div>

            <div>
              <p className="bold-font small-font">New & Upcoming</p>
              <p>New Arrivals</p>
            </div>

            <div>
              <p className="bold-font small-font">Certifications</p>
              <p><input type="checkbox" name="" id="" />Energy Star</p>
            </div>

            <div>
              <p className="bold-font small-font">Condition</p>
              <p>New</p>
              <p>Renewed</p>
              <p>Used</p>
            </div>

            <div>
              <p className="bold-font small-font">Availability</p>
              <p><input type="checkbox" name="" id="" />Include Out of Stock</p>
            </div>

          </div>









          <div className="col-2-main-shop">
            <h3>Results</h3>
            {/* GRID DISPLAY */}
            <div className="shop-item-container">
              <Shop_page_item />
              <Shop_page_item />
              <Shop_page_item />
              <Shop_page_item />
              <Shop_page_item />
              <Shop_page_item />
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Shop