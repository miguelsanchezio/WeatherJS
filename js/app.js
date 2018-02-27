// Init weather object
const weather = new Weather('Anaheim', 'CA');
// Init UI object
const ui = new UI();

// weather.changeLocation('Irvine', 'CA');

// Get weather on DOM load
document.addEventListener('DOMContentLoad', getWeather());

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}