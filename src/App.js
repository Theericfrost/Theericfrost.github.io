import React , {Component} from 'react';
import Icons from './components/icons';
import Header from './components/header';
import FirstScreen from './components/firstScreen';
import Autor from "./components/autor";


class App extends Component {

    state = {
        firstScreen: false,
    }


    Screen = () => {
        if (this.state.firstScreen) {
            return (
                <div>
                    <FirstScreen Enter={this.Enter} />
                </div>
            )
        }
        else{
            return (
                <div className="Secondsreen" >
                    <Header />
                    <Icons />
                    <Autor Exit={this.Exit}/>
                </div>
            )
        }
    }

    Enter = () => {
        this.setState({firstScreen: false})
    }

    Exit = () => {
        this.setState({firstScreen: true})
    }

    render(){
        return(
            this.Screen()
        )
    }
}




export default App;