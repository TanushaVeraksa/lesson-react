import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App"

// const element1 = React.createElement(
//   "h1", 
//   {className: "title"}, 
//   React.createElement("a", {href:"https://google.com"}, "lololo"));

ReactDOM.render(<App text = "Hello TMS"/>,document.getElementById('root'));

