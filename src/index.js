import React from "react";
import ReactDOM from "react-dom";

function HelloWorld(){
    return (
    <div><Hello/> <World/>!</div> //--> A component must return a single element. A component can have multiple components in itself.
    );

    // return React.createElement('div', {}, "Hello", " ", "World","!");
}

function Hello(){
    return(
        <span>Hello</span>
    );
}

function World(){
    return(
        <span> World</span>
    );
}


ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);