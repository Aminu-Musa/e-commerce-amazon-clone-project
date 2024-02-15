import colored_logo from '../images/logo_colored.png'
import up_down_arrow from '../images/up_down_arrow.png'
import globe from '../images/globe.png'
import trustImg from '../images/trust_sign.png'
import nigeriaFlag from '../images/nigeria_flag.png'
import Footer_multiple_links from '../utilities/Footer_multiple_links'

function Footer() {
    let date = new Date()
    date = date.getFullYear()
    return (
        <>
            <footer>
                <div className="back_to_top" id="back_to_top">
                    <a href="#top"> Back to top</a>
                </div>

                <div className="top_footer" id="footer_1">
                    <div className="top_footer_container">
                        <ul className="footer_list">
                            <div className="col col1">
                                <p>Get to Know Us</p>
                                <li>Career</li>
                                <li>    About Amazon</li>
                                <li>    Investor Relations</li>
                                <li>    Amazon Devices</li>
                                <li>    Amazon Science</li>
                            </div>

                            <div className="col col2">
                                <p>Make Money with Us</p>
                                <li>Sell products on Amazon  </li>
                                <li> Sell on Amazon Business</li>
                                <li>Sell apps on Amazon</li>
                                <li> Become an Affiliate</li>
                                <li>Advertise Your Products</li>
                                <li> Self-Publish with Us</li>
                                <li> Host an Amazon Hub</li>
                                <li> <span> › </span>See More Make Money with Us</li>
                            </div>
                            <div className="col col3">
                                <p>Amazon Payment Products</p>
                                <li>Amazon Business Card</li>
                                <li>Shop with Points</li>
                                <li>Reload Your Balance</li>
                                <li>Amazon Currency Converter</li>
                            </div>

                            <div className="col col4">
                                <p>Let Us Help You</p>
                                <li>Amazon and COVID-19</li>
                                <li>Your Account</li>
                                <li>Your Orders</li>
                                <li>Shipping Rates & Policies</li>
                                <li>Returns & Replacements</li>
                                <li>Manage Your Content and Devices</li>
                                <li>Amazon Assistant</li>
                                <li>Help</li>
                            </div>
                        </ul>
                    </div>
                </div>


                <div className="footer_1_buttom_footer">
                    <>
                        <div className="footer_1_buttom_footer_container">
                            <div className="brand">
                                <img src={colored_logo} alt="" />
                            </div>

                            <div className="lang_currency">
                                <div>
                                    <a href="#">
                                        <div className='world'><img src={globe} alt="" /></div>
                                        <p className='language'>English</p>
                                        <div className='up_down_arrow'>
                                            <img src={up_down_arrow} alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div>
                                    <a href="#">
                                        <span>₦ NGN-Nigeria. Naira</span>
                                    </a>
                                </div>

                                <div >
                                    <a href="#">
                                        <div className='flag'>
                                            <div><img src={nigeriaFlag} alt="" /></div>
                                        </div>
                                        <p>Nigeria</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>

                </div>

                <div className="last_footer">
                    <div className="last_footer_container">
                        <Footer_multiple_links header='Amazon Music' linkName="Stream millions of songs" />
                        <Footer_multiple_links header='Amazon Ads' linkName="Reach customers wherever they spend their time" />
                        <Footer_multiple_links header='6pm' linkName="Score deals on fashion brands" />
                        <Footer_multiple_links header='AbeBooks' linkName="Books, art & collectibles" />
                        <Footer_multiple_links header='ACX' linkName="Audiobook Publishing Made Easy" />
                        <Footer_multiple_links header='Sell on Amazon' linkName="Start a Selling Account" />
                        <Footer_multiple_links header='Amazon Business' linkName="Everything For Your Business" />
                        <Footer_multiple_links header='Amazon Global' linkName="Ship Orders Internationally" />
                        <Footer_multiple_links header='Home Services' linkName="Experienced Pros Happiness Guarantee" />
                        <Footer_multiple_links header='Amazon Web Services' linkName="Scalable Cloud Computing Services" />
                        <Footer_multiple_links header='Audible' linkName="Listen to Books & Original Audio Performances" />
                        <Footer_multiple_links header='Box Office Mojo' linkName="Find Movie Box Office Data" />
                        <Footer_multiple_links header='Goodreads' linkName="Book reviews & recommendations" />
                        <Footer_multiple_links header='IMDb' linkName="Movies, TV & Celebrities" />
                        <Footer_multiple_links header='Kindle Direct Publishing' linkName="Indie Digital & Print Publishing Made Easy" />
                        <Footer_multiple_links header='Prime Video Direct' linkName="Video Distribution Made Easy" />
                        <Footer_multiple_links header='Shopbop' linkName="Designer Fashion Brands" />
                        <Footer_multiple_links header='Woot!' linkName="Deals and Shenanigans" />
                        <Footer_multiple_links header='Zappos' linkName="Shoes & Clothing" />
                        <Footer_multiple_links header='eero WiFi' linkName="Stream 4K Video in Every Room" />
                        <Footer_multiple_links header='Blink' linkName="Smart Security for Every Home" />
                        <Footer_multiple_links header='Neighbors App' linkName="Real-Time Crime & Safety Alerts" />
                        <Footer_multiple_links header='Amazon Subscription Boxes' linkName="Top subscription boxes – right to your door" />
                        <Footer_multiple_links header='PillPack' linkName="Pharmacy Simplified" />
                    </div>

                    <div className="privacy">
                        <div className="privacy_container">
                            <div className='flex'>
                                <a href="#">Conditions of Use</a>
                                <a href="">Privacy Notice</a>
                                <a href="#">Your Ads Privacy Choices</a>
                                <img src={trustImg} alt="guarantee" />
                            </div>
                            <p>© 1996-{date}, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer