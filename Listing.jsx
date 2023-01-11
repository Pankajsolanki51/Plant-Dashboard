import React from "react";
import {BsArrowRightShort} from 'react-icons/bs';
import {AiFillHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import img from "../../Assets/np3.png"
import img1 from "../../Assets/np1.png"
import img2 from "../../Assets/np4.png"
import img3 from "../../Assets/np3.png"
import user1 from "../../Assets/25.jpg"
import user2 from "../../Assets/26.jpg"
import user3 from "../../Assets/24.jpg"
import user4 from "../../Assets/22.jpg"
import user5 from "../../Assets/21.jpg"
import user6 from "../../Assets/23.jpg"
import "./listing.css";
import "./Listing.scss";
const Listing=()=>{
    return(
        <>
            <div className='listingSection'>
                <div className="heading flex">
                    <h1>My Listing</h1>
                    <button className="btn flex">
                        See All <BsArrowRightShort className="icon"/>
                    </button>
                </div>
                <div className="secContainer flex">
                    <div className="singleItem">
                        <AiOutlineHeart className="icon"/>
                        <img src = {img} alt="image name"/>
                        <h3>Annual Vince </h3>
                    </div>
                    <div className="singleItem">
                        <AiOutlineHeart className="icon"/>
                        <img src = {img1} alt="image name"/>
                        <h3 style={{marginTop:-1.5}}>Spider Plant</h3>
                    </div>
                    <div className="singleItem">
                        <AiFillHeart className="icon"/>
                        <img style={{marginTop:-12}} src = {img2} alt="image name"/>
                        <h3 style={{marginTop:-12}}>coffee Plant </h3>
                    </div>
                    <div className="singleItem">
                        <AiFillHeart className="icon"/>
                        <img src = {img3} alt="image name"/>
                        <h3 >Button Fern </h3>
                    </div>
                </div>
                <div className="sellers flex">
                    <div className="topSellers">
                        <div className="heading flex">
                            <h3>Top Sellers</h3>
                    <button className="btn flex">
                        See All <BsArrowRightShort className="icon"/>
                    </button>
                        </div>
                        <div className="card flex">
                            <div className="users">
                                <img src={user1} alt="user image"/>
                                <img src={user2} alt="user image"/>
                                <img src={user3} alt="user image"/>
                                <img src={user4} alt="user image"/>
                            </div>
                            <div className="cardText">
                                <span>
                                    28.689k Plant Sold<br/>
                                    <small>
                                        17 Sellers <span className="date">28 days</span>
                                    </small>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featuredSellers">
                        <div className="heading flex">
                            <h3>Featured Sellers</h3>
                    <button className="btn flex">
                        See All <BsArrowRightShort className="icon"/>
                    </button>
                        </div>
                        <div className="card flex">
                            <div className="users">
                                <img src={user5} alt="user image"/>
                                <img src={user6} alt="user image"/>
                                <img src={user3} alt="user image"/>
                                <img src={user4} alt="user image"/>
                            </div>
                            <div className="cardText">
                                <span>
                                    14.556k Plant Sold<br/>
                                    <small>
                                        21 Sellers <span className="date">7 days</span>
                                    </small>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Listing;