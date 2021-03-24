import React from 'react';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

function nth(n) {
    return ["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th"
}

function getDateString(date) {
    const dateObj = new Date(date)
    const day = dateObj.getDate();
    const monthName = months[dateObj.getMonth()];
    return `${monthName} ${day}${nth(day)}, 1:00 pm`;
}

function getDayName(date) {
    let d = new Date(date);
    return days[d.getDay()];
}

class DayCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let imagePath = `./icons/${this.props.weather.name}.png`
        const borderBottom = this.props.status ? 0 : 2;
        return (
            <div className={'day'} onClick={() => this.props.clickHandler(this.props.id)} style={{borderBottomWidth: borderBottom}}>
                <h4 className={'day-title'}>{getDayName(this.props.day)}</h4>
                <p className={'day-date'}>{getDateString(this.props.day)}</p>
                <img className={'day-weather-image'} src={imagePath} alt="#"/>
                <h4 className={'day-temperature'}>{this.props.weather.temperature} C°</h4>
                <p className={'day-weather'}>{this.props.weather.name}</p>
            </div>
        )
    }
}

export default DayCard