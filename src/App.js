import React from 'react'
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom'
import {NavBottom, NavUpperBottom, NavUpperBottomMini} from './Components/BottomNav'
import TopNav from './Components/TopNav';
import {AboutUs} from './SubPages/AboutUs';
import { Services } from './SubPages/Services';


function App () {
    return (
        <>
<TopNav/>

        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/about-us' element={<AboutUs />}/>
            <Route path='/services' element={<Services />}/>
        </Routes>
        
    <NavUpperBottomMini/>
    <NavUpperBottom/>
<NavBottom/>
        </>
    )
}

export default App;