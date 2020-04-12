import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';


const SlideView = () => {
  return (
    <div>
      <Slider
        speed={500}
        slidesToShow={2}
        slidesToScroll={1}
        infinite={true}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Slider>
    </div>
  )
}

export default SlideView
