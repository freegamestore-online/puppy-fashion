export type AccessoryId =
  | "crown" | "bow" | "tophat" | "sunglasses"
  | "necklace" | "scarf"
  | "jumper" | "bag"
  | "socks" | "shoes";

export interface Accessory {
  id: AccessoryId;
  label: string;
  emoji: string;
  slot: "head" | "neck" | "body" | "feet";
  color: string;
}
