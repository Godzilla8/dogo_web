import React from "react";

const ProductCard = ({ card }) => {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={card.img} alt="" />
      </div>
      <div className="card-title">{card.title}</div>
      <div className="card-desc scrollbar">{card.desc}</div>
      <div className="launch" style={{ color: "#fff3d9" }}>
        <small>
          <i>LAUNCH DATE:</i> TBR
        </small>
      </div>
    </div>
  );
};

export default ProductCard;
