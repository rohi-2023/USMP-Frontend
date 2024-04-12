import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../image/sliders/slide1.jpg"
import slide2 from '../image/sliders/slide2.png'
import slide3 from '../image/sliders/slide3.png'
import slide4 from '../image/sliders/slide4.png'
import slide5 from '../image/sliders/slide5.png'
// import slide6 from '../image/sliders/slide6.jpg'
// import slide7 from '../image/sliders/slide7.jpg'
// import slide8 from '../image/sliders/slide8.jpg'


function Slides() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    cssEase: "linear",
    adaptiveHeight:true
  };
  return (
    <React.Fragment>
        <div  className="  mx-1 sm:mx-5 my-2 slider-container overflow-hidden">
        <Slider {...settings} className=" ">
              <img src={slide1} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3  rounded-md"/>
              <img src={slide2} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3 rounded-md"/>
              <img src={slide5} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3 rounded-md"/>
              <img src={slide3} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3 rounded-md"/>
              <img src={slide4} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3 rounded-md"/>
              {/* <img src={slide6} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3 rounded-md"/>
              <img src={slide7} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3 rounded-md"/>
              <img src={slide8} alt=""  className=" imgT w-full h-auto sm:w-1/2 md:w-1/3 rounded-md"/> */}
        
        </Slider>
        </div>
    </React.Fragment>
  );
}

export default Slides;