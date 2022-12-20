import React from "react";
import Img from "../images/profile-picture.png";

const Info = () => {
  return (
    <div>
      <img src={Img} alt="Igor Dzilit" />
      <div className="info--container">
        <h1 className="info--header">Igor Dzilit</h1>
        <h3 className="info--job">Frontend developer</h3>
        <p className="info--web">igordzilit.io</p>
        <a href="#" className="info--btn">
          <i class="fa-solid fa-envelope"></i> Mail
        </a>
      </div>
    </div>
  );
};

export default Info;
