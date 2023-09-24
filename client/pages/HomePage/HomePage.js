import React from 'react';
import Slider from 'react-slick';

import SliderArrow from '../../components/utils/SliderArrow';
import Slide from '../../components/utils/Slide';

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow />,
  };

  return (
    <React.Fragment>
      <div className='w-full h-40 my-12'>
        <h1 className='text-center text-6xl mb-5'>Private Tide</h1>
        <p className='text-center italic text-1xl'>
          a user-friendly way to manage your private studio
        </p>
      </div>

      <div className='w-full h-96'>
        <Slider {...settings} className=' w-1/2 h-full my-0 mx-auto  '>
          <Slide>Manage your entire studio from one user interface</Slide>
          {/* Expects an image prop to be an object with src and alt */}
          <Slide>Create and retrieve student data</Slide>

          <Slide>Organize your studio by schools</Slide>
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
