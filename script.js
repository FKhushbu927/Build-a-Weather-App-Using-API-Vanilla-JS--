const apiKey = `3ab57200c3c2acce4e470f0e3741c033`;


const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
   
}

const displayTemperature = (data) => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('weather-type', data.weather[0].main)

}
const setInnerTextById = (id, text) =>{
        const temperature = document.getElementById(id);
        const weatherType = document.getElementById(id);
        temperature.innerText = text;
        weatherType.innerText = text;

}
document.getElementById('btn-search').addEventListener('click', function(){
        const searchField = document.getElementById('search-input');
        const city = searchField.value;
        document.getElementById('city-name').innerText = city;
       
        loadTemperature(city);
})

