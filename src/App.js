import React, {useEffect} from 'react'
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom'
import {NavBottom, NavUpperBottom, NavUpperBottomMini} from './Components/BottomNav'
import TopNav from './Components/TopNav';
import {AboutUs} from './SubPages/AboutUs';
import { Services } from './SubPages/Services';
import OurHistory from './SubPages/OurHistory';


function App () {

useEffect= () => {
    
}

    return (
        <>
<TopNav/>

        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about-us' element={<AboutUs />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/about-us/our-history' element={<OurHistory />}/>
        </Routes>

    <NavUpperBottomMini/>
    <NavUpperBottom/>
<NavBottom/>
        </>
    )
}

export default App;