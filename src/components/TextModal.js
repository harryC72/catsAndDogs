const TextModal = (content, closeFunction) => {
  let modalContainer = document.createElement('div');
  modalContainer.classList.add('textModalContainer');

  let modalContent = document.createElement('div');
  modalContent.classList.add('textModalContent');

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
