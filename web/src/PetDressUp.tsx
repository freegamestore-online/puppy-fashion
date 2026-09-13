import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type PetId = "budgie" | "cat" | "pug";
type AccessoryId =
  | "crown" | "bow" | "tophat" | "sunglasses"
  | "necklace" | "scarf"
  | "jumper" | "bag"
  | "socks" | "shoes";

interface Accessory {
  id: AccessoryId;
  label: string;
  emoji: string;
  slot: "head" | "neck" | "body" | "feet";
  color: string;
}

const ACCESSORIES: Accessory[] = [
  { id: "crown",      label: "Crown",     emoji: "👑", slot: "head",  color: "bg-yellow-100 border-yellow-400 dark:bg-yellow-900 dark:border-yellow-600" },
  { id: "bow",        label: "Bow",       emoji: "🎀", slot: "head",  color: "bg-pink-100 border-pink-400 dark:bg-pink-900 dark:border-pink-600" },
  { id: "tophat",     label: "Top Hat",   emoji: "🎩", slot: "head",  color: "bg-gray-100 border-gray-400 dark:bg-gray-800 dark:border-gray-500" },
  { id: "sunglasses", label: "Sunnies",   emoji: "🕶️", slot: "head",  color: "bg-blue-100 border-blue-400 dark:bg-blue-900 dark:border-blue-600" },
  { id: "necklace",   label: "Necklace",  emoji: "📿", slot: "neck",  color: "bg-purple-100 border-purple-400 dark:bg-purple-900 dark:border-purple-600" },
  { id: "scarf",      label: "Scarf",     emoji: "🧣", slot: "neck",  color: "bg-red-100 border-red-400 dark:bg-red-900 dark:border-red-600" },
  { id: "jumper",     label: "Jumper",    emoji: "🧥", slot: "body",  color: "bg-indigo-100 border-indigo-400 dark:bg-indigo-900 dark:border-indigo-600" },
  { id: "bag",        label: "Handbag",   emoji: "👜", slot: "body",  color: "bg-rose-100 border-rose-400 dark:bg-rose-900 dark:border-rose-600" },
  { id: "socks",      label: "Socks",     emoji: "🧦", slot: "feet",  color: "bg-green-100 border-green-400 dark:bg-green-900 dark:border-green-600" },
  { id: "shoes",      label: "Shoes",     emoji: "👟", slot: "feet",  color: "bg-sky-100 border-sky-400 dark:bg-sky-900 dark:border-sky-600" },
];

const SLOTS: Accessory["slot"][] = ["head", "neck", "body", "feet"];
const SLOT_LABELS: Record<Accessory["slot"], string> = {
  head: "Head", neck: "Neck", body: "Body", feet: "Feet",
};

// ─── Helper: Accessory overlay label ─────────────────────────────────────────

function WornBadges({ worn }: { worn: Set<AccessoryId> }) {
  const labels = ACCESSORIES.filter(a => worn.has(a.id)).map(a => a.label);
  if (!labels.length) return null;
  return (
    <div className="flex flex-wrap gap-1 justify-center mt-2 px-2">
      {labels.map(l => (
        <span key={l} className="text-[10px] px-2 py-0.5 rounded-full bg-white/70 dark:bg-black/40 text-gray-600 dark:text-gray-300 border border-white/60 font-semibold">
          {l}
        </span>
      ))}
    </div>
  );
}

// ─── SVG CAT — full body vector ───────────────────────────────────────────────

