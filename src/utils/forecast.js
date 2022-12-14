const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=3cb25371049ff694af43ed0cff26a37d&query=' +
    +latitude +
    ',' +
    longitude +
    '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions +
          ' It is currently ' +
          body.current.temperature +
          ' degress out. The humidity today is ' +
          body.current.humidity +
          ' with a visibility of ' +
          body.current.visibility +
          '. There is a ' +
          body.current.precip +
          '% chance of rain.'
      );
    }
  });
};

module.exports = forecast;
