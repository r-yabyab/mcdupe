import React from 'react'
import HomePage from './Components/HomePage';
import { Routes, Route } from 'react-router-dom'
import {NavBottom, NavUpperBottom, NavUpperBottomMini} from './Components/BottomNav'


function App () {
    return (
        <>

        <Routes>
            <Route path='/' element={<HomePage />}/>
        </Routes>
        
    <NavUpperBottomMini/>
    <NavUpperBottom/>
<NavBottom/>
        </>
    )
}

export default App;