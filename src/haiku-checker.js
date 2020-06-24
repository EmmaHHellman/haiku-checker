import { debug } from "webpack";

export class Haiku {
  constructor (sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
     this.sentence2 = sentence2;
     this.sentence3 = sentence3;
  }

  sentenceSplit() {
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
    let sentence1split = this.sentence1.split(" ");
    let wordSplit = sentence1split[1].split('');
    //return sentence1split;
    
    wordSplit.forEach(function(letter) {
      if(letter.includes(vowels)) {
        return true;
      } else {
        return false;
      }
    
    })
}};