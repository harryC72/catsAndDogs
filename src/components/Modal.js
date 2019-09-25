const Modal = (text, src, alt, closeFunction) => {
  let modalContainer = document.createElement('div');
  modalContainer.classList.add('modalContainer');

  let modalContent = document.createElement('div');
  modalContent.classList.add('modalContent');

  let closeButton = document.createElement('span');
  closeButton.classList.add('closeModal');
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', closeFunction);

  if (text !== null) {
    let textBox = document.createElement('p');
    textBox.innerText = content;
    modalContent.appendChild(textBox);
  }

  if (src !== null) {
    let modalImage = document.createElement('img');
    img.src = src;
    img.alt = alt;
    modalContent.appendChild(modalImage);
  }

  modalContent.appendChild(closeButton);

  modalContainer.appendChild(modalContent);
  return modalContainer;
};

export default Modal;
