/*
 * @jest-environment jsdom
 */
import addTask from '../__mocks__/addTask.js';
import localStorageMock from '../__mocks__/localStorage.js';

describe('Add to-do', () => {
  const arr = [];
  test('Should return an array with attached todo object', () => {
    document.body.innerHTML = '<input id="input-text" value="Something">';
    expect(addTask(arr)).toHaveLength(1);
  });
  test('Local storage should be updated after adding new item', () => {
    expect(localStorageMock.getItem('data')).toHaveLength(1);
  });
  test('Should return an array with attached todo object', () => {
    document.body.innerHTML = '<input id="input-text" value="Something">';
    expect(addTask(arr)).toHaveLength(2);
  });
  test('The new task completed status should be false', () => {
    expect(arr[0].completed).toBe(false);
  });
});