import React, { Component } from "react"
import "./Toolbar.css"
import { Link, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery"
import Book from "../Book/Book"
import logo from "../Assets/logo.png"
import Account from "../Account/Account";

class Toolbar extends Component {
    state = {
        someColor : ""
    }
    
    componentDidMount(){
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 70 ? "" : "blue";
      
            this.setState({ someColor: backgroundcolor });
          });
    }
    render() {
            
        return (
            <div>
                <div>
                <img src={logo} className="logo" alt = "logo"/>
                <p className="name" >GetPIX</p>
                </div>
                <ul className="bar" style = {{backgroundColor : `${this.state.someColor}`}}>
                    <Link to="/" className="link"> <li>Home</li> </Link>
                    <Link to="/book" className="link"> <li>Book Photographer</li> </Link>
                    <Link to="/gallery" className="link"> <li>Gallery</li> </Link>
                    <Link to="/dummy"  className="link"><li> Practice</li> </Link>
                    <div className="vl1"></div>
                    <Link to="/my account" className="link" style={{pointerEvents: "none", color: "grey"}}> 
                    <li><i className="fa fa-user styling"></i>My Account</li> </Link>
                </ul>
                <Switch>
                    <Route path="/book" component={Book} />
                    <Route path="/gallery" exact component={Gallery} />
                    <Route path="/" exact component={Home} />
                    <Route path="/my account" component={Account} />
                </Switch>
            </div>
        )
    }
}

export default Toolbar;
