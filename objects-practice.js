let phone = {};
phone.make = 'Huawei';
phone.model = 'Mate 20X';
phone.color = 'black';
phone.ring = function () {
  console.log('Ring');
}

console.log(phone);

const iPhoneX = {
  make: 'Apple',
  model: 'X',
  color: 'silver',
  ring: function () {
    console.log('Ring');
  }
}

console.log(iPhoneX);

function Phone(make, model, color) {
  // let this = {};
  this.make = make;
  this.model = model;
  this.color = color;
}
Phone.prototype.ring = function() {
    console.log('Ring');
}

const samsungNote20 = new Phone('Samsung',
 'Note20', 'white');

 console.log(samsungNote20);

 class Smartphone {
   constructor (make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
  ring() {
    console.log(this.model + ' Ringing');
  }
 }

 const pixel = new Smartphone('Gooogle', 'Pixel', 'white');
 pixel.ring();

 const samsungNote20Black = Object.create(samsungNote20);
 samsungNote20Black.color = 'black';
 console.log(samsungNote20Black);
 samsungNote20Black.ring();


const phoneJson = `{
  "make": "Apple",
  "model": "iPhone XII Pro Max",
  "color": "silver"
}`;

const iPhoneXIIPro = JSON.parse(phoneJson);
console.log(iPhoneXIIPro);

const weatherJSON = `
{
  "lat": 33.44,
  "lon": -94.04,
  "timezone": "America/Chicago",
  "timezone_offset": -21600,
  "current": {
    "dt": 1595243443,
    "sunrise": 1608124431,
    "sunset": 1608160224,
    "temp": 274.75,
    "feels_like": 270.4,
    "pressure": 1017,
    "humidity": 96,
    "dew_point": 274.18,
    "uvi": 0,
    "clouds": 90,
    "visibility": 6437,
    "wind_speed": 3.6,
    "wind_deg": 320,
    "weather": [
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50n"
      }
    ]
  }
}`

  const weatherData = JSON.parse(weatherJSON);
 console.log(weatherData.current.weather[0].main);
