let activate1 = document.getElementById('activate1'); // bind via dom
let activate2 = document.getElementById('activate2'); // bind via dom aan js
let activate3 = document.getElementById('activate3'); // bind via dombuttoon aan js

activate1.addEventListener("click", getWeather1); // click event
activate2.addEventListener("click", getWeather2);
activate3.addEventListener("click", getWeather3);

let result = document.getElementById('result') // bind div element aan js

let apiAdress =  "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam";
let url = apiAdress + key + locatie + geoLocation;

function getWeather1(){
    console.log(url);
    makeAjaxCall(url, "GET"). then (showWeather1, errorHandler);
}

function showWeather1(JSONresponseFromAjax){
    result.innerHTML = JSONresponseFromAjax;
}

function showWeather2(JSONresponseFromAjax)
{
    let weatherObject = JSON.parse(JSONresponseFromAjax);
    let completeData = "";
    for(const [key, value] of Object.entries(weatherObject.liveweer[0]))
    {
        console.log('$(key) : $(value)');
        completeData += key + " : " + value + "<br>";
        result.innerHTML = completeData;
    }
}



function getWeather2()
{
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
}

function showWeather3(weatherString)
{
    let weatherObject = JSON.parse(weatherString);
    let ditWeer = 
    "Uw Locatie:" + weatherObject.liveweer[0].plaats +
     "<br>Temperatuur: " + weatherObject.liveweer[0].temp + "&#176;C" + 
     "<br>Gevoelsemperatuur: " + weatherObject.liveweer[0].gtemp + "&#176;C" +
     "<br>Minimale temperatuur: " + weatherObject.liveweer[0].d0tmin +
     "<br>Maximale temperatuur: " + weatherObject.liveweer[0].d0tmax +
     "<br>Verwachting: " + weatherObject.liveweer[0].verw +
     "<br>Windkracht: " + weatherObject.liveweer[0].d0windk +
     "<br>Windrichting: " + weatherObject.liveweer[0].d0windr +
     "<br>Windsnelheid in km/h: " + weatherObject.liveweer[0].windkmh +
     "<br>Neerslagkans: " + weatherObject.liveweer[0].d0neerslag +
     "<br>Zonkans: " + weatherObject.liveweer[0].d0zon +
     "<br>Luchtdruk: " + weatherObject.liveweer[0].luchtd;
    result.innerHTML = ditWeer;
}

function getWeather3()
{
    makeAjaxCall(url, "GET"). then (showWeather3, errorHandler);
}