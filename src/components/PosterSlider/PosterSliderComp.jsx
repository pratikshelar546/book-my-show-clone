import React from "react";
import Slider from "react-slick";
import PosterComponent from "../../poster/PosterComponent";

const PosterSliderComp = (props) => {
  const { title, isDark, posters } = props;
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    speed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        {/* <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subTitle}
        </p> */}
      </div>
      <Slider {...settings}>
         {posters.map((each,index)=>(
             <PosterComponent {...each} isDark={isDark} key={index}/>
             ))}
        {/* <PosterComponent/> */}
      </Slider>
    </>
  );
};

export default PosterSliderComp;
