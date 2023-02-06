import axios from "axios";
import React, { useEffect, useState } from "react";
import EntertainmentCom from "../components/Entertainment/EntertainmentCom";
import HeroCarouslComp from "../components/HeroCarousel/HeroCarouslComp";
import PosterSliderComp from "../components/PosterSlider/PosterSliderComp";
import HomeLayout from "../layout/HomeLayout";

const Homepage = () => {
  const [recommendedMovie, setRecommendedMovie] = useState([]);
  const [premierMovie, setPremierMovie] = useState([]);
  const [onlineStreamEvent, setOnlineStreamEvent] = useState([]);

  // get request for top rated movie
  useEffect(() => {
    const requestTopRatedMovie = async () => {
      const getrecommended = await axios.get(
        "/movie/popular"
      );
      setRecommendedMovie(getrecommended.data.results);
    };
    requestTopRatedMovie();
  }, []);

  // get request for premier movies
  useEffect(() => {
    const requestPremierMovie = async () => {
      const getPremierMovies = await axios.get(
        "/movie/top_rated"
      );
      setPremierMovie(getPremierMovies.data.results);
    };
    requestPremierMovie();
  });
  // request for online events
useEffect(()=>{
  const requestForOnlineEvents = async ()=>{
    const getOnlineEvents = await axios.get("/movie/upcoming");
    setOnlineStreamEvent(getOnlineEvents.data.results);
  };
  requestForOnlineEvents();
})
  return (
    <>
      <HeroCarouslComp />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The Best of Entertainment
        </h1>
        <EntertainmentCom />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComp
          title="Recommended Movies"
          subTitle="List Of Recommended Movies"
          posters={recommendedMovie}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12">
        <div className="container mx-auto px-4 md:px-11 my-4 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <PosterSliderComp
              title="premiers"
              subject="Brand new relases friday"
              posters={premierMovie}
              isDark={true}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSliderComp
          title="Online streaming events"
          subject=""
          posters={onlineStreamEvent}
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomeLayout(Homepage);
