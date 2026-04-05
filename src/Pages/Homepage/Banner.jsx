import React from 'react';
import BookImg from "../../assets/hero_img.jpg"

const Banner = () => {
    return (
        <div>
            <div class="hero bg-base-200 min-h-[70vh] my-8 rounded-2xl container mx-auto">
  <div class="hero-content flex-col lg:flex-row-reverse w-full justify-between">
    <img
      src={BookImg}
      class="max-w-sm rounded-lg shadow-2xl h-100"
    />
    <div className='space-y-8'>
      <h1 class="text-8xl font-bold">Books to freshern <br />your bookshelf</h1>
     
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;