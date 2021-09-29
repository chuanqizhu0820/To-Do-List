import localStorageMock from '../__mocks__/localStorage';
import removeCompletedTask from '../__mocks__/removeCompletedTask';

describe('Remove tasks', () => {
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
  test('should return an array without completed tasks', () => {
    expect(removeCompletedTask(arr)).toHaveLength(1);
  });
  test('should be updated after deleting the tasks', () => {
    expect(localStorageMock.getItem('data')[0].description).toBe('something to do 2');
  });
  test('should be updated after deleting the tasks', () => {
    expect(localStorageMock.getItem('data')[0].completed).toBe(false);
  });
});