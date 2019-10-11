import React, { Component } from 'react';

//Topics

import BodyTypes from '../Topics/BodyTypes'
import CaloricThreshold from '../Topics/CaloricThreshold'
import DietTypes from '../Topics/DietTypes'


export default class TopicBrowser extends Component {
    render() {
        return (
            <div>
            <p> Hello World </p>
                <BodyTypes />
                <DietTypes />
                <CaloricThreshold />
            </div>
        )
    }
}