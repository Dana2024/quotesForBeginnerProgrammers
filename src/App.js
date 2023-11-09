import React from "react";

import './App.css';
import quotes1 from './data/quotes1.json';



class App extends React.Component {

    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        
        const randomIndex = Math.floor (Math.random () * quotes1.slips.length)
        const advice = quotes1.slips[randomIndex].advice
        this.setState({advice})
    }

    render() {
        const { advice } =this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>NEXT ADVICE</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;