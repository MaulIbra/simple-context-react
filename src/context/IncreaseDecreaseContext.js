import React from "react";


const IncDecContext = React.createContext({
    number : 0,
    increaseToggle : ()=>{},
    decreaseToggle : ()=>{}
})

export {IncDecContext}