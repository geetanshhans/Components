import React from "react"
import "./Page4.css"
import Review from "./Review"
import reviews from "../../Data Files/reviews.json"

const Page4 = () => {
    return (
        <div>
            <p className="Head2">Customer Satisfaction is our priority</p>
            <p className="line4">See what customers think about GetPIX</p>
            <div style={{display: "flex", justifyContent: "center"}}>
            <div className="reviews_container">
                {reviews[0].map((Matching, i) => {
                    return <Review key={i} customer={Matching.Name} stars={Matching.Stars}
                        comments={Matching.Comments} />
                })}
            </div>
            </div>
        </div>
    )
}

export default Page4;