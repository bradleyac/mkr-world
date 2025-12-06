
export const Items: string[] = [
  "Banana.png",
  "Triple_Banana.png",
  "Green_Shell.png",
  "Triple_Green_Shell.png",
  "Red_Shell.png",
  "Triple_Red_Shell.png",
  "Bob-omb.png",
  "Fire_Flower.png",
  "Ice_Flower.png",
  "Boomerang_Flower.png",
  "Mushroom.png",
  "Triple_Mushroom.png",
  "Hammer.png",
  "Blooper.png",
  "Super_Star.png",
  "Super_Horn.png",
  "Feather.png",
  "Boo.png",
  "Dash_Food.png"
];

export type ItemConfig = {
  item: string;
  banned: boolean;
};

export type ItemState = ItemConfig & {
  selected: boolean;
};
