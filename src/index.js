// import _ from 'lodash';
import './sccs/style.scss';
// import dog from './Assets/smallDogFirstPage.jpg';
// import cat from './Assets/catFirstPage.jpg';
// import axios from 'axios';
// import createPetContainer from './helperMethods/createPetContainer';
// import config from './config.json';
// import Modal from './components/Modal';
// import Backdrop from './components/Backdrop';
import Footer from './components/Footer';
// import { BackArrow, BackArrowMobile } from './components/BackArrow';
// import showInfo from './services/showInfo';
// import hideInfo from './services/hideInfo';
// import convertToDateString from './helperMethods/convertToDateString';

import { FirstPage } from './components/FirstPage';

let statePhotos = null;

Footer();
FirstPage(statePhotos);
// createModalWithBackdropAndContent('hello');
// createPhotoView('cats');
// BackArrow();
