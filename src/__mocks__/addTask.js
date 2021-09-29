import localStorageMock from './localStorage.js';

const addTask = (arr) => {
  const inputText = document.getElementById('input-text');
  const item = {
    description: `${inputText.value}`,
    completed: false,
    index: arr.length + 1,
  };
  arr.push(item);
  localStorageMock.setItem('data', arr);
  return arr;
};

export default addTask;