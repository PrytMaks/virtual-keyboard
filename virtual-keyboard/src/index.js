import css from './style.css';

console.log('Hello');

let title = document.createElement('div');
title.classList.add('text')
title.innerHTML = 'HELLO WORLD';

let body = document.querySelector('body');
console.log(body);
body.append(title);