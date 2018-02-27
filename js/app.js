// Init weather object
const weather = new Weather('Anaheim', 'CA');

// weather.changeLocation('Irvine', 'CA');

// Get weather on DOM load
document.addEventListener('DOMContentLoad', getWeather());

function getWeather() {
    weather.getWeather()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}