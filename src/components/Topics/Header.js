import React, { Component } from 'react';

export default class Header extends Component {
    render() {

        return (
            <header className = "header">
                <button onClick={this.props.homeAppear}>Home </button>
                <button onClick={this.props.bodyAppear}>Body Types</button>
                <button onClick={this.props.dietTypesAppear}>Diet Types</button>
                <button onClick={this.props.yourPlanAppear}>Your Plan</button>
                <button onClick={this.props.testimonyAppear}>Testimonials</button>
            </header>
        )
    }
}