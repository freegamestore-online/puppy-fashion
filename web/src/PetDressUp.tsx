import { useState } from "react";
import type { AccessoryId, Accessory } from "./types";
import { PugSVG } from "./PugSVG";
import { CatSVG } from "./CatSVG";
import { BudgieSVG } from "./BudgieSVG";

// ─── Accessory definitions ────────────────────────────────────────────────────

const ACCESSORIES: Accessory[] = [
  { id: "tiara",      label: "Tiara",    emoji: "👸", slot: "head", color: "bg-pink-50 border-pink-300 dark:bg-pink-950 dark:border-pink-700" },
  { id: "flowerband", label: "Flowers",  emoji: "🌸", slot: "head", color: "bg-green-50 border-green-300 dark:bg-green-950 dark:border-green-700" },
  { id: "tophat",     label: "Top Hat",  emoji: "🎩", slot: "head", color: "bg-gray-100 border-gray-400 dark:bg-gray-800 dark:border-gray-600" },
  { id: "sunglasses", label: "Sunnies",  emoji: "🕶️", slot: "head", color: "bg-blue-50 border-blue-300 dark:bg-blue-950 dark:border-blue-700" },
  { id: "beret",      label: "Beret",    emoji: "🧢", slot: "head", color: "bg-red-50 border-red-300 dark:bg-red-950 dark:border-red-700" },
  { id: "pearls",     label: "Pearls",   emoji: "🪬", slot: "neck", color: "bg-rose-50 border-rose-300 dark:bg-rose-950 dark:border-rose-700" },
  { id: "bowtie",     label: "Bow Tie",  emoji: "🎀", slot: "neck", color: "bg-red-50 border-red-300 dark:bg-red-950 dark:border-red-700" },
  { id: "bandana",    label: "Bandana",  emoji: "🧣", slot: "neck", color: "bg-orange-50 border-orange-300 dark:bg-orange-950 dark:border-orange-700" },
  { id: "dress",      label: "Dress",    emoji: "👗", slot: "body", color: "bg-fuchsia-50 border-fuchsia-300 dark:bg-fuchsia-950 dark:border-fuchsia-700" },
  { id: "sweater",    label: "Sweater",  emoji: "🧥", slot: "body", color: "bg-indigo-50 border-indigo-300 dark:bg-indigo-950 dark:border-indigo-700" },
  { id: "raincoat",   label: "Raincoat", emoji: "🌧️", slot: "body", color: "bg-yellow-50 border-yellow-300 dark:bg-yellow-950 dark:border-yellow-700" },
  { id: "boots",      label: "Boots",    emoji: "👢", slot: "feet", color: "bg-amber-50 border-amber-300 dark:bg-amber-950 dark:border-amber-700" },
  { id: "sneakers",   label: "Sneakers", emoji: "👟", slot: "feet", color: "bg-sky-50 border-sky-300 dark:bg-sky-950 dark:border-sky-700" },
  { id: "socks",      label: "Socks",    emoji: "🧦", slot: "feet", color: "bg-purple-50 border-purple-300 dark:bg-purple-950 dark:border-purple-700" },
];

const SLOTS: Accessory["slot"][] = ["head", "neck", "body", "feet"];
const SLOT_LABELS: Record<Accessory["slot"], string> = {
  head: "Head", neck: "Neck", body: "Body", feet: "Feet",
};

type PetId = "pug" | "cat" | "budgie";

const PETS: { id: PetId; label: string; emoji: string; bg: string }[] = [
  { id: "pug",    label: "Pug",    emoji: "🐾", bg: "from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-950" },
  { id: "cat",    label: "Cat",    emoji: "🐱", bg: "from-yellow-50 to-amber-100 dark:from-yellow-950 dark:to-amber-950" },
  { id: "budgie", label: "Budgie", emoji: "🦜", bg: "from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-950" },
];

// ─── Worn badges ──────────────────────────────────────────────────────────────

