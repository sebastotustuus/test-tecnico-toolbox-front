/* eslint-disable no-undef */
import getReverseText from '../../services/reverse.services';
import wordsMock from '../__mocks__/words.mock';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(wordsMock[0]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe('Services testing', () => {
  it('should response the promise', async () => {
    const result = await getReverseText('/iecho?text=test');
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:5000/iecho?text=test',
      { headers: { 'Content-Type': 'application/json' } }
    );
    expect(result).toEqual(wordsMock[0]);
  });

  it('should respone de error', async () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    fetch.mockImplementationOnce(() => Promise.reject('API is down'));
    const result = await getReverseText('/iecho?text=test');
    expect(result).toEqual({});
    expect(fetch).toHaveBeenCalledWith(
      'http://localhost:5000/iecho?text=test',
      { headers: { 'Content-Type': 'application/json' } }
    );
  });
});
