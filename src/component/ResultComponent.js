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
                                <h1>{number}</h1>
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