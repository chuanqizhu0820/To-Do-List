import './style.css';

const tasks = [{
  description: 'something to do',
  completed: false,
  index: 0,
},
{
  description: 'something to do',
  completed: false,
  index: 1,
},
{
  description: 'something to do',
  completed: false,
  index: 2,
},
];

const htmldiv = document.querySelector('.itemhtml');

let itemHtml = '';
tasks.forEach((item) => {
  itemHtml
    += `<div class="item-container">
     <div class="form-item">
     <input type="checkbox" id="${item.index}" name="todo" value="something">
     <label for="${item.index}">${item.description}</label>
     </div>
     <div class="dot-menu">
     <img src="https://img.icons8.com/fluency-systems-regular/48/000000/menu-2.png" />
     </div>
     </div>`;
});

htmldiv.innerHTML = itemHtml;
