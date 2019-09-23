import axios from 'axios';
import config from '../config.json';

const { APIkey, baseUrl } = config;

console.log('config', APIkey, baseUrl);

export const fetchPhotos = type => {
  axios({
    method: 'get',
    url: baseUrl,
    params: {
      method: 'flickr.photos.search',
      api_key: APIkey,
      tags: type,
      extras: 'url_n, owner_name, date_taken, views',
      page: 1,
      format: 'json',
      nojsoncallback: 1,
      per_page: 400,
    },
  })
    .then(function(response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
      return error;
    });
};
