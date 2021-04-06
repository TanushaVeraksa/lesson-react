import React from 'react';
import Site from './Site'

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
    <Site name= {this.state.counter}></Site>
    <button onClick={this.handleClick}>counter</button>
  </>
    );
  }
}



export default App;
