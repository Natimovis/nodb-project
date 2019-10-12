import React, { Component } from 'react';
import "./TopicBrowser.css";

import BodyTypes from '../Topics/BodyTypes'
import CaloricThreshold from '../Topics/CaloricThreshold'
import DietTypes from '../Topics/DietTypes'
import Header from '../Topics/Header'
import Home from '../Topics/Home'
// import AddTestimony from '../Topics/Testimony/AddTestimony'
// import Testimony from '../Topics/Testimony/Testimony'
import Test from '../Topics/Testimony/Test'

export default class TopicBrowser extends Component {
    constructor() {
        super();

        this.state = {
            home:true,
            bodyTypes:false,
            diet:false,
            yourPlan:false,
            testimony:false
        }
    }
    

    changePageHome = () => {
        this.setState({
            home:true,
            bodyTypes:false,
            diet:false,
            yourPlan:false,
            testimony:false
        })

    }

    changePageBody = () => {
        this.setState({
            home:false,
            bodyTypes:true,
            diet:false,
            yourPlan:false,
            testimony:false
        })
    }

    changePageDiet = () => {
        this.setState({
            home:false,
            bodyTypes:false,
            diet:true,
            yourPlan:false,
            testimony:false
        })
    }

    changePagePlan = () => {
        this.setState({
            home:false,
            bodyTypes:false,
            diet:false,
            yourPlan:true,
            testimony:false
        })
    }

    changePageTestimony = () => {
        this.setState({
            home:false,
            bodyTypes:false,
            diet:false,
            yourPlan:false,
            testimony:true
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
                testimonyAppear={this.changePageTestimony}
                />
                {this.state.home?<Home/>:null}
                {this.state.bodyTypes?<BodyTypes/>:null}
                {this.state.diet?<DietTypes/>:null}
                {this.state.yourPlan?<CaloricThreshold/>:null}
                {this.state.testimony?<Test/>:null}                         
                
            </div>
        )
    }
}