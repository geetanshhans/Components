import React from "react"
import "./Book.css"
import background from "../Assets/book_bg.jpg"

const Book = () => {
    return (
        <div>
            <img src={background} className ="book_background" />
            <div className="book_box"></div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div className="dots"><span style={{margin: "10px"}}>1</span></div>
                    <div className="lines">q</div>
                </div>
                <div style={{color: "white"}}>
                    <div style={{fontWeight: "bolder"}}>
                        What do you need?
                    </div>
                
                </div>
            </div>
        </div>

    )
}

export default Book;