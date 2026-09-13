import { GameShell, GameTopbar } from "@freegamestore/games";
import { useState } from "react";
import { PetDressUp } from "./PetDressUp";

export default function App() {
  return (
    <GameShell topbar={<GameTopbar title="Puppy Fashion" score={0} />}>
      <PetDressUp />
    </GameShell>
  );
}
