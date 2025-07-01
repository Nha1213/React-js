import React, { use } from 'react'
import ProductDiscount from '../data/data';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Experiences = () => {
  const [filteredProducts, setFilteredProducts] = useState(ProductDiscount.filter(item => item.category == 'Speakers'));

  return (
        <>
            <div className='all_products'>
                {
                  filteredProducts.length > 0 ? (
                    filteredProducts.map(({ id, image, title, price }) => (
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
                  ):(
                    <div>
                      Products not found
                    </div>
                  )
                }
            </div>
        </>
    );
}

export default Experiences
