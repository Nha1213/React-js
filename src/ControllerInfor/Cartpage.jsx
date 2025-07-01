import React from 'react';

const Cartpage = ({ id, image, title, price, discount, onRemove }) => {

  return (
    // <div className="cart-item">
    //   {/* <img src={image} alt={title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
    //   <div>
    //     <h5>{title}</h5>
    //     <p>Price: ${price}</p>
    //     <p>Discount: {discount}</p>
    //     {onRemove && (
    //       <button className="btn btn-sm btn-danger mt-2" onClick={() => onRemove(id)}>Remove</button>
    //     )}
    //   </div> */}
    // </div>
    <h1 style={{ color: 'red', textAlign: 'center', fontSize: '2rem', fontFamily: 'poppins', marginTop: '20rem', marginBottom: '10rem'}}>Page not found...</h1>
  );
};

export default Cartpage;

