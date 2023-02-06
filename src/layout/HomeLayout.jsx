import React from 'react'
import Navbar from '../components/navbar/Navbar'

const HomeLayout = 
(Component)=> 
({...props})=>{
    return(
        <div>
            <Navbar/>
            <Component {...props}/>
            <div>Footer</div>
        </div>
    )
}

export default HomeLayout