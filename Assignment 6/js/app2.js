//no jQuery
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

function addCity(element){
  document.getElementById('city-type').innerHTML += ('<option value="' + element + '">' + element + '</option>');
}

function changeBackground(){
  var city = document.getElementById('city-type').value;
  if(city == 'NYC') {
    document.body.className = 'nyc';
  }
  else if (city == 'SF') {
    document.body.className = 'sf';
  }
  else if (city == 'LA') {
    document.body.className = 'la';
  }
  else if (city == 'ATX') {
    document.body.className = 'austin';
  }
  else if (city == 'SYD') {
    document.body.className = 'sydney';
  }
}

cities.forEach(addCity);

document.getElementById('city-type').onchange = changeBackground;
