import React, { Component } from 'react';

class YourPlan extends Component {

    constructor() {
        super();

        this.state = {
            bodyTypeTwo: -1,
            dietGoalTwo: -1,
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: false,
            alldietPlane: "I am a random string"

        }

    }
    handleInputChangeTwo = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
            console.log(this.state.bodyTypeTwo)
            console.log(this.state.dietGoalTwo)
    }

    handleSubmitThree = (e) => {
        e.preventDefault();
        // console.log(this.state.bodyTypeTwo)
        // console.log(this.state.dietGoalTwo)
        // console.log(`${+this.props.caloricThresh} this is in the child`)
        return this.state.bodyTypeTwo === 'ecto' && this.state.dietGoalTwo ==='loseW'?this.dietPlan1Show()
        : this.state.bodyTypeTwo === 'ecto' && this.state.dietGoalTwo ==='maintainW'?this.dietPlan2Show()
        : this.state.bodyTypeTwo === 'ecto' && this.state.dietGoalTwo ==='gainW'?this.dietPlan3Show()
        : this.state.bodyTypeTwo === 'meso' && this.state.dietGoalTwo ==='loseW'?this.dietPlan4Show()
        : this.state.bodyTypeTwo === 'meso' && this.state.dietGoalTwo ==='maintainW'?this.dietPlan5Show()
        : this.state.bodyTypeTwo === 'meso' && this.state.dietGoalTwo ==='gainW'? this.dietPlan6Show()
        : this.state.bodyTypeTwo === 'endo' && this.state.dietGoalTwo ==='loseW'?this.dietPlan7Show()
        : this.state.bodyTypeTwo === 'endo' && this.state.dietGoalTwo ==='maintainW'?this.dietPlan8Show()
        : this.state.bodyTypeTwo === 'endo' && this.state.dietGoalTwo ==='gainW'?this.dietPlan9Show()
        : null;
    }

    dietPlan1Show = () => {
        this.setState({
            dietPlan1: true,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: false
        })
    }

    dietPlan2Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: true,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: false
        })
    }
    dietPlan3Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: true,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: false
        })
    }
    dietPlan4Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: true,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: false
        })
    }
    dietPlan5Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: true,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: false
        })
    }
    dietPlan6Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: true,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: false
        })
    }
    dietPlan7Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: true,
            dietPlan8: false,
            dietPlan9: false
        })
    }
    dietPlan8Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: true,
            dietPlan9: false
        })
    }
    dietPlan9Show = () => {
        this.setState({
            dietPlan1: false,
            dietPlan2: false,
            dietPlan3: false,
            dietPlan4: false,
            dietPlan5: false,
            dietPlan6: false,
            dietPlan7: false,
            dietPlan8: false,
            dietPlan9: true
        })
    }

    

    
    dietPlan1 = (thresh) => {
        let iG1 = +thresh-500; 
        let iG2 = +thresh-1000;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh-500; 
        let iG22 = +thresh-1000;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(`ecto lose`, iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr1 = []
         const newArr1a = newArr1.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr1a)
            return newArr1;
    };


    dietPlan2 = (thresh) => {
        let iG1 = +thresh; 
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)       
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        
        let iG11 = +thresh-200; 
        let iG22 = +thresh+200;
        let c11 = (iG1 * .4);
        let cV11 = (c11/4);
        let p11 = (iG1 * .4)
        let pV11 = (p11/4)
        let f11 = (iG1 * .2)
        let fV11 = (f11/9)

        // console.log(`ecto maintain` cV1, cV2, pV1, pV1, pV2, fV1, fV2,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr2 = []
         const newArr2a = newArr2.push(iG1, cV1, cV2, pV1, pV2, fV1, fV2,
            `split 2`, iG11, iG22, cV11, pV11, fV11)
            // console.log(newArr2a)
            return newArr2;
    }


    dietPlan3 = (thresh) => {
        let iG1 = +thresh+700; 
        let iG2 = +thresh+1000;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh+700; 
        let iG22 = +thresh+1000;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(` ecto gain weight`, iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr3 = []
         const newArr3a = newArr3.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr3a)
            return newArr3;
    }

    dietPlan4 = (thresh) => {
        let iG1 = +thresh-500; 
        let iG2 = +thresh-1000;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh-500; 
        let iG22 = +thresh-1000;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(`meso lose`, iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr4 = []
         const newArr4a = newArr4.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr4a)
            return newArr4;
    }

    dietPlan5 = (thresh) => {
        let iG1 = +thresh-200; 
        let iG2 = +thresh+1000;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh-500; 
        let iG22 = +thresh-1000;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(`meso maintain`, iG1,iG2, cV1, cV2, cV3, cV4, pV1, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr5 = []
         const newArr5a = newArr5.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr5a)
            return newArr5;
    }

    dietPlan6 = (thresh) => {
        let iG1 = +thresh+300; 
        let iG2 = +thresh+600;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh-500; 
        let iG22 = +thresh-1000;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(`meso gain`, iG1,iG2, cV1, cV2, cV3, cV4, pV1, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr6 = []
         const newArr6a = newArr6.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr6a)
            return newArr6;
    }

    dietPlan7 = (thresh) => {
        let iG1 = +thresh-500; 
        let iG2 = +thresh-1000;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh-500; 
        let iG22 = +thresh-1000;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(`endo lose`, iG1,iG2, cV1, cV2, cV3, cV4, pV1, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr7 = []
         const newArr7a = newArr7.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr7a)
            return newArr7;
    }

    dietPlan8 = (thresh) => {
        let iG1 = +thresh-400; 
        let iG2 = +thresh+200;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh-200; 
        let iG22 = +thresh+200;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(`endo maintain`, iG1,iG2, cV1, cV2, cV3, cV4, pV1, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr8 = []
         const newArr8a = newArr8.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr8a)
            return newArr8;
    }

    dietPlan9 = (thresh) => {
        let iG1 = +thresh+300; 
        let iG2 = +thresh+5000;
        let c1 = (iG1 * .5);
        let c2 = (iG1 * .6);
        let c3 = (iG2 * .5);
        let c4 = (iG2 * .6);
        let cV1 = (c1/4);
        let cV2 = (c2/4);
        let cV3 = (c3/4);
        let cV4 = (c4/4);
        let p1 = (iG1 * .2)
        let p2 = (iG1 * .3)
        let p3 = (iG2 * .2)
        let p4 = (iG2 * .3)
        let pV1 = (p1/4)
        let pV2 = (p2/4)
        let pV3 = (p3/4)
        let pV4 = (p4/4)        
        let f1 = (iG1 * .2)
        let f2 = (iG1 * .3)
        let f3 = (iG2 * .2)
        let f4 = (iG2 * .3)
        let fV1 = (f1/9)
        let fV2 = (f2/9)
        let fV3 = (f3/9)
        let fV4 = (f4/9)
        
        let iG11 = +thresh+700; 
        let iG22 = +thresh+1000;
        let c11 = (iG11 * .4);
        let c22 = (iG22 * .4);
        let cV11 = (c11/4);
        let cV22 = (c22/4);
        let p11 = (iG11 * .4)
        let p22 = (iG22 * .4)
        let pV11 = (p11/4)
        let pV22 = (p22/4)
        let f11 = (iG11 * .2)
        let f22 = (iG22 * .2)
        let fV11 = (f11/9)
        let fV22 = (f22/9)
        // console.log(`endo gain`, iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV1, pV2,pV3, pV4, fV1, fV2, fV3, fV4,
        //  `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22 )

         const newArr9 = []
         const newArr9a = newArr9.push(iG1, iG2, cV1, cV2, cV3, cV4, pV1, pV2, pV3, pV4, fV1, fV2, fV3, fV4,
            `split 2`, iG11, iG22, c11, c22, cV11, cV22, p11, p22, pV11, pV22, f11, f22, fV11, fV22)
            // console.log(newArr9a)
            return newArr9;
    }

    
