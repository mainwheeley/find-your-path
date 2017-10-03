var api = {
  getWeathers(){
    //var url = `https://api.apixu.com/v1/current.json?key=fc71c7f7ab2c4f59b6d24905170210&q=95129`;
    //var url = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY`;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=West%20Lafayette&APPID=c112ff60324987b0783ec62d706b9b9d`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;
