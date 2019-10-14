import React from "react";
import axios from "axios";

class FeltCute extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    deleteTestimonial = () => {
        axios.delete(`/api/testimonials/${this.props.val.id}`).then(response => {
            console.log(response.data);
            this.props.updateAllTestimonials(response.data);
        })
    }

    render() {
       
        return (
            <div>
               <h2>{this.props.val.city}</h2>
                <h1>{this.props.val.country}</h1>
                <div className="beforeAndAfter">
                <div className="before">Before Using Diet Plan
                <img className="resultsPic" src={this.props.val.imgbefore} alt="place_img" />
                </div>
                <div className="after">After Using Diet Plan
                <img className="resultsPic" src={this.props.val.imgafter} alt="place_img" /></div>
                </div>
                <button onClick={this.deleteTestimonial}>On second thought, I was lookin kinda small</button>  
            </div>
        )
    }
}

export default FeltCute;