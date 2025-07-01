import React from 'react'
import { Outlet } from 'react-router-dom'

const Anotherpage = () => {
  return (
    <div>
        <h1>Anotherpage</h1>
        <Outlet/>
    </div>
  )
}

export default Anotherpage
