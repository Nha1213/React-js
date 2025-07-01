import React, { useState } from 'react';
import ProductDiscount from '../data/data';
import { Link } from 'react-router-dom';

const Information = () => {
  const [filter, setFilter] = useState( ProductDiscount.filter(
    (item) => item.category === "Phones"
  ));
  // Filter the products by title (case-insensitive)

  return (
    <>
      <div className='all_products'>
        {filter.length > 0 ? (
          filter.map(({ id, image, title, price }) => (
            <div key={id} className='product_card'>
              <Link to={id.toString()}>
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
                <Link to={id.toString()}>
                  <div>
                    <p>{price}$</p>
                    <button className='controll_btn'>View Detail</button>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div>Products Not Found</div>
        )}
      </div>
    </>
  );
};

export default Information;