function WornBadges({ worn }: { worn: Set<AccessoryId> }) {
  const labels = ACCESSORIES.filter(a => worn.has(a.id)).map(a => a.label);
  if (!labels.length) return null;
  return (
    <div className="flex flex-wrap gap-1 justify-center mt-1 px-2">
      {labels.map(l => (
        <span key={l} className="text-[10px] px-2 py-0.5 rounded-full bg-white/70 dark:bg-black/40 text-gray-600 dark:text-gray-300 border border-white/60 font-semibold">
          {l}
        </span>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function PetDressUp() {
  const [pet, setPet] = useState<PetId>("pug");
  const [worn, setWorn] = useState<Set<AccessoryId>>(new Set());

  function toggle(id: AccessoryId) {
    setWorn(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        // Only one per slot
        const slot = ACCESSORIES.find(a => a.id === id)?.slot;
        if (slot) ACCESSORIES.filter(a => a.slot === slot).forEach(a => next.delete(a.id));
        next.add(id);
      }
      return next;
    });
  }

  const currentPet = PETS.find(p => p.id === pet) ?? PETS[0]!;

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-white dark:bg-gray-950">

      {/* ── PET PICKER ── */}
      <div className="flex gap-2 justify-center pt-3 pb-2 px-4">
        {PETS.map(p => (
          <button
            key={p.id}
            onClick={() => setPet(p.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border-2 transition-all
              ${pet === p.id
                ? "bg-pink-500 border-pink-600 text-white shadow-lg scale-105"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-pink-300"
              }`}
          >
            <span>{p.emoji}</span>
            <span>{p.label}</span>
          </button>
        ))}
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div className="flex flex-1 min-h-0 gap-0">

        {/* ── PET STAGE ── */}
        <div className={`flex-1 flex flex-col items-center justify-center bg-gradient-to-b ${currentPet.bg} relative min-w-0`}>
          {/* decorative dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div key={i}
                className="absolute rounded-full bg-white/20 dark:bg-white/5"
                style={{
                  width: `${20 + (i * 13) % 40}px`,
                  height: `${20 + (i * 13) % 40}px`,
                  top: `${(i * 37) % 90}%`,
                  left: `${(i * 23) % 90}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full max-w-[260px] mx-auto" style={{ height: "clamp(200px, 45vh, 340px)" }}>
            {pet === "pug"    && <PugSVG    worn={worn} />}
            {pet === "cat"    && <CatSVG    worn={worn} />}
            {pet === "budgie" && <BudgieSVG worn={worn} />}
          </div>

          <WornBadges worn={worn} />

          {/* clear button */}
          {worn.size > 0 && (
            <button
              onClick={() => setWorn(new Set())}
              className="mt-2 mb-1 px-4 py-1.5 rounded-full text-xs font-bold bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-all"
            >
              Remove all
            </button>
          )}
        </div>

        {/* ── ACCESSORIES PANEL ── */}
        <div className="w-[180px] sm:w-[200px] flex flex-col border-l border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          <div className="px-3 pt-3 pb-1">
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Accessories</p>
          </div>

          {SLOTS.map(slot => (
            <div key={slot} className="px-3 pb-3">
              <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1.5 mt-2">
                {SLOT_LABELS[slot]}
              </p>
              <div className="flex flex-col gap-1.5">
                {ACCESSORIES.filter(a => a.slot === slot).map(a => {
                  const active = worn.has(a.id);
                  return (
                    <button
                      key={a.id}
                      onClick={() => toggle(a.id)}
                      className={`flex items-center gap-2 px-2.5 py-2 rounded-xl border-2 text-left transition-all
                        ${active
                          ? `${a.color} shadow-sm scale-[1.02] font-bold`
                          : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500"
                        }`}
                    >
                      <span className="text-lg leading-none">{a.emoji}</span>
                      <span className="text-xs font-semibold truncate">{a.label}</span>
                      {active && (
                        <span className="ml-auto text-[10px] text-pink-500 font-bold">ON</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
