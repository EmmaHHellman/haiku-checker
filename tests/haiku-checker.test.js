import { Haiku } from './../src/haiku-checker.js';
import { TestScheduler } from 'jest';

describe('Haiku', () => {

  test('should correctly store arrays as variables', () => {
    const haiku = new Haiku(["Dogs are very cute"], ["They really like to get treats"], ["They are such good boys"]);
    expect (haiku.sentence1).toEqual(["Dogs are very cute"]);
    expect (haiku.sentence2).toEqual(["They really like to get treats"]);
    expect (haiku.sentence3).toEqual(["They are such good boys"]);

  });

  test('should correctly split sentence1 to an array of words'), () => {
    expect(haiku.arraySplit).toEqual(["Dogs", "are", "very", "cute"]);
  }

});