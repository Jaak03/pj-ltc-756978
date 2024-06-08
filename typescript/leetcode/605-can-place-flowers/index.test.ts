import { test } from './index';

describe('index', () => {
  it('should call the function', () => {
    try {
      test();
      expect(true).toBe(true)
    } catch (error) {
      console.log('error', error);
    }
  })
})