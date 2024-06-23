
import React from "react";
import "../styles/Header.css";
import image1 from "../asset/image/Michael.png";
// import verified from "../asset/logo/verified.png";
import search from "../asset/logo/search.png"

const Header = ({ song }) => {
  return (
    <div className="header">
      <div className="navbar">
      <div className="navbar-left">
        <p>Music </p>
        <p>Podcast</p>
        <p>Live </p>
        <p>Radio </p>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <img  style={{height:20}}src={search} alt="" />
      </div>
    </div>
      <div className="artist-info">
        <div>
          <div style={{display:'flex',alignItems:"center"}}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6.92307"
                y="8.46153"
                width="15.3846"
                height="14.6154"
                fill="#F6F6F6"
              />
              <path
                d="M15.7125 27.6H14.3812L11.25 24.375H6.61874L5.62499 23.4375V18.9L2.45624 15.675V14.3437L5.62499 11.1187V6.5625L6.61874 5.625H11.25L14.3812 2.41875H15.7125L18.9375 5.625H23.4937L24.4312 6.54375V11.1187L27.6375 14.3437V15.675L24.375 18.9V23.4375L23.4375 24.375H18.9375L15.7125 27.6ZM12.6187 19.65H13.95L21.0187 12.5812L19.6875 11.25L13.2937 17.6625L10.7062 15.075L9.37499 16.4062L12.6187 19.65Z"
                fill="url(#paint0_linear_1_146)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_146"
                  x1="15.0469"
                  y1="2.41875"
                  x2="35.4157"
                  y2="15.3084"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#53E0FF" />
                  <stop offset="1" stop-color="#1E94E9" />
                </linearGradient>
              </defs>
            </svg>
            <p style={{marginLeft:12 ,fontSize:12}}>Verified Artist</p>

          </div>
          <h2>Michael Jackson</h2>
          <p style={{fontSize:12}}>27,882,501 monthly listeners</p>
        </div>
        <img src={image1} alt={song.title} />
      </div>
    </div>
  );
};

export default Header;
