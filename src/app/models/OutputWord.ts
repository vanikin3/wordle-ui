import { OutputCharacter } from "./OutputCharacter";

export class OutputWord{
  characters : OutputCharacter[];

  constructor(characters : OutputCharacter[]) {
    this.characters = characters;
  }
}