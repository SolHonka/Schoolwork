const targetElement = document.querySelector('#target');

const firstItem = document.createElement('li');
firstItem.textContent = 'First item';

const secondItem = document.createElement('li');
secondItem.textContent = 'Second item';

const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';

const ul = document.createElement('ul');

ul.appendChild(firstItem);
ul.appendChild(secondItem);
ul.appendChild(thirdItem);

targetElement.appendChild(ul);
