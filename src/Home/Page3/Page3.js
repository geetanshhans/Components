import React, { Component } from "react"
import "./Page3.css"
import Template from "./Template";
import Book from "../../Book/Book";
import data from "../../Data Files/working.json"
import { Link, Route, Switch } from "react-router-dom";

class Page3 extends Component {
    render() {
        const handler = () => {
            return (
                alert("Button Clicked")
            )
        }
        return (
            <div>
                <p className="Head1">How it works</p>
                <p className="line3">Book a professional photographers in 3 steps</p>
                <div className="working">
                    {data.map((Object_Number, i) => {
                        return <Template key = {i} number={Object_Number.id}
                                         title={Object_Number.title}
                                         text={Object_Number.content}/>
                    })}
                </div>
                <Link to="/book"><button className="book_btn">BOOK NOW</button></Link>
                <Switch>
                    <Route path="/book" component={Book}/>
                </Switch>
                <hr />
            </div>
        )
    }
}

export default Page3;