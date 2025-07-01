import React, { useState } from 'react'
import ProductDiscount from "../data/data";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Products = () => {
  const [discountShow, setDiscountShow] = useState(ProductDiscount.filter(item => item.discount));
  return (
    <>
      <div className='all_products'>
        {
          discountShow.length > 0 ? (discountShow.map(({ id, image, title, price, discount }) => (
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
                    <p>{price}$ <label htmlFor="">{discount}</label></p>
                    <button className='controll_btn'>View Detail</button>
                  </div>
                </Link>
              </div>
            </div>
          ))) : ("No Discount")

        }
      </div>
    </>
  );
}

export default Products