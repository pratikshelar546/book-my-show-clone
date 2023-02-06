import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";
import MovieDetails from "./MovieDetails";

const MovieHeroComp = () => {
  const { Movie } = useContext(MovieContext);
  const genres = Movie.genres?.map(({ name }) => name).join(" ");
  const language = Movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");
  //   console.log(genres);
  return (
    <>
      {/* mobile screen size */}
      <div>
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`}
            alt="xover psoter"
            className="m-1 rounded"
            style={{ width: "calc(100%-2rem)" }}
          />
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          <div className="flex flex-col-reverse gap-3 px-4 my-3">
            <div className="text-black flex flex-col gap-2 md:px-4">
              <h4>{Movie.vote_count} ratings</h4>
              <h4> {language} </h4>
              <h4>
                {" "}
                {Movie.runtime} Min | {genres}
              </h4>
            </div>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
            <button className="bg-red-500 text-white cursor-pointer w-full py-3 font-semibold rounded-lg">
              Rent ₹ 149
            </button>
            <button className="bg-red-600 text-white cursor-pointer w-full py-3 font-semibold rounded-lg">
              Buy ₹ 599
            </button>
          </div>
        </div>
  {/* Large screen size */}
        <div
          className="relative hidden w-full lg:block "
          style={{ height: "30rem" }}
        >
          <div
            className="absolute z-10 w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(34,34,34) 24.95%, rgba(34,34,34) 38.3%, rgba(34,34,34,0.04) 97.47%, rgb(265,265,265,0)100%)",
            }}
          />
        <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
          <div className="w-64 h-96">
            <img src={`https://image.tmdb.org/t/p/original${Movie.poster_path}`} alt="background poster"  className="w-full h-full rounded-lg"/>
            
          </div>
          <div>
            <MovieDetails Movie={Movie}/>
          </div>
        </div>
        <img src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path?Movie.backdrop_path:Movie.poster_path}`} alt="movie poster"  className="absolute w-full h-full object-cover object-center"/>
        </div>
      </div>
    </>
  );
};

export default MovieHeroComp;
