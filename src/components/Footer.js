let Footer = () => {
  let parent = document.querySelector('#root');
  let footer = document.createElement('footer');
  footer.id = 'footer';

  let footerText = document.createElement('span');
  footerText.innerHTML = "&copy; 2019 Harald Carlsten - Man's best friend";

  footer.appendChild(footerText);
  parent.appendChild(footer);
};

export default Footer;
