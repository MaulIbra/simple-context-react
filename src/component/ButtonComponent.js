import React from 'react';
import {IncDecContext} from "../context/IncreaseDecreaseContext";
import {Button} from "react-bootstrap";

const ButtonComponent = () => {
    return (
        <div>
            <IncDecContext.Consumer>{
                ({increaseToggle,decreaseToggle}) => {
                    return(
                        <>
                            <Button variant="outline-danger m-2" onClick={decreaseToggle}>Decrement Count</Button>
                            <Button variant="outline-primary m-2" onClick={increaseToggle}>Increment Count</Button>
                        </>
                    )
                }
            }
            </IncDecContext.Consumer>
        </div>
    );
};

export default ButtonComponent;