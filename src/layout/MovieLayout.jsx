import React from 'react'
import MovieNavbar from '../components/navbar/MovieNavbar'

const MovieLayout =  
(Component)=> 
({...props})=>{
    return(
        <div>
            <MovieNavbar/>
            <Component {...props}/>
            <footer>Footer</footer>
        </div>
    )
}


export default MovieLayout