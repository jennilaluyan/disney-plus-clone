import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slide1 from '../assets/images/slider-scales.jpg'
import slide2 from '../assets/images/slider-scale.jpg'
import slide3 from '../assets/images/slider-badging.jpg'
import slide4 from '../assets/images/slider-badag.jpg'
import styled from 'styled-components';

export const ImgSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <section>
            <Carousel {...settings} className='mt-5'>
                <div>
                    <img src={slide1} alt="" />
                </div>
                <div>
                    <img src={slide2} alt="" />
                </div>
                <div>
                    <img src={slide3} alt="" />
                </div>
                <div>
                    <img src={slide4} alt="" />
                </div>
            </Carousel>
        </section>
    )
}

const Carousel = styled(Slider)`
    .slick-arrow {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 10;
    }
    
    &:hover .slick-arrow {
        opacity: 1;
        height: 100%;
        transition: opacity 0.2s ease 0s;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        left: -65px;
    }

    .slick-next {
        right: -65px;
    }
`