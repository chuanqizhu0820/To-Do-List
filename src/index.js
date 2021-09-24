import * as TaskModule from './tasks.js';
import './style.css';

let tasks = [];
if (JSON.parse(localStorage.getItem('tasks')) !== null) {
  tasks = JSON.parse(localStorage.getItem('tasks')).tasks;
}

const htmldiv = document.querySelector('.itemhtml');

let itemHtml = '';
const taskreverse = [...tasks].reverse();
taskreverse.forEach((item) => {
  if (item.completed) {
    itemHtml
      += `<div class="item-container checked">
       <div class="form-item">
       <input type="checkbox" id="${item.index}" name="todo" value="something" checked>
       <label for="${item.index}">${item.description}</label>
       </div>
       </div>`;
  } else {
    itemHtml
      += `<div class="item-container unchecked">
       <div class="form-item">
       <div class="visiable-input">
       <input type="checkbox" id="${item.index}" name="todo" value="something">
       <label for="${item.index}">${item.description}</label>
       </div>
       <input class="hidden-edit-input" type="text" name="todo" value="${item.description}" autofocus>
       </div>
       <div class="dot-menu">
       <img src="https://img.icons8.com/windows/32/000000/menu-2.png"/>
       </div>
       </div>`;
  }
});

htmldiv.innerHTML = itemHtml;

TaskModule.changeStatus(tasks);
TaskModule.removeCompletedTask(tasks);
TaskModule.addTask(tasks);
TaskModule.editTask(tasks);
