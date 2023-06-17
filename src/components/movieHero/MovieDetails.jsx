import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieDetails =()=>{
    const{Movie} = useContext(MovieContext);;
    // const [isOpen ,setIsOpen] =useState(false);
    // const [price,setPrice] = useState(0);
    const genres = Movie.genres?.map(({name})=>name).join(", ");
    const language = Movie.spoken_languages
    ?.map(({ english_name }) => english_name)
    .join(", ");
//     const RentMovie = ()=>{
//     setIsOpen(true);
//     setPrice(149);
// }
// const BuyMovie =()=>{
//     setIsOpen(true);
//     setPrice(599);
// }
    return<>
        <section className="flex items-center" >
        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere"className="rounded-lg cursor-pointer" style={{width:"90px" ,height:"20px"}} />
        </section>
       <div className="flex flex-col gap-8 ">
        <h1 className="text-4xl font-bold text-white"> {Movie.original_title}</h1>
            <div className="text-white flex flex-col gap-2 ">
              <h4 className="text-2xl font-bold">{Movie.vote_average}%</h4>
              <h4> {language} </h4>
              <h4>
                {Movie.runtime} Min | {genres}
              </h4>
            </div>
            <div className="flex items-center gap-3  w-full">
            <button className="bg-red-500 text-white cursor-pointer w-full py-3 font-semibold rounded-lg">
              Rent ₹ 149
            </button>
            <button className="bg-red-600 text-white cursor-pointer w-full py-3 font-semibold rounded-lg">
              Buy ₹ 599
            </button>
          </div>
          </div>
    </>
}
export default MovieDetails;