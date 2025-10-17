export interface CharacterDto {
  id: number;
  image: string;
  name: string;
  status: "Alive" | "Dead";
  species: string;
}
