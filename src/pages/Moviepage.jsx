import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { MovieContext } from "../context/Movie.context";
import MovieLayout from "../layout/MovieLayout";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import PosterSliderComp from "../components/PosterSlider/PosterSliderComp";
import MovieNavbar from "../components/navbar/MovieNavbar";
import MovieHeroComp from "../components/movieHero/MovieHeroComp";
import CastInfo from "../Cast/CastInfo";
const Moviepage = () => {
  const { id } = useParams();
  const [cast, setCasts] = useState([]);
  const [similars, setSimilars] = useState([]);
  const [recommendedMovie, setRecommendedMovie] = useState([]);
  const { Movie, setMovie } = useContext(MovieContext);

  const settingCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    infinte: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
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
    ],
  };

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCasts(getCast.data.cast);
    };
    requestCast();
    // console.log(casts);
  }, [id]);
  useEffect(() => {
    const requestSimilarMovie = async () => {
      const similarMovie = await axios.get(`/movie/${id}/similar`);
      setSimilars(similarMovie.data.results);
    };
    requestSimilarMovie();
    // console.log(casts);
  }, [id]);
  useEffect(() => {
    const requestRecommended = async () => {
      const getrecommended = await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovie(getrecommended.data.results);
    };
    requestRecommended();
  }, [id]);
  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);
  return (
    <>
      {/* <MovieNavbar/> */}
      <MovieHeroComp />
      <div className="my-12 container px-4 lg-ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">about the movie</h1>
          <p>{Movie.overview}</p>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl my-3">
            {" "}
            Applicables Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full " />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold  text-xl">
                  Visa Stream offer
                </h3>
                <p className="text-gray-600">
                  get 50% off upto INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 font-bold  text-xl">Flim pass</h3>
                <p className="text-gray-600">
                  get 50% off upto INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* cast sliders */}
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
          <Slider {...settingCast}>
            {cast.map((castData,index) => (
              <CastInfo
              key={index}
                image={castData.profile_path}
                name={castData.original_name}
                role={castData.character? castData.character:castData.department}
              />
            ))}
          </Slider>
        </div>
        {/* recommended movie sliders */}
        <div className="my-8">
          <hr />
          <PosterSliderComp
            config={settings}
            posters={recommendedMovie}
            title="Recommended Moives"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default MovieLayout(Moviepage);
