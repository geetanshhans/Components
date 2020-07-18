import React from "react"
import "./Packs.css"
import { Link, Switch, Route } from "react-router-dom"
import Wedding from "./Wedding/Wedding"

const Packs = (props) => {
    return (
        <div className="gallery_images">
                <Link to={`/gallery/${props.name}`}>
                <img src={props.pic1} className="pic1" />
                <img src={props.pic2} className="pic2" />
                <img src={props.pic3} className="pic3" />
                </Link>
            <p className="PicName">{props.name}</p>
            <Switch>
                <Route path="/gallery/Wedding" component={Wedding}/>
            </Switch>
        </div>
    )
}

export default Packs;