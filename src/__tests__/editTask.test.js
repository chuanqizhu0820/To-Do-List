import editTask from '../__mocks__/editTask';
import localStorageMock from '../__mocks__/localStorage';

describe('Edit ToDo', () => {
  const arr = [
    {
      description: 'something to do 1',
      completed: true,
      index: 1,
    },
    {
      description: 'something to do 2',
      completed: false,
      index: 2,
    },
    {
      description: 'something to do 3',
      completed: true,
      index: 3,
    },
  ];

  test('Should return object with new description', () => {
    expect(editTask(arr, 0, 'Something new to do')).toEqual([
      { description: 'Something new to do', completed: true, index: 1 },
      { description: 'something to do 2', completed: false, index: 2 },
      { description: 'something to do 3', completed: true, index: 3 },
    ]);
  });

  test('Local storage should be updated after editing', () => {
    expect(localStorageMock.getItem('data')[0].description).toBe('Something new to do');
  });
});