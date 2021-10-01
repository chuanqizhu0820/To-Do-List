import changeStatus from '../__mocks__/changeStatus';
import localStorageMock from '../__mocks__/localStorage';

describe('test changeStatus function', () => {
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

  test('should retrun arr with undated completed status in object', () => {
    expect(changeStatus(arr, 0)[0].completed).toBe(false);
  });
  test('should update the localStorage with the array above ', () => {
    expect(localStorageMock.getItem('data')[0].completed).toBe(false);
  });
  test('should retrun arr with undated completed status in object', () => {
    expect(changeStatus(arr, 1)[1].completed).toBe(true);
  });
  test('should update the localStorage with the array above ', () => {
    expect(localStorageMock.getItem('data')[1].completed).toBe(true);
  });
});