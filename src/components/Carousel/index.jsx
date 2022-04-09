import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const randomNumbers = () => {
  var nums = [...Array(21).keys()].map(x => x + 1),
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
              <Carousel.Item key={index} interval={2000}>
                <img
                  className="d-block w-100"
                  key={photo}
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
          {/* “A felicidade íntima da família é a beleza que nos traz para mais perto de Deus.” <br/>
          (São Luís Martin) */}
          "O tempo que vivemos é curto e frágil. Se nos for concedido que agrademos a Deus durante esta vida, 
          ficaremos eternamente com Cristo e um com o outro, numa felicidade sem limites." <br/>
          (São João Crisóstomo)
        </h5>
      </div>
    </div>
  )
}
