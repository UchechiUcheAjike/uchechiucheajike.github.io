// what is the path to current temp using dot notation?

// (Math.round data.list[0].main.temp) + '&deg;F';


let cityId = 5604473;
const apiKey = 'a3541cca544e535c38082566d077458b'

const prestonPath = `https://api.openweathermap.org/data/2.5/weather?units=imperial&id=${cityId}&appid=${apiKey}`;

const apiURL = prestonPath;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    // jsObject = jsObject;
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.querySelector('#icon').setAttribute('alt', desc);
  });
  


  // document.querySelector('#current-temp').textContent = jsObject.main.temp;
  // document.getElementById('current-temp').textContent = jsObject.main.temp;

  