let showInfo = id => {
  let showingElement = document.getElementById(id);
  console.log('element', showingElement);
  showingElement.style.display = 'block';
};

export default showInfo;
