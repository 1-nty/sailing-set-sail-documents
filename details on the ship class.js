//turf.js important geoscience library
class Ship{
  constructor(endPoint={lat:9.427387,lon:147.656250},location={lat:16.709863,lon:260.068359} , sailDate = Date()){
    this.location = location
    this.sailDate = sailDate
    this.endPoint = endPoint
  }
}



var maryAnn = new Ship()
// create an array of the entry pairs
const entries = Object.entries(maryAnn)
    /*
    // create an array of the keys 
    const keys = Object.keys(maryAnn)
    
    // create an array of the values
    const values = Object.values(maryAnn)
    */
console.log(maryAnn.location.lat)
console.log(maryAnn.location.lon)

var p1 = Object.values(maryAnn.location)
var p2 = Object.values(maryAnn.endPoint)

var bearing = turf.distance(p1,p2) 
console.log(bearing)





