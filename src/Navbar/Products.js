import React from 'react'
import Product from '../component/Product'
import { arrayOfProducts } from '../Datajson/Productdata'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { banner } from '../Navbar/da__ta'
import Button from '@mui/material/Button';
import cuteImage from "../image/cuteImage.jpg"

const Products = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3500, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    }
  };
  return (
    <div>

      <div
        style={{
          display: "flex",

        }}
      >
        <div
          className='Best-of-Electronics'
          style={{
            width: "20vw",
            textAlign: "center",
            padding: "2vw"
          }}
        >
          <h1
            style={{
              fontSize: "3vw"
            }}
          >

            Best of Electronics
          </h1>
          <Button variant="contained">Contained</Button>

        </div>
        <div
          style={{
            padding: "2vw",
            width: "80vw"
          }}
        >
          <Carousel
            style={{
              marginTop: '10px',

            }}
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            showDots={false}
            arrows={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">

            {arrayOfProducts?.map((item, idx) => {
              return <Product item={item} key={idx} />

            })}

          </Carousel>
        </div>
      </div>
      <p
        style={{
          margin: "3vw",
          fontSize: "1.5vw"
        }}
      >

        All Product
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding:"0vw 6vw",
          justifyContent:"space-between"
        }}
      >


        {arrayOfProducts?.map((item, idx) => {
          return <Product item={item} key={idx} />

        })}
        {arrayOfProducts?.map((item, idx) => {
          return <Product item={item} key={idx} />

        })}
        {arrayOfProducts?.map((item, idx) => {
          return <Product item={item} key={idx} />

        })}
        {arrayOfProducts?.map((item, idx) => {
          return <Product item={item} key={idx} />

        })}
      </div>
      <div
      style={{
        textAlign:"center"
      }}
      >

      <Button
      variant="contained"
        style={{
          fontSize:"1vw",
          margin:"2vw"
        }}
        >Explore </Button>
        </div>
    </div>
  )
}

export default Products