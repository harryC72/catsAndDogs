// const Modal = (content, closeFunction) => {
//   let modalContainer = document.createElement('div');
//   modalContainer.classList.add('modalContainer');

//   let modalContent = document.createElement('div');
//   modalContent.classList.add('modalContent');

//   let closeButton = document.createElement('span');
//   closeButton.classList.add('closeModal');
//   closeButton.innerHTML = '&times;';
//   closeButton.addEventListener('click', closeFunction);

//   let textBox = document.createElement('p');
//   textBox.innerText = content;

//   modalContent.appendChild(closeButton);
//   modalContent.appendChild(textBox);

//   modalContainer.appendChild(modalContent);
//   return modalContainer;
// };

// export default Modal;

const ImageModal = (src, alt, closeFunction) => {
  let modalContainer = document.createElement('div');
  modalContainer.classList.add('imageModalContainer');

  let modalContent = document.createElement('div');
  modalContent.classList.add('imageModalContent');

  let closeButton = document.createElement('span');
  closeButton.classList.add('closeModal');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', closeFunction);

  let imageElement = document.createElement('img');
  imageElement.classList.add('imageModalContent');
  imageElement.src = src;
  imageElement.alt = alt;
  modalContent.appendChild(imageElement);
  modalContainer.appendChild(modalContent);

  modalContent.appendChild(closeButton);

  return modalContainer;
};

export default ImageModal;
