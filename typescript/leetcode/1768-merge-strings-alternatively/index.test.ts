import challenge from './index';

describe('index', () => {
  it('should return a string', () => {
    expect(typeof challenge('abc', 'def')).toBe('string')
  })
  it('should match example 1', () => {
    expect(challenge('abc', 'pqr')).toEqual('apbqcr');
  }) 
  it('should match example 2', () => {
    expect(challenge('ab', 'pqrs')).toEqual('apbqrs');
  })
  it('should match example 2', () => {
    expect(challenge('abcd', 'pq')).toEqual('apbqcd');
  })
  it('should handle the second word being empty', () => {
    expect(challenge('abcd', '')).toEqual('abcd');
  })
})