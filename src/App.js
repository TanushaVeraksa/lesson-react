import React from 'react';
import Site from './Site'

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    name: "Marco",
  };
}

componentDidMount() {
  setInterval(() => this.setState({name: "Max"}), 5000)
}

  render() {
    return (
  <>
    <Site name= {this.state.name}></Site>
    <Site name= "VK"></Site>
    <Site name= "Google"></Site>
    <Site name= "Yandex"></Site>
  </>
    );
  }
}



export default App;
