import React from "react";
import ReactDOM from "react-dom/client";


function RestrurentCard(props){
 const {resData} = props;
 const {info} = resData;
  
 


    return (
        <>
        <div className="res-card" style={{backgroundColor : "#fofofo"}}>
            <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`} alt="res-img" /> <br />
            <h3>{info.name}</h3> <br />
            <h4>{info.cuisines}</h4> <br />
            <h4>{info.avgRating}</h4> <br />
            <h4>{info.sla.deliveryTime} Mins</h4>
           
        </div>
      
        </> 
    )
}

export default RestrurentCard;