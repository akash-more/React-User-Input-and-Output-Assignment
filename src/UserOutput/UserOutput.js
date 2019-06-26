import React, {Component} from "react";
import './UserOutput.css';
class UserOutput extends Component{

  render(){
    return(
      <>
        <div className="UserOutput">Output multiple UserOutput components in the App component (any paragraph texts of your choice). This user is {this.props.name}
        </div>
      </>
    );
  }
}
export default UserOutput;