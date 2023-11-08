import React from 'react';

const Card = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
      <div className="shop-block-one">
        <div className="inner-box">
          <figure className="image-box">
            <img src="assets/images/resource/shop/shop-1.jpg" alt=""/>
          </figure>
          <div className="lower-content">
            <h5>Cold Crewneck Sweater</h5>
            <span className="price">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
