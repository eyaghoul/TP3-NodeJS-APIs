// Exemple de code pour faire une requête API (en utilisant "fetch")
const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL ="http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city, callback) {
const url = BASE_URL + city;

fetch(url)
.then((res) => res.json())
.then((weatherData) => callback(null, weatherData))
.catch((error) => callback(error, null));
}

function printWeatherData(city){
    getWeatherData(city,(error,data)=>{
        console.log("description",data.weather[0].description)
        console.log("temperature",data.main.temp)
        console.log("humidité",data.main.humidity)
        //console.log(data)
    })
}
printWeatherData("Sousse")


/* Exemple de code pour faire une requête API (en utilisant "axios")

const BASE_URL1 ="http://api.openweathermap.org/data/2.5/weather";
const axios = require("axios");

function getWeatherData(city, callback) {
const url = BASE_URL + city;
axios.get(BASE_URL1, {
        params: {
            q: city,           
            appid: API_KEY,   
            units: "metric",  
            lang: "fr"         
        }
    })
    .then(response => callback(null, response.data)).catch(error => callback(error, null));
}

function printWeatheData(city){
    getWeatherData(city,(error,data)=>{
        console.log("description",data.weather[0].description)
        console.log("temperature",data.main.temp)
        console.log("humidité",data.main.humidity)
        console.log(data)
    })
}
printWeatheData("Sousse")

*/

// test de l'api de open library en utilisant "fetch"  


const urllibrary ="https://openlibrary.org/search.json?q=the+lord+of+the+rings";

function getbookData(callback) {

fetch(urllibrary)
.then((res) => res.json())
.then((data) => callback(null, data))
.catch((error) => callback(error, null));
}

function printbookData(){
    getbookData((error,data)=>{
        
        //console.log(data)
        console.log(data.docs[0].title)
    })
}
printbookData()


// test de l' api   RandomUser en utilisant "fetch" 
const URL ="https://randomuser.me/api/";

function getData(callback) {
    fetch(URL)
    .then((res)=>res.json())
    .then((data)=>callback(null,data))
    .catch((error)=>callback(error,null))
    }


function printData(){
    getData((error,data)=>{
        
        console.log(data.info.seed,data.info.results,data.info.page,data.info.version)
       
    })
}
printData()

// Exemple de code pour faire une requête API NASA (en utilisant "axios")

const BASE_URL3 ="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const axios= require("axios");

function getNasaData(callback) {
axios.get(BASE_URL3)

    .then(response => callback(null, response.data))
    .catch(error => callback(error, null));
}

function printNasaData(){
    getNasaData((error,data)=>{
        console.log("titre",data.title)
        console.log("date",data.date)
        console.log("image",data.url)
    })
}
printNasaData()

