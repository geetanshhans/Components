import React, { Component } from "react"
import "./Page2.css"
import Portfolio from "./Portfolio"
import pics from "../../Data Files/passes.json"

class Page2 extends Component {

    state = {
        index: 0,
        length: pics.length
    }


    render() {

        const forward = () => {
            let change = this.state.index
            console.log(change)
            this.setState({index: this.state.index+1})
        }

        const reverse = () => {
            console.log(this.state.index)
            this.setState({index: this.state.index-1})            
        }
        
        return (
            <section>
                <div className="header_container">
                    <p className="Head">Photographers for every occasion</p>
                    <p className="line2">Find your event and match it up</p>
                </div>
                <div className="categories">
                    {pics[this.state.index].map((Mention, i) => {
                        return <Portfolio key={i} name={Mention.name} source={require("../../Assets" + Mention.image)} />
                    })}
                </div>
                <button className="arrow" onClick={forward}>
                    <i className="fa fa-angle-right" style={{ fontSize: "48px" }}></i>
                </button>
                <button className="arrow1" onClick={reverse}>
                    <i className="fa fa-angle-left" style={{ fontSize: "48px" }}></i>
                </button>
                <hr />
            </section>
        )
    }
}

export default Page2;