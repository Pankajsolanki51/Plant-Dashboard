import React from "react";
import "./top.css";
import "./Top.scss";
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../Assets/24.jpg';
import img2 from '../../Assets/np2.png';
import video from '../../Assets/yo(1).mp4';
const Top = () => {
    return (
        <>
            <div className="topSection">
                <div className="headerSection flex">
                    <div className="title">
                        <h1> Welcome to Planti</h1>
                        <p>Hello Pankaj, Welcome back!</p>
                    </div>
                    <div className="searchBar flex">
                        <input type="text" placeholder='Search Dashboard' />
                        <BiSearchAlt className="icon" />
                    </div>
                    <div className="adminDiv">
                        <TbMessageCircle className="icon" />
                        <MdOutlineNotificationsNone className="icon" />
                        <div className="adminImage">
                            <img src={img} alt="Admin Image" />
                        </div>
                    </div>
                </div>
                <div className="cardSection flex">
                    <div className="rightCard flex">
                        <h1>Create and sell extraordinary products</h1>
                        <p>The world's fast growing industry are natural made products!</p>
                        <div className="buttons flex">
                            <button className="btn">Explore More</button>
                            <button className="btn tranparent">Top Sellers</button>
                        </div>
                        <div className="videoDiv">
                            <video src={video} autoPlay loop muted></video>
                        </div>
                    </div>
                    <div className="leftCard flex">
                        <div className="main flex">
                            <div className="textDiv">
                                <h1>My Stat</h1>
                                <div className="flex">
                                    <span>Today <br /> <small>4 Orders </small></span>
                                    <span>This Month <br/> <small>127 Orders</small></span>
                                </div>
                                <span className="flex link">
                                    Go to my Orders <BsArrowRightShort className="icon" />
                                </span>
                            </div>
                            <div className="imgDiv">
                                <img src={img2} alt="name" />
                            </div>

                          {/* <div className="sideBarCard">
                                <BsQuestionCircle className="icon" />
                                <div className="cardContent">
                                    <div className="circle1"></div>
                                    <div className="circle2"></div>
                                    <h3>Help Center</h3>
                                    <p>Having trouble in Planti contact us for more questions</p>
                                    <button className="btn">Go to help Center</button>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Top;
