import React from "react";
import axios from "axios";
import Update from "./Update";

class FeltCute extends React.Component {
    constructor() {
        super();
        this.state = {
            allTestimonials: [],
            // afterImg: this.props.afterImg
            
        }
    }
    
    
    editTestimonial = (id, afterImg) => {
        axios.put(`/api/testimonials/${this.props.val.id}`, {
            id,
            afterImg
        }).then(response => {
            // this.props.refreshPage();
            this.props.updateAllTestimonials(response.data);
            console.log(this.props.afterImg)
            console.log(response.data)
            this.setState({ afterImg: response.data })
        })
        .catch(error => {
            console.log(error);
        })
    }

    deleteTestimonial = () => {
        axios.delete(`/api/testimonials/${this.props.val.id}`).then(response => {
            console.log(response.data);
            this.props.updateAllTestimonials(response.data);
        })
    }

    render() {
       console.log(this.props.afterImg)

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
                <Update afterImg={this.props.afterImg} allTestimonials={this.props.allTestimonials} editTestimonial={this.editTestimonial} /> 
            </div>
        )
    }
}

export default FeltCute;