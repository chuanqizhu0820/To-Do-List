import {TaskList} from "./index.js";

function changeStatus(arr){
  const checkBoxes = document.querySelectorAll(".form-item input");
  checkBoxes.forEach((item, i) => {
    item.addEventListener("click", ()=>{
      if (arr[i].completed){
        arr[i].completed = false;
      } else {
        arr[i].completed = true;
      }
      localStorage.setItem("tasks", JSON.stringify(new TaskList(arr)));
    });
  });
}

export {changeStatus};
