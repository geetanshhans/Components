import React from "react"
import "./Wedding Piece.css"

const Piece = (props) => {
    return (
        <div style={{display: "inline-block"}}>
            <img src={props.picture} className="picture_wed" />
            <div style={{display: "flex"}}>
                <p className="PhotoName">{props.name}</p>
                <i className="fa fa-bookmark"></i>
            </div>
        </div>
    )
}

export default Piece;