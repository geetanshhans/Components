import React from "react"
import "./Footer.css"
import {Link, Route, Switch} from "react-router-dom"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Terms from "../Terms/Terms"
import Career from "../Career/Career"

const Footer = () => {
    return (
        <div className="bottom">
            <ul className="footer">
                <Link to="/about" className="links"><li>About Us</li></Link>
                <Link to="/contact" className="links"><li>Contact Us</li></Link>
                <Link to="/terms&condition" className="links"><li>Terms & Conditions</li></Link>
                <Link to="/careers" className="links"><li>Careers</li></Link>
            </ul>
            <hr style={{width: "80%", padding: "0"}}/>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/terms&condition" component={Terms}/>
                <Route path="/careers" component={Career}/>
            </Switch>
        </div>
    )
}

export default Footer;