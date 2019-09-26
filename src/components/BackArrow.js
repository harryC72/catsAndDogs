import Form from './Form';

export let BackArrow = backFunction => {
  let parent = document.getElementById('root');
  let backArrowContainer = document.createElement('div');
  backArrowContainer.classList.add('backArrowContainer');

  let rectangle = Form('rectangle');
  rectangle.addEventListener('click', backFunction, false);

  let textBox = document.createElement('span');
  textBox.id = 'textBox';
  textBox.innerText = 'Backwards';

  let filledTriangle = Form('filledTriangle');
  filledTriangle.addEventListener('click', backFunction, false);
  let emptyTriangle = Form('emptyTriangle');

  backArrowContainer.appendChild(filledTriangle);
  backArrowContainer.appendChild(rectangle);
  backArrowContainer.appendChild(emptyTriangle);

  parent.appendChild(backArrowContainer);
  parent.appendChild(textBox);
};

export let createBackArrowMobile = () => {
  let parent = document.getElementById('root');

  let backArrowMobileContainer = document.createElement('div');
  backArrowMobileContainer.classList.add('backArrowMobileContainer');

  let mobileTriangle = createForm('mobileTriangle');
  let textMobile = document.createElement('p');
  textMobile.id = 'textMobile';
  textMobile.innerText = 'Backwards';

  backArrowMobileContainer.appendChild(mobileTriangle);
  backArrowMobileContainer.appendChild(textMobile);

  parent.appendChild(backArrowMobileContainer);
};
