import React from "react";

import AddTestimony from "./AddTestimony";
import Testimony from "./Testimony";

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPage: ""
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <button onClick={() => this.setState({currentPage: "add"})}>Share Results</button>
                    <button onClick={() => this.setState({currentPage: "view"})}>View User Results</button>
                </nav>
                <h1 className="uploadResults">Thrilled with your results from following your personalized diet plan? Let Us Know!
                    Upload you're before and after photo's here!
                </h1>
                {
                    this.state.currentPage ==="add"
                ?
                    <AddTestimony />
                :
                    this.state.currentPage ==="view"
                ?
                    <Testimony />
                :
                    null
                }
            </div>
        )
    }
}

export default Test;