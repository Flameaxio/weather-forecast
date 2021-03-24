import React from "react";

class HourlyWeather extends React.Component{
    render() {
        let sections = [];
        for(let i = 0; i < 4; i++){
            const className = `section ${i*8}`;
            const time = `${i*8}:00`;
            const weather = this.props.weather[i];
            const temperature = this.props.temperature[i];
            let imagePath = `./icons/${weather}.png`
            sections.push(
                <div className={className}>
                    <p className={'time'}>{time}</p>
                    <img src={imagePath} className="weather"/>
                    <p className="temperature">{temperature}  C°</p>
                </div>
            )
        }
        return(
            <div className={'hourly-weather'}>
                {sections}
            </div>
        )
    }
}

export default HourlyWeather