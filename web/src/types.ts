export type AccessoryId =
  | "tiara" | "flowerband" | "tophat" | "sunglasses" | "beret"
  | "pearls" | "bowtie" | "bandana"
  | "sweater" | "dress" | "raincoat"
  | "boots" | "sneakers" | "socks";

export interface Accessory {
  id: AccessoryId;
  label: string;
  emoji: string;
  slot: "head" | "neck" | "body" | "feet";
  color: string;
}
