import React from 'react';
import {IncDecContext} from "../context/IncreaseDecreaseContext";

const ResultComponent = () => {
    return (
        <div>
            <IncDecContext.Consumer>{
                ({number}) => {
                    return(
                        <>
                            <div>
                                <h5>The current count is {number}</h5>
                            </div>
                        </>
                    )
                }
            }
            </IncDecContext.Consumer>
        </div>
    );
};

export default ResultComponent;