function CatSVG({ worn }: { worn: Set<AccessoryId> }) {
  const crown      = worn.has("crown");
  const bow        = worn.has("bow");
  const tophat     = worn.has("tophat");
  const sunnies    = worn.has("sunglasses");
  const necklace   = worn.has("necklace");
  const scarf      = worn.has("scarf");
  const jumper     = worn.has("jumper");
  const bag        = worn.has("bag");
  const socks      = worn.has("socks");
  const shoes      = worn.has("shoes");

  return (
    <svg viewBox="0 0 200 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cFur" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f5c97a" />
          <stop offset="100%" stopColor="#d48c2a" />
        </radialGradient>
        <radialGradient id="cBelly" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#fde9b8" />
          <stop offset="100%" stopColor="#f5c97a" />
        </radialGradient>
        <radialGradient id="cFace" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#fad485" />
          <stop offset="100%" stopColor="#e8a94a" />
        </radialGradient>
      </defs>

      {/* TAIL — curls up behind body */}
      <path d="M 145 255 Q 190 230 185 185 Q 180 150 162 162 Q 154 172 162 192 Q 170 212 148 232"
        fill="none" stroke="#d48c2a" strokeWidth="15" strokeLinecap="round" />
      <circle cx="163" cy="160" r="10" fill="#fde9b8" />

      {/* BACK LEGS */}
      <ellipse cx="72"  cy="295" rx="18" ry="30" fill="#d48c2a" />
      <ellipse cx="128" cy="295" rx="18" ry="30" fill="#d48c2a" />

      {/* BODY */}
      <ellipse cx="100" cy="240" rx="54" ry="65" fill="url(#cFur)" />
      {/* belly patch */}
      <ellipse cx="100" cy="248" rx="32" ry="46" fill="url(#cBelly)" />

      {/* JUMPER */}
      {jumper && (
        <g>
          <ellipse cx="100" cy="235" rx="54" ry="55" fill="#6366f1" opacity="0.9" />
          {/* ribbing */}
          {[-20, -8, 4, 16, 28].map((dx, i) => (
            <line key={i} x1={100 + dx} y1={198} x2={100 + dx - 1} y2={278}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          {/* collar */}
          <path d="M 55 210 Q 100 202 145 210" fill="none" stroke="#4f46e5" strokeWidth="9" strokeLinecap="round" />
        </g>
      )}

      {/* HANDBAG */}
      {bag && (
        <g transform="translate(150,225)">
          <rect x="0" y="0" width="34" height="28" rx="6" fill="#f43f5e" />
          <path d="M 6 0 Q 17 -14 28 0" fill="none" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
          <rect x="10" y="10" width="14" height="10" rx="3" fill="#fda4af" />
          <circle cx="17" cy="15" r="3" fill="#f43f5e" />
        </g>
      )}

      {/* FRONT LEGS */}
      <rect x="62"  y="278" width="26" height="50" rx="13" fill="url(#cFur)" />
      <rect x="112" y="278" width="26" height="50" rx="13" fill="url(#cFur)" />

      {/* SOCKS */}
      {socks && (
        <g>
          <rect x="62"  y="302" width="26" height="26" rx="11" fill="#10b981" />
          <line x1="62"  y1="310" x2="88"  y2="310" stroke="#34d399" strokeWidth="3" />
          <line x1="62"  y1="317" x2="88"  y2="317" stroke="#34d399" strokeWidth="3" />
          <rect x="112" y="302" width="26" height="26" rx="11" fill="#10b981" />
          <line x1="112" y1="310" x2="138" y2="310" stroke="#34d399" strokeWidth="3" />
          <line x1="112" y1="317" x2="138" y2="317" stroke="#34d399" strokeWidth="3" />
        </g>
      )}

      {/* SHOES */}
      {shoes && (
        <g>
          <ellipse cx="75"  cy="330" rx="18" ry="10" fill="#0ea5e9" />
          <rect    x="57"   y="318" width="36" height="14" rx="7" fill="#38bdf8" />
          <line x1="64" y1="320" x2="86" y2="320" stroke="white" strokeWidth="1.5" />
          <ellipse cx="125" cy="330" rx="18" ry="10" fill="#0ea5e9" />
          <rect    x="107"  y="318" width="36" height="14" rx="7" fill="#38bdf8" />
          <line x1="114" y1="320" x2="136" y2="320" stroke="white" strokeWidth="1.5" />
        </g>
      )}

      {/* PAWS (toes) — only if no shoes */}
      {!shoes && (
        <g fill="#d48c2a">
          <circle cx="68"  cy="329" r="5.5" />
          <circle cx="80"  cy="331" r="5.5" />
          <circle cx="118" cy="329" r="5.5" />
          <circle cx="130" cy="331" r="5.5" />
        </g>
      )}

      {/* NECK / SHOULDER */}
      <ellipse cx="100" cy="178" rx="30" ry="16" fill="#e8a94a" />

      {/* HEAD */}
      <ellipse cx="100" cy="140" rx="52" ry="50" fill="url(#cFace)" />

      {/* EARS — left */}
      <polygon points="56,112 46,68 82,100" fill="#d48c2a" />
      <polygon points="60,108 52,76 78,100" fill="#f9a8d4" />
      {/* EARS — right */}
      <polygon points="144,112 154,68 118,100" fill="#d48c2a" />
      <polygon points="140,108 148,76 122,100" fill="#f9a8d4" />

      {/* TOP HAT — drawn before crown so crown wins */}
      {tophat && (
        <g>
          <rect x="60" y="74" width="80" height="7" rx="3.5" fill="#1f2937" />
          <rect x="70" y="30" width="60" height="46" rx="6" fill="#1f2937" />
          <rect x="73" y="33" width="54" height="10" rx="4" fill="#374151" />
          <rect x="70" y="68" width="60" height="7" rx="3" fill="#374151" />
        </g>
      )}

      {/* CROWN */}
      {crown && (
        <g>
          <path d="M 66 96 L 66 72 L 84 84 L 100 64 L 116 84 L 134 72 L 134 96 Z" fill="#fbbf24" />
          <rect x="66" y="94" width="68" height="11" rx="4" fill="#f59e0b" />
          <circle cx="100" cy="70" r="6" fill="#ef4444" />
          <circle cx="78"  cy="82" r="5" fill="#3b82f6" />
          <circle cx="122" cy="82" r="5" fill="#3b82f6" />
        </g>
      )}

      {/* BOW — only if no hat or crown */}
      {bow && !tophat && !crown && (
        <g transform="translate(100,88)">
          <ellipse cx="-17" cy="0" rx="15" ry="10" fill="#ec4899" />
          <ellipse cx="17"  cy="0" rx="15" ry="10" fill="#ec4899" />
          <circle  cx="0"   cy="0" r="7"            fill="#f9a8d4" />
          <line x1="-2" y1="2" x2="-28" y2="10" stroke="#be185d" strokeWidth="1.5" />
          <line x1="2"  y1="2" x2="28"  y2="10" stroke="#be185d" strokeWidth="1.5" />
        </g>
      )}

      {/* FACE — sunglasses OR natural eyes */}
      {sunnies ? (
        <g>
          <ellipse cx="82" cy="142" rx="16" ry="12" fill="#1e293b" />
          <ellipse cx="118" cy="142" rx="16" ry="12" fill="#1e293b" />
          <line x1="98" y1="142" x2="102" y2="142" stroke="#475569" strokeWidth="3" />
          <line x1="66" y1="142" x2="60"  y2="140" stroke="#475569" strokeWidth="3" />
          <line x1="134" y1="142" x2="140" y2="140" stroke="#475569" strokeWidth="3" />
          <ellipse cx="76"  cy="138" rx="5" ry="3" fill="#334155" opacity="0.5" />
          <ellipse cx="112" cy="138" rx="5" ry="3" fill="#334155" opacity="0.5" />
        </g>
      ) : (
        <g>
          <ellipse cx="82"  cy="142" rx="14" ry="15" fill="#fef3c7" />
          <ellipse cx="118" cy="142" rx="14" ry="15" fill="#fef3c7" />
          <ellipse cx="82"  cy="143" rx="10" ry="12" fill="#16a34a" />
          <ellipse cx="118" cy="143" rx="10" ry="12" fill="#16a34a" />
          {/* slit pupils */}
          <ellipse cx="82"  cy="143" rx="4" ry="10" fill="#111827" />
          <ellipse cx="118" cy="143" rx="4" ry="10" fill="#111827" />
          <circle cx="85"  cy="137" r="3" fill="white" />
          <circle cx="121" cy="137" r="3" fill="white" />
        </g>
      )}

      {/* NOSE */}
      <path d="M 94 160 Q 100 155 106 160 L 103 165 Q 100 167 97 165 Z" fill="#ec4899" />

      {/* MOUTH */}
      <path d="M 100 165 Q 90 173 86 170" fill="none" stroke="#be185d" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 100 165 Q 110 173 114 170" fill="none" stroke="#be185d" strokeWidth="2.5" strokeLinecap="round" />

      {/* WHISKERS */}
      <line x1="50"  y1="158" x2="90"  y2="162" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50"  y1="165" x2="90"  y2="164" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50"  y1="172" x2="90"  y2="167" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="150" y1="158" x2="110" y2="162" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="150" y1="165" x2="110" y2="164" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="150" y1="172" x2="110" y2="167" stroke="#92400e" strokeWidth="1.5" strokeLinecap="round" />

      {/* FOREHEAD STRIPES */}
      <path d="M 88 106 Q 100 100 112 106" fill="none" stroke="#c97c1a" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M 86 114 Q 100 108 114 114" fill="none" stroke="#c97c1a" strokeWidth="2"   strokeLinecap="round" opacity="0.5" />

      {/* SCARF — drawn over neck */}
      {scarf && (
        <g>
          <path d="M 55 178 Q 100 170 145 178 Q 100 190 55 178 Z" fill="#dc2626" />
          <path d="M 55 178 Q 100 188 145 178" fill="none" stroke="#b91c1c" strokeWidth="2" />
          <rect x="62" y="178" width="15" height="32" rx="6" fill="#dc2626" />
          <line x1="62" y1="188" x2="77" y2="188" stroke="#b91c1c" strokeWidth="2" />
          <line x1="62" y1="195" x2="77" y2="195" stroke="#b91c1c" strokeWidth="2" />
        </g>
      )}

      {/* NECKLACE */}
      {necklace && !scarf && (
        <g>
          <path d="M 56 178 Q 100 192 144 178" fill="none" stroke="#9333ea" strokeWidth="3.5" strokeLinecap="round" />
          {[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9].map((t, i) => {
            const x = 56 + t * 88;
            const y = 178 + Math.sin(t * Math.PI) * 13;
            return <circle key={i} cx={x} cy={y} r="4.5" fill={i % 2 === 0 ? "#a855f7" : "#ec4899"} />;
          })}
        </g>
      )}
    </svg>
  );
}

// ─── SVG PUG — full body vector ───────────────────────────────────────────────

function PugSVG({ worn }: { worn: Set<AccessoryId> }) {
  const crown    = worn.has("crown");
  const bow      = worn.has("bow");
  const tophat   = worn.has("tophat");
  const sunnies  = worn.has("sunglasses");
  const necklace = worn.has("necklace");
  const scarf    = worn.has("scarf");
  const jumper   = worn.has("jumper");
  const bag      = worn.has("bag");
  const socks    = worn.has("socks");
  const shoes    = worn.has("shoes");

  return (
    <svg viewBox="0 0 200 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pFur" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#d4a76a" />
          <stop offset="100%" stopColor="#a0714f" />
        </radialGradient>
        <radialGradient id="pBelly" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#f5deb3" />
          <stop offset="100%" stopColor="#d4a76a" />
        </radialGradient>
        <radialGradient id="pFace" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#c8956c" />
          <stop offset="100%" stopColor="#9a6340" />
        </radialGradient>
        <radialGradient id="pMuzzle" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#e8c49a" />
          <stop offset="100%" stopColor="#c89060" />
        </radialGradient>
      </defs>

      {/* CURLY TAIL */}
      <path d="M 138 262 Q 168 248 162 226 Q 156 210 148 220 Q 144 230 150 238 Q 156 246 142 252"
        fill="none" stroke="#a0714f" strokeWidth="12" strokeLinecap="round" />
      <circle cx="148" cy="220" r="8" fill="#d4a76a" />

      {/* BACK LEGS */}
      <ellipse cx="70"  cy="292" rx="20" ry="28" fill="#a0714f" />
      <ellipse cx="130" cy="292" rx="20" ry="28" fill="#a0714f" />

      {/* BODY — wide and round like a pug */}
      <ellipse cx="100" cy="238" rx="58" ry="62" fill="url(#pFur)" />
      {/* belly */}
      <ellipse cx="100" cy="248" rx="36" ry="44" fill="url(#pBelly)" />

      {/* JUMPER */}
      {jumper && (
        <g>
          <ellipse cx="100" cy="232" rx="58" ry="54" fill="#6366f1" opacity="0.9" />
          {[-22,-10,2,14,26].map((dx, i) => (
            <line key={i} x1={100+dx} y1={194} x2={100+dx-1} y2={278}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <path d="M 50 208 Q 100 200 150 208" fill="none" stroke="#4f46e5" strokeWidth="10" strokeLinecap="round" />
        </g>
      )}

      {/* HANDBAG */}
      {bag && (
        <g transform="translate(152,222)">
          <rect x="0" y="0" width="34" height="28" rx="6" fill="#f43f5e" />
          <path d="M 6 0 Q 17 -14 28 0" fill="none" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
          <rect x="10" y="10" width="14" height="10" rx="3" fill="#fda4af" />
          <circle cx="17" cy="15" r="3" fill="#f43f5e" />
        </g>
      )}

      {/* FRONT LEGS — stubby pug legs */}
      <rect x="60"  y="278" width="28" height="44" rx="14" fill="url(#pFur)" />
      <rect x="112" y="278" width="28" height="44" rx="14" fill="url(#pFur)" />

      {/* SOCKS */}
      {socks && (
        <g>
          <rect x="60"  y="302" width="28" height="20" rx="10" fill="#10b981" />
          <line x1="60"  y1="310" x2="88"  y2="310" stroke="#34d399" strokeWidth="3" />
          <rect x="112" y="302" width="28" height="20" rx="10" fill="#10b981" />
          <line x1="112" y1="310" x2="140" y2="310" stroke="#34d399" strokeWidth="3" />
        </g>
      )}

      {/* SHOES */}
      {shoes && (
        <g>
          <ellipse cx="74"  cy="325" rx="19" ry="10" fill="#0ea5e9" />
          <rect    x="55"   y="313" width="38" height="14" rx="7" fill="#38bdf8" />
          <line x1="62" y1="315" x2="86" y2="315" stroke="white" strokeWidth="1.5" />
          <ellipse cx="126" cy="325" rx="19" ry="10" fill="#0ea5e9" />
          <rect    x="107"  y="313" width="38" height="14" rx="7" fill="#38bdf8" />
          <line x1="114" y1="315" x2="138" y2="315" stroke="white" strokeWidth="1.5" />
        </g>
      )}

      {/* PAWS */}
      {!shoes && (
        <g fill="#a0714f">
          <circle cx="66"  cy="323" r="6" />
          <circle cx="80"  cy="325" r="6" />
          <circle cx="118" cy="323" r="6" />
          <circle cx="132" cy="325" r="6" />
        </g>
      )}

      {/* NECK */}
      <ellipse cx="100" cy="180" rx="34" ry="18" fill="#b8864e" />

      {/* HEAD — big and round */}
      <ellipse cx="100" cy="142" rx="56" ry="52" fill="url(#pFace)" />

      {/* WRINKLES on forehead */}
      <path d="M 82 118 Q 100 112 118 118" fill="none" stroke="#7a4f2a" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <path d="M 84 126 Q 100 120 116 126" fill="none" stroke="#7a4f2a" strokeWidth="2"   strokeLinecap="round" opacity="0.4" />

      {/* EARS — floppy pug ears */}
      <path d="M 52 122 Q 38 100 46 82 Q 56 72 68 88 Q 72 105 62 122 Z" fill="#7a4f2a" />
      <path d="M 148 122 Q 162 100 154 82 Q 144 72 132 88 Q 128 105 138 122 Z" fill="#7a4f2a" />

      {/* TOP HAT */}
      {tophat && (
        <g>
          <rect x="56" y="76" width="88" height="8" rx="4" fill="#1f2937" />
          <rect x="66" y="32" width="68" height="46" rx="6" fill="#1f2937" />
          <rect x="69" y="35" width="62" height="11" rx="4" fill="#374151" />
        </g>
      )}

      {/* CROWN */}
      {crown && (
        <g>
          <path d="M 62 100 L 62 74 L 82 88 L 100 66 L 118 88 L 138 74 L 138 100 Z" fill="#fbbf24" />
          <rect x="62" y="98" width="76" height="12" rx="4" fill="#f59e0b" />
          <circle cx="100" cy="72" r="7"  fill="#ef4444" />
          <circle cx="76"  cy="86" r="5.5" fill="#3b82f6" />
          <circle cx="124" cy="86" r="5.5" fill="#3b82f6" />
        </g>
      )}

      {/* BOW */}
      {bow && !tophat && !crown && (
        <g transform="translate(100,90)">
          <ellipse cx="-18" cy="0" rx="16" ry="10" fill="#ec4899" />
          <ellipse cx="18"  cy="0" rx="16" ry="10" fill="#ec4899" />
          <circle  cx="0"   cy="0" r="7"            fill="#f9a8d4" />
        </g>
      )}

      {/* MUZZLE — big pug muzzle */}
      <ellipse cx="100" cy="160" rx="30" ry="22" fill="url(#pMuzzle)" />

      {/* NOSE — flat pug nose */}
      <ellipse cx="100" cy="150" rx="14" ry="9" fill="#3d1f0a" />
      <ellipse cx="96"  cy="148" rx="5"  ry="3" fill="#5a2e10" opacity="0.6" />
      <ellipse cx="104" cy="148" rx="5"  ry="3" fill="#5a2e10" opacity="0.6" />

      {/* MOUTH */}
      <path d="M 100 158 Q 88 168 84 165" fill="none" stroke="#7a4f2a" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 100 158 Q 112 168 116 165" fill="none" stroke="#7a4f2a" strokeWidth="2.5" strokeLinecap="round" />

      {/* EYES */}
      {sunnies ? (
        <g>
          <ellipse cx="82" cy="136" rx="18" ry="13" fill="#1e293b" />
          <ellipse cx="118" cy="136" rx="18" ry="13" fill="#1e293b" />
          <line x1="100" y1="136" x2="100" y2="136" stroke="#475569" strokeWidth="3" />
          <line x1="64"  y1="136" x2="58"  y2="134" stroke="#475569" strokeWidth="3" />
          <line x1="136" y1="136" x2="142" y2="134" stroke="#475569" strokeWidth="3" />
          <ellipse cx="76"  cy="132" rx="5" ry="3" fill="#334155" opacity="0.5" />
          <ellipse cx="112" cy="132" rx="5" ry="3" fill="#334155" opacity="0.5" />
        </g>
      ) : (
        <g>
          {/* big round pug eyes */}
          <circle cx="82"  cy="136" r="17" fill="#1a0a00" />
          <circle cx="118" cy="136" r="17" fill="#1a0a00" />
          <circle cx="82"  cy="136" r="14" fill="#3d1f0a" />
          <circle cx="118" cy="136" r="14" fill="#3d1f0a" />
          <circle cx="86"  cy="130" r="5"  fill="white" />
          <circle cx="122" cy="130" r="5"  fill="white" />
          <circle cx="88"  cy="131" r="2"  fill="#1a0a00" />
          <circle cx="124" cy="131" r="2"  fill="#1a0a00" />
        </g>
      )}

      {/* SCARF */}
      {scarf && (
        <g>
          <path d="M 52 182 Q 100 174 148 182 Q 100 194 52 182 Z" fill="#dc2626" />
          <rect x="64" y="182" width="16" height="32" rx="6" fill="#dc2626" />
          <line x1="64" y1="192" x2="80" y2="192" stroke="#b91c1c" strokeWidth="2" />
          <line x1="64" y1="199" x2="80" y2="199" stroke="#b91c1c" strokeWidth="2" />
        </g>
      )}

      {/* NECKLACE */}
      {necklace && !scarf && (
        <g>
          <path d="M 54 182 Q 100 196 146 182" fill="none" stroke="#9333ea" strokeWidth="3.5" strokeLinecap="round" />
          {[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9].map((t, i) => {
            const x = 54 + t * 92;
            const y = 182 + Math.sin(t * Math.PI) * 13;
            return <circle key={i} cx={x} cy={y} r="4.5" fill={i % 2 === 0 ? "#a855f7" : "#ec4899"} />;
          })}
        </g>
      )}
    </svg>
  );
}

// ─── SVG BUDGIE — full body vector ───────────────────────────────────────────

function BudgieSVG({ worn }: { worn: Set<AccessoryId> }) {
  const crown    = worn.has("crown");
  const bow      = worn.has("bow");
  const tophat   = worn.has("tophat");
  const sunnies  = worn.has("sunglasses");
  const necklace = worn.has("necklace");
  const scarf    = worn.has("scarf");
  const jumper   = worn.has("jumper");
  const bag      = worn.has("bag");
  const socks    = worn.has("socks");
  const shoes    = worn.has("shoes");

  return (
    <svg viewBox="0 0 200 360" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bBody" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        <radialGradient id="bHead" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#34d399" />
        </radialGradient>
        <radialGradient id="bWing" cx="30%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>
        <radialGradient id="bBelly" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </radialGradient>
      </defs>

      {/* TAIL FEATHERS */}
      <path d="M 82 282 Q 70 318 65 338"  fill="none" stroke="#047857" strokeWidth="10" strokeLinecap="round" />
      <path d="M 100 285 Q 100 322 100 342" fill="none" stroke="#059669" strokeWidth="12" strokeLinecap="round" />
      <path d="M 118 282 Q 130 318 135 338" fill="none" stroke="#047857" strokeWidth="10" strokeLinecap="round" />

      {/* BODY */}
      <ellipse cx="100" cy="218" rx="50" ry="68" fill="url(#bBody)" />
      {/* belly */}
      <ellipse cx="100" cy="228" rx="30" ry="48" fill="url(#bBelly)" />

      {/* WING LEFT */}
      <path d="M 50 175 Q 26 210 30 268 Q 42 288 58 270 Q 66 245 62 195 Z" fill="url(#bWing)" />
      <path d="M 50 180 Q 32 215 34 258" fill="none" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 56 178 Q 38 212 40 254" fill="none" stroke="#047857" strokeWidth="2"   strokeLinecap="round" />

      {/* WING RIGHT */}
      <path d="M 150 175 Q 174 210 170 268 Q 158 288 142 270 Q 134 245 138 195 Z" fill="url(#bWing)" />
      <path d="M 150 180 Q 168 215 166 258" fill="none" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 144 178 Q 162 212 160 254" fill="none" stroke="#047857" strokeWidth="2"   strokeLinecap="round" />

      {/* JUMPER */}
      {jumper && (
        <g>
          <ellipse cx="100" cy="215" rx="50" ry="56" fill="#6366f1" opacity="0.9" />
          {[-18,-6,6,18].map((dx, i) => (
            <line key={i} x1={100+dx} y1={186} x2={100+dx} y2={268}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <path d="M 56 196 Q 100 188 144 196" fill="none" stroke="#4f46e5" strokeWidth="9" strokeLinecap="round" />
        </g>
      )}

      {/* HANDBAG */}
      {bag && (
        <g transform="translate(146,212)">
          <rect x="0" y="0" width="32" height="26" rx="5" fill="#f43f5e" />
          <path d="M 5 0 Q 16 -13 27 0" fill="none" stroke="#fb7185" strokeWidth="3.5" strokeLinecap="round" />
          <rect x="9" y="9" width="14" height="9" rx="3" fill="#fda4af" />
          <circle cx="16" cy="13" r="2.5" fill="#f43f5e" />
        </g>
      )}

      {/* PERCH */}
      <rect x="52" y="290" width="96" height="11" rx="5.5" fill="#92400e" />

      {/* FEET */}
      <line x1="76"  y1="290" x2="76"  y2="306" stroke="#064e3b" strokeWidth="5" strokeLinecap="round" />
      <line x1="68"  y1="306" x2="84"  y2="306" stroke="#064e3b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="63"  y1="304" x2="68"  y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
      <line x1="84"  y1="306" x2="89"  y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />

      <line x1="124" y1="290" x2="124" y2="306" stroke="#064e3b" strokeWidth="5" strokeLinecap="round" />
      <line x1="116" y1="306" x2="132" y2="306" stroke="#064e3b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="111" y1="304" x2="116" y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
      <line x1="132" y1="306" x2="137" y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />

      {/* SOCKS */}
      {socks && (
        <g>
          <rect x="66" y="292" width="20" height="12" rx="5" fill="#10b981" />
          <rect x="114" y="292" width="20" height="12" rx="5" fill="#10b981" />
        </g>
      )}

      {/* SHOES */}
      {shoes && (
        <g>
          <ellipse cx="76"  cy="306" rx="14" ry="7" fill="#0ea5e9" />
          <ellipse cx="124" cy="306" rx="14" ry="7" fill="#0ea5e9" />
        </g>
      )}

      {/* HEAD */}
      <ellipse cx="100" cy="130" rx="46" ry="44" fill="url(#bHead)" />

      {/* CHEEK SPOTS */}
      <ellipse cx="74"  cy="146" rx="11" ry="9" fill="#7c3aed" opacity="0.55" />
      <ellipse cx="126" cy="146" rx="11" ry="9" fill="#7c3aed" opacity="0.55" />

      {/* CREST FEATHERS */}
      <path d="M 86 90 Q 82 70 78 55"  fill="none" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
      <path d="M 100 88 Q 100 66 100 50" fill="none" stroke="#10b981" strokeWidth="7" strokeLinecap="round" />
      <path d="M 114 90 Q 118 70 122 55" fill="none" stroke="#059669" strokeWidth="6" strokeLinecap="round" />
      <circle cx="78"  cy="53" r="6" fill="#34d399" />
      <circle cx="100" cy="48" r="7" fill="#6ee7b7" />
      <circle cx="122" cy="53" r="6" fill="#34d399" />

      {/* TOP HAT */}
      {tophat && (
        <g>
          <rect x="58" y="78" width="84" height="8" rx="4" fill="#1f2937" />
          <rect x="68" y="34" width="64" height="46" rx="6" fill="#1f2937" />
          <rect x="71" y="37" width="58" height="11" rx="4" fill="#374151" />
        </g>
      )}

      {/* CROWN */}
      {crown && (
        <g>
          <path d="M 64 100 L 64 76 L 82 90 L 100 70 L 118 90 L 136 76 L 136 100 Z" fill="#fbbf24" />
          <rect x="64" y="98" width="72" height="11" rx="4" fill="#f59e0b" />
          <circle cx="100" cy="76" r="6"  fill="#ef4444" />
          <circle cx="78"  cy="88" r="5"  fill="#3b82f6" />
          <circle cx="122" cy="88" r="5"  fill="#3b82f6" />
        </g>
      )}

      {/* BOW */}
      {bow && !tophat && !crown && (
        <g transform="translate(100,90)">
          <ellipse cx="-16" cy="0" rx="14" ry="9" fill="#ec4899" />
          <ellipse cx="16"  cy="0" rx="14" ry="9" fill="#ec4899" />
          <circle  cx="0"   cy="0" r="6"           fill="#f9a8d4" />
        </g>
      )}

      {/* EYES */}
      {sunnies ? (
        <g>
          <ellipse cx="84"  cy="130" rx="15" ry="11" fill="#1e293b" />
          <ellipse cx="116" cy="130" rx="15" ry="11" fill="#1e293b" />
          <line x1="99"  y1="130" x2="101" y2="130" stroke="#475569" strokeWidth="3" />
          <line x1="69"  y1="130" x2="63"  y2="128" stroke="#475569" strokeWidth="3" />
          <line x1="131" y1="130" x2="137" y2="128" stroke="#475569" strokeWidth="3" />
        </g>
      ) : (
        <g>
          <circle cx="84"  cy="130" r="12" fill="white" />
          <circle cx="116" cy="130" r="12" fill="white" />
          <circle cx="84"  cy="131" r="8"  fill="#1e293b" />
          <circle cx="116" cy="131" r="8"  fill="#1e293b" />
          <circle cx="87"  cy="127" r="3"  fill="white" />
          <circle cx="119" cy="127" r="3"  fill="white" />
        </g>
      )}

      {/* BEAK */}
      <path d="M 93 146 L 100 154 L 107 146 Q 100 138 93 146 Z" fill="#fbbf24" />
      <line x1="93" y1="146" x2="107" y2="146" stroke="#d97706" strokeWidth="1.5" />

      {/* HEAD STRIPES */}
      <path d="M 82 100 Q 100 95 118 100" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <path d="M 80 108 Q 100 103 120 108" fill="none" stroke="#059669" strokeWidth="2"   strokeLinecap="round" opacity="0.35" />

      {/* SCARF */}
      {scarf && (
        <g>
          <path d="M 56 170 Q 100 162 144 170 Q 100 182 56 170 Z" fill="#dc2626" />
          <rect x="62" y="170" width="15" height="30" rx="6" fill="#dc2626" />
          <line x1="62" y1="180" x2="77" y2="180" stroke="#b91c1c" strokeWidth="2" />
          <line x1="62" y1="187" x2="77" y2="187" stroke="#b91c1c" strokeWidth="2" />
        </g>
      )}

      {/* NECKLACE */}
      {necklace && !scarf && (
        <g>
          <path d="M 58 170 Q 100 184 142 170" fill="none" stroke="#9333ea" strokeWidth="3.5" strokeLinecap="round" />
          {[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9].map((t, i) => {
            const x = 58 + t * 84;
            const y = 170 + Math.sin(t * Math.PI) * 12;
            return <circle key={i} cx={x} cy={y} r="4" fill={i % 2 === 0 ? "#a855f7" : "#ec4899"} />;
          })}
        </g>
      )}
    </svg>
  );
}

// ─── Pet card on selection screen ────────────────────────────────────────────

interface PetDef {
  id: PetId;
  name: string;
  description: string;
  bg: string;
}

const PET_DEFS: PetDef[] = [
  { id: "budgie", name: "Budgie",  description: "Colourful & chirpy!",    bg: "from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900" },
  { id: "cat",    name: "Cat",     description: "Purrfectly sassy!",      bg: "from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900" },
  { id: "pug",    name: "Pug",     description: "Wrinkly & adorable!",    bg: "from-yellow-100 to-stone-100 dark:from-yellow-900 dark:to-stone-900" },
];

function PetPreview({ id, size = 120 }: { id: PetId; size?: number }) {
  const worn = new Set<AccessoryId>();
  const style = { width: size, height: size };
  if (id === "cat")    return <div style={style}><CatSVG    worn={worn} /></div>;
  if (id === "pug")    return <div style={style}><PugSVG    worn={worn} /></div>;
  if (id === "budgie") return <div style={style}><BudgieSVG worn={worn} /></div>;
  return null;
}

// ─── Main component ───────────────────────────────────────────────────────────

export function PetDressUp() {
  const [chosenPet, setChosenPet] = useState<PetId | null>(null);
  const [worn, setWorn] = useState<Set<AccessoryId>>(new Set());

  function toggleAccessory(id: AccessoryId) {
    setWorn(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }

  // ── Pet selection ──────────────────────────────────────────────────────────
  if (!chosenPet) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-6 p-4
                      bg-gradient-to-br from-pink-50 to-purple-50
                      dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-gray-800 dark:text-gray-100">
            Choose Your Pet!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Pick a pet to dress up in style ✨
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {PET_DEFS.map(pet => (
            <button
              key={pet.id}
              onClick={() => { setChosenPet(pet.id); setWorn(new Set()); }}
              className={`
                flex flex-col items-center gap-3 p-5 rounded-3xl
                bg-gradient-to-br ${pet.bg}
                border-4 border-white/60 dark:border-white/10
                shadow-xl hover:scale-105 active:scale-95
                transition-transform cursor-pointer
                min-w-[130px]
              `}
            >
              <PetPreview id={pet.id} size={120} />
              <span className="font-display text-xl font-bold text-gray-700 dark:text-gray-100">
                {pet.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                {pet.description}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const petDef = PET_DEFS.find(p => p.id === chosenPet)!;

  // ── Dress-up screen ────────────────────────────────────────────────────────
  return (
    <div className={`
      flex flex-col lg:flex-row h-full overflow-hidden
      bg-gradient-to-br from-pink-50 to-purple-50
      dark:from-gray-900 dark:to-gray-800
    `}>

      {/* PET DISPLAY PANEL */}
      <div className={`
        flex flex-col items-center justify-center gap-3
        p-4 shrink-0
        lg:w-[280px] lg:border-r lg:border-white/30 dark:lg:border-white/10
      `}>
        <div className={`
          w-full rounded-3xl p-4
          bg-gradient-to-br ${petDef.bg}
          border-4 border-white/60 dark:border-white/10
          shadow-xl flex flex-col items-center
        `}>
          {/* Vector pet — large */}
          <div className="w-full" style={{ maxWidth: 200, maxHeight: 260, aspectRatio: "200/260" }}>
            {chosenPet === "cat"    && <CatSVG    worn={worn} />}
            {chosenPet === "pug"    && <PugSVG    worn={worn} />}
            {chosenPet === "budgie" && <BudgieSVG worn={worn} />}
          </div>

          <p className="font-display text-lg font-bold text-gray-700 dark:text-gray-100 mt-2">
            {petDef.name}
          </p>
          <WornBadges worn={worn} />
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 w-full">
          <button
            onClick={() => setChosenPet(null)}
            className="flex-1 py-2.5 rounded-xl bg-white/80 dark:bg-gray-700
                       border border-gray-200 dark:border-gray-600
                       text-gray-600 dark:text-gray-300 text-sm font-semibold
                       hover:bg-white active:scale-95 transition-all shadow
                       min-h-[44px]"
          >
            Change Pet
          </button>
          <button
            onClick={() => setWorn(new Set())}
            disabled={worn.size === 0}
            className="flex-1 py-2.5 rounded-xl bg-white/80 dark:bg-gray-700
                       border border-gray-200 dark:border-gray-600
                       text-gray-600 dark:text-gray-300 text-sm font-semibold
                       hover:bg-white active:scale-95 transition-all shadow
                       disabled:opacity-40 disabled:cursor-not-allowed
                       min-h-[44px]"
          >
            Remove All
          </button>
        </div>
      </div>

      {/* ACCESSORIES PANEL */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="font-display text-xl font-bold text-gray-700 dark:text-gray-200 mb-3 text-center">
          Accessories
        </h3>

        {SLOTS.map(slot => {
          const items = ACCESSORIES.filter(a => a.slot === slot);
          return (
            <div key={slot} className="mb-5">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 pl-1">
                {SLOT_LABELS[slot]}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(acc => {
                  const on = worn.has(acc.id);
                  return (
                    <button
                      key={acc.id}
                      onClick={() => toggleAccessory(acc.id)}
                      aria-pressed={on}
                      aria-label={acc.label}
                      className={`
                        flex flex-col items-center gap-1 px-3 py-2 rounded-2xl border-2
                        transition-all cursor-pointer
                        min-w-[72px] min-h-[72px] justify-center
                        active:scale-95
                        ${on
                          ? `${acc.color} shadow-md scale-105 ring-2 ring-offset-1 ring-pink-400`
                          : "bg-white/70 dark:bg-gray-800/70 border-gray-200 dark:border-gray-600 hover:scale-105 hover:shadow"
                        }
                      `}
                    >
                      <span className="text-3xl leading-none">{acc.emoji}</span>
                      <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 leading-tight text-center">
                        {acc.label}
                      </span>
                      {on && (
                        <span className="text-[9px] font-bold text-pink-500 uppercase tracking-wide">ON</span>
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
