import React , {Component} from 'react';


class Timer extends Component {
    state = {
        timer : null,
        timeLeft : null,
        screen: 1,
        pause: true,

    }
    StartTimer = (timeLeft) => {

            if (this.props.timer == null) {
                return this.setState({timeLeft : "Выберите неделю" , timer: timer})
            }
            clearInterval(this.state.timer);
            let timer = setInterval(() =>{
            let timeLeft = this.state.timeLeft - 1;
            if (!this.state.pause) {
                timeLeft = this.state.timeLeft;
            }
            if (timeLeft === 0) {
                clearInterval(timer)
            }
            this.setState({timeLeft: timeLeft })

        } , 1000);
        this.setState({screen: 2})
        return this.setState({timeLeft : timeLeft , timer: timer})
    }
    Stop = () => {
        this.setState({screen: 3})
    }

    Pause = () => {
        this.setState({pause: !this.state.pause});

        if (!this.state.pause) {
            this.StartTimer(this.state.timeLeft)
        }
    }



    shouldComponentUpdate() {
        return this.state.pause
    }

    Screen = () => {
        if (this.state.screen === 1) {
            return (
                <div className="Timer">
                    <h1>Время отдыха {this.props.timer}</h1>
                    <Button time={this.props.timer} StartTimer={this.StartTimer} />
                    <TimerDisplay timeLeft={this.state.timeLeft} />
                </div>
            )
        } if (this.state.screen === 2)  {
            return (
                <div className="Timer">
                    <TimerDisplay timeLeft={this.state.timeLeft} />
                    {!this.state.pause ? false : <button onClick={this.Stop}>Стоп</button>}
                    <button onClick={this.Pause}>{!this.state.pause ? "Продолжить" : "Пауза"}</button>
                </div>
            )
        } if (this.state.screen === 3 )  {
            return (
                <div className="Timer">
                    <h1>Время отдыха {this.props.timer}</h1>
                    <Button  time={this.props.timer} StartTimer={this.StartTimer} />
                </div>
            )
        }
    }
    render() {

        return (
            this.Screen()

        )
    }
}

class Button extends Component {
    handleStartTimer = () => {
        return this.props.StartTimer(this.props.time)
    }
    render() {
        return <button  onClick={this.handleStartTimer}> Завершить </button>
    }
}

class TimerDisplay extends Component {


    render() {
        if (this.props.timeLeft === 0) {
            return <div></div>
        }
        return <div>
                    <h1>{this.props.timeLeft}</h1>
                </div>

    }
}
export default Timer;