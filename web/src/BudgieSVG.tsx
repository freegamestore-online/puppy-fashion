import type { AccessoryId } from "./types";

export function BudgieSVG({ worn }: { worn: Set<AccessoryId> }) {
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
    <svg viewBox="0 0 240 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Body — vivid teal/green */}
        <radialGradient id="bBody" cx="40%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="35%" stopColor="#10b981" />
          <stop offset="68%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064e3b" />
        </radialGradient>
        {/* Head — lighter mint */}
        <radialGradient id="bHead" cx="44%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="40%" stopColor="#6ee7b7" />
          <stop offset="75%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </radialGradient>
        {/* Wing — darker with barring */}
        <radialGradient id="bWing" cx="28%" cy="22%" r="70%">
          <stop offset="0%" stopColor="#6ee7b7" />
          <stop offset="40%" stopColor="#059669" />
          <stop offset="75%" stopColor="#047857" />
          <stop offset="100%" stopColor="#022c22" />
        </radialGradient>
        {/* Belly — pale yellow-green */}
        <radialGradient id="bBelly" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#f0fdf4" />
          <stop offset="45%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </radialGradient>
        {/* Eye iris — dark with ring */}
        <radialGradient id="bEye" cx="28%" cy="24%" r="68%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="45%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#06082a" />
        </radialGradient>
        {/* Cheek patch — blue */}
        <radialGradient id="bCheek" cx="50%" cy="50%" r="58%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#2563eb" />
        </radialGradient>
        {/* Tail feather */}
        <radialGradient id="bTail" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#022c22" />
        </radialGradient>
        {/* Beak */}
        <radialGradient id="bBeak" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#ca8a04" />
        </radialGradient>
        <filter id="bShadow" x="-25%" y="-25%" width="155%" height="155%">
          <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000028" />
        </filter>
      </defs>

      {/* ── GROUND SHADOW ── */}
      <ellipse cx="120" cy="390" rx="68" ry="10" fill="#00000020" />

      {/* ── TAIL FEATHERS ── long elegant budgie tail */}
      {/* outer feathers */}
      <path d="M 96 300 Q 80 344 72 368" fill="none" stroke="#047857" strokeWidth="12" strokeLinecap="round" />
      <path d="M 144 300 Q 160 344 168 368" fill="none" stroke="#047857" strokeWidth="12" strokeLinecap="round" />
      {/* middle feathers */}
      <path d="M 108 304 Q 96 352 90 374" fill="none" stroke="#059669" strokeWidth="10" strokeLinecap="round" />
      <path d="M 132 304 Q 144 352 150 374" fill="none" stroke="#059669" strokeWidth="10" strokeLinecap="round" />
      {/* centre longest feather */}
      <path d="M 120 306 Q 120 356 120 382" fill="none" stroke="#10b981" strokeWidth="14" strokeLinecap="round" />
      {/* feather highlights */}
      <path d="M 96 300 Q 82 342 74 364" fill="none" stroke="#6ee7b7" strokeWidth="4" strokeLinecap="round" opacity="0.38" />
      <path d="M 144 300 Q 158 342 166 364" fill="none" stroke="#6ee7b7" strokeWidth="4" strokeLinecap="round" opacity="0.38" />
      <path d="M 120 306 Q 120 354 120 378" fill="none" stroke="#6ee7b7" strokeWidth="5" strokeLinecap="round" opacity="0.38" />
      {/* barring on tail */}
      <path d="M 100 322 Q 120 318 140 322" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.3" />
      <path d="M 98 338 Q 120 334 142 338" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.25" />
      <path d="M 96 354 Q 120 350 144 354" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.2" />

      {/* ── BODY ── */}
      <ellipse cx="120" cy="224" rx="58" ry="78" fill="url(#bBody)" filter="url(#bShadow)" />
      {/* body side shading */}
      <ellipse cx="82" cy="232" rx="18" ry="58" fill="#022c22" opacity="0.14" />
      <ellipse cx="158" cy="232" rx="18" ry="58" fill="#022c22" opacity="0.14" />
      {/* belly */}
      <ellipse cx="120" cy="238" rx="34" ry="56" fill="url(#bBelly)" />
      {/* feather texture lines on body */}
      <path d="M 76 196 Q 84 210 82 228" fill="none" stroke="#047857" strokeWidth="2" opacity="0.3" />
      <path d="M 82 192 Q 90 206 88 224" fill="none" stroke="#047857" strokeWidth="2" opacity="0.25" />
      <path d="M 164 196 Q 156 210 158 228" fill="none" stroke="#047857" strokeWidth="2" opacity="0.3" />
      <path d="M 158 192 Q 150 206 152 224" fill="none" stroke="#047857" strokeWidth="2" opacity="0.25" />

      {/* ── LEFT WING ── */}
      <path d="M 62 182 Q 32 218 34 280 Q 46 304 66 282 Q 76 258 72 202 Z" fill="url(#bWing)" />
      {/* wing feather barring */}
      <path d="M 54 194 Q 38 222 40 256" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.4" />
      <path d="M 60 190 Q 44 218 46 252" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.35" />
      <path d="M 66 188 Q 50 214 52 248" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.3" />
      {/* wing highlight */}
      <path d="M 64 185 Q 46 216 46 252" fill="none" stroke="#6ee7b7" strokeWidth="3" opacity="0.25" />

      {/* ── RIGHT WING ── */}
      <path d="M 178 182 Q 208 218 206 280 Q 194 304 174 282 Q 164 258 168 202 Z" fill="url(#bWing)" />
      <path d="M 186 194 Q 202 222 200 256" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.4" />
      <path d="M 180 190 Q 196 218 194 252" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.35" />
      <path d="M 174 188 Q 190 214 188 248" fill="none" stroke="#022c22" strokeWidth="2" opacity="0.3" />
      <path d="M 176 185 Q 194 216 194 252" fill="none" stroke="#6ee7b7" strokeWidth="3" opacity="0.25" />

      {/* ── DRESS ── */}
      {dress && (
        <g>
          <path d="M 68 196 Q 120 184 172 196 L 188 306 Q 120 322 52 306 Z" fill="#f472b6" opacity="0.93" />
          <path d="M 68 196 Q 120 186 172 196" fill="none" stroke="#ec4899" strokeWidth="7" strokeLinecap="round" />
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <path key={i} d={`M ${54+i*16} 306 Q ${62+i*16} 326 ${70+i*16} 306`} fill="#f9a8d4" opacity="0.85" />
          ))}
          <circle cx="98" cy="214" r="2.5" fill="#fce7f3" opacity="0.8" />
          <circle cx="132" cy="224" r="2" fill="#fce7f3" opacity="0.8" />
          <circle cx="112" cy="238" r="2" fill="#fce7f3" opacity="0.8" />
        </g>
      )}

      {/* ── RAINCOAT ── */}
      {raincoat && !dress && (
        <g>
          <ellipse cx="120" cy="220" rx="58" ry="72" fill="#fde047" opacity="0.93" />
          <path d="M 62 196 Q 120 184 178 196" fill="none" stroke="#ca8a04" strokeWidth="9" strokeLinecap="round" />
          <path d="M 62 196 Q 120 210 178 196" fill="none" stroke="#fef08a" strokeWidth="3.5" opacity="0.5" />
          <circle cx="120" cy="212" r="5" fill="#ca8a04" />
          <circle cx="120" cy="232" r="5" fill="#ca8a04" />
          <circle cx="120" cy="252" r="5" fill="#ca8a04" />
          <ellipse cx="148" cy="222" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
          <ellipse cx="162" cy="238" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
          <ellipse cx="80" cy="236" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
        </g>
      )}

      {/* ── SWEATER ── */}
      {sweater && !dress && !raincoat && (
        <g>
          <ellipse cx="120" cy="218" rx="58" ry="70" fill="#6366f1" opacity="0.93" />
          {[-32,-16,0,16,32].map((dx, i) => (
            <line key={i} x1={120+dx} y1={180} x2={120+dx-1} y2={286}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          ))}
          <path d="M 62 196 Q 120 184 178 196" fill="none" stroke="#4338ca" strokeWidth="13" strokeLinecap="round" />
          <path d="M 62 196 Q 120 184 178 196" fill="none" stroke="#818cf8" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
        </g>
      )}

      {/* ── HANDBAG (with dress) ── */}
      {dress && (
        <g transform="translate(180,212)">
          <rect x="0" y="0" width="36" height="30" rx="8" fill="#be185d" />
          <path d="M 5 0 Q 18 -16 31 0" fill="none" stroke="#f472b6" strokeWidth="4.5" strokeLinecap="round" />
          <rect x="10" y="10" width="16" height="12" rx="4" fill="#f9a8d4" />
          <circle cx="18" cy="16" r="3.5" fill="#be185d" />
        </g>
      )}

      {/* ── FEET / PERCH CLAWS ── */}
      {/* left foot */}
      <path d="M 96 298 Q 88 314 80 320" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      <path d="M 96 298 Q 92 316 90 326" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      <path d="M 96 298 Q 100 316 104 322" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      <path d="M 96 298 Q 94 302 86 304" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      {/* right foot */}
      <path d="M 144 298 Q 152 314 160 320" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      <path d="M 144 298 Q 148 316 150 326" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      <path d="M 144 298 Q 140 316 136 322" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      <path d="M 144 298 Q 146 302 154 304" fill="none" stroke="#ca8a04" strokeWidth="5" strokeLinecap="round" />
      {/* toe claws */}
      <circle cx="80" cy="320" r="3" fill="#78350f" />
      <circle cx="90" cy="326" r="3" fill="#78350f" />
      <circle cx="104" cy="322" r="3" fill="#78350f" />
      <circle cx="160" cy="320" r="3" fill="#78350f" />
      <circle cx="150" cy="326" r="3" fill="#78350f" />
      <circle cx="136" cy="322" r="3" fill="#78350f" />

      {/* ── SOCKS (on wing-arms) ── */}
      {socks && (
        <g>
          <rect x="42" y="248" width="28" height="24" rx="12" fill="#f0abfc" />
          <line x1="42" y1="257" x2="70" y2="257" stroke="#e879f9" strokeWidth="3" />
          <line x1="42" y1="264" x2="70" y2="264" stroke="#e879f9" strokeWidth="3" />
          <rect x="170" y="248" width="28" height="24" rx="12" fill="#f0abfc" />
          <line x1="170" y1="257" x2="198" y2="257" stroke="#e879f9" strokeWidth="3" />
          <line x1="170" y1="264" x2="198" y2="264" stroke="#e879f9" strokeWidth="3" />
        </g>
      )}

      {/* ── BOOTS (on feet) ── */}
      {boots && (
        <g>
          <ellipse cx="90" cy="320" rx="18" ry="10" fill="#92400e" />
          <ellipse cx="90" cy="316" rx="16" ry="8" fill="#b45309" />
          <ellipse cx="150" cy="320" rx="18" ry="10" fill="#92400e" />
          <ellipse cx="150" cy="316" rx="16" ry="8" fill="#b45309" />
        </g>
      )}

      {/* ── SNEAKERS (on feet) ── */}
      {sneakers && !boots && (
        <g>
          <ellipse cx="90" cy="320" rx="18" ry="10" fill="#3b82f6" />
          <ellipse cx="90" cy="316" rx="14" ry="7" fill="#60a5fa" />
          <ellipse cx="150" cy="320" rx="18" ry="10" fill="#3b82f6" />
          <ellipse cx="150" cy="316" rx="14" ry="7" fill="#60a5fa" />
        </g>
      )}

      {/* ── NECK ── */}
      <ellipse cx="120" cy="162" rx="34" ry="18" fill="#34d399" />
      <path d="M 88 164 Q 120 174 152 164" fill="none" stroke="#059669" strokeWidth="3" opacity="0.3" />

      {/* ── HEAD ── */}
      <ellipse cx="120" cy="122" rx="60" ry="58" fill="url(#bHead)" filter="url(#bShadow)" />
      {/* head highlight */}
      <ellipse cx="104" cy="96" rx="24" ry="18" fill="#d1fae5" opacity="0.3" />

      {/* ── FOREHEAD BARRING (budgie has stripes on head) ── */}
      <path d="M 90 90 Q 120 82 150 90" fill="none" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" opacity="0.45" />
      <path d="M 88 102 Q 120 93 152 102" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <path d="M 88 114 Q 120 105 152 114" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />

      {/* ── TOP HAT ── */}
      {tophat && (
        <g>
          <rect x="58" y="56" width="124" height="12" rx="6" fill="#111827" />
          <rect x="72" y="4" width="96" height="54" rx="8" fill="#111827" />
          <rect x="75" y="7" width="90" height="16" rx="6" fill="#1f2937" />
          <rect x="72" y="48" width="96" height="10" rx="5" fill="#1f2937" />
          <rect x="72" y="47" width="96" height="6" rx="3" fill="#dc2626" />
          <ellipse cx="106" cy="26" rx="20" ry="9" fill="white" opacity="0.06" />
        </g>
      )}

      {/* ── TIARA ── */}
      {tiara && !tophat && (
        <g>
          <path d="M 76 90 Q 76 66 120 56 Q 164 66 164 90" fill="none" stroke="#d4a840" strokeWidth="5" />
          <line x1="92" y1="88" x2="92" y2="66" stroke="#e8c050" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="120" y1="84" x2="120" y2="52" stroke="#e8c050" strokeWidth="4" strokeLinecap="round" />
          <line x1="148" y1="88" x2="148" y2="66" stroke="#e8c050" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="120" cy="50" r="9" fill="#f472b6" />
          <circle cx="120" cy="50" r="6" fill="#fb7185" />
          <circle cx="122" cy="47" r="2.5" fill="white" opacity="0.8" />
          <circle cx="92" cy="64" r="6.5" fill="#a78bfa" />
          <circle cx="94" cy="61" r="2" fill="white" opacity="0.8" />
          <circle cx="148" cy="64" r="6.5" fill="#a78bfa" />
          <circle cx="150" cy="61" r="2" fill="white" opacity="0.8" />
          <circle cx="106" cy="58" r="4.5" fill="#67e8f9" />
          <circle cx="134" cy="58" r="4.5" fill="#67e8f9" />
          <path d="M 76 90 Q 120 84 164 90" fill="none" stroke="#f0d060" strokeWidth="4" />
          <path d="M 76 90 Q 120 84 164 90" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </g>
      )}

      {/* ── FLOWER BAND ── */}
      {flowerband && !tophat && !tiara && (
        <g>
          <path d="M 62 98 Q 120 82 178 98" fill="none" stroke="#4ade80" strokeWidth="7" strokeLinecap="round" />
          <path d="M 62 98 Q 120 82 178 98" fill="none" stroke="#86efac" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          {[76, 98, 120, 142, 164].map((x, i) => {
            const y = 98 - Math.sin(((x - 62) / 116) * Math.PI) * 12;
            const petalColors = ["#f472b6","#fbbf24","#f87171","#a78bfa","#34d399"];
            const col = petalColors[i] ?? "#f472b6";
            return (
              <g key={i} transform={`translate(${x},${y})`}>
                {[0,51,102,154,205,256].map(a => (
                  <ellipse key={a}
                    cx={Math.cos((a * Math.PI) / 180) * 7}
                    cy={Math.sin((a * Math.PI) / 180) * 7}
                    rx="6" ry="3.5"
                    fill={col}
                    transform={`rotate(${a})`}
                    opacity="0.92"
                  />
                ))}
                <circle cx="0" cy="0" r="4" fill="#fef08a" />
                <circle cx="-1" cy="-1" r="1.5" fill="white" opacity="0.7" />
              </g>
            );
          })}
        </g>
      )}

      {/* ── BERET ── */}
      {beret && !tophat && !tiara && !flowerband && (
        <g>
          <ellipse cx="120" cy="80" rx="60" ry="30" fill="#dc2626" />
          <ellipse cx="120" cy="72" rx="54" ry="26" fill="#ef4444" />
          <ellipse cx="100" cy="64" rx="22" ry="11" fill="white" opacity="0.11" />
          <ellipse cx="144" cy="68" rx="10" ry="6" fill="#b91c1c" opacity="0.38" />
          <circle cx="132" cy="58" r="7" fill="#dc2626" />
          <circle cx="132" cy="56" r="4" fill="#ef4444" />
          <ellipse cx="120" cy="80" rx="60" ry="9" fill="#991b1b" opacity="0.32" />
        </g>
      )}

      {/* ── EYES ── */}
      {sunnies ? (
        <g>
          <ellipse cx="94" cy="126" rx="20" ry="16" fill="#0f172a" />
          <ellipse cx="146" cy="126" rx="20" ry="16" fill="#0f172a" />
          <line x1="114" y1="126" x2="126" y2="126" stroke="#334155" strokeWidth="5" />
          <line x1="74" y1="126" x2="64" y2="124" stroke="#334155" strokeWidth="4" />
          <line x1="166" y1="126" x2="176" y2="124" stroke="#334155" strokeWidth="4" />
          <ellipse cx="83" cy="120" rx="9" ry="5.5" fill="#1e293b" opacity="0.55" />
          <ellipse cx="135" cy="120" rx="9" ry="5.5" fill="#1e293b" opacity="0.55" />
          <ellipse cx="94" cy="126" rx="16" ry="12" fill="#7c3aed" opacity="0.22" />
          <ellipse cx="146" cy="126" rx="16" ry="12" fill="#7c3aed" opacity="0.22" />
        </g>
      ) : (
        <g>
          {/* eye ring — budgies have white iris ring */}
          <circle cx="94" cy="126" r="17" fill="#f8fafc" />
          <circle cx="146" cy="126" r="17" fill="#f8fafc" />
          {/* iris — dark blue */}
          <circle cx="94" cy="126" r="13" fill="url(#bEye)" />
          <circle cx="146" cy="126" r="13" fill="url(#bEye)" />
          {/* pupil */}
          <circle cx="94" cy="126" r="8" fill="#030712" />
          <circle cx="146" cy="126" r="8" fill="#030712" />
          {/* white iris ring */}
          <circle cx="94" cy="126" r="13" fill="none" stroke="#f0f9ff" strokeWidth="2.5" />
          <circle cx="146" cy="126" r="13" fill="none" stroke="#f0f9ff" strokeWidth="2.5" />
          {/* catchlights */}
          <circle cx="100" cy="118" r="5" fill="white" opacity="0.92" />
          <circle cx="152" cy="118" r="5" fill="white" opacity="0.92" />
          <circle cx="88" cy="132" r="3" fill="white" opacity="0.35" />
          <circle cx="140" cy="132" r="3" fill="white" opacity="0.35" />
        </g>
      )}

      {/* ── CHEEK PATCHES ── blue budgie cheeks */}
      <ellipse cx="78" cy="138" rx="14" ry="10" fill="url(#bCheek)" opacity="0.85" />
      <ellipse cx="162" cy="138" rx="14" ry="10" fill="url(#bCheek)" opacity="0.85" />
      {/* cheek highlight */}
      <ellipse cx="74" cy="134" rx="5" ry="3.5" fill="#bfdbfe" opacity="0.6" />
      <ellipse cx="158" cy="134" rx="5" ry="3.5" fill="#bfdbfe" opacity="0.6" />

      {/* ── CERE (nostril area above beak) ── */}
      <ellipse cx="120" cy="143" rx="14" ry="8" fill="#93c5fd" opacity="0.75" />
      <ellipse cx="114" cy="142" rx="4" ry="3" fill="#60a5fa" opacity="0.6" />
      <ellipse cx="126" cy="142" rx="4" ry="3" fill="#60a5fa" opacity="0.6" />

      {/* ── BEAK ── hooked budgie beak */}
      <path d="M 108 148 Q 120 144 132 148 Q 128 160 120 164 Q 112 160 108 148 Z" fill="url(#bBeak)" />
      {/* beak upper ridge */}
      <path d="M 108 148 Q 120 145 132 148" fill="none" stroke="#a16207" strokeWidth="2" opacity="0.5" />
      {/* beak hook */}
      <path d="M 120 164 Q 116 168 118 172" fill="none" stroke="#a16207" strokeWidth="2.5" strokeLinecap="round" />
      {/* beak highlight */}
      <ellipse cx="116" cy="152" rx="4" ry="3" fill="#fef08a" opacity="0.5" />

      {/* ── THROAT SPOTS (budgie characteristic) ── */}
      <circle cx="106" cy="156" r="5" fill="#1e3a8a" opacity="0.7" />
      <circle cx="120" cy="158" r="5" fill="#1e3a8a" opacity="0.7" />
      <circle cx="134" cy="156" r="5" fill="#1e3a8a" opacity="0.7" />
      <circle cx="113" cy="162" r="4" fill="#1e3a8a" opacity="0.5" />
      <circle cx="127" cy="162" r="4" fill="#1e3a8a" opacity="0.5" />

      {/* ── BANDANA ── */}
      {bandana && (
        <g>
          <path d="M 72 168 Q 120 156 168 168 L 120 196 Z" fill="#f97316" opacity="0.96" />
          <path d="M 72 168 Q 120 180 168 168" fill="none" stroke="#ea580c" strokeWidth="2.5" />
          {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
            <circle key={i} cx={72 + t * 96} cy={168} r="3" fill="#fed7aa" opacity="0.65" />
          ))}
          <line x1="114" y1="194" x2="112" y2="204" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <line x1="120" y1="196" x2="120" y2="206" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <line x1="126" y1="194" x2="128" y2="204" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {/* ── BOWTIE ── */}
      {bowtie && !bandana && (
        <g transform="translate(120,172)">
          <ellipse cx="-22" cy="0" rx="20" ry="13" fill="#dc2626" />
          <ellipse cx="22" cy="0" rx="20" ry="13" fill="#dc2626" />
          <ellipse cx="-22" cy="0" rx="14" ry="8" fill="#ef4444" opacity="0.45" />
          <ellipse cx="22" cy="0" rx="14" ry="8" fill="#ef4444" opacity="0.45" />
          <circle cx="0" cy="0" r="10" fill="#991b1b" />
          <circle cx="0" cy="0" r="7" fill="#dc2626" />
          <circle cx="-2" cy="-2" r="3" fill="#ef4444" opacity="0.5" />
        </g>
      )}

      {/* ── PEARLS ── */}
      {pearls && !bandana && !bowtie && (
        <g>
          <path d="M 72 172 Q 120 190 168 172" fill="none" stroke="#d1d5db" strokeWidth="3.5" strokeLinecap="round" />
          {[0.05, 0.14, 0.23, 0.32, 0.41, 0.5, 0.59, 0.68, 0.77, 0.86, 0.95].map((t, i) => {
            const x = 72 + t * 96;
            const y = 172 + Math.sin(t * Math.PI) * 17;
            const shade = i % 3 === 0 ? "#fce7f3" : i % 3 === 1 ? "#f9fafb" : "#fdf4ff";
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="6.5" fill={shade} stroke="#e5e7eb" strokeWidth="0.8" />
                <circle cx={x - 2} cy={y - 2} r="2.5" fill="white" opacity="0.7" />
              </g>
            );
          })}
        </g>
      )}
    </svg>
  );
}
