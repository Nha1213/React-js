import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './controlStyle/Onlypage.css';
import ProductDiscount from '../data/data';
import Cartpage from './Cartpage';

const OnlyPage = () => {
  const { id } = useParams();
  const getData = ProductDiscount.find((item) => item.id == id);

  const [stockList, setStockList] = useState([]);
  const [isStorageLoaded, setIsStorageLoaded] = useState(false);

  // Show loading if product not found yet
  if (!getData) {
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading...</p>;
  }

  // ✅ Load cart from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem('stockList');
    if (stored) {
      setStockList(JSON.parse(stored));
    }
    setIsStorageLoaded(true);
  }, []);

  // ✅ Save cart to localStorage only after it's loaded
  useEffect(() => {
    if (isStorageLoaded) {
      localStorage.setItem('stockList', JSON.stringify(stockList));
    }
  }, [stockList, isStorageLoaded]);

  // ✅ Add item to cart (optional: prevent duplicates)
  const handleAddToCart = () => {
    if (!isStorageLoaded) return;

    const alreadyInCart = stockList.find(item => item.id === getData.id);
    if (alreadyInCart) return;

    const item = {
      id: getData.id,
      image: getData.image,
      title: getData.title,
      price: getData.price,
      discount: getData.discount,
      description: getData.description,
    };
    // setStockList(prev => [...prev, item]);
    const updatedList = [...stockList, item];
    setStockList([...updatedList]);


  };


  const handleRemoveItem = (itemId) => {
    const index = stockList.findIndex(item => item.id === itemId);
    if (index === -1) return;

    const updatedList = [...stockList];
    updatedList.splice(index, 1);
    setStockList(updatedList);
  };

  const handleClearCart = () => {
    setStockList([]);
    localStorage.removeItem('stockList');
  };

  return (
    <>
      <div className="Only_page">
        <div className="controll_image_only">
          <img src={getData.image} alt={getData.title} />
        </div>

        <div className="controll_all_title">
          <div className="controll_price_all">
            <p className="price">Price: {getData.price}$</p>
            <p className="price">Rating: {getData.rating.rate}</p>
          </div>

          <div>
            <p className="titlephone">{getData.title}</p>
          </div>

          <p className="description">{getData.description}</p>

          <div className="controll_button">
            <button
              className="button btn btn-primary"
              onClick={handleAddToCart}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Add to Cart
            </button>

            <button className="button btn btn-success"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Open Cart
            </button>
          </div>

        </div>

        {/* ✅ Cart Offcanvas */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            {stockList.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {stockList.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.title} style={{ width: "80px" }} />
                    <p>{item.title} price:{item.price}$ discount:{item.discount}{item.discount == null?"0%":"%"}</p>
                    <div>
                      <button
                        style={{ padding: "0.4rem 1.1rem" }}
                        className="btn btn-danger mt-2"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </button>

                      <button
                        style={{ padding: "0.4rem 2rem" }}
                        className='btn btn-success mt-1 '
                        onClick={() => setStockList([...stockList, item])}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="total_cart">
            <p>Products: {stockList.length}</p>
            <p className="total">
              Total: ${stockList.reduce((total, item) => total + item.price * (1 - item.discount / 100), 0).toFixed(2)}
            </p>
          </div>

          <button className="btn-Clear bg-danger mt-2" onClick={handleClearCart}>Clear</button>
          <button className="btn_checkout bg-success">Checkout</button>
        </div>

        {/* Manual toggle button for cart (for testing) */}
      </div>
      {/* {stockList.map((item, index) => (
        <Cartpage
          key={index}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          discount={item.discount}
        />
      ))} */}
    </>
  );

};


export default OnlyPage;
