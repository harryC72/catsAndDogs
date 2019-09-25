import _ from 'lodash';
import '../sccs/style.scss';
import dog from '../Assets/smallDogFirstPage.jpg';
import cat from '../Assets/catFirstPage.jpg';
import axios from 'axios';
import createPetContainer from '../helperMethods/createPetContainer';
import config from '../config.json';
import Modal from './TextModal';
import Backdrop from '../components/Backdrop';
import showInfo from '../services/showInfo';
import hideInfo from '../services/hideInfo';
import convertToDateString from '../helperMethods/convertToDateString';
import { getPhotos } from '../services/getPhotos';

export let FirstPage = state => {
  let parent = document.querySelector('#root');

  let firstPageContainer = document.createElement('div');
  firstPageContainer.classList.add('firstPageContainer');
  let heading = document.createElement('h1');
  heading.innerText = "Man's best friend?";
  let choiceContainer = document.createElement('div');
  choiceContainer.classList.add('choiceContainer');

  let dogContainer = createPetContainer(
    'dogContainer',
    'dogText',
    'DOG',
    'dog',
    dog,
  );
  dogContainer.addEventListener('click', () => createPhotoView('dog'), false);

  let catContainer = createPetContainer(
    'catContainer',
    'catText',
    'CAT',
    'cat',
    cat,
  );
  catContainer.addEventListener('click', () => createPhotoView('cat'), false);

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

let createPhotoElement = (src, alt, photographer, dateTaken, id, index) => {
  const textContainerId = `${id}${src}`;
  let listElement = document.createElement('li');
  listElement.index = index;
  listElement.onmouseover = () => showInfo(textContainerId);
  listElement.onmouseout = () => hideInfo(textContainerId);
  let textContainer = document.createElement('div');
  textContainer.classList.add('textContainer');
  textContainer.id = textContainerId;
  let textBox1 = document.createElement('p');
  textBox1.innerText = `Photographer: ${photographer}`;
  let textBox2 = document.createElement('p');
  textBox2.innerText = `Date taken: ${dateTaken}`;

  let photoContainer = document.createElement('div');
  photoContainer.classList.add('photoContainer');

  let photoElement = document.createElement('img');
  photoElement.src = src;
  photoElement.alt = alt;
  

  photoContainer.appendChild(photoElement);
  listElement.appendChild(photoContainer);
  textContainer.appendChild(textBox1);
  textContainer.appendChild(textBox2);
  listElement.appendChild(textContainer);

  return listElement;
};

let createPhotoPage = state => {
  let root = document.querySelector('body');
  let photoContainer = document.createElement('ul');
  photoContainer.classList.add('allPhotosContainer');

  state.forEach(element => {
    let photoItem = createPhotoElement(
      element.photoUrlNormal,
      element.type,
      element.owner,
      element.dateTaken,
      element.index,
    );
    photoContainer.appendChild(photoItem);
  });

  root.appendChild(photoContainer);
};

const createPhotoView = async type => {
  try {
    // await getPhotos(type);
    let newState = await getPhotos(type);
    createPhotoPage(newState);
    let firstPage = document.getElementsByClassName('firstPageContainer')[0];
    firstPage.style.display = 'none';
  } catch {
    console.log('Something went wrong');
  }
};
