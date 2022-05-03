const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById ('current-temp');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();

    timeEl.textContent = hour + ':' + minutes 
    dateEl.textContent = days[day] + ', ' +date+ ' ' + months[month]


}, 1000);

displayDay()
function displayDay(){
    var day1Name = document.getElementById("day1")
    var day2Name = document.getElementById("day2")
    var day3Name = document.getElementById("day3")
    var day4Name = document.getElementById("day4")
    var day5Name = document.getElementById("day5")
    var day6Name = document.getElementById("day6")
    var today = new Date()
    var day = today.getDay()

  
    

    day1Name.textContent=days[day+1]
    day2Name.textContent=days[day+2]
    day3Name.textContent=days[day+3]
    day4Name.textContent=days[day+4]
    day5Name.textContent=days[day+5]
    day6Name.textContent=days[day+6]

    console.log(days[day+4])



}