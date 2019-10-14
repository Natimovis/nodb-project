import React from 'react';
function Header(props) {
    return(

        <header className = "header">
            <button onClick={props.homeAppear}>Home </button>
            <button onClick={props.bodyAppear}>Body Types</button>
            <button onClick={props.dietTypesAppear}>Diet Types</button>
            <button onClick={props.yourPlanAppear}>Your Plan</button>
            <button onClick={props.testimonyAppear}>Testimonials</button>
    </header>
        )
    }
export default Header;