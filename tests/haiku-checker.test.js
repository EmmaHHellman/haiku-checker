import { Haiku } from './../src/haiku-checker.js';
import { TestScheduler } from 'jest';

describe('Haiku', () => {

  test('should correctly store arrays as variables', () => {
    const haiku = new Haiku(["Dogs are very cute"], ["They really like to get treats"], ["They are such good boys"]);
    expect (haiku.sentence1).toEqual(["Dogs are very cute"]);

  });

});