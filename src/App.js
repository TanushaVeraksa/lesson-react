import React from 'react';
import ClickCounter from './Site'

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    counter: 0,
  };
}

handleClick = () => {
      this.setState({counter: this.state.counter + 1})
}

  render() {
    return (
  <>
    <ClickCounter number= {this.state.counter}></ClickCounter>
    <p> counter: {this.state.counter}</p>
    <button onClick={this.handleClick}>counter</button>
  </>
    );
  }
}



export default App;
