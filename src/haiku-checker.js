import { debug } from "webpack";

export class Haiku {
  constructor (sentence1, sentence2, sentence3) {
    this.sentence1 = sentence1;
     this.sentence2 = sentence2;
     this.sentence3 = sentence3;
}

  arraySplit() {
    let newSentence = this.sentence1.split(" ");
    console.log(newSentence);
    return newSentence;
  }

}

//letters = Word.split("");   1