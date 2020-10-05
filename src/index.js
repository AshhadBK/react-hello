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
// function HelloWorld(){
// return(
// <>
//     <Hello/>
//     <World/>
//     !
// </>

// )

// }


// function Hello(){
//     return(
//         <span>Hello</span>
//     );
// }

// function World(){
//     return(
//         <span> World</span>
//     );
// }


// ReactDOM.render(
//     <HelloWorld/>,
//     document.querySelector('#root')
// );

// Real JS "expressions" can be inserted inside JSX code
// Expressions are those which priduces a value.
// Statements are those which don't produce a value. Therefore, they can't be used in JSX code.
// function SubmitButton(){
//     const buttonLabel = "Submit";
//     return(
//         <button>{buttonLabel}</button>
//     );
// }

// ReactDOM.render(
//     <SubmitButton/>,
//     document.querySelector("#root")
// )

// Conditionals in JSX

// Ternary Operator:

function IsValid(){
    let valid = true;
    return(
        <h1>{/*valid ? 'is valid' : 'is not valid'*/}</h1>  
        /*Comments inside JSX are done as above. JS code is present inside single curl braces. */
    );
}

ReactDOM.render(
    <IsValid/>,
    document.querySelector("#root")
)