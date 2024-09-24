import React from "react";
import "./style.css";
function Tourist({ ratings, img, desc, placeName, whenToVisit, price }) {
  return (
    <>
      <div className="tourist-card">
        <img src={img} alt="tourist-img" />
        {price < 12000 ? (
          <span className="pricerate">cheeper</span>
        ) : price >= 12000 ? (
          <span className="pricerate">costly</span>
        ) : (
          <></>
        )}

        <div className="tourist-card-body">
          <h2 className="card-title">{desc}</h2>
          <div className="card-place">
            <span>{placeName}</span>
            <span>
              {whenToVisit === "Summer" ? (
                <span className="summer">
                  <p className="summer1"> </p>Summer
                </span>
              ) : whenToVisit === "Winter" ? (
                <span className="winter">
                  <span className="winter1"></span> Winter{" "}
                </span>
              ) : null}
            </span>
          </div>
          <div className="card-priceRate">
            <p>Price {price}</p>
            <p>Rating:: {ratings}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tourist;
