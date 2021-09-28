export class TaskList {
  constructor(arr) {
    this.tasks = arr;
  }
}

const saveAndReload = (arr) => {
  localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
  window.location.reload();
};

export const changeStatus = (arr) => {
  const checkBoxes = document.querySelectorAll('.form-item input');
  checkBoxes.forEach((item) => {
    item.addEventListener('click', (e) => {
      const targetid = e.target.id - 1;
      if (arr[parseInt(targetid, 10)].completed) {
        arr[parseInt(targetid, 10)].completed = false;
      } else {
        arr[parseInt(targetid, 10)].completed = true;
      }
      saveAndReload(arr);
      // localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
      // window.location.reload();
    });
  });
};

export const removeCompletedTask = (arr) => {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', () => {
    const arr0 = arr.filter((item) => item.completed === false);
    arr0.forEach((item, i) => { item.index = i + 1; });
    saveAndReload(arr0);
    // localStorage.setItem('tasks', JSON.stringify(new TaskList(arr0)));
    // window.location.reload();
  });
};

export const addTask = (arr) => {
  const inputBox = document.querySelector('#input-box');
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const taskValue = inputBox.value;
    const item = {
      description: taskValue,
      completed: false,
      index: arr.length + 1,
    };
    arr.push(item);
    localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
    inputBox.value = '';
    e.preventDefault();
    window.location.reload();
  });
};

export const editTask = (arr) => {
  const editImg = document.querySelectorAll('.dot-menu img');
  editImg.forEach((item) => {
    item.addEventListener('click', () => {
      const hiddenInput = item.parentNode.parentNode.querySelector('.hidden-edit-input');
      const visiableInput = item.parentNode.parentNode.querySelector('.visiable-input');

      item.src = 'https://img.icons8.com/material-outlined/24/000000/trash--v2.png';

      visiableInput.style.display = 'none';
      hiddenInput.style.display = 'block';
      hiddenInput.setSelectionRange(hiddenInput.value.length, hiddenInput.value.length);
      hiddenInput.focus();
      item.parentNode.parentNode.style.backgroundColor = '#FFFF99';

      // waiting for being edited
      hiddenInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          visiableInput.querySelector('label').textContent = hiddenInput.value;
          const itemIndex = visiableInput.querySelector('input').id;
          arr[itemIndex - 1].description = hiddenInput.value;
          saveAndReload(arr);
          // localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
          // window.location.reload();
        }
      });
      // waiting for be removed
      item.addEventListener('click', (e) => {
        const itemIndex = e.target.parentNode.parentNode.querySelector('.visiable-input').querySelector('input').id;
        let count = 1;
        const remainingTask = [];
        arr.forEach((item) => {
          if (item.index !== parseInt(itemIndex, 10)) {
            item.index = count;
            remainingTask.push(item);
            count += 1;
          }
        });
        arr = remainingTask;
        saveAndReload(arr);
        // localStorage.setItem('tasks', JSON.stringify(new TaskList(arr)));
        // window.location.reload();
      });
    });
  });
};
