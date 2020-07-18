import React from "react"
import "./Wedding.css"
import wedding from "../../Assets/bg wedding.jpg"
import Piece from "./Wedding Piece"
import piece from "../../Data Files/wedding.json"

const Wedding = () => {
    return (
        <div>
            <img src={wedding} className="gallery_head"/>
            <p className="wedding_title">Find the best wedding photographers</p>
            <p className="wedding_content">Lorem ipsum hbsdhf dsfnfsvdfdfvv
            <br /> erferferferferffffffferferferferferf</p>
            <div className="spacing">
                {piece.map((Mapping, i) => {
                    return (
                        <Piece key={i} 
                                name={Mapping.name} picture={require("../../Assets"+Mapping.picture)}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Wedding;