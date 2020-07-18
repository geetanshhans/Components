import React, { Component } from "react"
import "./Portfolio.css"
import { Link, Switch, Route } from "react-router-dom";
import gallery from "../../Gallery/Gallery"

const Portfolio = (props) => {
    return (
        <div className="field">
            <Link to={`/gallery/${props.name}`}>
                <button className="field">
                    <img src={props.source} className="portfolio" />
                    <p className="naming">{props.name}</p>
                </button>
            </Link>
            <Switch>
                <Route path="/gallery" component={gallery} />
            </Switch>
        </div>
    )
}

export default Portfolio;