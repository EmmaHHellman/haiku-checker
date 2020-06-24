import { debug } from "webpack";

export class Haiku {
  constructor (sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
     this.sentence2 = sentence2;
     this.sentence3 = sentence3;
  }

  // sentenceSplit() {
  //   let vowels = ["a", "e", "i", "o", "u", "y"];
  //   let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
  //   let sentence1split = this.sentence1.split(" ");

  //   let vowelCount = 0;
    
  //   sentence1split.forEach(word) {
  //     if (word.length == 1) {
  //       vowelCount += 1;
  //     } else {
  //     }
  //   }
  //   console.log(vowelCount);
  //     return vowelCount;
  //   }
};