import _ from 'lodash';
import '../sccs/style.scss';
import dog from '../Assets/smallDogFirstPage.jpg';
import cat from '../Assets/catFirstPage.jpg';
import axios from 'axios';
import createPetContainer from '../helperMethods/createPetContainer';
import config from '../config.json';
import ImageModal from './ImageModal';
import Backdrop from '../components/Backdrop';
import showInfo from '../services/showInfo';
import hideInfo from '../services/hideInfo';
import convertToDateString from '../helperMethods/convertToDateString';
import { getPhotos } from '../services/getPhotos';
import createTextLine from '../helperMethods/createTextLine';

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

  firstPageContainer.appendChild(heading);
  choiceContainer.appendChild(catContainer);
  choiceContainer.appendChild(dogContainer);
  firstPageContainer.appendChild(choiceContainer);

  parent.appendChild(firstPageContainer);
};

let createPhotoElement = (
  srcNormal,
  srcLarge,
  alt,
  photographer,
  dateTaken,
  id,
  index,
) => {
  const textContainerId = `${id}${srcNormal}`;
  let listElement = document.createElement('li');
  listElement.index = index;
  listElement.onmouseover = () => showInfo(textContainerId);
  listElement.onmouseout = () => hideInfo(textContainerId);

  let textContainer = document.createElement('div');
  textContainer.classList.add('textContainer');
  textContainer.id = textContainerId;

  let lineContainer1 = createTextLine(
    'lineContainer',
    'Photographer',
    photographer,
  );

  let lineContainer2 = createTextLine('lineContainer', 'Date taken', dateTaken);

  let photoContainer = document.createElement('div');
  photoContainer.classList.add('photoContainer');

  let photoElement = document.createElement('img');
  photoElement.src = srcNormal;
  photoElement.alt = alt;

  if (srcLarge === undefined) {
    photoElement.addEventListener(
      'click',
      () => createImageModalWithBackdrop(srcNormal, alt),
      false,
    );
  } else {
    photoElement.addEventListener(
      'click',
      () => createImageModalWithBackdrop(srcLarge, alt),
      false,
    );
  }

  photoContainer.appendChild(photoElement);
  listElement.appendChild(photoContainer);
  textContainer.appendChild(lineContainer1);
  textContainer.appendChild(lineContainer2);
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
      element.photoUrlLarge,
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

const createImageModalWithBackdrop = (src, alt) => {
  let parent = document.getElementById('root');
  let backdrop = Backdrop();
  backdrop.style.display = 'block';

  close = () => {
    backdrop.style.display = 'none';
    imageModal.style.display = 'none';
  };

  let imageModal = ImageModal(src, alt, close);
  imageModal.style.display = 'block';

  parent.appendChild(backdrop);
  parent.appendChild(imageModal);
};
