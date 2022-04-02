import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const randomNumbers = () => {
  var nums = [...Array(36).keys()].map(x => x + 1),
  ranNums = [],
  i = nums.length,
  j = 0;
  while (i--) {
    j = Math.floor(Math.random() * (i+1));
    ranNums.push(nums[j]);
    nums.splice(j,1);
  }
  return ranNums;
}

export default function PhotosCarousel ({withIndicators}) {
  return (
    <div>
      <Carousel indicators={withIndicators} styles={{backgroundColor: '#fff'}}>
        {
          randomNumbers().map((photo, index) => {
            return (
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  key={index} 
                  alt={'img-' + index} 
                  width='95%' 
                  height={'95%'}
                  src={'/images/img('+ photo +').jpg'}
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
      <div className='gradientback' ></div>
      <div className='carousel-caption'>
        <h5 className='carousel-text'>
          “A felicidade íntima da família é a beleza que nos traz para mais perto de Deus.” <br/>
          (São Luís Martin)
        </h5>
      </div>
    </div>
  )
}
