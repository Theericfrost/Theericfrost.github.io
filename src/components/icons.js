import React , {Component} from 'react';
import {pushup}  from '../list/List';
import Pushup from "./pushup";
import Squats from "./squats";
import Plank from "./plank";
import Pullup from "./pullup";
import Abd from "./abd";

class Icons extends Component {
  state = {
      formScreen: 'pushup',

  };

  ChangeState = (data) => {
      this.setState(data);
  }

  Form = () => {
     if (this.state.formScreen === "pushup") {
        return (
             <Pushup />
        )
    } if (this.state.formScreen === "squats") {
        return (
            <Squats />
        )
    }  if (this.state.formScreen === "plank") {
        return (
            <Plank />
        )
    } if (this.state.formScreen === "pullup") {
        return (
            <Pullup />
        )
    } if (this.state.formScreen === "abd") {
        return (
            <Abd />
        )
    }
      return (
          <div>
              <h1 className='Form_h1'> Выберите Упражнение </h1>
          </div>)

  }

  render() {
    return (
        <div>
            <div className="Icons">
                <h1 onClick={() => {this.ChangeState({formScreen: 'pushup'})}}>Push-up</h1>
                <h1 onClick={() => {this.ChangeState({formScreen: 'squats'})}}>Squats</h1>
                <h1 onClick={() => {this.ChangeState({formScreen: 'plank'})}}>Plank</h1>
                <h1 onClick={() => {this.ChangeState({formScreen: 'pullup'})}}>Pull-up</h1>
                <h1 onClick={() => {this.ChangeState({formScreen: 'abd'})}}>Abd</h1>

            </div>
            {this.Form()}
        </div>
    )
  }
}

export default Icons;
