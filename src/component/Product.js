import React from 'react'
import "./DropDownComponent.css"


const Product = ({ item }) => {
    console.log(item);
    return (
        <div className='product-main'>
            <img src={item.imgUrl}
                style={{
                    width: "5vw"
                }}
                alt="" />
            <div
            style={{
                marginTop:".5vw"
            }}
            >{item.name}</div>

            <div className='shop-now'>shop now </div>
            <div>{item.price}</div>
        </div>
    )
}

export default Product