import data from "../../db/mock-data.json";
import { Character } from "../../types/character.model";

export function fetchImages() {
  return new Promise<Character[]>((resolve) =>
    setTimeout(() => resolve(data.characters), 500)
  );
}
