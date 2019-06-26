import React, {Component} from 'react';

class UserInput extends Component{
  render(){
   const style = {
     margin: '16px',
     border: '2px solid SlateBlue',
     padding: '5px',
     boxShadow: '2px 5px gray'
   } 
   return(
     <div style = {style}>
        <input type="text" onChange ={this.props.change} value = {this.props.name}></input>
     </div>

   ); 

  }
}
export default UserInput;