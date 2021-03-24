import React from 'react';
import DayCard from "./DayCard";

const city = 'Kharkiv';

const AVAILABLE_WEATHER = ['cloudy', 'rainy', 'snowy', 'sunny']

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getWeather(date) {
    return {
        name: AVAILABLE_WEATHER[date] || AVAILABLE_WEATHER[0],
        temperature: getRandomInt(30)
    };
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    handleClick = (i) => {
        this.setState({
            selected: i
        });
    }

    render() {
        const date = new Date();
        let days = [];
        for (let i = 0; i < 5; i++) {
            days.push(<DayCard day={date.setDate(date.getDate() + 1)}
                               weather={getWeather(i)}
                               status={i === this.state.selected}
                               clickHandler={this.handleClick}
                               id={i}
                               parentSetState={this.setState}/>)
        }
        return (
            <>
                <div className="wrapper">
                    <h1 className={'city'}>{city.capitalize()}</h1>
                    <div className={'container'}>{days}</div>
                </div>
            </>
        )
    }
}

export default App