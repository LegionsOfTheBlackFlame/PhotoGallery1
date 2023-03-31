import React from "react";
import "./App.css";
import img1 from "./img1.jpg";
import img2 from "./img2.webp";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.webp";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.jpg";

function PhotoGallery() {
  return (
    <div className="App">
      <div className="GalleryCont">
        <div className="PhotosCont">
          <div className="PhotoCont1 photos">
            <img src={img1} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont2 photos">
            <img src={img2} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont3 photos">
            <img src={img3} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont4 photos">
            <img src={img4} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont5 photos">
            <img src={img5} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont6 photos">
            <img src={img6} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont7 photos">
            <img src={img7} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont8 photos">
            <img src={img8} alt="a happy turtle swimming" />
          </div>
          <div className="PhotoCont9 photos">
            <img src={img9} alt="a happy turtle swimming" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
