export class TaskList {
  constructor(arr) {
    this.tasks = arr;
  }
}

export function changeStatus(arr) {
  const checkBoxes = document.querySelectorAll('.form-item input');
  checkBoxes.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (arr[parseInt(e.target.id-1)].completed) {
        arr[parseInt(e.target.id-1)].completed = false;
      } else {
        arr[parseInt(e.target.id-1)].completed = true;
      }
      localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
      location.reload();
    });
  });
}

export function removeCompletedTask(arr) {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', () => {
    let arr0 = arr.filter(item => item.completed == false);
    arr0.map((item, i) => item.index = i+1);
    localStorage.setItem('tasks', JSON.stringify(new TaskList(arr0)));
    location.reload();
  })
}

export function addTask(arr) {
  const inputBox = document.querySelector('#input-box');
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    let taskValue = inputBox.value;
    let item = {
      description: taskValue,
      completed: false,
      index: arr.length+1
    }
    arr.push(item);
    localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
    inputBox.value = "";
    e.preventDefault();
    location.reload();
  })
}

export function editTask(arr) {
  const editImg = document.querySelectorAll('.dot-menu img');
  editImg.forEach((item, i) => {

    item.addEventListener("click", () => {
      const hiddenInput = item.parentNode.parentNode.querySelector(".hidden-edit-input");
      const visiableInput = item.parentNode.parentNode.querySelector(".visiable-input");

      item.src = "https://img.icons8.com/material-outlined/24/000000/trash--v2.png";

      visiableInput.style.display = "none";
      hiddenInput.style.display = "block";
      hiddenInput.setSelectionRange(hiddenInput.value.length, hiddenInput.value.length);
      hiddenInput.focus();
      item.parentNode.parentNode.style.backgroundColor = "#FFFF99";


      // waiting for being edited
      hiddenInput.addEventListener("keyup", () => {
        if (event.keyCode === 13) {
          visiableInput.querySelector("label").textContent = hiddenInput.value;
          let itemIndex = visiableInput.querySelector('input').id;
          arr[itemIndex-1].description = hiddenInput.value;
          localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
          location.reload();
        }
      })
      // waiting for be removed
      item.addEventListener("click", (e) => {
        let itemIndex = e.target.parentNode.parentNode.querySelector(".visiable-input").querySelector("input").id;
        let count = 1;
        let remainingTask = [];
        arr.forEach((item, i) => {
          if (item.index != itemIndex) {
            item.index = count;
            remainingTask.push(item);
            count++;
          }
        });
        arr = remainingTask;
        localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
        location.reload();
      })

    })
  });

}
