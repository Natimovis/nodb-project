import React, { Component } from 'react';
import "./TopicBrowser.css";
//Topics

import BodyTypes from '../Topics/BodyTypes'
import CaloricThreshold from '../Topics/CaloricThreshold'
import DietTypes from '../Topics/DietTypes'
import Header from '../Topics/Header'
import Home from '../Topics/Home'



export default class TopicBrowser extends Component {
    constructor() {
        super();

        this.state = {
            home:true,
            bodyTypes:false,
            diet:false,
            yourPlan:false
        }
    }

    changePageHome = () => {
        this.setState({
            home:true,
            bodyTypes:false,
            diet:false,
            yourPlan:false
        })

    }

    changePageBody = () => {
        this.setState({
            home:false,
            bodyTypes:true,
            diet:false,
            yourPlan:false
        })
    }

    changePageDiet = () => {
        this.setState({
            home:false,
            bodyTypes:false,
            diet:true,
            yourPlan:false
        })
    }

    changePagePlan = () => {
        this.setState({
            home:false,
            bodyTypes:false,
            diet:false,
            yourPlan:true
        })
    }
    render() {
        return (
            <div >
                <Header 
                homeAppear={this.changePageHome}
                bodyAppear={this.changePageBody}
                dietTypesAppear={this.changePageDiet} 
                yourPlanAppear={this.changePagePlan}
                />
                {this.state.home?<Home/>:null}
                {this.state.bodyTypes?<BodyTypes/>:null}
                {this.state.diet?<DietTypes/>:null}
                {this.state.yourPlan?<CaloricThreshold/>:null}
                
           
                
            </div>
        )
    }
}