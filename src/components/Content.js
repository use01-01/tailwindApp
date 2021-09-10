import React from 'react';
import ImageOne from '../images/duck-spinach-cauliflower.jpg';
import ImageTwo from '../images/meal-prep-burrito-bowls.jpg';

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" class="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p class="mb-2">Crispy, delicious, and nutrious</p>
          <span>$26</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImageTwo} alt="" class="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p class="mb-2">Crispy, delicious, and nutrious</p>
          <span>$26</span>
        </div>
      </div>
    </>
  );
};

export default Content;