render() {
    const newArr1AB = this.dietPlan1(this.props.caloricThresh);
    // console.log(`in global scope ${newArr1AB}`);

    const newArr2AB = this.dietPlan2(this.props.caloricThresh);
    // console.log(`in global scope ${newArr2AB}`);

    const newArr3AB = this.dietPlan3(this.props.caloricThresh);
    // console.log(`in global scope ${newArr3AB}`);

    const newArr4AB = this.dietPlan4(this.props.caloricThresh);
    // console.log(`in global scope ${newArr4AB}`);

    const newArr5AB = this.dietPlan5(this.props.caloricThresh);
    // console.log(`in global scope ${newArr5AB}`);

    const newArr6AB = this.dietPlan6(this.props.caloricThresh);
    // console.log(`in global scope ${newArr6AB}`);

    const newArr7AB = this.dietPlan7(this.props.caloricThresh);
    // console.log(`in global scope ${newArr7AB}`);

    const newArr8AB = this.dietPlan8(this.props.caloricThresh);
    // console.log(`in global scope ${newArr8AB}`);

    const newArr9AB = this.dietPlan9(this.props.caloricThresh);
    // console.log(`in global scope ${newArr9AB}`);


    return (
        <div>
            <h2>YourPlan Component</h2>
            <form>
                <select name="bodyTypeTwo" id="bodyTypeTwo" onChange={this.handleInputChangeTwo}>
                   <option>Select your body type</option>
                   <option value="ecto">Ectomorph</option>
                   <option value="meso">Mesomorph</option>
                   <option value="endo">Endomorph</option> 
                </select>
                <select name="dietGoalTwo" id="dietGoalTwo" onChange={this.handleInputChangeTwo}>
                    <option>What is your goal?</option>
                    <option value="loseW">Lose weight</option>
                    <option value="gainW">Gain weight</option>
                    <option value="maintainW">Mantain same weight</option>
                </select>
                    <input type="submit" value="submit" onClick={this.handleSubmitThree} 
                    disabled={this.state.bodyTypeTwo === -1 || this.state.dietGoalTwo === -1}/>
            </form>
        
            {/* ecto los 2413.5040000000004 1913.5040000000004 301.68800000000005 362.02560000000005 239.18800000000005 287.02560000000005 120.67520000000002
             181.01280000000003 95.67520000000002 143.51280000000003 53.63342222222223 80.45013333333334 42.52231111111112 63.783466666666676 split 2 2413.5040000000004
              1913.5040000000004 965.4016000000001 765.4016000000001 241.35040000000004 191.35040000000004 965.4016000000001 765.4016000000001 241.35040000000004 
              191.35040000000004 482.7008000000001 382.7008000000001 53.63342222222223 42.52231111111112 */}

            {this.state.dietPlan1?
            <p>You're current caloric Threshold sits at {Math.floor(this.props.caloricThresh)} calories per day. To lose weight at around 1 pound a week consume around {Math.floor(newArr1AB[0])} 
            calories per day. To lose weight at a weight at a around 2 pounds per consume around {Math.floor(newArr1AB[1])} calories per day. 
            For 2 pounds lost per week range your carb intake between {Math.floor(newArr1AB[2])} and {Math.floor(newArr1AB[3])} grams per day. For 
            1 pound lost weekly range your carbs between {Math.floor(newArr1AB[3])} a day and {Math.floor(newArr1AB[4])} carbs daily. </p>
            :null}
            {this.state.dietPlan2?<p> Your current caloric threshold is {Math.floor(this.props.caloricThresh)} calories per day. 
            To maintain your current weight try to keep your daily caloric intake as close to this number as possible. 
            Try to
            Keep your carbohydrate intake between {Math.floor(newArr2AB[1])} and {Math.floor(newArr2AB[2])} grams per day,  
            your protein intake between {Math.floor(newArr2AB[3])} and {Math.floor(newArr2AB[4])} grams per day, 
            your fat intake between {Math.floor(newArr2AB[5])} and {Math.floor(newArr2AB[6])} grams per day. You should always try to 
            keep your total caloric intake between {Math.floor(newArr2AB[8])} and {Math.floor(newArr2AB[9])} calories per day if your goal is to maintain your current weight. 
            The above reccomendations would be considered the healthiest overall way to go about eating and maintaining your current weight, however there is also an alternative split that you may try
            if you are still having
            difficulty maintaining your current weight or building muscle. This is a 40, 40, 20 split. 40% protein, 40% carbs, and 20% fat.
            To split your diet in this way Try to consume {Math.floor(newArr2AB[10])} grams of carbs per day, {Math.floor(newArr2AB[11])} grams of protein per day.
            and {Math.floor(newArr2AB[12])} grams of fat in a day. No matter which split you choose health professionals advise that only 1/3rd of your fat intake come from saturated fat and
            for the rest to come from either monounsaturated, or better yet polyunsaturated fats.</p> :null}  
            {this.state.dietPlan3?<h1>Diet Plan 3</h1> :null}
            {this.state.dietPlan4?<h1>Diet Plan 4</h1>:null}
            {this.state.dietPlan5?
            <p>
            Your current caloric threshold is {Math.floor(this.props.caloricThresh)} calories per day. 
            To maintain your current weight try to keep your daily caloric intake as close to this number as possible. 
            Try to
            Keep your carbohydrate intake between {Math.floor(newArr2AB[1])} and {Math.floor(newArr2AB[2])} grams per day,  
            your protein intake between {Math.floor(newArr2AB[3])} and {Math.floor(newArr2AB[4])} grams per day, 
            your fat intake between {Math.floor(newArr2AB[5])} and {Math.floor(newArr2AB[6])} grams per day. You should always try to 
            keep your total caloric intake between {Math.floor(newArr2AB[8])} and {Math.floor(newArr2AB[9])} calories per day if your goal is to maintain your current weight. 
            The above reccomendations would be considered the healthiest overall way to go about eating and maintaining your current weight, however there is also an alternative split that you may try
            if you are still having
            difficulty maintaining your current weight or building muscle. This is a 40, 40, 20 split. 40% protein, 40% carbs, and 20% fat.
            To split your diet in this way Try to consume {Math.floor(newArr2AB[10])} grams of carbs per day, {Math.floor(newArr2AB[11])} grams of protein per day.
            and {Math.floor(newArr2AB[12])} grams of fat in a day. No matter which split you choose health professionals advise that only 1/3rd of your fat intake come from saturated fat and
            for the rest to come from either monounsaturated, or better yet polyunsaturated fats.
            </p>:null}
            {this.state.dietPlan6?<h1>Diet Plan 6</h1>:null}
            {this.state.dietPlan7?<h1>Diet Plan 7</h1>:null}
            {this.state.dietPlan8?<p>
            Your current caloric threshold is {Math.floor(this.props.caloricThresh)} calories per day. 
            To maintain your current weight try to keep your daily caloric intake as close to this number as possible. 
            Try to
            Keep your carbohydrate intake between {Math.floor(newArr2AB[1])} and {Math.floor(newArr2AB[2])} grams per day,  
            your protein intake between {Math.floor(newArr2AB[3])} and {Math.floor(newArr2AB[4])} grams per day, 
            your fat intake between {Math.floor(newArr2AB[5])} and {Math.floor(newArr2AB[6])} grams per day. You should always try to 
            keep your total caloric intake between {Math.floor(newArr2AB[8])} and {Math.floor(newArr2AB[9])} calories per day if your goal is to maintain your current weight. 
            The above reccomendations would be considered the healthiest overall way to go about eating and maintaining your current weight, however there is also an alternative split that you may try
            if you are still having
            difficulty maintaining your current weight or building muscle. This is a 40, 40, 20 split. 40% protein, 40% carbs, and 20% fat.
            To split your diet in this way Try to consume {Math.floor(newArr2AB[10])} grams of carbs per day, {Math.floor(newArr2AB[11])} grams of protein per day.
            and {Math.floor(newArr2AB[12])} grams of fat in a day. No matter which split you choose health professionals advise that only 1/3rd of your fat intake come from saturated fat and
            for the rest to come from either monounsaturated, or better yet polyunsaturated fats.
            </p>
            :null}
            {this.state.dietPlan9?<h1>Diet Plan 9</h1>:null}
        </div>
        )
    }
}

export default YourPlan;



