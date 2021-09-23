export class TaskList {
  constructor(arr) {
    this.tasks = arr;
  }
}

export function changeStatus(arr) {
  const checkBoxes = document.querySelectorAll('.form-item input');
  checkBoxes.forEach((item) => {
    item.addEventListener('click', (e) => {
      console.log(e.target.id);
      if (arr[parseInt(e.target.id)].completed) {
        item.completed = false;
      } else {
        arr[parseInt(e.target.id)].completed = true;
      }
      localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
    });
  });
}

export function removeTask(arr){
  const clearBtn = document.querySelector('#clear-btn');
  let remainingTask = [];
  clearBtn.addEventListener('click', ()=>{
    let count = 0;
    arr.forEach((item, i) => {
      if (item.completed==false){
        item.index = count;
        remainingTask.push(item);
        count ++;
      }
    });
      arr = remainingTask;
      localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
      location.reload();
  })
}

export function addTask(arr){
const inputBox = document.querySelector('#input-box');
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  let taskValue = inputBox.value;
  let item = {
    description: taskValue,
    completed: false,
    index: arr.length
  }
  arr.push(item);
  localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
  inputBox.value = "";
  e.preventDefault();
  location.reload();
  })
}

export function editTask(arr){
  const editImg = document.querySelectorAll('.dot-menu img');
  editImg.forEach((item, i) => {
    item.addEventListener("click", ()=>{
      item.parentNode.parentNode.querySelector(".hidden-edit-input").style.display = "block";
      item.parentNode.parentNode.querySelector(".visiable-input").style.display = "none";
    })
  });

}
