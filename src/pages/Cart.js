import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Button from '../utilities/Button'
import Items_In_Cart from '../utilities/Items_In_Cart'


function Cart() {
    return (
        <>
            {/* <Navigation /> */}
            <div className='cartPage'>
                <div className="cartPage__container">

                    <div className="cartItem__col">
                        <div className="cart-header">
                            <div className="cart-header-container">
                                <h2>Shopping Cart</h2>
                                <span>Select all items</span>
                            </div>

                            <div className="items-added-to-cart">
                                <p className="price-label">Price</p>
                                <Items_In_Cart />

                            </div>

                        </div>
                    </div>

                    <div className="total-Item-In-Cart">
                        <div className="total-Item-In-Cart_container">
                            <div className="total-item-header">
                                <h3>Subtotal (1 item): $19.93</h3>
                                <input type="checkbox" name="" id="" />
                                <span> This order contains a gift</span>
                            </div>
                            <Button text='Continue' />
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart