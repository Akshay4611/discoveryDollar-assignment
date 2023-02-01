import React from "react";
import { Navdata } from "./Navdata";
import './Navitems.css'
import { image } from "./image";
import image1 from "./image/uparrow.svg"
import image2 from "./image/downarrow.png"
import { useState } from "react";
import DropDownComponent from "./component/DropDownComponent";



const Item = ({ props }) => {

    const [checker, setChecker] = useState(true);
    const [poperState, setPoperState] = useState(false)
   


    return (<div className="Navpic" 
    
    onMouseEnter={()=>{
        setPoperState(true);
    }}
    onMouseLeave={()=>{
        setPoperState(false)
    }}
    >
        <img 
        style={{
            width:"6vw"
        }}
        src={props.img} />
        <div className="Navdatatext"> {props.title}
            {props?.category[0]?.name ?

                <img src={image1}
                    style={{
                        width: ".7vw",
                        marginLeft: ".2vw"
                    }}
                /> : ""
            }
        </div>
        <div
        
        style={{
            display:poperState?"block":"none",
            position:"fixed",
            zIndex:"14"
        }}
        >

            {props?.category[0]?.name ?

                <DropDownComponent props={props} />
                : ""
            }
        </div>



    </div>)
}


export const Navitems = () => {

    return (

        <div className=" Navdatacontainer">
            {
                image?.map((props, idx) => {
                    return (
                        <Item key={idx} props={props} />
                    )

                })
            }

        </div>
    )

}

