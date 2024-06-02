import challenge from './index';

describe('index', () => {
  it('should return a string', () => {
    expect(typeof challenge('abc', 'def')).toBe('string')
  })
  it('should match example 1', () => {
    expect(challenge('ABCABC', 'ABC')).toEqual('ABC');
  }) 
  it('should match example 2', () => {
    expect(challenge('ABABAB', 'ABAB')).toEqual('AB');
  })
  it('should match example 3', () => {
    expect(challenge('LEET', 'CODE')).toEqual('');
  })
  it('should match submission criteria 1', () => {
    expect(challenge('ABABABAB', 'ABAB')).toEqual('ABAB');
  })
  it('should match multiples', () => {
    expect(challenge('ABABABABABABABAB', 'ABABABAB')).toEqual('ABABABAB');
  })
  it('should fail to find a divisor', () => {
    expect(challenge('ABABABABABABABA', 'ABABABAB')).toEqual('');
  })
  it('should handle the second word being empty', () => {
    expect(challenge('ABC', '')).toEqual('');
  })
})