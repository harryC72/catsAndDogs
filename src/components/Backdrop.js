const Backdrop = closeFunction => {
  const backdrop = document.createElement('div');
  backdrop.id = 'backdrop';
  backdrop.addEventListener('click', closeFunction, false);

  return backdrop;
};

export default Backdrop;
