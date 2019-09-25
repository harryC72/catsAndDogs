import axios from 'axios';
import convertToDateString from '../helperMethods/convertToDateString';
import Modal from '../components/TextModal';
import Backdrop from '../components/Backdrop';
import config from '../config.json';

export const getPhotos = async type => {
  try {
    let response = await axios({
      method: 'get',
      url: config.baseUrl,
      params: {
        method: 'flickr.photos.search',
        api_key: config.APIkey,
        tags: type,
        extras: 'url_n, url_l, owner_name, date_taken, views',
        page: 1,
        format: 'json',
        nojsoncallback: 1,
        per_page: 400,
      },
    });

    let data = response.data;

    if (response) {
      let newState = data.photos.photo.map((item, index) => {
        return {
          index: index,
          ownerId: item.owner,
          owner: item.ownername,
          secret: item.secret,
          server: item.server,
          farm: item.farm,
          photoId: item.id,
          title: item.title,
          photoUrlNormal: item.url_n,
          photoUrlLarge: item.url_l,
          like: false,
          type: type,
          dateTaken: convertToDateString(item.datetaken),
        };
      });

      let state = [...newState];
      console.log('getPhotosState', state);

      return state;
    }
  } catch (error) {
    if (error.response) {
      createModalWithBackdropAndContent(
        'Something went wrong with the response',
      );
    } else if (error.request) {
      createModalWithBackdropAndContent(
        'Something went wrong with the request',
      );
    } else {
      createModalWithBackdropAndContent('Something went wrong');
    }
  }
};

const createModalWithBackdropAndContent = content => {
  let parent = document.getElementById('root');
  let backdrop = Backdrop();
  backdrop.style.display = 'block';

  close = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
  };

  let modal = Modal(content, null, null, close);
  modal.style.display = 'block';

  parent.appendChild(backdrop);
  parent.appendChild(modal);
};
