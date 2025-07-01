
import { NavLink, Outlet } from 'react-router-dom'
import SubList from './SubList'
// import { useState, useEffect } from 'react'


const Homepage = () => {
    return (
        <>
            <SubList/>

            <Outlet />
        </> 
    )
}

export default Homepage