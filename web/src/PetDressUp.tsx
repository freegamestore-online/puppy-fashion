import { useState } from "react";
import type { AccessoryId, Accessory } from "./types";
import { PugSVG } from "./PugSVG";

// ─── Accessory definitions ────────────────────────────────────────────────────

const ACCESSORIES: Accessory[] = [
  { id: "tiara",      label: "Tiara",       emoji: "👸", slot: "head",  color: "bg-pink-50 border-pink-300 dark:bg-pink-950 dark:border-pink-700" },
  { id: "flowerband", label: "Flowers",     emoji: "🌸", slot: "head",  color: "bg-green-50 border-green-300 dark:bg-green-950 dark:border-green-700" },
  { id: "tophat",     label: "Top Hat",     emoji: "🎩", slot: "head",  color: "bg-gray-100 border-gray-400 dark:bg-gray-800 dark:border-gray-600" },
  { id: "sunglasses", label: "Sunnies",     emoji: "🕶️", slot: "head",  color: "bg-blue-50 border-blue-300 dark:bg-blue-950 dark:border-blue-700" },
  { id: "beret",      label: "Beret",       emoji: "🧢", slot: "head",  color: "bg-red-50 border-red-300 dark:bg-red-950 dark:border-red-700" },
  { id: "pearls",     label: "Pearls",      emoji: "🪬", slot: "neck",  color: "bg-rose-50 border-rose-300 dark:bg-rose-950 dark:border-rose-700" },
  { id: "bowtie",     label: "Bow Tie",     emoji: "🎀", slot: "neck",  color: "bg-red-50 border-red-300 dark:bg-red-950 dark:border-red-700" },
  { id: "bandana",    label: "Bandana",     emoji: "🧣", slot: "neck",  color: "bg-orange-50 border-orange-300 dark:bg-orange-950 dark:border-orange-700" },
  { id: "dress",      label: "Dress",       emoji: "👗", slot: "body",  color: "bg-fuchsia-50 border-fuchsia-300 dark:bg-fuchsia-950 dark:border-fuchsia-700" },
  { id: "sweater",    label: "Sweater",     emoji: "🧥", slot: "body",  color: "bg-indigo-50 border-indigo-300 dark:bg-indigo-950 dark:border-indigo-700" },
  { id: "raincoat",   label: "Raincoat",    emoji: "🌧️", slot: "body",  color: "bg-yellow-50 border-yellow-300 dark:bg-yellow-950 dark:border-yellow-700" },
  { id: "boots",      label: "Boots",       emoji: "👢", slot: "feet",  color: "bg-amber-50 border-amber-300 dark:bg-amber-950 dark:border-amber-700" },
  { id: "sneakers",   label: "Sneakers",    emoji: "👟", slot: "feet",  color: "bg-sky-50 border-sky-300 dark:bg-sky-950 dark:border-sky-700" },
  { id: "socks",      label: "Socks",       emoji: "🧦", slot: "feet",  color: "bg-purple-50 border-purple-300 dark:bg-purple-950 dark:border-purple-700" },
];

const SLOTS: Accessory["slot"][] = ["head", "neck", "body", "feet"];
const SLOT_LABELS: Record<Accessory["slot"], string> = {
  head: "Head", neck: "Neck", body: "Body", feet: "Feet",
};

type PetId = "pug" | "cat" | "budgie";

