import React, { createContext, useState } from "react";

export const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [Movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });
  return (
    <MovieContext.Provider value={{ Movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
