import React from 'react';

const element1 = (
  <h1 className="title">
    <a href="https://google.com"> google</a>
  </h1>
);


function App(props) {
  const style = {color: "blue"}
    return   <h1 style = {style}>
     <p>{props.text}</p>
  </h1>;
}



export default App;
