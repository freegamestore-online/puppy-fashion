import { GameShell, GameTopbar } from "@freegamestore/games";
import { PetDressUp } from "./PetDressUp";

export default function App() {
  return (
    <GameShell topbar={<GameTopbar title="Puppy Fashion" />}>
      <PetDressUp />
    </GameShell>
  );
}
