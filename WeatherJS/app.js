//init Storage
const storage = new Storage();
//Get stored Location data
const weatherLocation = storage.getLocationData();
//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

//Change location event
document.getElementById('w-change-btn').addEventListener('click',
    (e) => {
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        //change location
        weather.changeLocation(city, state);
        //Set location Data in LS
        storage.setLocationData(city, state);

        //Get and Display weather
        getWeather();
        //close model
        $('#locModal').modal('hide');
    });

function getWeather() {
    weather.getWeather()
        .then(results => {
            //console.log(results);
            ui.paint(results)
        })
        .catch(err => console.log(err));
}
