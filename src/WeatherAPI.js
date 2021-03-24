import $ from "jquery";

const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=Kharkiv,ua&appid=f946184aa5d4a3e166b253b2b076ffa6';
export default async function getWeatherAPI(component) {
    let reqResult = null;
    await $.getJSON( URL, function(data) {
        let result = data.list;
        let weatherArray = [];
        for(let i = 0; i < 40; i+=8){
            let temperatures = [];
            let names = [];
            for(let j = 0; j < 4; j++){
                let temp = (result[i+j].main.temp - 273.1).toFixed(0);
                let name = result[i+j].weather[0].main.toLowerCase();
                temperatures.push(temp);
                names.push(name);
            }
            let weather = {
                name: result[i].weather[0].main.toLowerCase(),
                temperature: (result[i].main.temp - 273.1).toFixed(0),
                temperatures: temperatures,
                names: names
            }
            weatherArray.push(weather);
        }
        reqResult = weatherArray
    });
    return reqResult;
}
