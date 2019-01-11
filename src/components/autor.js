import React,{Component} from 'react';

class Autor extends Component{

    render() {
        return(
            <div className='Autor'>
                <button onClick={() => { this.props.Exit()}}>Выйти</button>
                <br/>
                <a href="https://github.com/Theericfrost">TheEricFrost</a>
            </div>
        )
    }
}

export default Autor;