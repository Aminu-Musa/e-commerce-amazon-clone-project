import React from 'react'
import Navigation from '../components/Navigation'
import Image_slider from '../components/Image_slider'
import Item_Grid_Layout from '../components/Item_Grid_Layout'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Image_slider />
            <Item_Grid_Layout />
            <Footer />
        </div>
    )
}

export default Home