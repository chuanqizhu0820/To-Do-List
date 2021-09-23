import * as TaskModule from './tasks.js';
import './style.css';

let tasks = [];
if (JSON.parse(localStorage.getItem('tasks')) !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks')).tasks;
}

// console.log(tasks);

const htmldiv = document.querySelector('.itemhtml');

let itemHtml = '';
let taskreverse = [...tasks].reverse();
taskreverse.forEach((item) => {
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
TaskModule.removeTask(tasks);
TaskModule.addTask(tasks);
