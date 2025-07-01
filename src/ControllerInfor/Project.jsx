import React from 'react'
import ProductDiscount from '../data/data';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Project = () => {

  const [filtercategory, setfiltercategory] = useState(ProductDiscount.filter(item => item.category === "Ipads"));
  return (
    <>
      <div className='all_products'>
        {
          filtercategory.length > 0 ? (
            filtercategory.map(({ id, image, title, price }) => (
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
            ))
          ) : (
            <div>No products found</div>
          )
        }
      </div>
    </>
  );
}

export default Project
