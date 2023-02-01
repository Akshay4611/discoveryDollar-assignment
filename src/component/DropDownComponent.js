import React from 'react'
import "./DropDownComponent.css"
import { useState } from 'react'

const SubCatergoryComponent = ({ subitem }) => {
    const [ColorState2, setColorState2] = useState(true)

    return (
        <div
            className='subDiv'
            onMouseEnter={() => {
                setColorState2(false);

            }}
            onMouseLeave={() => {
                setColorState2(true)


            }}
            style={{
                padding: ".7vw",
                fontSize: "1vw",
                fontWeight: "400",
                color: ColorState2 ? "black" : "#2370f4",
                backgroundColor: ColorState2 ? "" : "rgb(167, 167, 167,.1)",

            }}
        >{subitem}</div>



    )


}
const DropDownTitle = ({ item, }) => {
    const [ColorState, setColorState] = useState(true);


    return (
        <div
            style={{
                display: "flex",
            }}
            onMouseLeave={() => {
                setColorState(true)


            }}
        >

            <div
                onMouseEnter={() => {
                    setColorState(false);

                }}

                style={{
                    padding: ".7vw",
                    fontSize: "1vw",
                    fontWeight: "400",
                    color: ColorState ? "black" : "#2370f4",
                    backgroundColor: ColorState ? "" : "rgb(167, 167, 167,.1)",

                }}
            >
                {item.name}
            </div>

            {
                Array.isArray(item?.subcategory) ? (
                    <div className="subCat"
                        style={{
                            display: ColorState ? "none" : "",

                        }}
                    >

                        {item?.subcategory?.map((subitem, idx) => {
                            return <SubCatergoryComponent key={idx} subitem={subitem} />

                        })}

                    </div>
                ) : ""}
        </div>
    )
}

const DropDownComponent = ({ props }) => {

    return (


        <div


            style={{
                width: "15vw",
                backgroundColor: "#fafafa",
                borderRadius: ".4vw 0vw .4vw .4vw",
                boxShadow: "4px 4px 4px rgb(1,1,1,.3)",

                padding: ".5vw 0vw 0vw .5vw",

            }}>
            {props?.category?.map((item, idx) => {

                return (
                    <DropDownTitle key={idx} item={item} />
                )

            })}

        </div>


    )
}

export default DropDownComponent