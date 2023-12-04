import React from "react";
import './Class.css'

function GreetingCard ({img, head,para}){
    return(
        <div className="Card-container">
            <img src={img} className="greetingcard-img"/>
            <h1 className="text-head">{head}</h1>
            <p className="text-para">{para}</p>
        </div>
    )
} 

export default GreetingCard;