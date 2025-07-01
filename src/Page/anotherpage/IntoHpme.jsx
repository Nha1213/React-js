import React from 'react'
import { Link } from 'react-router-dom' 
import "../style/Home.css";
const IntoHpme = () => {
    return (
        <>
            <div className='list_nav'>
                <p className='sub_list_nav'><a href=""><Link>Myprofile</Link></a></p>
                <p className='sub_list_nav'><a href=""><Link>Information</Link></a></p>
                <p className='sub_list_nav'><a href=""><Link>Experiences</Link></a></p>
                <p className='sub_list_nav'><a href=""><Link>Projects</Link></a></p>
            </div>
        </>
    )
}

export default IntoHpme
