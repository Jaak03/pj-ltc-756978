import challenge from './index';

describe('index', () => {
  it('should return a string', () => {
    expect(typeof challenge('abc', 'def')).toBe('string')
  })
  it('should match example 1', () => {
    expect(challenge('ABCABC', 'ABC')).toEqual('ABC');
  }) 
  it('should match example 2', () => {
    expect(challenge('ABABAB', 'ABAB')).toEqual('ABAB');
  })
  it('should match example 3', () => {
    expect(challenge('LEET', 'CODE')).toEqual('');
  })
  it('should handle the second word being empty', () => {
    expect(challenge('ABC', '')).toEqual('');
  })
})