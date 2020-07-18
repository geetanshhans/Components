import React from "react"
import "./Account.css"
import login from "../Assets/login.png"

const Account = () => {
    return (
        <div>
            <div>
                <img src={login} className="login_image" /></div>
            <div className="details">
                <p className="login_head"> Sign In</p>
                <p className="network">with your social network</p>
                <button className="icons">GOOGLE</button>
                <button className="icons">FACEBOOK</button>
                <div style={{ marginLeft: "15%" }}>
                    <hr className="line" /> <p className="or">or</p> <hr className="line" />
                </div>

                <p style={{padding:"0% 0% 0% 30%"}}>
                    <input id="input" type="text" required />
                    <label for="input" alt="Email Address" placeholder="After Typing"></label>
                </p>
                <p style={{padding:"0% 0% 0% 30%"}}>
                    <input id="input" type="password" required />
                    <label for="input" alt="Password" placeholder="After Typing"></label>
                </p>
                <button className="login_click">LOGIN</button>
                <div style={{ marginLeft: "15%" }}>
                    <hr className="line" /> <p className="or">or</p> <hr className="line" />
                </div>
                <button className="login_click">I AM A PHOTOGRAPHER</button>
            </div>
        </div>
    )
}

export default Account;