const PETS: { id: PetId; label: string; emoji: string }[] = [
  { id: "pug",    label: "Pug",    emoji: "🐾" },
  { id: "cat",    label: "Cat",    emoji: "🐱" },
  { id: "budgie", label: "Budgie", emoji: "🦜" },
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

// ─── Cat SVG ─────────────────────────────────────────────────────────────────

function CatSVG({ worn }: { worn: Set<AccessoryId> }) {
  const tiara      = worn.has("tiara");
  const flowerband = worn.has("flowerband");
  const tophat     = worn.has("tophat");
  const sunnies    = worn.has("sunglasses");
  const beret      = worn.has("beret");
  const pearls     = worn.has("pearls");
  const bowtie     = worn.has("bowtie");
  const bandana    = worn.has("bandana");
  const sweater    = worn.has("sweater");
  const dress      = worn.has("dress");
  const raincoat   = worn.has("raincoat");
  const boots      = worn.has("boots");
  const sneakers   = worn.has("sneakers");
  const socks      = worn.has("socks");

  return (
    <svg viewBox="0 0 220 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="catFur" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#f5c97a" />
          <stop offset="60%" stopColor="#e0a040" />
          <stop offset="100%" stopColor="#b87820" />
        </radialGradient>
        <radialGradient id="catBelly" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fff3d6" />
          <stop offset="100%" stopColor="#f5d898" />
        </radialGradient>
        <radialGradient id="catFace" cx="48%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#f7d080" />
          <stop offset="100%" stopColor="#d4980a" />
        </radialGradient>
        <radialGradient id="catEye" cx="30%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#052e16" />
        </radialGradient>
        <radialGradient id="catLeg" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#f0c060" />
          <stop offset="100%" stopColor="#b07820" />
        </radialGradient>
        <radialGradient id="catInnerEar" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#fda4af" />
          <stop offset="100%" stopColor="#fb7185" />
        </radialGradient>
        <filter id="catDrop" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="1" dy="4" stdDeviation="5" floodColor="#00000025" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="110" cy="372" rx="70" ry="9" fill="#00000018" />

      {/* tail */}
      <path d="M 155 262 Q 196 238 190 196 Q 184 162 168 174 Q 160 184 168 204 Q 176 224 155 242"
        fill="none" stroke="#b87820" strokeWidth="16" strokeLinecap="round" />
      <path d="M 155 262 Q 192 240 186 200 Q 181 168 170 178"
        fill="none" stroke="#f5c97a" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
      <circle cx="168" cy="174" r="11" fill="#f5d898" />

      {/* back legs */}
      <ellipse cx="70" cy="298" rx="24" ry="32" fill="url(#catLeg)" />
      <ellipse cx="150" cy="298" rx="24" ry="32" fill="url(#catLeg)" />
      <ellipse cx="65" cy="308" rx="13" ry="18" fill="#b07820" opacity="0.2" />
      <ellipse cx="155" cy="308" rx="13" ry="18" fill="#b07820" opacity="0.2" />

      {/* body */}
      <ellipse cx="110" cy="244" rx="60" ry="66" fill="url(#catFur)" filter="url(#catDrop)" />
      <ellipse cx="80" cy="250" rx="16" ry="48" fill="#b07820" opacity="0.1" />
      <ellipse cx="140" cy="250" rx="16" ry="48" fill="#b07820" opacity="0.1" />
      <ellipse cx="110" cy="256" rx="36" ry="48" fill="url(#catBelly)" />

      {/* tabby stripes on body */}
      <path d="M 68 220 Q 80 215 88 228" fill="none" stroke="#c8880a" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      <path d="M 66 238 Q 78 232 86 246" fill="none" stroke="#c8880a" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
      <path d="M 152 220 Q 140 215 132 228" fill="none" stroke="#c8880a" strokeWidth="2.5" strokeLinecap="round" opacity="0.35" />
      <path d="M 154 238 Q 142 232 134 246" fill="none" stroke="#c8880a" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />

      {/* dress */}
      {dress && (
        <g>
          <path d="M 58 214 Q 110 204 162 214 L 178 308 Q 110 324 42 308 Z" fill="#f472b6" opacity="0.93" />
          <path d="M 58 214 Q 110 206 162 214" fill="none" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
          {[0,1,2,3,4,5,6,7].map(i => (
            <path key={i} d={`M ${48+i*18} 308 Q ${57+i*18} 328 ${66+i*18} 308`} fill="#f9a8d4" opacity="0.8" />
          ))}
        </g>
      )}

      {/* raincoat */}
      {raincoat && !dress && (
        <g>
          <ellipse cx="110" cy="240" rx="60" ry="60" fill="#facc15" opacity="0.92" />
          <path d="M 50 214 Q 110 204 170 214" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round" />
          <path d="M 50 214 Q 110 226 170 214" fill="none" stroke="#fde047" strokeWidth="3" opacity="0.5" />
          <circle cx="110" cy="228" r="4" fill="#eab308" />
          <circle cx="110" cy="246" r="4" fill="#eab308" />
          <circle cx="110" cy="264" r="4" fill="#eab308" />
        </g>
      )}

      {/* sweater */}
      {sweater && !dress && !raincoat && (
        <g>
          <ellipse cx="110" cy="238" rx="60" ry="56" fill="#6366f1" opacity="0.92" />
          {[-28,-14,0,14,28].map((dx, i) => (
            <line key={i} x1={110+dx} y1={196} x2={110+dx-1} y2={290}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <path d="M 50 210 Q 110 200 170 210" fill="none" stroke="#4f46e5" strokeWidth="12" strokeLinecap="round" />
          <path d="M 50 210 Q 110 200 170 210" fill="none" stroke="#818cf8" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        </g>
      )}

      {/* handbag with dress */}
      {dress && (
        <g transform="translate(166,228)">
          <rect x="0" y="0" width="32" height="26" rx="7" fill="#be185d" />
          <path d="M 5 0 Q 16 -13 27 0" fill="none" stroke="#f472b6" strokeWidth="4" strokeLinecap="round" />
          <rect x="9" y="9" width="14" height="10" rx="3" fill="#f9a8d4" />
          <circle cx="16" cy="14" r="3" fill="#be185d" />
        </g>
      )}

      {/* front legs */}
      <rect x="68" y="286" width="28" height="54" rx="14" fill="url(#catLeg)" />
      <ellipse cx="82" cy="340" rx="17" ry="10" fill="#b07820" />
      <rect x="124" y="286" width="28" height="54" rx="14" fill="url(#catLeg)" />
      <ellipse cx="138" cy="340" rx="17" ry="10" fill="#b07820" />

      {/* socks */}
      {socks && (
        <g>
          <rect x="68" y="314" width="28" height="26" rx="13" fill="#f0abfc" />
          <line x1="68" y1="323" x2="96" y2="323" stroke="#e879f9" strokeWidth="3" />
          <line x1="68" y1="330" x2="96" y2="330" stroke="#e879f9" strokeWidth="3" />
          <rect x="124" y="314" width="28" height="26" rx="13" fill="#f0abfc" />
          <line x1="124" y1="323" x2="152" y2="323" stroke="#e879f9" strokeWidth="3" />
          <line x1="124" y1="330" x2="152" y2="330" stroke="#e879f9" strokeWidth="3" />
        </g>
      )}

      {/* boots */}
      {boots && (
        <g>
          <rect x="62" y="314" width="40" height="28" rx="10" fill="#92400e" />
          <ellipse cx="82" cy="342" rx="22" ry="10" fill="#78350f" />
          <rect x="64" y="314" width="36" height="10" rx="5" fill="#a16207" />
          <rect x="116" y="314" width="40" height="28" rx="10" fill="#92400e" />
          <ellipse cx="136" cy="342" rx="22" ry="10" fill="#78350f" />
          <rect x="118" y="314" width="36" height="10" rx="5" fill="#a16207" />
        </g>
      )}

      {/* sneakers */}
      {sneakers && !boots && (
        <g>
          <ellipse cx="82" cy="342" rx="22" ry="10" fill="#3b82f6" />
          <rect x="60" y="328" width="44" height="16" rx="8" fill="#60a5fa" />
          <line x1="68" y1="332" x2="96" y2="332" stroke="white" strokeWidth="2" />
          <circle cx="82" cy="328" r="3" fill="white" opacity="0.7" />
          <ellipse cx="136" cy="342" rx="22" ry="10" fill="#3b82f6" />
          <rect x="114" y="328" width="44" height="16" rx="8" fill="#60a5fa" />
          <line x1="122" y1="332" x2="150" y2="332" stroke="white" strokeWidth="2" />
          <circle cx="136" cy="328" r="3" fill="white" opacity="0.7" />
        </g>
      )}

      {/* paw toes */}
      {!boots && !sneakers && (
        <g fill="#b07820">
          <circle cx="74" cy="342" r="6" />
          <circle cx="82" cy="345" r="6" />
          <circle cx="90" cy="342" r="6" />
          <circle cx="130" cy="342" r="6" />
          <circle cx="138" cy="345" r="6" />
          <circle cx="146" cy="342" r="6" />
        </g>
      )}

      {/* neck */}
      <ellipse cx="110" cy="182" rx="32" ry="18" fill="#d4980a" />

      {/* head */}
      <ellipse cx="110" cy="140" rx="58" ry="54" fill="url(#catFace)" filter="url(#catDrop)" />

      {/* tabby forehead stripes */}
      <path d="M 96 106 Q 110 100 124 106" fill="none" stroke="#b87820" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M 94 116 Q 110 109 126 116" fill="none" stroke="#b87820" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <path d="M 96 126 Q 110 119 124 126" fill="none" stroke="#b87820" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* ears */}
      <polygon points="58,118 46,68 86,102" fill="#d4980a" />
      <polygon points="62,114 54,76 82,102" fill="url(#catInnerEar)" />
      <polygon points="162,118 174,68 134,102" fill="#d4980a" />
      <polygon points="158,114 166,76 138,102" fill="url(#catInnerEar)" />

      {/* ear fur tufts */}
      <path d="M 48 70 Q 52 62 58 68" fill="none" stroke="#e0a040" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 172 70 Q 168 62 162 68" fill="none" stroke="#e0a040" strokeWidth="2.5" strokeLinecap="round" />

      {/* tophat */}
      {tophat && (
        <g>
          <rect x="54" y="68" width="112" height="10" rx="5" fill="#1f2937" />
          <rect x="66" y="20" width="88" height="50" rx="7" fill="#1f2937" />
          <rect x="69" y="23" width="82" height="14" rx="5" fill="#374151" />
          <rect x="66" y="62" width="88" height="9" rx="4" fill="#374151" />
          <rect x="66" y="61" width="88" height="4" rx="2" fill="#dc2626" />
        </g>
      )}

      {/* tiara */}
      {tiara && !tophat && (
        <g>
          <path d="M 70 98 Q 70 80 110 72 Q 150 80 150 98" fill="none" stroke="#e2c97e" strokeWidth="4" />
          <path d="M 84 96 L 84 78 M 110 94 L 110 68 M 136 96 L 136 78" stroke="#e2c97e" strokeWidth="3" strokeLinecap="round" />
          <circle cx="110" cy="66" r="7" fill="#f472b6" />
          <circle cx="84" cy="76" r="5" fill="#a78bfa" />
          <circle cx="136" cy="76" r="5" fill="#a78bfa" />
          <circle cx="97" cy="70" r="3.5" fill="#67e8f9" />
          <circle cx="123" cy="70" r="3.5" fill="#67e8f9" />
          <path d="M 70 98 Q 110 92 150 98" fill="none" stroke="#f5d060" strokeWidth="3" />
        </g>
      )}

      {/* flowerband */}
      {flowerband && !tophat && !tiara && (
        <g>
          <path d="M 56 106 Q 110 92 164 106" fill="none" stroke="#86efac" strokeWidth="6" strokeLinecap="round" />
          {[70,88,110,132,150].map((x, i) => {
            const y = 106 - Math.sin(((x-56)/108)*Math.PI)*10;
            const colors = ["#f472b6","#fbbf24","#f472b6","#a78bfa","#f472b6"];
            return (
              <g key={i} transform={`translate(${x},${y})`}>
                {[0,60,120,180,240,300].map(a => (
                  <ellipse key={a}
                    cx={Math.cos(a*Math.PI/180)*6} cy={Math.sin(a*Math.PI/180)*6}
                    rx="5" ry="3.5" fill={colors[i] ?? "#f472b6"}
                    transform={`rotate(${a})`} opacity="0.9" />
                ))}
                <circle cx="0" cy="0" r="3.5" fill="#fef08a" />
              </g>
            );
          })}
        </g>
      )}

      {/* beret */}
      {beret && !tophat && !tiara && !flowerband && (
        <g>
          <ellipse cx="110" cy="90" rx="54" ry="28" fill="#dc2626" />
          <ellipse cx="110" cy="84" rx="48" ry="24" fill="#ef4444" />
          <ellipse cx="132" cy="78" rx="8" ry="5" fill="#b91c1c" opacity="0.45" />
          <circle cx="118" cy="76" r="5" fill="#dc2626" />
          <ellipse cx="110" cy="90" rx="54" ry="8" fill="#b91c1c" opacity="0.35" />
        </g>
      )}

      {/* eyes */}
      {sunnies ? (
        <g>
          <ellipse cx="88" cy="140" rx="20" ry="15" fill="#1e293b" />
          <ellipse cx="132" cy="140" rx="20" ry="15" fill="#1e293b" />
          <line x1="108" y1="140" x2="112" y2="140" stroke="#475569" strokeWidth="4" />
          <line x1="68" y1="140" x2="60" y2="138" stroke="#475569" strokeWidth="3.5" />
          <line x1="152" y1="140" x2="160" y2="138" stroke="#475569" strokeWidth="3.5" />
          <ellipse cx="80" cy="135" rx="7" ry="4" fill="#334155" opacity="0.45" />
          <ellipse cx="124" cy="135" rx="7" ry="4" fill="#334155" opacity="0.45" />
        </g>
      ) : (
        <g>
          {/* eye whites */}
          <ellipse cx="88" cy="140" rx="16" ry="18" fill="#fef9ee" />
          <ellipse cx="132" cy="140" rx="16" ry="18" fill="#fef9ee" />
          {/* iris */}
          <ellipse cx="88" cy="141" rx="12" ry="14" fill="url(#catEye)" />
          <ellipse cx="132" cy="141" rx="12" ry="14" fill="url(#catEye)" />
          {/* slit pupil */}
          <ellipse cx="88" cy="141" rx="4" ry="12" fill="#052e16" />
          <ellipse cx="132" cy="141" rx="4" ry="12" fill="#052e16" />
          {/* highlights */}
          <circle cx="93" cy="133" r="4.5" fill="white" opacity="0.9" />
          <circle cx="137" cy="133" r="4.5" fill="white" opacity="0.9" />
          <circle cx="83" cy="147" r="2.5" fill="white" opacity="0.4" />
          <circle cx="127" cy="147" r="2.5" fill="white" opacity="0.4" />
          {/* eyelid */}
          <path d="M 72 132 Q 88 124 104 132" fill="none" stroke="#b87820" strokeWidth="2.5" opacity="0.5" />
          <path d="M 116 132 Q 132 124 148 132" fill="none" stroke="#b87820" strokeWidth="2.5" opacity="0.5" />
        </g>
      )}

      {/* nose */}
      <path d="M 104 158 Q 110 154 116 158 L 113 163 Q 110 165 107 163 Z" fill="#f472b6" />
      {/* nose highlight */}
      <ellipse cx="108" cy="157" rx="2.5" ry="1.5" fill="#fda4af" opacity="0.7" />

      {/* mouth */}
      <path d="M 110 163 Q 98 173 93 170" fill="none" stroke="#b87820" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 110 163 Q 122 173 127 170" fill="none" stroke="#b87820" strokeWidth="2.5" strokeLinecap="round" />

      {/* whiskers */}
      <line x1="48" y1="156" x2="94" y2="160" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="48" y1="163" x2="94" y2="163" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="48" y1="170" x2="94" y2="166" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="172" y1="156" x2="126" y2="160" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="172" y1="163" x2="126" y2="163" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="172" y1="170" x2="126" y2="166" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* bandana */}
      {bandana && (
        <g>
          <path d="M 56 186 Q 110 176 164 186 L 110 212 Z" fill="#f97316" opacity="0.95" />
          <path d="M 56 186 Q 110 196 164 186" fill="none" stroke="#ea580c" strokeWidth="2" />
          {[0.2,0.4,0.6,0.8].map((t,i) => (
            <circle key={i} cx={56+t*108} cy={186} r="2.5" fill="#fed7aa" opacity="0.7" />
          ))}
        </g>
      )}

      {/* bowtie */}
      {bowtie && !bandana && (
        <g transform="translate(110,186)">
          <ellipse cx="-20" cy="0" rx="18" ry="12" fill="#dc2626" />
          <ellipse cx="20" cy="0" rx="18" ry="12" fill="#dc2626" />
          <ellipse cx="-20" cy="0" rx="12" ry="7" fill="#ef4444" opacity="0.5" />
          <ellipse cx="20" cy="0" rx="12" ry="7" fill="#ef4444" opacity="0.5" />
          <circle cx="0" cy="0" r="8" fill="#b91c1c" />
          <circle cx="0" cy="0" r="5" fill="#dc2626" />
        </g>
      )}

      {/* pearls */}
      {pearls && !bandana && !bowtie && (
        <g>
          <path d="M 56 186 Q 110 202 164 186" fill="none" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
          {[0.05,0.15,0.25,0.35,0.45,0.55,0.65,0.75,0.85,0.95].map((t, i) => {
            const x = 56 + t * 108;
            const y = 186 + Math.sin(t * Math.PI) * 15;
            return <circle key={i} cx={x} cy={y} r="5.5"
              fill={i%3===0?"#fce7f3":i%3===1?"#f5f5f5":"#fce7f3"}
              stroke="#d1d5db" strokeWidth="0.5" />;
          })}
        </g>
      )}
    </svg>
  );
}

// ─── Budgie SVG ───────────────────────────────────────────────────────────────

function BudgieSVG({ worn }: { worn: Set<AccessoryId> }) {
  const tiara      = worn.has("tiara");
  const flowerband = worn.has("flowerband");
  const tophat     = worn.has("tophat");
  const sunnies    = worn.has("sunglasses");
  const beret      = worn.has("beret");
  const pearls     = worn.has("pearls");
  const bowtie     = worn.has("bowtie");
  const bandana    = worn.has("bandana");
  const sweater    = worn.has("sweater");
  const dress      = worn.has("dress");
  const raincoat   = worn.has("raincoat");
  const boots      = worn.has("boots");
  const sneakers   = worn.has("sneakers");
  const socks      = worn.has("socks");

  return (
    <svg viewBox="0 0 220 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="budBody" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="60%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
        <radialGradient id="budHead" cx="48%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#34d399" />
        </radialGradient>
        <radialGradient id="budWing" cx="30%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="50%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
        <radialGradient id="budBelly" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </radialGradient>
        <radialGradient id="budEye" cx="30%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="60%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0c1445" />
        </radialGradient>
        <radialGradient id="budCheek" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#3b82f6" />
        </radialGradient>
        <filter id="budDrop" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="1" dy="4" stdDeviation="5" floodColor="#00000025" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="110" cy="372" rx="60" ry="9" fill="#00000018" />

      {/* tail feathers */}
      <path d="M 88 292 Q 74 330 68 352" fill="none" stroke="#047857" strokeWidth="11" strokeLinecap="round" />
      <path d="M 110 296 Q 110 336 110 356" fill="none" stroke="#059669" strokeWidth="13" strokeLinecap="round" />
      <path d="M 132 292 Q 146 330 152 352" fill="none" stroke="#047857" strokeWidth="11" strokeLinecap="round" />
      {/* tail feather highlights */}
      <path d="M 88 292 Q 76 328 70 348" fill="none" stroke="#6ee7b7" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      <path d="M 110 296 Q 110 334 110 352" fill="none" stroke="#6ee7b7" strokeWidth="5" strokeLinecap="round" opacity="0.4" />
      <path d="M 132 292 Q 144 328 150 348" fill="none" stroke="#6ee7b7" strokeWidth="4" strokeLinecap="round" opacity="0.4" />

      {/* body */}
      <ellipse cx="110" cy="222" rx="54" ry="72" fill="url(#budBody)" filter="url(#budDrop)" />
      <ellipse cx="110" cy="234" rx="32" ry="52" fill="url(#budBelly)" />

      {/* wing feather detail lines on body */}
      <path d="M 60 195 Q 68 220 66 250" fill="none" stroke="#047857" strokeWidth="2" opacity="0.3" />
      <path d="M 66 192 Q 74 216 72 246" fill="none" stroke="#047857" strokeWidth="2" opacity="0.25" />

      {/* dress */}
      {dress && (
        <g>
          <path d="M 60 198 Q 110 188 160 198 L 172 298 Q 110 314 48 298 Z" fill="#f472b6" opacity="0.92" />
          <path d="M 60 198 Q 110 190 160 198" fill="none" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
          {[0,1,2,3,4,5,6,7].map(i => (
            <path key={i} d={`M ${50+i*17} 298 Q ${58+i*17} 316 ${66+i*17} 298`} fill="#f9a8d4" opacity="0.8" />
          ))}
        </g>
      )}

      {/* raincoat */}
      {raincoat && !dress && (
        <g>
          <ellipse cx="110" cy="222" rx="54" ry="66" fill="#facc15" opacity="0.92" />
          <path d="M 56 198 Q 110 188 164 198" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round" />
          <circle cx="110" cy="212" r="4" fill="#eab308" />
          <circle cx="110" cy="230" r="4" fill="#eab308" />
          <circle cx="110" cy="248" r="4" fill="#eab308" />
        </g>
      )}

      {/* sweater */}
      {sweater && !dress && !raincoat && (
        <g>
          <ellipse cx="110" cy="220" rx="54" ry="62" fill="#6366f1" opacity="0.92" />
          {[-24,-10,4,18].map((dx, i) => (
            <line key={i} x1={110+dx} y1={184} x2={110+dx-1} y2={278}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <path d="M 56 196 Q 110 186 164 196" fill="none" stroke="#4f46e5" strokeWidth="11" strokeLinecap="round" />
          <path d="M 56 196 Q 110 186 164 196" fill="none" stroke="#818cf8" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        </g>
      )}

      {/* wings */}
      <path d="M 56 180 Q 30 218 34 278 Q 46 300 62 280 Q 70 254 66 200 Z" fill="url(#budWing)" />
      {/* wing feather lines */}
      <path d="M 54 186 Q 36 224 38 270" fill="none" stroke="#064e3b" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 60 183 Q 42 220 44 264" fill="none" stroke="#064e3b" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M 54 186 Q 38 222 40 268" fill="none" stroke="#6ee7b7" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

      <path d="M 164 180 Q 190 218 186 278 Q 174 300 158 280 Q 150 254 154 200 Z" fill="url(#budWing)" />
      <path d="M 166 186 Q 184 224 182 270" fill="none" stroke="#064e3b" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 160 183 Q 178 220 176 264" fill="none" stroke="#064e3b" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* feet / perch legs */}
      <line x1="96" y1="292" x2="84" y2="322" stroke="#a16207" strokeWidth="7" strokeLinecap="round" />
      <line x1="124" y1="292" x2="136" y2="322" stroke="#a16207" strokeWidth="7" strokeLinecap="round" />
      {/* toes */}
      {!boots && !sneakers && (
        <g stroke="#a16207" strokeWidth="4" strokeLinecap="round">
          <line x1="84" y1="322" x2="70" y2="328" />
          <line x1="84" y1="322" x2="80" y2="334" />
          <line x1="84" y1="322" x2="92" y2="332" />
          <line x1="136" y1="322" x2="150" y2="328" />
          <line x1="136" y1="322" x2="140" y2="334" />
          <line x1="136" y1="322" x2="128" y2="332" />
        </g>
      )}

      {/* socks */}
      {socks && (
        <g>
          <ellipse cx="84" cy="322" rx="14" ry="10" fill="#f0abfc" />
          <ellipse cx="136" cy="322" rx="14" ry="10" fill="#f0abfc" />
        </g>
      )}

      {/* boots */}
      {boots && (
        <g>
          <rect x="70" y="312" width="28" height="22" rx="8" fill="#92400e" />
          <ellipse cx="84" cy="334" rx="16" ry="8" fill="#78350f" />
          <rect x="72" y="312" width="24" height="8" rx="4" fill="#a16207" />
          <rect x="122" y="312" width="28" height="22" rx="8" fill="#92400e" />
          <ellipse cx="136" cy="334" rx="16" ry="8" fill="#78350f" />
          <rect x="124" y="312" width="24" height="8" rx="4" fill="#a16207" />
        </g>
      )}

      {/* sneakers */}
      {sneakers && !boots && (
        <g>
          <ellipse cx="84" cy="332" rx="18" ry="9" fill="#3b82f6" />
          <rect x="66" y="320" width="36" height="14" rx="7" fill="#60a5fa" />
          <line x1="72" y1="324" x2="98" y2="324" stroke="white" strokeWidth="2" />
          <ellipse cx="136" cy="332" rx="18" ry="9" fill="#3b82f6" />
          <rect x="118" y="320" width="36" height="14" rx="7" fill="#60a5fa" />
          <line x1="124" y1="324" x2="150" y2="324" stroke="white" strokeWidth="2" />
        </g>
      )}

      {/* neck */}
      <ellipse cx="110" cy="168" rx="28" ry="16" fill="#34d399" />

      {/* head */}
      <ellipse cx="110" cy="136" rx="52" ry="50" fill="url(#budHead)" filter="url(#budDrop)" />

      {/* head feather pattern */}
      <path d="M 88 100 Q 110 90 132 100" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      <path d="M 86 110 Q 110 100 134 110" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

      {/* cheek patches — blue budgie cheeks */}
      <ellipse cx="82" cy="150" rx="14" ry="10" fill="url(#budCheek)" opacity="0.85" />
      <ellipse cx="138" cy="150" rx="14" ry="10" fill="url(#budCheek)" opacity="0.85" />
      {/* cheek dots */}
      <circle cx="76" cy="154" r="3.5" fill="#1d4ed8" opacity="0.7" />
      <circle cx="84" cy="158" r="3.5" fill="#1d4ed8" opacity="0.7" />
      <circle cx="92" cy="154" r="3.5" fill="#1d4ed8" opacity="0.7" />
      <circle cx="128" cy="154" r="3.5" fill="#1d4ed8" opacity="0.7" />
      <circle cx="136" cy="158" r="3.5" fill="#1d4ed8" opacity="0.7" />
      <circle cx="144" cy="154" r="3.5" fill="#1d4ed8" opacity="0.7" />

      {/* tophat */}
      {tophat && (
        <g>
          <rect x="56" y="74" width="108" height="10" rx="5" fill="#1f2937" />
          <rect x="68" y="26" width="84" height="50" rx="7" fill="#1f2937" />
          <rect x="71" y="29" width="78" height="14" rx="5" fill="#374151" />
          <rect x="70" y="67" width="80" height="9" rx="4" fill="#374151" />
          <rect x="68" y="66" width="84" height="4" rx="2" fill="#dc2626" />
        </g>
      )}

      {/* tiara */}
      {tiara && !tophat && (
        <g>
          <path d="M 72 102 Q 72 84 110 76 Q 148 84 148 102" fill="none" stroke="#e2c97e" strokeWidth="4" />
          <path d="M 86 100 L 86 82 M 110 98 L 110 72 M 134 100 L 134 82" stroke="#e2c97e" strokeWidth="3" strokeLinecap="round" />
          <circle cx="110" cy="70" r="7" fill="#f472b6" />
          <circle cx="86" cy="80" r="5" fill="#a78bfa" />
          <circle cx="134" cy="80" r="5" fill="#a78bfa" />
          <circle cx="98" cy="74" r="3.5" fill="#67e8f9" />
          <circle cx="122" cy="74" r="3.5" fill="#67e8f9" />
          <path d="M 72 102 Q 110 96 148 102" fill="none" stroke="#f5d060" strokeWidth="3" />
        </g>
      )}

      {/* flowerband */}
      {flowerband && !tophat && !tiara && (
        <g>
          <path d="M 60 110 Q 110 96 160 110" fill="none" stroke="#86efac" strokeWidth="6" strokeLinecap="round" />
          {[72,90,110,130,148].map((x, i) => {
            const y = 110 - Math.sin(((x-60)/100)*Math.PI)*10;
            const colors = ["#f472b6","#fbbf24","#f472b6","#a78bfa","#f472b6"];
            return (
              <g key={i} transform={`translate(${x},${y})`}>
                {[0,60,120,180,240,300].map(a => (
                  <ellipse key={a}
                    cx={Math.cos(a*Math.PI/180)*6} cy={Math.sin(a*Math.PI/180)*6}
                    rx="5" ry="3.5" fill={colors[i] ?? "#f472b6"}
                    transform={`rotate(${a})`} opacity="0.9" />
                ))}
                <circle cx="0" cy="0" r="3.5" fill="#fef08a" />
              </g>
            );
          })}
        </g>
      )}

      {/* beret */}
      {beret && !tophat && !tiara && !flowerband && (
        <g>
          <ellipse cx="110" cy="94" rx="52" ry="26" fill="#dc2626" />
          <ellipse cx="110" cy="88" rx="46" ry="22" fill="#ef4444" />
          <ellipse cx="130" cy="82" rx="8" ry="5" fill="#b91c1c" opacity="0.45" />
          <circle cx="118" cy="80" r="5" fill="#dc2626" />
          <ellipse cx="110" cy="94" rx="52" ry="8" fill="#b91c1c" opacity="0.35" />
        </g>
      )}

      {/* eyes */}
      {sunnies ? (
        <g>
          <ellipse cx="90" cy="132" rx="18" ry="14" fill="#1e293b" />
          <ellipse cx="130" cy="132" rx="18" ry="14" fill="#1e293b" />
          <line x1="108" y1="132" x2="112" y2="132" stroke="#475569" strokeWidth="4" />
          <line x1="72" y1="132" x2="64" y2="130" stroke="#475569" strokeWidth="3.5" />
          <line x1="148" y1="132" x2="156" y2="130" stroke="#475569" strokeWidth="3.5" />
          <ellipse cx="82" cy="127" rx="6" ry="4" fill="#334155" opacity="0.45" />
          <ellipse cx="122" cy="127" rx="6" ry="4" fill="#334155" opacity="0.45" />
        </g>
      ) : (
        <g>
          {/* eye ring */}
          <circle cx="90" cy="132" r="14" fill="#f5f5f5" />
          <circle cx="130" cy="132" r="14" fill="#f5f5f5" />
          {/* iris */}
          <circle cx="90" cy="132" r="10" fill="url(#budEye)" />
          <circle cx="130" cy="132" r="10" fill="url(#budEye)" />
          {/* pupil */}
          <circle cx="90" cy="132" r="6" fill="#050a1a" />
          <circle cx="130" cy="132" r="6" fill="#050a1a" />
          {/* highlights */}
          <circle cx="95" cy="126" r="4" fill="white" opacity="0.9" />
          <circle cx="135" cy="126" r="4" fill="white" opacity="0.9" />
          <circle cx="86" cy="137" r="2" fill="white" opacity="0.4" />
          <circle cx="126" cy="137" r="2" fill="white" opacity="0.4" />
          {/* eye ring outline */}
          <circle cx="90" cy="132" r="14" fill="none" stroke="#d4d4d4" strokeWidth="1.5" />
          <circle cx="130" cy="132" r="14" fill="none" stroke="#d4d4d4" strokeWidth="1.5" />
        </g>
      )}

      {/* cere (nose area above beak) */}
      <ellipse cx="110" cy="150" rx="10" ry="6" fill="#93c5fd" />

      {/* beak */}
      <path d="M 102 154 Q 110 148 118 154 L 114 162 Q 110 166 106 162 Z" fill="#fbbf24" />
      <path d="M 104 154 Q 110 150 116 154" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
      {/* beak highlight */}
      <ellipse cx="108" cy="155" rx="3" ry="2" fill="#fde68a" opacity="0.7" />

      {/* bandana */}
      {bandana && (
        <g>
          <path d="M 60 170 Q 110 160 160 170 L 110 196 Z" fill="#f97316" opacity="0.95" />
          <path d="M 60 170 Q 110 180 160 170" fill="none" stroke="#ea580c" strokeWidth="2" />
          {[0.2,0.4,0.6,0.8].map((t,i) => (
            <circle key={i} cx={60+t*100} cy={170} r="2.5" fill="#fed7aa" opacity="0.7" />
          ))}
        </g>
      )}

      {/* bowtie */}
      {bowtie && !bandana && (
        <g transform="translate(110,170)">
          <ellipse cx="-18" cy="0" rx="16" ry="10" fill="#dc2626" />
          <ellipse cx="18" cy="0" rx="16" ry="10" fill="#dc2626" />
          <ellipse cx="-18" cy="0" rx="10" ry="6" fill="#ef4444" opacity="0.5" />
          <ellipse cx="18" cy="0" rx="10" ry="6" fill="#ef4444" opacity="0.5" />
          <circle cx="0" cy="0" r="7" fill="#b91c1c" />
          <circle cx="0" cy="0" r="4" fill="#dc2626" />
        </g>
      )}

      {/* pearls */}
      {pearls && !bandana && !bowtie && (
        <g>
          <path d="M 60 170 Q 110 186 160 170" fill="none" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
          {[0.05,0.15,0.25,0.35,0.45,0.55,0.65,0.75,0.85,0.95].map((t, i) => {
            const x = 60 + t * 100;
            const y = 170 + Math.sin(t * Math.PI) * 15;
            return <circle key={i} cx={x} cy={y} r="5"
              fill={i%3===0?"#fce7f3":i%3===1?"#f5f5f5":"#fce7f3"}
              stroke="#d1d5db" strokeWidth="0.5" />;
          })}
        </g>
      )}
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function PetDressUp() {
  const [pet, setPet] = useState<PetId>("pug");
  const [worn, setWorn] = useState<Set<AccessoryId>>(new Set());

  function toggle(id: AccessoryId) {
    const acc = ACCESSORIES.find(a => a.id === id);
    if (!acc) return;
    setWorn(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        // remove others in same slot
        ACCESSORIES.filter(a => a.slot === acc.slot).forEach(a => next.delete(a.id));
        next.add(id);
      }
      return next;
    });
  }

  function clearAll() {
    setWorn(new Set());
  }

  const bySlot = (slot: Accessory["slot"]) => ACCESSORIES.filter(a => a.slot === slot);

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 overflow-hidden">
      {/* pet selector */}
      <div className="flex gap-2 justify-center pt-3 pb-1 px-3">
        {PETS.map(p => (
          <button
            key={p.id}
            onClick={() => { setPet(p.id); clearAll(); }}
            className={`flex-1 max-w-[110px] py-2 rounded-2xl text-sm font-bold border-2 transition-all
              ${pet === p.id
                ? "bg-white dark:bg-white/10 border-purple-400 dark:border-purple-400 text-purple-700 dark:text-purple-300 shadow-md scale-105"
                : "bg-white/50 dark:bg-white/5 border-transparent text-gray-500 dark:text-gray-400 hover:border-purple-200"
              }`}
          >
            <span className="text-lg block">{p.emoji}</span>
            {p.label}
          </button>
        ))}
      </div>

      {/* pet display */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-0 relative px-2">
        <div className="relative w-full max-w-[220px] aspect-[220/380]
          bg-gradient-to-b from-white/60 to-white/30 dark:from-white/10 dark:to-white/5
          rounded-3xl shadow-xl border border-white/50 dark:border-white/10 overflow-hidden">
          {/* sparkle bg */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute rounded-full bg-purple-300 dark:bg-purple-500"
                style={{
                  width: `${4+i*2}px`, height: `${4+i*2}px`,
                  top: `${10+i*11}%`, left: `${8+i*12}%`,
                  opacity: 0.4
                }} />
            ))}
          </div>
          <div className="relative w-full h-full p-1">
            {pet === "pug"    && <PugSVG    worn={worn} />}
            {pet === "cat"    && <CatSVG    worn={worn} />}
            {pet === "budgie" && <BudgieSVG worn={worn} />}
          </div>
        </div>
        <WornBadges worn={worn} />
        {worn.size > 0 && (
          <button onClick={clearAll}
            className="mt-1 text-xs text-gray-400 dark:text-gray-500 hover:text-red-400 transition-colors underline underline-offset-2">
            Remove all
          </button>
        )}
      </div>

      {/* accessories panel */}
      <div className="shrink-0 bg-white/70 dark:bg-black/30 backdrop-blur-sm border-t border-white/50 dark:border-white/10 px-3 pt-2 pb-3 overflow-y-auto max-h-[42vh]">
        {SLOTS.map(slot => (
          <div key={slot} className="mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-purple-400 dark:text-purple-400 mb-1 px-1">
              {SLOT_LABELS[slot]}
            </p>
            <div className="flex gap-1.5 flex-wrap">
              {bySlot(slot).map(acc => {
                const active = worn.has(acc.id);
                return (
                  <button
                    key={acc.id}
                    onClick={() => toggle(acc.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 text-xs font-semibold transition-all
                      ${active
                        ? `${acc.color} shadow-md scale-105 text-gray-800 dark:text-gray-100`
                        : "bg-white/60 dark:bg-white/5 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-purple-300 dark:hover:border-purple-600"
                      }`}
                    style={{ minHeight: 44 }}
                  >
                    <span className="text-base">{acc.emoji}</span>
                    {acc.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
