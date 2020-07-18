import React from "react"
import "./Page5.css"
import phone from "../../Assets/mobile background.jpg"

const Page5 = () => {
    return (
        <div style={{display: "flex"}}>
            <img src={phone} className="phone_set" />
            <p className="app_head">Book Photographers<br /> From Your Phone</p>
        </div>
    )
}

export default Page5;