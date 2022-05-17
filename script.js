input = document.getElementById('pac-input')
let inputLat
let inputLng
let map
var markers = []
var iconImage = 'https://maps.google.com/mapfiles/marker_black.png'
var cityName;
var cityCount=[];
var LocaLat;
var LocaLng;

var count = 1
var imgIcon0= document.getElementById("icon0")
var imgIcon1= document.getElementById("icon1")
var imgIcon2= document.getElementById("icon2")
var imgIcon3= document.getElementById("icon3")
var imgIcon4= document.getElementById("icon4")
var imgIcon5= document.getElementById("icon5")
var imgIcon6= document.getElementById("icon6")

var img0 =  document.createElement('img')
var img1 =  document.createElement('img')
var img2 =  document.createElement('img')
var img3 =  document.createElement('img')
var img4 =  document.createElement('img')
var img5 =  document.createElement('img')
var img6 =  document.createElement('img')


localCheck()


function getApi() {
  var iLa= LocaLat
  var iLn= LocaLng

  const API = '137f617b3a8be25de11fcd61cb376091'
  const units = 'metric'
  const exclude = 'hourly, minutely, alerts'
  const lang = 'Eng'
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${iLa}&lon=${iLn}&appid=${API}&units=${units}&exclude=${exclude}&lang=${lang}`


  fetch(url)
    .then(function (response) {
      return response.json()

    })
    
    .then(function (data) {
      console.log(data)



      curingData = "https://openweathermap.org/img/wn/"+data.current.weather[0].icon +"@2x.png"
      d1IData= "https://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon +"@2x.png"
      d2IData= "https://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon +"@2x.png"
      d3IData= "https://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon +"@2x.png"
      d4IData= "https://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon +"@2x.png"
      d5IData= "https://openweathermap.org/img/wn/"+data.daily[5].weather[0].icon +"@2x.png"
      d6IData= "https://openweathermap.org/img/wn/"+data.daily[6].weather[0].icon +"@2x.png"

      
      img0.src= curingData 
      img1.src= d1IData
      img2.src= d2IData
      img3.src= d3IData
      img4.src= d4IData
      img5.src= d5IData
      img6.src= d6IData

      imgIcon0.appendChild(img0)
      imgIcon1.appendChild(img1)
      imgIcon2.appendChild(img2)
      imgIcon3.appendChild(img3)
      imgIcon4.appendChild(img4)
      imgIcon5.appendChild(img5)
      imgIcon6.appendChild(img6)

      





      .classList.add("w-icon")


      const currentHumidity = document.getElementById('getHumidity')
      currentHumidity.textContent = data.current.humidity+" %"
      const currentPressure = document.getElementById('getPressure')
      currentPressure.textContent = data.current.pressure+" hPa" 
      const currentWindSpeed = document.getElementById('getWindSpeed')
      currentWindSpeed.textContent = data.current.wind_speed+" mph"
      // const sunriseToday = document.getElementById('getSunrise')
      // sunriseToday.textContent = data.current.sunrise
      // const sunsetToday = document.getElementById('getSunset')
      // sunsetToday.textContent = data.current.sunset
      const tempToday = document.getElementById('getTemp')
      tempToday.textContent = data.current.temp+" °C"
      
      //week 0
      const tDay0 = document.getElementById('tempDay0')
      tDay0.textContent = data.daily[1].temp.day+" °C"
      const tNight0 = document.getElementById('tempNight0')
      tNight0.textContent = data.daily[1].temp.night+" °C"
      const pressure0 = document.getElementById('pressureDay0')
      pressure0.textContent = data.daily[1].pressure+" hPa"
      const humidity0 = document.getElementById('humidityDay0')
      humidity0.textContent = data.daily[1].humidity+" %"
      // const sunrise0 = document.getElementById('sunriseDay0')
      // sunrise0.textContent = data.daily[1].sunrise
      // const sunset0 = document.getElementById('sunsetDay0')
      // sunset0.textContent = data.daily[1].sunset


      //week 1

      const tDay1 = document.getElementById('tempDay1')
      tDay1.textContent = data.daily[2].temp.day+" °C"
      const tNight1 = document.getElementById('tempNight1')
      tNight1.textContent = data.daily[2].temp.night+" °C"
      const pressure1 = document.getElementById('pressureDay1')
      pressure1.textContent = data.daily[2].pressure+" hPa"
      const humidity1 = document.getElementById('humidityDay1')
      humidity1.textContent = data.daily[2].humidity+" %"
      // const sunrise1 = document.getElementById('sunriseDay1')
      // sunrise1.textContent = data.daily[2].sunrise
      // const sunset1 = document.getElementById('sunsetDay1')
      // sunset1.textContent = data.daily[2].sunset

      //week 2

      const tDay2 = document.getElementById('tempDay2')
      tDay2.textContent = data.daily[3].temp.day+" °C"
      const tNight2 = document.getElementById('tempNight2')
      tNight2.textContent = data.daily[3].temp.night+" °C"
      const pressure2 = document.getElementById('pressureDay2')
      pressure2.textContent = data.daily[3].pressure+" hPa"
      const humidity2 = document.getElementById('humidityDay2')
      humidity2.textContent = data.daily[3].humidity+" %"
      // const sunrise2 = document.getElementById('sunriseDay2')
      // sunrise2.textContent = data.daily[3].sunrise
      // const sunset2 = document.getElementById('sunsetDay2')
      // sunset2.textContent = data.daily[3].sunset

      //week 3

      const tDay3 = document.getElementById('tempDay3')
      tDay3.textContent = data.daily[4].temp.day+" °C"
      const tNight3 = document.getElementById('tempNight3')
      tNight3.textContent = data.daily[4].temp.night+" °C"
      const pressure3 = document.getElementById('pressureDay3')
      pressure3.textContent = data.daily[4].pressure+" hPa"
      const humidity3 = document.getElementById('humidityDay3')
      humidity3.textContent = data.daily[4].humidity+" %"
      // const sunrise3 = document.getElementById('sunriseDay3')
      // sunrise3.textContent = data.daily[4].sunrise
      // const sunset3 = document.getElementById('sunsetDay3')
      // sunset3.textContent = data.daily[4].sunset

      //week 4

      const tDay4 = document.getElementById('tempDay4')
      tDay4.textContent = data.daily[5].temp.day+" °C"
      const tNight4 = document.getElementById('tempNight4')
      tNight4.textContent = data.daily[5].temp.night+" °C"
      const pressure4 = document.getElementById('pressureDay4')
      pressure4.textContent = data.daily[5].pressure+" hPa"
      const humidity4 = document.getElementById('humidityDay4')
      humidity4.textContent = data.daily[5].humidity+" %"
      // const sunrise4 = document.getElementById('sunriseDay4')
      // sunrise4.textContent = data.daily[5].sunrise
      // const sunset4 = document.getElementById('sunsetDay4')
      // sunset4.textContent = data.daily[5].sunset

      //week 5
      const tDay5 = document.getElementById('tempDay5')
      tDay5.textContent = data.daily[6].temp.day+" °C"
      const tNight5 = document.getElementById('tempNight5')
      tNight5.textContent = data.daily[6].temp.night+" °C"
      const pressure5 = document.getElementById('pressureDay5')
      pressure5.textContent = data.daily[6].pressure+" hPa"
      const humidity5 = document.getElementById('humidityDay5')
      humidity5.textContent = data.daily[6].humidity+" %"
      // const sunrise5 = document.getElementById('sunriseDay5')
      // sunrise5.textContent = data.daily[6].sunrise
      // const sunset5 = document.getElementById('sunsetDay5')
      // sunset5.textContent = data.daily[6].sunset


    


    
    }    
    )
}


function citySearch(){
  var APIkey = '137f617b3a8be25de11fcd61cb376091'
  var cityLat= LocaLat
  var cityLon= LocaLng
  var weatherAPI="https://api.openweathermap.org/geo/1.0/reverse?lat="+cityLat+"&lon="+cityLon+"&appid="+APIkey

  fetch(weatherAPI)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {

      cityName= data[0].name
      var indextCity =document.getElementById("time-zone")
      indextCity.textContent=cityName

      console.log(cityName)
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
  LocalGet()
  var mapLat;
  var mapLng;

  if(localStorage.length>0){
     mapLat=JSON.parse(LocaLat)
     mapLng=JSON.parse(LocaLng)

  }
  else{
    mapLat= 53.481
    mapLng= -2.243
  }
 
  const myLatlng = { lat: mapLat, lng: mapLng }
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatlng,
  })
  
  const input = document.getElementById('pac-input')
  const searchBox = new google.maps.places.SearchBox(input)
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
  if(localStorage.length>0){

    var newMarkerLat= mapLat;
    var newMarkerLng= mapLng;
    markers.push(
      new google.maps.Marker({
        map: map,
        icon: iconImage,
        position: { lat: newMarkerLat, lng: newMarkerLng},
        icon: iconImage,
        animation: google.maps.Animation.BOUNCE,
        
      })
      )
    }
      
  map.addListener('bounds_changed', () => {
    searchBox.setBounds(map.getBounds())
    
 
  })
  
  searchBox.addListener('places_changed', () => {
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
      
      LocalSave()
      LocalGet()
      citySearch()
      getApi()

   
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map: map,
          icon: iconImage,
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
      

      display()
      LocalSave()
      LocalGet()
      citySearch()
      getApi()


     
  
      console.log(inputLat)
      console.log(inputLng)
   

  })

  
  //cooridnate output
  //console.log(inputLat)
  //console.log(inputLng)
  //console.log(inputLat)
  //console.log(inputLng)
      

}



function addcity(){

  var addCityBut=document.getElementById("addCity")
  addCityBut.addEventListener("click",Adding)
  
  function Adding(){
    
    console.log(cityName)
    var weatherPlannerC= document.getElementById("weatherPlanner")
    

    if(cityCount.length<5){
      cityCount.push(cityName)
     
      
    }
    else if(cityCount.length==5){
      cityCount=[]
    }


    for(i=0;i<5;i++){
      var weatherPlannerId = weatherPlannerC.children[i].id
      wpID= document.getElementById(weatherPlannerId)
      wpID.textContent=cityCount[i]

     
    }
    
  }
  
}

function display(){
//document.querySelector(".place-container").style.display ="flex"
document.querySelector(".weather-planner").style.display ="flex"
document.querySelector(".others").style.display ="flex"
document.querySelector(".future-forecast").style.display ="flex"
document.querySelector("#time-zone").style.display ="flex"
}




function LocalSave(){
  localStorage.setItem("lat-history",JSON.stringify(inputLat)) 
  localStorage.setItem("lng-history",JSON.stringify(inputLng)) 

}
  

function LocalGet(){
  LocaLat= localStorage.getItem("lat-history")
  LocaLng= localStorage.getItem("lng-history")
 
 
}



function localCheck(){ 
  if(localStorage.length>0){
    display()
    LocalGet()
    citySearch()
    getApi()

  }
  else{
    return
   }

  }

