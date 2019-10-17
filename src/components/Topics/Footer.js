import React from 'react';

function Footer(props) {
    return(

        <nav className = "footer">
            <button onClick={props.homeAppear}>Home </button>
            <button onClick={props.bodyAppear}>Body Types</button>
            <button onClick={props.dietTypesAppear}>Diet Types</button>
            <button onClick={props.yourPlanAppear}>Your Plan</button>
            <button onClick={props.testimonyAppear}>Testimonials</button>
    </nav>
        )
    }
export default Footer;