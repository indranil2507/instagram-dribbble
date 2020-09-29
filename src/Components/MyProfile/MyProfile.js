import React from "react";
import { Instagram, Home, Notfication, Search, Plane, Stats, Settings, Group } from "../Icons";
import "./MyProfile.scss";

const MyProfile = () => (
  <div className="profile-container">
    <div className="header">
      <div className="icon-container">
        <Instagram />
      </div>
      <img
        className="instagram-logo"
        src={require("../../Assets/instagram.png")}
        alt="Instagram Logo"
      />
    </div>
    <div className="profile">
      <div className="Img-section">

        <div className="image-container">
          <img
            src={require("../../Assets/me.jpg")}
            className="img"
            alt={"profile"}
          />
        </div>
        <h4 className="name">Vishwajeet Raj</h4>
        <p className="location">Kolkata, India</p>
      </div>


      <div className="Numbers-section">

      <div className="box">
      <p className="num">421</p>
      <p className="num-text">posts</p>
      </div>

      <div className="box">
      <p className="num">53.3k</p>
      <p className="num-text">followers</p>
      </div>

      <div className="box">
      <p className="num">34</p>
      <p className="num-text">following</p>
      </div>

      </div>


      <div className="Links-section">

      <a className="link" href="/">
      <Home height={18} width={18} />
      <p className="link-txt">Feed</p>
      </a>

      <a className="link" href="/">
      <Search height={18} width={18} />
      <p className="link-txt">Explore</p>
      </a>

      <a className="link" href="/">
      <Notfication height={18} width={18} />
      <p className="link-txt">Notification</p>
      </a>
      
      <a className="link" href="/">
      <Plane height={18} width={18} />
      <p className="link-txt">Direct Message</p>
      </a>
      <a className="link" href="/">
      <Stats height={18} width={18} />
      <p className="link-txt">Stats</p>
      </a>
      </div>

      <a className="Button-section" href="/">
        <div className="btn"><Group /></div>
        <div className="btn"><Settings /></div>
      </a> 
    </div>
  </div>
);

export default MyProfile;
