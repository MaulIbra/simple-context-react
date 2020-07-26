import React, {Component} from 'react';
import CardComponent from "./CardComponent";
import {IncDecContext} from "../context/IncreaseDecreaseContext";

class CardContainer extends Component {

    constructor(props) {
        super(props);

        this.decreaseToggle = () =>{
            this.setState({
                ...this.state,
                number : this.state.number - 1
            })
        }

        this.increaseToggle = () =>{
            this.setState({
                ...this.state,
                number : this.state.number +  1
            })
        }

        this.state={
            number : 0,
            increaseToggle : this.increaseToggle,
            decreaseToggle : this.decreaseToggle
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <IncDecContext.Provider value={this.state}>
                <CardComponent/>
                </IncDecContext.Provider>
            </div>
        );
    }
}

export default CardContainer;