import React from "react"
import "./Gallery.css"
import gallery from "../Assets/bg gallery.jpg"
import list from "../Data Files/gallery.json"
import Packs from "./Packs"

const Gallery = () => {
    return(
        <div>
            <img src={gallery} className="gallery_head"/>
            <p className="gallery_title">Find the best photographers</p>
            <p className="gallery_content">Lorem ipsum hbsdhf dsfnfsvdfdfvv
            <br /> erferferferferffffffferferferferferf</p>
            <div className="spacing">
                {list.map ((Listing, i) => {
                    return <Packs 
                            key={i} name={Listing.name} pic1={require("../Assets"+Listing.pic1)}
                            pic2={require("../Assets"+Listing.pic2)}
                            pic3={require("../Assets"+Listing.pic3)} />
                })}
            </div>
            
        </div>
    )
}

export default Gallery;