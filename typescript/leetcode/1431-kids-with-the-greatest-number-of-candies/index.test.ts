import test from './index';
describe('index', () => {
  it('should call the function', () => {
    try {
      test([1,2,3], 3);
      expect(true).toBe(true)
    } catch (error) {
      console.log('error', error);
    }
  });

  it('should return an array of booleans', () => {
    const result = test([1,2,3], 3);
    expect(typeof result).toBe('object');
    result.forEach(item => {
      expect(typeof item).toBe('boolean');
    });
  });

  it('should match example 1', () => {
    const result = test([2,3,5,1,3], 3);
    expect(result).toEqual([true,true,true,false,true]);
  });

  it('should match example 2', () => {
    const result = test([4,2,1,1,2], 1);
    expect(result).toEqual([true,false,false,false,false]);
  });

  it('should match example 3', () => {
    const result = test([12,1,12], 10);
    expect(result).toEqual([true,false,true]);
  });
})