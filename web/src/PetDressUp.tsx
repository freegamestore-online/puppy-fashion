import { useState } from "react";
import type { AccessoryId, Accessory } from "./types";
import { PugSVG } from "./PugSVG";

// ─── Data ─────────────────────────────────────────────────────────────────────

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

      {/* TAIL */}
      <path d="M 145 255 Q 190 230 185 185 Q 180 150 162 162 Q 154 172 162 192 Q 170 212 148 232"
        fill="none" stroke="#d48c2a" strokeWidth="15" strokeLinecap="round" />
      <circle cx="163" cy="160" r="10" fill="#fde9b8" />

      {/* BACK LEGS */}
      <ellipse cx="72"  cy="295" rx="18" ry="30" fill="#d48c2a" />
      <ellipse cx="128" cy="295" rx="18" ry="30" fill="#d48c2a" />

      {/* BODY */}
      <ellipse cx="100" cy="240" rx="54" ry="65" fill="url(#cFur)" />
      <ellipse cx="100" cy="248" rx="32" ry="46" fill="url(#cBelly)" />

      {/* JUMPER */}
      {jumper && (
        <g>
          <ellipse cx="100" cy="235" rx="54" ry="55" fill="#6366f1" opacity="0.9" />
          {[-20, -8, 4, 16, 28].map((dx, i) => (
            <line key={i} x1={100 + dx} y1={198} x2={100 + dx - 1} y2={278}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
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

      {/* PAWS */}
      {!shoes && (
        <g fill="#d48c2a">
          <circle cx="68"  cy="329" r="5.5" />
          <circle cx="80"  cy="331" r="5.5" />
          <circle cx="118" cy="329" r="5.5" />
          <circle cx="130" cy="331" r="5.5" />
        </g>
      )}

      {/* NECK */}
      <ellipse cx="100" cy="178" rx="30" ry="16" fill="#e8a94a" />

      {/* HEAD */}
      <ellipse cx="100" cy="140" rx="52" ry="50" fill="url(#cFace)" />

      {/* EARS left */}
      <polygon points="56,112 46,68 82,100" fill="#d48c2a" />
      <polygon points="60,108 52,76 78,100" fill="#f9a8d4" />
      {/* EARS right */}
      <polygon points="144,112 154,68 118,100" fill="#d48c2a" />
      <polygon points="140,108 148,76 122,100" fill="#f9a8d4" />

      {/* TOP HAT */}
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

      {/* BOW */}
      {bow && !tophat && !crown && (
        <g transform="translate(100,88)">
          <ellipse cx="-17" cy="0" rx="15" ry="10" fill="#ec4899" />
          <ellipse cx="17"  cy="0" rx="15" ry="10" fill="#ec4899" />
          <circle  cx="0"   cy="0" r="7"            fill="#f9a8d4" />
          <line x1="-2" y1="2" x2="-28" y2="10" stroke="#be185d" strokeWidth="1.5" />
          <line x1="2"  y1="2" x2="28"  y2="10" stroke="#be185d" strokeWidth="1.5" />
        </g>
      )}

      {/* EYES */}
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
          <ellipse cx="82"  cy="143" rx="4"  ry="10" fill="#111827" />
          <ellipse cx="118" cy="143" rx="4"  ry="10" fill="#111827" />
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

      {/* SCARF */}
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
          <ellipse cx="100" cy="214" rx="50" ry="56" fill="#6366f1" opacity="0.9" />
          {[-20,-8,4,16,28].map((dx, i) => (
            <line key={i} x1={100+dx} y1={178} x2={100+dx-1} y2={262}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <path d="M 56 192 Q 100 184 144 192" fill="none" stroke="#4f46e5" strokeWidth="9" strokeLinecap="round" />
        </g>
      )}

      {/* HANDBAG */}
      {bag && (
        <g transform="translate(148,212)">
          <rect x="0" y="0" width="32" height="26" rx="6" fill="#f43f5e" />
          <path d="M 5 0 Q 16 -13 27 0" fill="none" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
          <rect x="9" y="9" width="14" height="9" rx="3" fill="#fda4af" />
          <circle cx="16" cy="13" r="3" fill="#f43f5e" />
        </g>
      )}

      {/* PERCH */}
      <rect x="52" y="290" width="96" height="11" rx="5.5" fill="#92400e" />

      {/* FEET */}
      <line x1="76" y1="290" x2="76" y2="306" stroke="#064e3b" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="68" y1="306" x2="84" y2="306" stroke="#064e3b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="64" y1="304" x2="68" y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
      <line x1="84" y1="306" x2="88" y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
      <line x1="124" y1="290" x2="124" y2="306" stroke="#064e3b" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="116" y1="306" x2="132" y2="306" stroke="#064e3b" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="112" y1="304" x2="116" y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />
      <line x1="132" y1="306" x2="136" y2="310" stroke="#064e3b" strokeWidth="3" strokeLinecap="round" />

      {/* SOCKS */}
      {socks && (
        <g>
          <rect x="66" y="292" width="20" height="14" rx="6" fill="#10b981" />
          <rect x="114" y="292" width="20" height="14" rx="6" fill="#10b981" />
        </g>
      )}
      {shoes && (
        <g>
          <ellipse cx="76"  cy="308" rx="14" ry="7" fill="#0ea5e9" />
          <ellipse cx="124" cy="308" rx="14" ry="7" fill="#0ea5e9" />
        </g>
      )}

      {/* HEAD */}
      <ellipse cx="100" cy="128" rx="46" ry="44" fill="url(#bHead)" />

      {/* CHEEK SPOTS */}
      <ellipse cx="74"  cy="144" rx="11" ry="9" fill="#6d28d9" opacity="0.55" />
      <ellipse cx="126" cy="144" rx="11" ry="9" fill="#6d28d9" opacity="0.55" />

      {/* CROWN */}
      {crown && (
        <g>
          <path d="M 66 96 L 66 72 L 84 86 L 100 66 L 116 86 L 134 72 L 134 96 Z" fill="#fbbf24" />
          <rect x="66" y="94" width="68" height="11" rx="4" fill="#f59e0b" />
          <circle cx="100" cy="72" r="6" fill="#ef4444" />
          <circle cx="78"  cy="84" r="5" fill="#3b82f6" />
          <circle cx="122" cy="84" r="5" fill="#3b82f6" />
        </g>
      )}

      {/* TOP HAT */}
      {tophat && (
        <g>
          <rect x="58" y="76" width="84" height="8" rx="4" fill="#1f2937" />
          <rect x="68" y="32" width="64" height="46" rx="6" fill="#1f2937" />
          <rect x="71" y="35" width="58" height="11" rx="4" fill="#374151" />
        </g>
      )}

      {/* BOW */}
      {bow && !tophat && !crown && (
        <g transform="translate(100,88)">
          <ellipse cx="-15" cy="0" rx="13" ry="8" fill="#ec4899" />
          <ellipse cx="15"  cy="0" rx="13" ry="8" fill="#ec4899" />
          <circle  cx="0"   cy="0" r="6"           fill="#f9a8d4" />
        </g>
      )}

      {/* CREST FEATHERS */}
      <path d="M 88 90 Q 84 70 80 56"  fill="none" stroke="#059669" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M 100 88 Q 100 66 100 50" fill="none" stroke="#10b981" strokeWidth="7"   strokeLinecap="round" />
      <path d="M 112 90 Q 116 70 120 56" fill="none" stroke="#059669" strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="80"  cy="54" r="5.5" fill="#34d399" />
      <circle cx="100" cy="48" r="7"   fill="#6ee7b7" />
      <circle cx="120" cy="54" r="5.5" fill="#34d399" />

      {/* EYES */}
      {sunnies ? (
        <g>
          <ellipse cx="84"  cy="130" rx="15" ry="11" fill="#1e293b" />
          <ellipse cx="116" cy="130" rx="15" ry="11" fill="#1e293b" />
          <line x1="99" y1="130" x2="101" y2="130" stroke="#475569" strokeWidth="3" />
          <line x1="69" y1="130" x2="63"  y2="128" stroke="#475569" strokeWidth="2.5" />
          <line x1="131" y1="130" x2="137" y2="128" stroke="#475569" strokeWidth="2.5" />
        </g>
      ) : (
        <g>
          <ellipse cx="84"  cy="130" rx="12" ry="13" fill="white" />
          <ellipse cx="116" cy="130" rx="12" ry="13" fill="white" />
          <ellipse cx="84"  cy="131" rx="8"  ry="10" fill="#1e293b" />
          <ellipse cx="116" cy="131" rx="8"  ry="10" fill="#1e293b" />
          <circle cx="87"  cy="127" r="2.5" fill="white" />
          <circle cx="119" cy="127" r="2.5" fill="white" />
        </g>
      )}

      {/* BEAK */}
      <path d="M 93 144 L 100 151 L 107 144 Q 100 137 93 144 Z" fill="#fbbf24" />
      <line x1="93" y1="144" x2="107" y2="144" stroke="#f59e0b" strokeWidth="1.5" />

      {/* SCARF */}
      {scarf && (
        <g>
          <path d="M 58 166 Q 100 158 142 166 Q 100 178 58 166 Z" fill="#dc2626" />
          <rect x="62" y="166" width="15" height="28" rx="6" fill="#dc2626" />
          <line x1="62" y1="176" x2="77" y2="176" stroke="#b91c1c" strokeWidth="2" />
          <line x1="62" y1="183" x2="77" y2="183" stroke="#b91c1c" strokeWidth="2" />
        </g>
      )}

      {/* NECKLACE */}
      {necklace && !scarf && (
        <g>
          <path d="M 60 166 Q 100 180 140 166" fill="none" stroke="#9333ea" strokeWidth="3.5" strokeLinecap="round" />
          {[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9].map((t, i) => {
            const x = 60 + t * 80;
            const y = 166 + Math.sin(t * Math.PI) * 12;
            return <circle key={i} cx={x} cy={y} r="4" fill={i % 2 === 0 ? "#a855f7" : "#ec4899"} />;
          })}
        </g>
      )}

      {/* HEAD STRIPE PATTERN */}
      <path d="M 80 100 Q 100 94 120 100" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
      <path d="M 78 108 Q 100 102 122 108" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

// ─── Pet selector data ────────────────────────────────────────────────────────

type PetId = "budgie" | "cat" | "pug";

interface PetDef {
  id: PetId;
  name: string;
  description: string;
  bg: string;
  SVG: React.FC<{ worn: Set<AccessoryId> }>;
}

const PETS: PetDef[] = [
  {
    id: "budgie",
    name: "Budgie",
    description: "A colourful little chatterbox!",
    bg: "from-emerald-100 to-sky-100 dark:from-emerald-900 dark:to-sky-900",
    SVG: BudgieSVG,
  },
  {
    id: "cat",
    name: "Cat",
    description: "Purrfectly stylish and sassy!",
    bg: "from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900",
    SVG: CatSVG,
  },
  {
    id: "pug",
    name: "Pug",
    description: "Wrinkly, wiggly and adorable!",
    bg: "from-yellow-100 to-stone-100 dark:from-yellow-900 dark:to-stone-900",
    SVG: PugSVG,
  },
];

// ─── Accessory button ─────────────────────────────────────────────────────────

function AccBtn({ acc, on, onToggle }: { acc: Accessory; on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-pressed={on}
      aria-label={acc.label}
      className={`
        flex flex-col items-center gap-1 px-3 py-2 rounded-2xl border-2 transition-all
        min-w-[68px] min-h-[68px] justify-center cursor-pointer
        ${on
          ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-900 scale-105 shadow-md ring-2 ring-offset-1 ring-emerald-400"
          : `${acc.color} hover:scale-105 hover:shadow active:scale-95`
        }
      `}
    >
      <span className="text-3xl leading-none">{acc.emoji}</span>
      <span className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 leading-tight text-center">
        {acc.label}
      </span>
      {on && <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-300 uppercase tracking-wide">ON</span>}
    </button>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function PetDressUp() {
  const [pet, setPet] = useState<PetDef | null>(null);
  const [worn, setWorn] = useState<Set<AccessoryId>>(new Set());

  function toggle(id: AccessoryId) {
    setWorn(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  // ── Pet selection ──
  if (!pet) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-6 p-4 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100" style={{ fontFamily: "Fraunces, serif" }}>
          Choose Your Pet!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">Pick a pet to dress up in style ✨</p>
        <div className="flex flex-wrap gap-5 justify-center">
          {PETS.map(p => (
            <button
              key={p.id}
              onClick={() => { setPet(p); setWorn(new Set()); }}
              className={`flex flex-col items-center gap-2 p-4 rounded-3xl bg-gradient-to-br ${p.bg} shadow-lg border-4 border-white/60 hover:scale-105 active:scale-95 transition-transform cursor-pointer`}
              style={{ minWidth: 130, minHeight: 200 }}
            >
              <div className="w-24 h-28 flex items-center justify-center">
                <p.SVG worn={new Set()} />
              </div>
              <span className="text-lg font-bold text-gray-700 dark:text-gray-200" style={{ fontFamily: "Fraunces, serif" }}>
                {p.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center leading-tight">{p.description}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Dress-up ──
  const PetSVG = pet.SVG;

  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">

      {/* Pet preview */}
      <div className="flex flex-col items-center gap-3 p-4 lg:w-[300px] shrink-0">
        <div className={`w-full rounded-3xl bg-gradient-to-br ${pet.bg} shadow-xl border-4 border-white/50 flex items-center justify-center`}
          style={{ height: 280 }}>
          <div style={{ width: 200, height: 260 }}>
            <PetSVG worn={worn} />
          </div>
        </div>

        <div className="flex gap-2 w-full">
          <button onClick={() => setPet(null)}
            className="flex-1 py-2 rounded-xl bg-white/80 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-white active:scale-95 transition-all shadow min-h-[44px]">
            ← Change Pet
          </button>
          <button onClick={() => setWorn(new Set())}
            className="flex-1 py-2 rounded-xl bg-white/80 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-white active:scale-95 transition-all shadow min-h-[44px]">
            Remove All
          </button>
        </div>
      </div>

      {/* Accessories panel */}
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-3 text-center" style={{ fontFamily: "Fraunces, serif" }}>
          Accessories
        </h3>
        {SLOTS.map(slot => (
          <div key={slot} className="mb-4">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 pl-1">
              {SLOT_LABELS[slot]}
            </div>
            <div className="flex flex-wrap gap-2">
              {ACCESSORIES.filter(a => a.slot === slot).map(acc => (
                <AccBtn key={acc.id} acc={acc} on={worn.has(acc.id)} onToggle={() => toggle(acc.id)} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
