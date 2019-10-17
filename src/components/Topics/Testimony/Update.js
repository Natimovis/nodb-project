import React, { Component } from 'react'
import Axios from 'axios';

export default class Update extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            editingImg: false,
            afterImg: this.props.afterImg
        }
        this.update=this.update.bind(this);
    }
    handleChangeImg = (e) => {
        this.setState({ afterImg: e.target.value });
        console.log(e.target.value);
    }
    update(e) {
        console.log("updated")
        console.log(this.state.afterImg)
        const { afterImg } = this.state;
        const { id, editTestimonial } = this.props;
        if( e.key === "Enter" && this.state.afterImg.length !== 0 ) {
            editTestimonial( id, afterImg );
            
            this.setState({ editing: false });
            console.log(this.state.afterImg)
        }
    }
    render() {
        const { id, afterImg } = this.props;
        const { editingImg } = this.state;
        return(
            <div key={this.props.key}>
                <span>
                    {
                            editingImg
                        ?
                            <input className="quoteInput" value={ this.state.afterImg} onChange={ this.handleChangeImg} onKeyPress={this.update} />
                        :
                            <span className="quoteTextImg">{afterImg}</span>
                    }
                </span>
                <button className="update" onClick={ () => this.setState({ editingImg: !editingImg, afterImg }) }>I've gotten bigger since then and I want to update my after photo</button>
            </div>
            )
        }
    }