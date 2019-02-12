class Ship{
  constructor(location=navigator.geolocation.getCurrentPosition(success, error, options) , sailDate = Date()){
    this.location = location
    this.sailDate = sailDate
  }
}


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

/*******************Each new Ship() will log the current date and locations from the device retrieveing the node.js function *****/
var thing1 = new Ship()
console.log(thing1.location)
