import React from 'react';
import banner from "../assets/bookbanner.jpg";

const Banner = () => {
    return (
        <div>
     <div className="hero bg-base-200 min-h-screen px-7">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Find Special!</h1>
      <p className="py-3">
      "Unlock a World of
      Stories – Find Your Next Favorite Book at Brother's Book House.
      </p>
      <button className="btn btn-primary">Buy Book</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;