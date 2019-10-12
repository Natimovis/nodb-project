import React from 'react';
import axios from "axios";
import FeltCute from "./FeltCute";

class Testimony extends React.Component {
    constructor() {
        super();
        this.state = {
            allTestimonials: []
        }
    }

    updateAllTestimonials = newArr => {
        this.setState({allTestimonials: newArr})
        console.log(this.state.allTestimonials)
    }

    componentDidMount() {
        axios.get("/api/testimonials")
        .then(response => {
            // console.log(response.data);
            this.setState({allTestimonials: response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {

        let mappedTestimonials = this.state.allTestimonials.map((val) => {
            return (
                <FeltCute val={val} updateAllTestimonials={this.updateAllTestimonials} />
            )
        })

        return (
            <div>
                <h1> Testimony Component </h1>
                 {mappedTestimonials}
            </div>
        )
    }
}

export default Testimony;
