import React from "react"
import "./Template.css"
import temp from "../../Assets/event.jpg"

const Template = (props) => {
    return (
        <div className="single">
            <img src={temp} className="image"/>
            <p className="number">{props.number} </p>
            <p className="title">{props.title}</p>
            <p className="text">{props.text}</p>
        </div>
    )
}

export default Template;