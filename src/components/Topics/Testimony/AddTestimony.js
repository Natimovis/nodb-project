import React from "react";
import axios from "axios";

class AddTestimony extends React.Component {
    constructor() {
        super();
        this.state = {
            city: "",
            country: "",
            imgbefore: "",
            imgafter: ""
        }
    }

    handleCityChange = e => {
        this.setState({city: e.target.value})
    }

    handleCountryChange = e => {
        this.setState({country: e.target.value})
    }

    handleImgBeforeChange = e => {
        this.setState({imgbefore: e.target.value})
    }

    handleImgAfterChange = e => {
        this.setState({imgafter: e.target.value})
    }

    handleFlexClick = e => {
        const { city, country, imgbefore, imgafter } = this.state;
        e.preventDefault();
        axios.post("/api/testimonials", {
            city,
            country,
            imgbefore,
            imgafter
        }).then(response => {
            // console.log(response);
        }).catch(error => {
            console.log(error);
        })
    }
            
    render() {
        return (
            <>
                <form>
                    <input placeholder="City" onChange={this.handleCityChange} />
                    <input placeholder="Country" onChange={this.handleCountryChange} />
                    <input placeholder="Before Photo" onChange={this.handleImgBeforeChange} />
                    <input placeholder="After Photo" onChange={this.handleImgAfterChange} />
                    <button onClick={this.handleFlexClick}>Felt cute might delete later</button>
                </form>
            </>
        )
    }
}

export default AddTestimony;