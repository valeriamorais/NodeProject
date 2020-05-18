// Import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText(){
    return "Click on me"
}

// Create a react component
const App = () =>{
    const buttonText = { text: "Click me"};
    const style = { backgroundColor: 'blue', color: 'white' };
    const labelText = "Enter name:";

    return (
        <div>
            <label className="label" for="name">{labelText}</label>
            <input id="name" type="text" />
            <button style={style}>
            {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);