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

const TextModal = (content, closeFunction) => {
  let modalContainer = document.createElement('div');
  modalContainer.classList.add('imageModalContainer');

  let modalContent = document.createElement('div');
  modalContent.classList.add('imageModalContent');

  let closeButton = document.createElement('span');
  closeButton.classList.add('closeModal');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', closeFunction);

  let textBox = document.createElement('p');
  textBox.innerText = content;
  modalContent.appendChild(textBox);

  modalContent.appendChild(closeButton);

  modalContainer.appendChild(modalContent);
  return modalContainer;
};

export default TextModal;
