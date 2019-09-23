import _ from 'lodash';
import './sccs/style.scss';
import dog from './smallDogFirstPage.jpg';
import cat from './catFirstPage.jpg';
import axios from 'axios';
import { fetchPhotos } from './services/fetchPhotos';

let statePhotos = null;

let showInfo = id => {
  let showingElement = document.getElementById(id);
  console.log('element', showingElement);
  showingElement.style.display = 'block';
};

let hideInfo = id => {
  let showingElement = document.getElementById(id);
  showingElement.style.display = 'none';
};

let createFooter = () => {
  let parent = document.querySelector('#root');
  let footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');

  let footerText = document.createElement('span');
  footerText.inner = "&copy; 2019 Harald Carlsten - Man's best friend";

  footer.appendChild(footerText);
  parent.appendChild(footer);
};

let createFirstPage = () => {
  let parent = document.querySelector('#root');

  let firstPageContainer = document.createElement('div');
  firstPageContainer.classList.add('firstPageContainer');
  let heading = document.createElement('h1');
  heading.innerText = "Man's best friend?";
  let choiceContainer = document.createElement('div');
  choiceContainer.classList.add('choiceContainer');

  let dogContainer = document.createElement('div');
  dogContainer.classList.add('dogContainer');
  let dogText = document.createElement('div');
  dogText.classList.add('dogText');
  dogText.innerText = 'DOG';
  const dogImage = new Image();
  dogImage.src = dog;
  dogContainer.appendChild(dogImage);
  dogContainer.appendChild(dogText);

  let catContainer = document.createElement('div');
  catContainer.classList.add('catContainer');
  let catText = document.createElement('div');
  catText.classList.add('catText');
  catText.innerText = 'CAT';
  const catImage = new Image();
  catImage.src = cat;
  catContainer.appendChild(catImage);
  catContainer.appendChild(catText);

  let advancedSearch = document.createElement('button');
  advancedSearch.innerText = 'Advanced search';
  advancedSearch.addEventListener('click', () => createPhotoView('dog'), false);

  firstPageContainer.appendChild(heading);
  choiceContainer.appendChild(catContainer);
  choiceContainer.appendChild(dogContainer);
  firstPageContainer.appendChild(choiceContainer);
  firstPageContainer.appendChild(advancedSearch);

  parent.appendChild(firstPageContainer);
};

let createPhotoElement = (src, alt, photographer, dateTaken, id) => {
  const textContainerId = `${id}${src}`;
  let listElement = document.createElement('li');
  listElement.onmouseover = () => showInfo(textContainerId);
  listElement.onmouseout = () => hideInfo(textContainerId);
  let textContainer = document.createElement('div');
  textContainer.classList.add('textContainer');
  textContainer.id = textContainerId;
  let textBox1 = document.createElement('p');
  textBox1.innerText = `Photographer: ${photographer}`;
  let textBox2 = document.createElement('p');
  textBox2.innerText = `Date taken: ${dateTaken}`;

  let photoElement = document.createElement('img');
  photoElement.src = src;
  photoElement.alt = alt;

  listElement.appendChild(photoElement);
  textContainer.appendChild(textBox1);
  textContainer.appendChild(textBox2);
  listElement.appendChild(textContainer);

  return listElement;
};

let createPhotoPage = state => {
  let root = document.querySelector('body');
  let photoContainer = document.createElement('ul');
  photoContainer.classList.add('photoContainer');

  state.forEach(element => {
    let photoItem = createPhotoElement(
      element.photoUrl,
      element.type,
      element.owner,
      element.dateTaken,
    );
    photoContainer.appendChild(photoItem);
  });

  root.appendChild(photoContainer);
};

const convertToDateString = input => {
  let event = new Date(input);

  let result = event.toDateString();

  return result;
};

const baseUrl = 'https://api.flickr.com/services/rest';
const APIkey = '49a691ac8b00bf41abdb43c3104e0cd7';

const getPhotos = async type => {
  let response = await axios({
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
  });

  let data = response.data;

  if (response) {
    let newState = data.photos.photo.map(item => {
      return {
        ownerId: item.owner,
        owner: item.ownername,
        secret: item.secret,
        server: item.server,
        farm: item.farm,
        photoId: item.id,
        title: item.title,
        photoUrl: item.url_n,
        like: false,
        type: type,
        dateTaken: convertToDateString(item.datetaken),
      };
    });

    return (statePhotos = [...newState]);

    console.log('data', data);

    // createPhotoPage(statePhotos);
  } else {
    console.log('An error occured!');
  }
};

const createPhotoView = async type => {
  let state = await getPhotos(type);
  createPhotoPage(state);
};

createFooter();
createFirstPage();
