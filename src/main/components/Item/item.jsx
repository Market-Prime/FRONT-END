import React from "react";

const item = (props) => {
  return (
    <div className="container">
      <div className="item">
        <img src={props.image} alt="" />
        <div className="info1">
          <p>{props.name}</p>
          <img src={props.emoji} alt="" className="emoji" />
        </div>
        <p>{props.price}</p>
        <div className="btns">
          <button className="btn-small">Virtual Try-On</button>
          <button className="btn-small2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default item;
