// import _ from 'lodash';
import './sccs/style.scss';
// import dog from './Assets/smallDogFirstPage.jpg';
// import cat from './Assets/catFirstPage.jpg';
// import axios from 'axios';
// import createPetContainer from './helperMethods/createPetContainer';
// import config from './config.json';
// import Backdrop from './components/Backdrop';
import Footer from './components/Footer';
// import { BackArrow, BackArrowMobile } from './components/BackArrow';
// import showInfo from './services/showInfo';
// import hideInfo from './services/hideInfo';
// import convertToDateString from './helperMethods/convertToDateString';

import { FirstPage } from './components/FirstPage';
import TextModal from './components/TextModal';
import ImageModal from './components/ImageModal';

let statePhotos = null;

Footer();
FirstPage(statePhotos);
// createPhotoView('cats');
// BackArrow();

// const createTestModal = () => {
//   close = () => {
//     testModal.style.display = 'none';
//   };
//   let parent = document.getElementById('root');
//   let testModal = ImageModal(
//     'https://picsum.photos/id/845/200/300',
//     'valamit',
//     close,
//   );
//   testModal.style.display = 'block';
//   parent.appendChild(testModal);
// };

// createTestModal();
