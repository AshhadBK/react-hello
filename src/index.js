import React from "react";
import ReactDOM from "react-dom";

// function HelloWorld(){
//     // return [<Hello/>, <World/>, "!"];
//      //--> A component can return an array too. After all it is JS in JSX.


//     // return React.createElement('div', {}, "Hello", " ", "World","!");

//     // To return multiple elements, eithre wrap them within a single tag or use fragments.
//     // function HelloWorld() {
//     // return (
//     //     <div>
//     //     <Hello/> <World/>!
//     //     </div>
//     //     );
//     //     }

//     // Fragments:
    

// }

// 

//Fragments Example:
function HelloWorld(){
return(
<>
    <Hello/>
    <World/>
    !
</>

)

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