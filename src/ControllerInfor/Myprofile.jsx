// import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./controlStyle/Myprofile.css";
import ProductDiscount from "../data/data";

const Myprofile = ({}) => {
    // const photos = useLoaderData(); // ✅ use the loader data directly
    return (
        <>
        
            <div className='all_products'>
                {ProductDiscount.map(({ id, image, title, price }) => (
                    <div key={id} className='product_card'>
                        <Link key={id} to={id.toString()}>
                            <div className='all_product'>
                                <div className='controll_image'>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='controll_title'>
                                    <p>{title}</p>
                                </div>
                            </div>
                        </Link>
                        <div className='controll'>
                            <Link key={id} to={id.toString()} >
                                <div>
                                    <p>{price}$</p>
                                    <button className='controll_btn'>View Detail</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

// ✅ This function will be called automatically by react-router loader
// export const UseDataLoader = async () => {
//     const url = 'https://fakestoreapi.com/products';
//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Response("Failed to load", { status: 404 });
//     }

//     return response.json();
// };

export default Myprofile;
