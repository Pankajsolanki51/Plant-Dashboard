import React from "react";

import {BsArrowRightShort} from "react-icons/bs";
import user from "../../Assets/24.jpg";
import user1 from "../../Assets/26.jpg";
import user2 from "../../Assets/27.jpg";
import user3 from "../../Assets/25.jpg";
import user5 from "../../Assets/23.jpg";
import "./Activity.scss";
const Activity=()=>{
    return(
        <>
            <div className="activitySection">
                <div className="heading flex">
                    <h1>Resent Activity</h1>
                    <button className="btn flex">
                        See All
                        <BsArrowRightShort className="icon"/>
                    </button>
                </div>
                <div className="secContainer grid">
                    <div className="singleCustomer flex">
                       <img src={user} alt="customer image"/>
                       <div className="customerDetails">
                        <span className="name">Ola Marths</span>
                        <small>Orders a new Plant</small>
                       </div>
                       <div className="duration">
                        2 min ago
                       </div>
                    </div>
                    <div className="singleCustomer flex">
                       <img src={user1} alt="customer image"/>
                       <div className="customerDetails">
                        <span className="name">pema Nails</span>
                        <small>Orders a new Plant</small>
                       </div>
                       <div className="duration">
                        3 min ago
                       </div>
                    </div>
                    <div className="singleCustomer flex">
                       <img src={user5} alt="customer image"/>
                       <div className="customerDetails">
                        <span className="name">ileana mars</span>
                        <small>Orders a new Plant</small>
                       </div>
                       <div className="duration">
                        5 min ago
                       </div>
                    </div>
                    <div className="singleCustomer flex">
                       <img src={user2} alt="customer image"/>
                       <div className="customerDetails">
                        <span className="name">greeta jem</span>
                        <small>Orders a new Plant</small>
                       </div>
                       <div className="duration">
                        7 min ago
                       </div>
                    </div>
                    <div className="singleCustomer flex">
                       <img src={user3} alt="customer image"/>
                       <div className="customerDetails">
                        <span className="name">kevin almasifer</span>
                        <small>Orders a new Plant</small>
                       </div>
                       <div className="duration">
                        9 min ago
                       </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Activity;