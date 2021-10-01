import localStorageMock from './localStorage';

const editTask = (arr, index, value) => {
  arr[index].description = value;
  localStorageMock.setItem('data', arr);
  return arr;
};

export default editTask;