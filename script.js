input = document.getElementById('pac-input')
let inputLat
let inputLng
let map
var markers = []
var iconImage = 'https://maps.google.com/mapfiles/marker_black.png'
var cityName;

var count = 1

function getApi() {
  var iLa= inputLat
  var iLn= inputLng

 

  const API = '30d2e66c96244fb068a88960c18a85c9'
  const units = 'metric'
  const exclude = 'hourly, minutely, alerts'
  const lang = 'Eng'
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${iLa}&lon=${iLn}&appid=${API}&units=${units}&exclude=${exclude}&lang=${lang}`


  fetch(url)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {



      const currentHumidity = document.getElementById('getHumidity')
      currentHumidity.textContent = data.current.humidity
      const currentPressure = document.getElementById('getPressure')
      currentPressure.textContent = data.current.pressure
      const currentWindSpeed = document.getElementById('getWindSpeed')
      currentWindSpeed.textContent = data.current.wind_speed
      const sunriseToday = document.getElementById('getSunrise')
      sunriseToday.textContent = data.current.sunrise
      const sunsetToday = document.getElementById('getSunset')
      sunsetToday.textContent = data.current.sunset
      const tempToday = document.getElementById('getTemp')
      tempToday.textContent = data.current.temp
      
      //week 0
      const tDay0 = document.getElementById('tempDay0')
      tDay0.textContent = data.daily[0].temp.day
      const tNight0 = document.getElementById('tempNight0')
      tNight0.textContent = data.daily[0].temp.night
      const pressure0 = document.getElementById('pressureDay0')
      pressure0.textContent = data.daily[0].pressure
      const humidity0 = document.getElementById('humidityDay0')
      humidity0.textContent = data.daily[0].humidity
      // const sunrise0 = document.getElementById('sunriseDay0')
      // sunrise0.textContent = data.daily[0].sunrise
      // const sunset0 = document.getElementById('sunsetDay0')
      // sunset0.textContent = data.daily[0].sunset


      //week 1

      const tDay1 = document.getElementById('tempDay1')
      tDay1.textContent = data.daily[1].temp.day
      const tNight1 = document.getElementById('tempNight1')
      tNight1.textContent = data.daily[1].temp.night
      const pressure1 = document.getElementById('pressureDay1')
      pressure1.textContent = data.daily[1].pressure
      const humidity1 = document.getElementById('humidityDay1')
      humidity1.textContent = data.daily[1].humidity
      // const sunrise1 = document.getElementById('sunriseDay1')
      // sunrise1.textContent = data.daily[1].sunrise
      // const sunset1 = document.getElementById('sunsetDay1')
      // sunset1.textContent = data.daily[1].sunset

      //week 2

      const tDay2 = document.getElementById('tempDay2')
      tDay2.textContent = data.daily[2].temp.day
      const tNight2 = document.getElementById('tempNight2')
      tNight2.textContent = data.daily[2].temp.night
      const pressure2 = document.getElementById('pressureDay2')
      pressure2.textContent = data.daily[2].pressure
      const humidity2 = document.getElementById('humidityDay2')
      humidity2.textContent = data.daily[2].humidity
      // const sunrise2 = document.getElementById('sunriseDay2')
      // sunrise2.textContent = data.daily[2].sunrise
      // const sunset2 = document.getElementById('sunsetDay2')
      // sunset2.textContent = data.daily[2].sunset

      //week 3

      const tDay3 = document.getElementById('tempDay3')
      tDay3.textContent = data.daily[3].temp.day
      const tNight3 = document.getElementById('tempNight3')
      tNight3.textContent = data.daily[3].temp.night
      const pressure3 = document.getElementById('pressureDay3')
      pressure3.textContent = data.daily[3].pressure
      const humidity3 = document.getElementById('humidityDay3')
      humidity3.textContent = data.daily[3].humidity
      // const sunrise3 = document.getElementById('sunriseDay3')
      // sunrise3.textContent = data.daily[3].sunrise
      // const sunset3 = document.getElementById('sunsetDay3')
      // sunset3.textContent = data.daily[3].sunset

      //week 4

      const tDay4 = document.getElementById('tempDay4')
      tDay4.textContent = data.daily[4].temp.day
      const tNight4 = document.getElementById('tempNight4')
      tNight4.textContent = data.daily[4].temp.night
      const pressure4 = document.getElementById('pressureDay4')
      pressure4.textContent = data.daily[4].pressure
      const humidity4 = document.getElementById('humidityDay4')
      humidity4.textContent = data.daily[4].humidity
      // const sunrise4 = document.getElementById('sunriseDay4')
      // sunrise4.textContent = data.daily[4].sunrise
      // const sunset4 = document.getElementById('sunsetDay4')
      // sunset4.textContent = data.daily[4].sunset

      //week 5
      const tDay5 = document.getElementById('tempDay5')
      tDay5.textContent = data.daily[5].temp.day
      const tNight5 = document.getElementById('tempNight5')
      tNight5.textContent = data.daily[5].temp.night
      const pressure5 = document.getElementById('pressureDay5')
      pressure5.textContent = data.daily[5].pressure
      const humidity5 = document.getElementById('humidityDay5')
      humidity5.textContent = data.daily[5].humidity
      // const sunrise5 = document.getElementById('sunriseDay5')
      // sunrise5.textContent = data.daily[5].sunrise
      // const sunset5 = document.getElementById('sunsetDay5')
      // sunset5.textContent = data.daily[5].sunset


    


    
    }    
    )
}


function citySearch(){

  var APIkey = '30d2e66c96244fb068a88960c18a85c9'
  var cityLat= inputLat
  var cityLon= inputLng
  var weatherAPI="http://api.openweathermap.org/geo/1.0/reverse?lat="+cityLat+"&lon="+cityLon+"&appid="+APIkey

  fetch(weatherAPI)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {

      cityName= data[0].name
      var indextCity =document.getElementById("time-zone")
      indextCity.textContent=cityName

    })
}


function deleteMarkers() {
  
  markers = []
}

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map)
  }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
  setMapOnAll(null)
}

function initMap() {
 
  const myLatlng = { lat: 53.4795, lng: -2.2451 }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatlng,
  })
  
  const input = document.getElementById('pac-input')
  const searchBox = new google.maps.places.SearchBox(input)
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
  
  map.addListener('bounds_changed', () => {
    searchBox.setBounds(map.getBounds())
    
 
  })
  
  searchBox.addListener('places_changed', () => {
    
    getApi()
    hideMarkers()

    const places = searchBox.getPlaces()

    if (places.length == 0) {
      return
    }
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds()
  
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log('Returned place contains no geometry')
        return
      }
  
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      }

      //input cooridinate
      inputLat = place.geometry.location.lat()
      inputLng = place.geometry.location.lng()  
      citySearch()  
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
          icon: iconImage,
          animation: google.maps.Animation.BOUNCE,
     
        })
      )
        
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport)
      } else {
        bounds.extend(place.geometry.location)
      }
          
    })
    var latLng = new google.maps.LatLng(inputLat, inputLng) //Makes a latlng
    map.panTo(latLng)
    console.log(inputLat)
    console.log(inputLng)
    
  })
   
      
      
  map.addListener('click', (mapsMouseEvent) => {
   
    hideMarkers()
    clickPos = mapsMouseEvent.latLng.toJSON()
    inputLat = clickPos.lat
    inputLng = clickPos.lng
    
    markers.push(
      new google.maps.Marker({
        position: { lat: inputLat, lng: inputLng },
        map: map,
        icon: iconImage,
        title: 'city',
        animation: google.maps.Animation.BOUNCE,
        
      })
      
      
      )
      getApi()
      citySearch()
     
  
      console.log(inputLat)
      console.log(inputLng)
   

  })

  
  //cooridnate output
  //console.log(inputLat)
  //console.log(inputLng)
  //console.log(inputLat)
  //console.log(inputLng)
      

}


var cityInput=[]
addcity()
function addcity(){

  var addCityBut=document.getElementById("addCity")
  addCityBut.addEventListener("click",Adding)
  
  function Adding(){
    var weatherPlannerC= document.getElementById("weatherPlanner")

    if(cityInput.length<5){
      cityInput.push(cityName)
    }
    else if(cityInput.length==5){
      cityInput=[]
    }


    for(i=0;i<5;i++){
      var weatherPlannerId = weatherPlannerC.children[i].id
      wpID= document.getElementById(weatherPlannerId)
      wpID.textContent=cityInput[i]
     
    }
  }
}

function displaying(){

}



