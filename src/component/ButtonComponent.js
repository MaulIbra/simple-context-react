import React from 'react';
import {IncDecContext} from "../context/IncreaseDecreaseContext";

const ButtonComponent = () => {
    return (
        <div>
            <IncDecContext.Consumer>{
                ({increaseToggle,decreaseToggle}) => {
                    return(
                        <>
                            <button onClick={()=>increaseToggle()}>Increase</button>
                            <button onClick={()=>decreaseToggle()}>Decrease</button>
                        </>
                    )
                }
            }
            </IncDecContext.Consumer>
        </div>
    );
};

export default ButtonComponent;