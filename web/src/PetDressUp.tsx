import { useState } from "react";

// ─── Pet definitions ──────────────────────────────────────────────────────────
interface Pet {
  id: string;
  name: string;
  emoji: string;
  bg: string;
  accent: string;
  bodyColor: string;
}

const PETS: Pet[] = [
  {
    id: "budgy",
    name: "Budgy",
    emoji: "🦜",
    bg: "from-sky-100 to-emerald-100",
    accent: "bg-sky-400",
    bodyColor: "#6ee7b7",
  },
  {
    id: "cat",
    name: "Cat",
    emoji: "🐱",
    bg: "from-amber-100 to-orange-100",
    accent: "bg-amber-400",
    bodyColor: "#fcd34d",
  },
  {
    id: "pug",
    name: "Pug",
    emoji: "🐶",
    bg: "from-stone-100 to-yellow-100",
    accent: "bg-stone-400",
    bodyColor: "#d6b483",
  },
];

// ─── Accessory definitions ────────────────────────────────────────────────────
interface Accessory {
  id: string;
  label: string;
  emoji: string;
  slot: "head" | "neck" | "body" | "feet" | "tail";
  color: string;
}

const ACCESSORIES: Accessory[] = [
  { id: "crown",    label: "Crown",    emoji: "👑", slot: "head",  color: "bg-yellow-100 border-yellow-400" },
  { id: "bow",      label: "Bow",      emoji: "🎀", slot: "head",  color: "bg-pink-100 border-pink-400" },
  { id: "hat",      label: "Party Hat",emoji: "🎩", slot: "head",  color: "bg-purple-100 border-purple-400" },
  { id: "glasses",  label: "Glasses",  emoji: "🕶️", slot: "head",  color: "bg-blue-100 border-blue-400" },
  { id: "necklace", label: "Necklace", emoji: "📿", slot: "neck",  color: "bg-rose-100 border-rose-400" },
  { id: "bowtie",   label: "Bow Tie",  emoji: "🎗️", slot: "neck",  color: "bg-red-100 border-red-400" },
  { id: "jumper",   label: "Jumper",   emoji: "🧥", slot: "body",  color: "bg-indigo-100 border-indigo-400" },
  { id: "tshirt",   label: "T-Shirt",  emoji: "👕", slot: "body",  color: "bg-cyan-100 border-cyan-400" },
  { id: "cape",     label: "Cape",     emoji: "🦸", slot: "body",  color: "bg-violet-100 border-violet-400" },
  { id: "shoes",    label: "Shoes",    emoji: "👟", slot: "feet",  color: "bg-green-100 border-green-400" },
  { id: "boots",    label: "Boots",    emoji: "👢", slot: "feet",  color: "bg-orange-100 border-orange-400" },
  { id: "socks",    label: "Socks",    emoji: "🧦", slot: "feet",  color: "bg-teal-100 border-teal-400" },
  { id: "ribbon",   label: "Tail Bow", emoji: "🎀", slot: "tail",  color: "bg-fuchsia-100 border-fuchsia-400" },
  { id: "star",     label: "Star Tag", emoji: "⭐", slot: "tail",  color: "bg-yellow-100 border-yellow-300" },
];

// Slot display order and labels for the pet display
const SLOT_ORDER: Accessory["slot"][] = ["head", "neck", "body", "feet", "tail"];
const SLOT_LABELS: Record<Accessory["slot"], string> = {
  head: "Head",
  neck: "Neck",
  body: "Body",
  feet: "Feet",
  tail: "Tail",
};

