import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import UserInput from './src/UserInput/UserInput';
import UserOutput from './src/UserOutput/UserOutput';
class App extends Component {
  state = {
      username: 'React1'
    };
  handleChange = () =>(
    this.setState({
      username: event.target.value
    })
  );

  render() {
    return (
      <div>
        <UserInput change= {this.handleChange} name ={this.state.username}/>
        <UserOutput name = {this.state.username}/>
        <UserOutput name = {this.state.username}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
