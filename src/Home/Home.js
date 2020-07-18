import React from "react"
import "./Home.css"
import Page1 from "./Page1/Page1"
import Page2 from "./Page2/Page2"
import Page3 from "./Page3/Page3"
import Page4 from "./Page4/Page4"
import Page5 from "./Page5/Page5"
import Footer from "../Footer/Footer"
import Page6 from "./Page6/Page6"

const Home = () => {
    return (
        <div>
            <Page1 />
            <Page2 />   
            <Page3 />
            <Page6 />
            <Page4 />
            <Page5 />
            <Footer />
        </div>
    )
}

export default Home;