import React from 'react';
import DayCard from "./DayCard";
import HourlyWeather from "./HourlyWeather";
import getWeatherAPI from "./WeatherAPI";

const city = 'Kharkiv';



class App extends React.Component {
    constructor(props) {
        window.setInterval(() => {
            this.setState({
                weatherArr: getWeatherAPI()
            });
        }, 300000);
        super(props);
        this.state = {
            selected: 0,
        }
    }
    getWeather(date) {
        if(this.state.weatherArr)
            return this.state.weatherArr[date];
        else
            return null;
    }

    handleClick = (i) => {
        this.setState({
            selected: i,
        });
    }

    render() {
        if((this.state.weatherArr === undefined)) {
            console.log('updating...');
            getWeatherAPI().then((result) => {
                this.setState({
                    weatherArr: result
                })
            });
        }
        const date = new Date();
        let days = [];
        for (let i = 0; i < 5; i++) {
            days.push(<DayCard day={date.setDate(date.getDate() + 1)}
                               weather={this.getWeather(i)}
                               status={i === this.state.selected}
                               clickHandler={this.handleClick}
                               id={i}
                               parentSetState={this.setState}/>)
        }
        let selected = days[this.state.selected];
        let selectedDayWeather;
        if(selected.props.weather) {
            selectedDayWeather = <HourlyWeather
                temperature={selected.props.weather.temperatures}
                weather={selected.props.weather.names}
            />
        }
        return (
            <>
                <div className="wrapper">
                    <h1 className={'city'}>{city.capitalize()}</h1>
                    <div className={'container'}>{days}{selectedDayWeather}</div>
                </div>
            </>
        )
    }
}

export default App