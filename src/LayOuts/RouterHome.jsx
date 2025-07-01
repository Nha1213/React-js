import React, { act } from "react";
import { Outlet, Link } from "react-router-dom";
import image from "../assets/Logo.png";
import "./groupStyle/Routerpage.css";
import { NavLink } from "react-router-dom";
import Scroll from "./WindowScroll";
import { Homepage } from "../controllerRouter";
import { useState, useEffect } from "react";
const RouterHome = () => {
  const [show, setShow] = useState(false);
  const Links = [
    {
      Label: "Homepage",
      path: "/",
    },
    // {
    //   Label: "Computer",
    //   path: "about",
    // },
    {
      Label: "ContectUs",
      path: "contect",
    },
    {
      Label: "Card",
      path: "Card",
    },

    {
      Label: "Login",
      path: "login",
    },
  ]
  return (
    <>
      <Scroll />
      <div className="controller_router">
        <main className="main">
          <div className="Navbar">
            <div className=" gap-2 d-flex align-items-center justify-content-center ">
              <img src={image} alt="" className="image" />
              <p className="text-white mt-3 fs-5">Nha Shop</p>
            </div>
            <div className={show ? "nav_edit activelist" : "nav_edit"}>
              <ul >

                {Links.map((index) => (
                  <li key={index.Label} onClick={() => setShow(false)}>
                    {
                      index.Label == "Card" ? <div style={{ display: "flex", gap: "5px" }}>
                      <NavLink to={index.path}> {index.Label}</NavLink> 
                      <div style={{ backgroundColor: "red", borderRadius: "50%", width: "20px", height: "20px", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>0</div></div> 
                      : <NavLink to={index.path}>{index.Label}</NavLink>
                    }
                  </li>
                ))}

              </ul>
              <table></table>
            </div>
            <div className="toggle" onClick={() => setShow(!show)}>
              {
                show ?
                  (
                    <i class="bi bi-x-lg"></i>
                  ) : (
                    <i class="bi bi-list"></i>
                  )
              }
            </div>
          </div>
        </main>
        <Outlet />

        <footer class="py-3 my-4" className="footer">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                <Link to={"/"}>Home</Link>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>{" "}
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                <Link to={"about"}>About</Link>
              </a>
            </li>
          </ul>
          <p class="text-center text-body-secondary">© 2025 Company, Inc</p>
        </footer>
      </div>
    </>
  );
};

export default RouterHome;
