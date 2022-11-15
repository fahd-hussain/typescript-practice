interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris";

const cats: Record<CatName, CatInfo> = {
  boris: { age: 2, breed: "Persian" },
  miffy: { age: 5, breed: "Munchkin" },
};

console.log(cats)