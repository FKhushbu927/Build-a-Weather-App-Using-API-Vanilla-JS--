const apiKey = `3ab57200c3c2acce4e470f0e3741c033`;


const loadTemperature = city => {
    // const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
loadTemperature('dhaka');