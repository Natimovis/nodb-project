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
               <h1>{this.props.val.city}</h1>
                <h2>{this.props.val.country}</h2>
                <img src={this.props.val.imgbefore} alt="place_img" />
                <img src={this.props.val.imgafter} alt="place_img" />
                <button onClick={this.deleteTestimonial}>On second thought, I was lookin kinda small</button>  
            </div>
        )
    }
}

export default FeltCute;