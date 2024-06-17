import { test } from './index';

describe('index', () => {
  it('should call the function', () => {
    try {
      test([], 1);
      expect(true).toBe(true)
    } catch (error) {
      console.log('error', error);
    }
  });

  it('should perform example 1', () => {
    expect(test([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  it('should perform example 2', () => {
    expect(test([1, 0, 0, 0, 1], 2)).toBe(false);
  });

  it('should cater for a completely open bed with one spot', () => {
    expect(test([0,0,0,0,0], 2)).toBe(true);
  });

  it('should cater for a bed where the spots are just too small', () => {
    expect(test([1,0,0,1,1,1,1,0,0,1],1)).toBe(false);
  });

  it('should cater for a small spot at the end', () => {
    expect(test([1,1,1,0,0],1)).toBe(true);
  });

  it('should cater for a spot at the beginning', () => {
    expect(test([0,0,1,1,1],1)).toBe(true);
  });

  it('should pass test 1', () => {
    expect(test([1,0,0,0,0,0,1],2)).toBe(true);
  });

  it('should pass test 3', () => {
    expect(test([0],1)).toBe(true);
  });

  it('should pass test 4', () => {
    expect(test([0,0],1)).toBe(true);
  });

  it('should pass test 5', () => {
    expect(test([0,1],1)).toBe(false);
  });

  it('should pass test 6', () => {
    expect(test([0,0,0,0,1],2)).toBe(true);
  });
})