import './style.css';
// import { changeStatus } from "./tasks.js";

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

class TaskList {
  constructor(arr){
    this.tasks = arr;
  }
}

let tasklist = new TaskList(tasks);

localStorage.setItem("tasks", JSON.stringify(tasklist));
// const obj = JSON.parse(localStorage.getItem('books'));

const htmldiv = document.querySelector('.itemhtml');

let itemHtml = '';
tasks.forEach((item) => {
  if (item.completed){
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
  }else{
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

function changeStatus(arr){
  const checkBoxes = document.querySelectorAll(".form-item input");
  checkBoxes.forEach((item, i) => {
    item.addEventListener("click", ()=>{
      if (arr[i].completed){
        arr[i].completed = false;
      } else {
        arr[i].completed = true;
      }
      console.log("status changed!")
      localStorage.setItem("tasks", JSON.stringify(new TaskList(arr)));
    });
  });
}

changeStatus(tasks);
