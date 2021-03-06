const createPetContainer = (
  containerName,
  textElementClassName,
  text,
  imageId,
  imageSrc,
) => {
  let element = document.createElement('div');
  element.classList.add(containerName);
  let elementText = document.createElement('div');
  elementText.classList.add(textElementClassName);
  elementText.innerText = text;
  const image = new Image();
  image.src = imageSrc;
  image.id = imageId;
  element.appendChild(image);
  element.appendChild(elementText);

  return element;
};

export default createPetContainer;
