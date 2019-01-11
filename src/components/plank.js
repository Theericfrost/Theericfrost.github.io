import {plank} from "../list/List";
import Timer from "./timer";
import React , {Component} from "react";
import image from "../img/plank.jpg";

class Plank extends Component {
    state = {
        program : [],
        timer : null,
        week: null,
    };
    componentWillMount() {
        document.body.style.backgroundImage = `url(${image})`;
    }
    dayClick = (event) => {
        this.setState(
            {program: plank[`date_${event.target.innerHTML}`].con.join('-'),
                timer: plank[`date_${event.target.innerHTML}`].res,
                week: plank[`date_${event.target.innerHTML}`].date,
            }
        );
    }
    Back = () => {
        this.setState(
            {week: null}
        )
    }
    Screen = () => {

        if (this.state.week == 1) {
            return (<div>

                    <div className='days-after'>
                        <h1>Неделя 1</h1>
                    </div>
                    <div className="Otjim">
                        <h1 onClick={this.Back}>Вернутся к выбору недели</h1>
                        <h3>Количество секунд в планке</h3>
                        <h3>{this.state.program}</h3>
                    </div>
                    <Timer timer={this.state.timer} />
                </div>
            )
        }
        if (this.state.week == 2) {
            return (<div>

                    <div className='days-after'>
                        <h1>Неделя 2</h1>
                    </div>
                    <div className="Otjim">
                        <h1 onClick={this.Back}>Вернутся к выбору недели</h1>
                        <h3>Количество секунд в планке</h3>
                        <h3>{this.state.program}</h3>
                    </div>
                    <Timer timer={this.state.timer} />
                </div>
            )
        }
        if (this.state.week == 3) {
            return (<div>

                    <div className='days-after'>
                        <h1>Неделя 3</h1>
                    </div>
                    <div className="Otjim">
                        <h1 onClick={this.Back}>Вернутся к выбору недели</h1>
                        <h3>Количество секунд в планке</h3>
                        <h3>{this.state.program}</h3>
                    </div>
                    <Timer timer={this.state.timer} />
                </div>
            )
        }
        if (this.state.week == 4) {
            return (<div>

                    <div className='days-after'>
                        <h1>Неделя 4</h1>
                    </div>
                    <div className="Otjim">
                        <h1 onClick={this.Back}>Вернутся к выбору недели</h1>
                        <h3>Количество секунд в планке</h3>
                        <h3>{this.state.program}</h3>
                    </div>
                    <Timer timer={this.state.timer} />
                </div>
            )
        }
        if (this.state.week == 5) {
            return (<div>

                    <div className='days-after'>
                        <h1>Неделя 5</h1>
                    </div>
                    <div className="Otjim">
                        <h1 onClick={this.Back}>Вернутся к выбору недели</h1>
                        <h3>Количество секунд в планке</h3>
                        <h3>{this.state.program}</h3>
                    </div>
                    <Timer timer={this.state.timer} />
                </div>
            )
        }
        return(
            <div>

                <h1 className='Form_h1'> Планка</h1>
                <h1 className='Form_h1'> Выберите Неделю </h1>
                <div className='days'>
                    <h1  onClick={this.dayClick}>1</h1>
                    <h1  onClick={this.dayClick}>2</h1>
                    <h1  onClick={this.dayClick}>3</h1>
                    <h1  onClick={this.dayClick}>4</h1>
                    <h1  onClick={this.dayClick}>5</h1>
                </div>

            </div>
        )

    }
    render(){


        return(
            this.Screen()
        )
    }
}

export default Plank;