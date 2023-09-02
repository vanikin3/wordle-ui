export class OutputCharacter{
    character : string;
    index : number;
    correct: string;
  
    constructor(character : string, index : number, correct : string) {
      this.character = character;
      this.index = index;
      this.correct = correct;
    }
  }