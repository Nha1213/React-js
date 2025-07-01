import React from 'react'
import { NavLink } from 'react-router-dom'
import "./style/Home.css"
const SubList = () => {
    return (
        <div>
            <div className='list_nav'>
                <p className='sub_list_nav'><a className='a' href=""><NavLink to={"/"}>All Products</NavLink></a></p>
                <p className='sub_list_nav'><a className='a' href=""><NavLink to={"Information"}>Phones</NavLink></a></p>
                <p className='sub_list_nav'><a className='a' href=""><NavLink to={"Experiences"}>Speakers</NavLink></a></p>
                <p className='sub_list_nav'><a className='a' href=""><NavLink to={"Project"}>Ipads</NavLink></a></p>
                <p className='sub_list_nav'><a className='a' href=""><NavLink to={"Discount"}>Discount</NavLink></a></p>
            </div>
        </div>
    )
}

export default SubList