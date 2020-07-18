import React from "react"
import "./Review.css"

const Review = (props) => {
    return (
        <div className="review">
            <p className="customer">{props.customer}</p>
            <div className="stars">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
            <p><span className="quotes">"</span> {props.comments} 
            <span className="quotes"> "</span></p>
        </div>
    )
}

export default Review;