import * as TaskModule from './tasks.js';
import './style.css';

let tasks = [{
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

if (JSON.parse(localStorage.getItem('tasks')) == null) {
  const tasklist = new TaskModule.TaskList(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasklist));
} else {
  tasks = JSON.parse(localStorage.getItem('tasks')).tasks;
}

// const obj = JSON.parse(localStorage.getItem('books'));

const htmldiv = document.querySelector('.itemhtml');

let itemHtml = '';
tasks.forEach((item) => {
  if (item.completed) {
    itemHtml
      += `<div class="item-container">
       <div class="form-item">
       <input type="checkbox" id="${item.index}" name="todo" value="something" checked>
       <label for="${item.index}">${item.description}</label>
       </div>
       <div class="dot-menu">
       <img src="https://img.icons8.com/fluency-systems-regular/48/000000/menu-2.png" />
       </div>
       </div>`;
  } else {
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
  }
});

htmldiv.innerHTML = itemHtml;

TaskModule.changeStatus(tasks);
