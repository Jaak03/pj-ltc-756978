import { test } from './index';
import { SystemReporter } from '../../tools/SystemReporter';

let reporter: SystemReporter;

describe('index', () => {
  beforeEach(() => {
    reporter = new SystemReporter({ startOnCreation: false });
  });
  it('should call the function', () => {
    try {
      test('test');
      expect(true).toBe(true);
    } catch (error) {
      console.log('error', error);
    }
  });

  it('should match example 1', () => {
    const input = 'hello';
    const output = 'holle';
    expect(test(input)).toBe(output);
  });

  it('should match example 2', () => {
    const input = 'leetcode';
    const output = 'leotcede';
    expect(test(input)).toBe(output);
  });

  it('should cater for empty strings', () => {
    const input = '';
    const output = '';
    expect(test(input)).toBe(output);
  });

  it('should cater strings with only vowels', () => {
    const input = 'aeio';
    const output = 'oiea';
    expect(test(input)).toBe(output);
  });

  it('should cater for strings with an odd number of vowels', () => {
    const input = 'sfuplaibsorri';
    const output = 'sfiploibsarru';
    expect(test(input)).toBe(output);
  });

  it('should take capital letters into account', () => {
    const input = 'aA';
    const output = 'Aa';
    expect(test(input)).toBe(output);
  });

  it('should run fast and efficient', () => {
    const input = 'leetcode';
    const output = 'leotcede';
    reporter.start();
    expect(test(input)).toBe(output);
    reporter.end();
    expect(reporter.memoryUsage.heapUsed).toBeLessThan(100000);
    expect(reporter.cpuUsage.cpuTime).toBeLessThan(0.0001);
  });
});
