import React , {Component} from 'react';
import image from "../img/mane-page.jpg";

class FirstScreen extends Component {

    componentWillMount() {
        document.body.style.backgroundImage = `url(${image})`;
    }

    render() {
        return (
            <div className='FirstScreen'>

                <h1 >Впервые слышите о Fitnes-5?</h1>
                <h2 >5 недель изменят вашу жизнь</h2>
                <h3>Не знаете, с чего начать, когда речь заходит о похудении и фитнесе?
                    воспользуйтесть 5 недельной программой тренировок и мы
                    позаботимся о вас! </h3>
                <h3>Это абсолютно бесплатно!</h3>
                <button onClick={() => {this.props.Enter()}}> Войти</button>

            </div>
        )
    }
}


export default FirstScreen;