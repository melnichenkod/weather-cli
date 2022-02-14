import axios from 'axios';
import {getKeyValue, TOKEN_DICTIONARY} from './storage.service.js'
//import https from 'https';
const getWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error('You need to set api key -t [API_KEY]')
  }
  const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'en',
      units: 'metric'
    }
  });
  //console.log(data);
  return data;

  //const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
  /* const url = new URL('https://api.openweathermap.org/data/2.5/weather');
  url.searchParams.append('q', city);
  url.searchParams.append('appid', token);
  url.searchParams.append('lang', 'en');
  url.searchParams.append('units', 'metric');

  https.get(url, (response) => {
    let res = '';
    response.on('data', (chunk) => {
      res += chunk;
    });
    response.on('end', () => {
      console.log(res);
    });
  }); */
};

export {getWeather};