import localStorageMock from './localStorage';

const removeCompletedTask = (arr) => {
  const arr0 = arr.filter((item) => item.completed === false);
  arr0.forEach((item, i) => { item.index = i + 1; });
  localStorageMock.setItem('data', arr0);
  return arr0;
};

export default removeCompletedTask;