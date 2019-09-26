const createTextLine = (className, text, content) => {
  let textLine = document.createElement('div');
  textLine.classList.add(className);
  let textBox1 = document.createElement('p');
  textBox1.innerText = `${text}: `;
  textBox1.classList.add('bold');
  let textBox2 = document.createElement('p');
  textBox2.innerText = ` ${content}`;
  textLine.appendChild(textBox1);
  textLine.appendChild(textBox2);

  return textLine;
};

export default createTextLine;
