import React from "react";

class SomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wasFoundMistake: false,
        }
    }


    onClickHandler() {
        
        try {
            throw new Error("Some mistake");
        } catch {
            this.setState({
                wasFoundMistake: true
            })
        }
    }


    render() {
        if(this.state.wasFoundMistake){
             throw new Error('Simulated error.');
        }

        return (
            <div>
                <button type="button" onClick={this.onClickHandler.bind(this)}>Click</button>
            </div>
        )
    }
}

export default SomeComponent;