import "react-slideshow-image/dist/styles.css"
import { Fade, Zoom, Slide } from "react-slideshow-image"
// import slide1 from '../images/slider1.jpg'

const slider = [
    { image: 'https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg' },
    { image: 'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg' },
    { image: 'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg' },
    { image: 'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg' },
    { image: 'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg' },
    { image: 'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg' },
];


const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundSize: "cover"
}

function Image_slider() {
    return (
        <div className="slider">
            <Fade>
                {slider.map((slide, index) => (
                    <div key={index}>

                        <div style={divStyle}>
                            <h1>Slider... </h1>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>

    )
}

export default Image_slider