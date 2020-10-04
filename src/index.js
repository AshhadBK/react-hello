import React from "react";
import ReactDOM from "react-dom";

function HelloWorld(){
    return [<Hello/>, <World/>, "!"];
     //--> A component can return an array too. After all it is JS in JSX.


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