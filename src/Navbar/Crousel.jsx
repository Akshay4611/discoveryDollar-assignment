import React from 'react'
import '../Navbar/abc.css'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { banner } from '../Navbar/da__ta'


const Crousel = () => {
  const responsive = {
    desktop: {
        breakpoint: { max: 3500, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
  return (
    <>
      <Carousel
      style={{marginTop:'10px'}}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {banner.map((item) => (
            <div className="crsl">
              <img src={item.url} alt="banner" id={item.id} />
            </div>
            
          
        ))}

      </Carousel>
    </>
  )
}

export default Crousel