// ─── Pet Display ─────────────────────────────────────────────────────────────
function PetDisplay({ pet, selected }: { pet: Pet; selected: Set<string> }) {
  const bySlot = (slot: Accessory["slot"]) =>
    ACCESSORIES.filter((a) => a.slot === slot && selected.has(a.id));

  const headItems = bySlot("head");
  const neckItems = bySlot("neck");
  const bodyItems = bySlot("body");
  const feetItems = bySlot("feet");
  const tailItems = bySlot("tail");

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br ${pet.bg} shadow-xl border-4 border-white/60 p-6 min-h-[320px] w-full`}
    >
      {/* Head accessories */}
      <div className="flex gap-1 mb-1 min-h-[32px] items-end justify-center">
        {headItems.map((a) => (
          <span key={a.id} className="text-2xl drop-shadow animate-bounce" style={{ animationDuration: "1.4s" }}>
            {a.emoji}
          </span>
        ))}
      </div>

      {/* Pet body */}
      <div className="relative flex flex-col items-center select-none">
        {/* Neck accessories shown above the main emoji */}
        <div className="flex gap-1 mb-0.5 min-h-[24px] items-center justify-center">
          {neckItems.map((a) => (
            <span key={a.id} className="text-xl drop-shadow">
              {a.emoji}
            </span>
          ))}
        </div>

        {/* Main pet emoji */}
        <div className="relative">
          <span
            className="block leading-none drop-shadow-lg"
            style={{ fontSize: "clamp(100px, 22vw, 160px)" }}
          >
            {pet.emoji}
          </span>

          {/* Body overlay */}
          {bodyItems.length > 0 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {bodyItems.map((a) => (
                <span key={a.id} className="text-3xl drop-shadow">
                  {a.emoji}
                </span>
              ))}
            </div>
          )}

          {/* Tail overlay */}
          {tailItems.length > 0 && (
            <div className="absolute bottom-0 right-0 translate-x-1/3 flex gap-1">
              {tailItems.map((a) => (
                <span key={a.id} className="text-2xl drop-shadow">
                  {a.emoji}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Feet accessories */}
        <div className="flex gap-1 mt-0.5 min-h-[28px] items-start justify-center">
          {feetItems.map((a) => (
            <span key={a.id} className="text-xl drop-shadow">
              {a.emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Pet name badge */}
      <div className="mt-3 px-5 py-1.5 rounded-full bg-white/70 shadow text-base font-bold text-gray-700" style={{ fontFamily: "Fraunces, serif" }}>
        {pet.name}
      </div>

      {/* Outfit summary */}
      {selected.size > 0 && (
        <div className="mt-2 flex flex-wrap gap-1 justify-center max-w-[220px]">
          {SLOT_ORDER.map((slot) => {
            const items = bySlot(slot);
            if (!items.length) return null;
            return (
              <span
                key={slot}
                className="text-xs px-2 py-0.5 rounded-full bg-white/60 text-gray-600 border border-white/80"
              >
                {SLOT_LABELS[slot]}: {items.map((a) => a.label).join(", ")}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function PetDressUp() {
  const [chosenPet, setChosenPet] = useState<Pet | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggleAccessory(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function resetAll() {
    setChosenPet(null);
    setSelected(new Set());
  }

  // ── Pet selection screen ──
  if (!chosenPet) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-6 p-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Choose Your Pet!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          Pick a pet to dress up in style ✨
        </p>

        <div className="flex flex-wrap gap-5 justify-center">
          {PETS.map((pet) => (
            <button
              key={pet.id}
              onClick={() => setChosenPet(pet)}
              className={`flex flex-col items-center gap-2 p-5 rounded-3xl bg-gradient-to-br ${pet.bg} shadow-lg border-4 border-white hover:scale-105 active:scale-95 transition-transform cursor-pointer min-w-[130px]`}
              style={{ minHeight: 160 }}
            >
              <span style={{ fontSize: 72 }}>{pet.emoji}</span>
              <span
                className="text-lg font-bold text-gray-700"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {pet.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Dress-up screen ──
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">

      {/* Left / Top: pet display */}
      <div className="flex flex-col items-center justify-start lg:justify-center gap-3 p-4 lg:w-[340px] lg:min-w-[300px] shrink-0">
        <PetDisplay pet={chosenPet} selected={selected} />

        <div className="flex gap-2 w-full">
          <button
            onClick={resetAll}
            className="flex-1 py-2 rounded-xl bg-white/80 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-white active:scale-95 transition-all shadow"
          >
            Change Pet
          </button>
          <button
            onClick={() => setSelected(new Set())}
            className="flex-1 py-2 rounded-xl bg-white/80 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-white active:scale-95 transition-all shadow"
          >
            Remove All
          </button>
        </div>
      </div>

      {/* Right / Bottom: accessories panel */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3
          className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3 text-center"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          Accessories
        </h3>

        {SLOT_ORDER.map((slot) => {
          const items = ACCESSORIES.filter((a) => a.slot === slot);
          return (
            <div key={slot} className="mb-4">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 pl-1">
                {SLOT_LABELS[slot]}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((acc) => {
                  const on = selected.has(acc.id);
                  return (
                    <button
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      className={`
                        flex flex-col items-center gap-1 px-3 py-2 rounded-2xl border-2 transition-all
                        min-w-[70px] min-h-[70px] justify-center cursor-pointer
                        ${on
                          ? `${acc.color} shadow-md scale-105 ring-2 ring-offset-1 ring-pink-400`
                          : "bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-600 hover:scale-105 hover:shadow"
                        }
                        active:scale-95
                      `}
                      aria-pressed={on}
                      aria-label={acc.label}
                    >
                      <span className="text-3xl leading-none">{acc.emoji}</span>
                      <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 leading-tight text-center">
                        {acc.label}
                      </span>
                      {on && (
                        <span className="text-[9px] font-bold text-pink-500 uppercase tracking-wide">
                          ON
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
