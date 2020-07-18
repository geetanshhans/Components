import React, { Component } from "react"
import "./Page1.css"
import chat from "../../Assets/notification.png"
import { } from "reactstrap"

class Page1 extends Component {
    render() {
        const handler = () => {
            document.querySelector(".dropdown-content").classList.add("show");
        }
        return (
            <div className="front">
                <div className="header_container">
                    <p className="tagline">You Pick the Location,<br /> We'll bring the Lens....</p>
                    <p className="intro_line">Search for professional photographers near you</p>
                </div>
                <div className="dropdown" style={{display: "none"}}>
                    <button onClick={handler} className="dropbtn">Select City
                <i className="fa fa-caret-down icon"></i></button>
                    <div id="myDropdown" className="dropdown-content">
                        <input type="text" placeholder="Search..." id="myInput" />
                        <a href="#about">About</a>
                        <a href="#base">Base</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                        <a href="#custom">Custom</a>
                        <a href="#support">Support</a>
                        <a href="#tools">Tools</a>
                    </div>
                </div>
                <div className="vl" style={{display: "none"}}></div>
                <div className="dropdown1" style={{display: "none"}}>
                    <button onClick={handler} className="dropbtn1">Select Speciality
                <i className="fa fa-caret-down icon1"></i></button>
                    <div id="myDropdown" className="dropdown-content">
                        <input type="text" placeholder="Search..." id="myInput" />
                        <a href="#about">About</a>
                        <a href="#base">Base</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                        <a href="#custom">Custom</a>
                        <a href="#support">Support</a>
                        <a href="#tools">Tools</a>
                    </div>
                </div>
                <button className="btn" style={{display: "none"}}>Search</button>
            
                <img src={chat} style={{ display: "none" }} />
            </div>
        )
    }
}

export default Page1;