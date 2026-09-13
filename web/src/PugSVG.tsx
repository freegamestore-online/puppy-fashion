import type { AccessoryId } from "./types";

export function PugSVG({ worn }: { worn: Set<AccessoryId> }) {
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
        {/* Fawn fur body */}
        <radialGradient id="pFur" cx="42%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#f0c87a" />
          <stop offset="40%" stopColor="#d4a050" />
          <stop offset="75%" stopColor="#b07830" />
          <stop offset="100%" stopColor="#8a5818" />
        </radialGradient>
        {/* Lighter belly */}
        <radialGradient id="pBelly" cx="50%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#fef0d0" />
          <stop offset="60%" stopColor="#f0d090" />
          <stop offset="100%" stopColor="#d4a868" />
        </radialGradient>
        {/* Face slightly warmer */}
        <radialGradient id="pFace" cx="46%" cy="36%" r="60%">
          <stop offset="0%" stopColor="#e0a860" />
          <stop offset="55%" stopColor="#c08040" />
          <stop offset="100%" stopColor="#906028" />
        </radialGradient>
        {/* Dark mask around muzzle/eyes */}
        <radialGradient id="pMask" cx="50%" cy="52%" r="58%">
          <stop offset="0%" stopColor="#3a1e08" />
          <stop offset="70%" stopColor="#1e0e04" />
          <stop offset="100%" stopColor="#0e0602" />
        </radialGradient>
        {/* Muzzle pad - lighter buff */}
        <radialGradient id="pMuzzle" cx="48%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#f0d0a0" />
          <stop offset="60%" stopColor="#d8aa70" />
          <stop offset="100%" stopColor="#b88040" />
        </radialGradient>
        {/* Velvety dark ear */}
        <radialGradient id="pEar" cx="38%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#7a4820" />
          <stop offset="55%" stopColor="#3e2010" />
          <stop offset="100%" stopColor="#200e06" />
        </radialGradient>
        {/* Leg fur */}
        <radialGradient id="pLeg" cx="38%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#e0b068" />
          <stop offset="60%" stopColor="#b07838" />
          <stop offset="100%" stopColor="#805820" />
        </radialGradient>
        {/* Deep warm brown eye */}
        <radialGradient id="pEye" cx="30%" cy="26%" r="68%">
          <stop offset="0%" stopColor="#9a5020" />
          <stop offset="35%" stopColor="#4a2010" />
          <stop offset="70%" stopColor="#200e06" />
          <stop offset="100%" stopColor="#080402" />
        </radialGradient>
        {/* Nose */}
        <radialGradient id="pNose" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#3a1808" />
          <stop offset="100%" stopColor="#100604" />
        </radialGradient>
        <filter id="pShadow" x="-25%" y="-25%" width="155%" height="155%">
          <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000030" />
        </filter>
        <filter id="pSoft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* ── GROUND SHADOW ── */}
      <ellipse cx="120" cy="390" rx="80" ry="10" fill="#00000020" />

      {/* ── CURLY TAIL ── */}
      <path d="M 162 278 Q 200 260 194 230 Q 188 206 172 216 Q 163 226 168 242 Q 174 258 158 266"
        fill="none" stroke="#805820" strokeWidth="16" strokeLinecap="round" />
      <path d="M 162 278 Q 196 262 190 234 Q 185 212 174 220"
        fill="none" stroke="#d4a050" strokeWidth="9" strokeLinecap="round" opacity="0.5" />
      <circle cx="172" cy="216" r="10" fill="#e8c080" />

      {/* ── BACK HAUNCHES ── */}
      <ellipse cx="75" cy="310" rx="30" ry="38" fill="url(#pLeg)" />
      <ellipse cx="165" cy="310" rx="30" ry="38" fill="url(#pLeg)" />
      {/* haunch shading */}
      <ellipse cx="70" cy="322" rx="16" ry="24" fill="#60380e" opacity="0.18" />
      <ellipse cx="170" cy="322" rx="16" ry="24" fill="#60380e" opacity="0.18" />
      {/* haunch highlights */}
      <ellipse cx="68" cy="296" rx="10" ry="14" fill="#f0c878" opacity="0.22" />
      <ellipse cx="172" cy="296" rx="10" ry="14" fill="#f0c878" opacity="0.22" />

      {/* ── BODY ── */}
      <ellipse cx="120" cy="256" rx="70" ry="74" fill="url(#pFur)" filter="url(#pShadow)" />
      {/* side shading */}
      <ellipse cx="82" cy="264" rx="22" ry="56" fill="#60380e" opacity="0.12" />
      <ellipse cx="158" cy="264" rx="22" ry="56" fill="#60380e" opacity="0.12" />
      {/* belly */}
      <ellipse cx="120" cy="270" rx="44" ry="56" fill="url(#pBelly)" />
      {/* belly centre seam */}
      <path d="M 120 220 Q 120 272 120 318" fill="none" stroke="#b07838" strokeWidth="1.5" opacity="0.18" />

      {/* ── DRESS ── */}
      {dress && (
        <g>
          <path d="M 60 224 Q 120 212 180 224 L 198 330 Q 120 348 42 330 Z" fill="#f472b6" opacity="0.93" />
          <path d="M 60 224 Q 120 214 180 224" fill="none" stroke="#ec4899" strokeWidth="7" strokeLinecap="round" />
          {/* lace hem */}
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <path key={i} d={`M ${46+i*18} 330 Q ${55+i*18} 350 ${64+i*18} 330`} fill="#f9a8d4" opacity="0.85" />
          ))}
          {/* bodice detail */}
          <path d="M 86 224 L 82 256 M 120 214 L 120 256 M 154 224 L 158 256" stroke="#ec4899" strokeWidth="1.5" opacity="0.35" />
          {/* sparkles */}
          <circle cx="95" cy="240" r="2.5" fill="#fce7f3" opacity="0.8" />
          <circle cx="130" cy="250" r="2" fill="#fce7f3" opacity="0.8" />
          <circle cx="108" cy="262" r="2" fill="#fce7f3" opacity="0.8" />
        </g>
      )}

      {/* ── RAINCOAT ── */}
      {raincoat && !dress && (
        <g>
          <ellipse cx="120" cy="252" rx="70" ry="66" fill="#fde047" opacity="0.93" />
          <path d="M 56 224 Q 120 212 184 224" fill="none" stroke="#ca8a04" strokeWidth="9" strokeLinecap="round" />
          <path d="M 56 224 Q 120 238 184 224" fill="none" stroke="#fef08a" strokeWidth="3.5" opacity="0.5" />
          {/* buttons */}
          <circle cx="120" cy="238" r="5" fill="#ca8a04" />
          <circle cx="120" cy="258" r="5" fill="#ca8a04" />
          <circle cx="120" cy="278" r="5" fill="#ca8a04" />
          {/* pocket */}
          <rect x="86" y="255" width="22" height="18" rx="5" fill="#ca8a04" opacity="0.35" />
          {/* rain drops on coat */}
          <ellipse cx="148" cy="248" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
          <ellipse cx="162" cy="264" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
          <ellipse cx="78" cy="260" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
        </g>
      )}

      {/* ── SWEATER ── */}
      {sweater && !dress && !raincoat && (
        <g>
          <ellipse cx="120" cy="250" rx="70" ry="64" fill="#6366f1" opacity="0.93" />
          {/* knit texture lines */}
          {[-34,-18,-2,14,30,46].map((dx, i) => (
            <line key={i} x1={120+dx} y1={206} x2={120+dx-1} y2={308}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          ))}
          {/* cable knit */}
          {[-18,14].map((dx, i) => (
            <path key={i} d={`M ${120+dx} 215 Q ${120+dx+8} 228 ${120+dx} 241 Q ${120+dx-8} 254 ${120+dx} 267`}
              fill="none" stroke="#a5b4fc" strokeWidth="2" opacity="0.5" />
          ))}
          {/* collar */}
          <path d="M 56 220 Q 120 208 184 220" fill="none" stroke="#4338ca" strokeWidth="13" strokeLinecap="round" />
          <path d="M 56 220 Q 120 208 184 220" fill="none" stroke="#818cf8" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
        </g>
      )}

      {/* ── HANDBAG (with dress) ── */}
      {dress && (
        <g transform="translate(182,240)">
          <rect x="0" y="0" width="36" height="30" rx="8" fill="#be185d" />
          <path d="M 5 0 Q 18 -16 31 0" fill="none" stroke="#f472b6" strokeWidth="4.5" strokeLinecap="round" />
          <rect x="10" y="10" width="16" height="12" rx="4" fill="#f9a8d4" />
          <circle cx="18" cy="16" r="3.5" fill="#be185d" />
          <line x1="18" y1="10" x2="18" y2="22" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
        </g>
      )}

      {/* ── FRONT LEGS ── */}
      <rect x="74" y="302" width="34" height="58" rx="17" fill="url(#pLeg)" />
      <ellipse cx="91" cy="360" rx="21" ry="11" fill="#805820" />
      <rect x="132" y="302" width="34" height="58" rx="17" fill="url(#pLeg)" />
      <ellipse cx="149" cy="360" rx="21" ry="11" fill="#805820" />
      {/* leg highlights */}
      <ellipse cx="80" cy="312" rx="8" ry="14" fill="#f0c878" opacity="0.2" />
      <ellipse cx="138" cy="312" rx="8" ry="14" fill="#f0c878" opacity="0.2" />

      {/* ── SOCKS ── */}
      {socks && (
        <g>
          <rect x="74" y="330" width="34" height="30" rx="15" fill="#f0abfc" />
          <line x1="74" y1="340" x2="108" y2="340" stroke="#e879f9" strokeWidth="3.5" />
          <line x1="74" y1="348" x2="108" y2="348" stroke="#e879f9" strokeWidth="3.5" />
          <rect x="132" y="330" width="34" height="30" rx="15" fill="#f0abfc" />
          <line x1="132" y1="340" x2="166" y2="340" stroke="#e879f9" strokeWidth="3.5" />
          <line x1="132" y1="348" x2="166" y2="348" stroke="#e879f9" strokeWidth="3.5" />
        </g>
      )}

      {/* ── BOOTS ── */}
      {boots && (
        <g>
          <rect x="66" y="326" width="50" height="36" rx="12" fill="#92400e" />
          <ellipse cx="91" cy="362" rx="28" ry="13" fill="#78350f" />
          <rect x="68" y="326" width="46" height="12" rx="6" fill="#b45309" />
          {/* boot buckle */}
          <rect x="80" y="330" width="22" height="6" rx="3" fill="#92400e" />
          <rect x="87" y="328" width="8" height="10" rx="2" fill="#d97706" />
          <rect x="124" y="326" width="50" height="36" rx="12" fill="#92400e" />
          <ellipse cx="149" cy="362" rx="28" ry="13" fill="#78350f" />
          <rect x="126" y="326" width="46" height="12" rx="6" fill="#b45309" />
          <rect x="138" y="330" width="22" height="6" rx="3" fill="#92400e" />
          <rect x="145" y="328" width="8" height="10" rx="2" fill="#d97706" />
        </g>
      )}

      {/* ── SNEAKERS ── */}
      {sneakers && !boots && (
        <g>
          <ellipse cx="91" cy="362" rx="28" ry="13" fill="#2563eb" />
          <rect x="63" y="344" width="56" height="20" rx="10" fill="#3b82f6" />
          <line x1="72" y1="348" x2="112" y2="348" stroke="white" strokeWidth="2.5" />
          <line x1="72" y1="354" x2="112" y2="354" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <circle cx="91" cy="344" r="4" fill="white" opacity="0.7" />
          <ellipse cx="149" cy="362" rx="28" ry="13" fill="#2563eb" />
          <rect x="121" y="344" width="56" height="20" rx="10" fill="#3b82f6" />
          <line x1="130" y1="348" x2="170" y2="348" stroke="white" strokeWidth="2.5" />
          <line x1="130" y1="354" x2="170" y2="354" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <circle cx="149" cy="344" r="4" fill="white" opacity="0.7" />
        </g>
      )}

      {/* ── PAW TOES ── */}
      {!boots && !sneakers && (
        <g>
          <circle cx="78" cy="362" r="7.5" fill="#805820" />
          <circle cx="91" cy="366" r="7.5" fill="#805820" />
          <circle cx="104" cy="362" r="7.5" fill="#805820" />
          <circle cx="136" cy="362" r="7.5" fill="#805820" />
          <circle cx="149" cy="366" r="7.5" fill="#805820" />
          <circle cx="162" cy="362" r="7.5" fill="#805820" />
          {/* toe highlights */}
          <circle cx="79" cy="360" r="3" fill="#a07040" opacity="0.4" />
          <circle cx="92" cy="364" r="3" fill="#a07040" opacity="0.4" />
          <circle cx="137" cy="360" r="3" fill="#a07040" opacity="0.4" />
          <circle cx="150" cy="364" r="3" fill="#a07040" opacity="0.4" />
        </g>
      )}

      {/* ── NECK ── */}
      <ellipse cx="120" cy="194" rx="42" ry="24" fill="#c09050" />
      {/* neck fold */}
      <path d="M 82 196 Q 120 206 158 196" fill="none" stroke="#806030" strokeWidth="4" opacity="0.28" />
      {/* neck highlight */}
      <ellipse cx="106" cy="186" rx="16" ry="8" fill="#e0b870" opacity="0.25" />

      {/* ── HEAD ── */}
      <ellipse cx="120" cy="148" rx="70" ry="66" fill="url(#pFace)" filter="url(#pShadow)" />
      {/* head highlight */}
      <ellipse cx="104" cy="120" rx="28" ry="20" fill="#e8b870" opacity="0.22" />

      {/* ── DARK MASK ── */}
      <ellipse cx="120" cy="160" rx="54" ry="50" fill="url(#pMask)" opacity="0.70" />
      <ellipse cx="120" cy="154" rx="58" ry="52" fill="url(#pMask)" opacity="0.16" />

      {/* ── FOREHEAD WRINKLES ── */}
      <path d="M 96 112 Q 120 104 144 112" fill="none" stroke="#6a3810" strokeWidth="4" strokeLinecap="round" opacity="0.60" />
      <path d="M 94 124 Q 120 115 146 124" fill="none" stroke="#6a3810" strokeWidth="3" strokeLinecap="round" opacity="0.42" />
      <path d="M 96 136 Q 120 128 144 136" fill="none" stroke="#6a3810" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" />
      {/* centre brow furrow */}
      <path d="M 116 110 Q 120 120 124 110" fill="none" stroke="#4a2808" strokeWidth="3" strokeLinecap="round" opacity="0.55" />

      {/* ── EARS ── floppy button ears */}
      {/* left ear */}
      <path d="M 58 136 Q 36 114 42 86 Q 50 62 72 78 Q 88 94 84 126 Q 78 144 60 138 Z" fill="url(#pEar)" />
      <path d="M 62 134 Q 44 114 48 90 Q 54 70 70 82 Q 82 96 80 124" fill="none" stroke="#100602" strokeWidth="2" opacity="0.3" />
      {/* ear inner sheen */}
      <ellipse cx="64" cy="106" rx="10" ry="16" fill="#7a4820" opacity="0.3" transform="rotate(-15,64,106)" />
      {/* right ear */}
      <path d="M 182 136 Q 204 114 198 86 Q 190 62 168 78 Q 152 94 156 126 Q 162 144 180 138 Z" fill="url(#pEar)" />
      <path d="M 178 134 Q 196 114 192 90 Q 186 70 170 82 Q 158 96 160 124" fill="none" stroke="#100602" strokeWidth="2" opacity="0.3" />
      <ellipse cx="176" cy="106" rx="10" ry="16" fill="#7a4820" opacity="0.3" transform="rotate(15,176,106)" />

      {/* ── TOP HAT ── */}
      {tophat && (
        <g>
          <rect x="58" y="68" width="124" height="12" rx="6" fill="#111827" />
          <rect x="72" y="16" width="96" height="54" rx="8" fill="#111827" />
          <rect x="75" y="19" width="90" height="16" rx="6" fill="#1f2937" />
          <rect x="72" y="60" width="96" height="10" rx="5" fill="#1f2937" />
          {/* hat band */}
          <rect x="72" y="59" width="96" height="6" rx="3" fill="#dc2626" />
          {/* hat shine */}
          <ellipse cx="100" cy="36" rx="18" ry="8" fill="white" opacity="0.06" />
        </g>
      )}

      {/* ── TIARA ── */}
      {tiara && !tophat && (
        <g>
          <path d="M 78 106 Q 78 82 120 72 Q 162 82 162 106" fill="none" stroke="#d4a840" strokeWidth="5" />
          {/* tiara spires */}
          <line x1="94" y1="104" x2="94" y2="82" stroke="#e8c050" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="120" y1="100" x2="120" y2="68" stroke="#e8c050" strokeWidth="4" strokeLinecap="round" />
          <line x1="146" y1="104" x2="146" y2="82" stroke="#e8c050" strokeWidth="3.5" strokeLinecap="round" />
          {/* gems */}
          <circle cx="120" cy="66" r="9" fill="#f472b6" />
          <circle cx="120" cy="66" r="6" fill="#fb7185" />
          <circle cx="122" cy="63" r="2.5" fill="white" opacity="0.8" />
          <circle cx="94" cy="80" r="6.5" fill="#a78bfa" />
          <circle cx="96" cy="77" r="2" fill="white" opacity="0.8" />
          <circle cx="146" cy="80" r="6.5" fill="#a78bfa" />
          <circle cx="148" cy="77" r="2" fill="white" opacity="0.8" />
          <circle cx="107" cy="74" r="4.5" fill="#67e8f9" />
          <circle cx="133" cy="74" r="4.5" fill="#67e8f9" />
          {/* base band */}
          <path d="M 78 106 Q 120 100 162 106" fill="none" stroke="#f0d060" strokeWidth="4" />
          <path d="M 78 106 Q 120 100 162 106" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </g>
      )}

      {/* ── FLOWER BAND ── */}
      {flowerband && !tophat && !tiara && (
        <g>
          <path d="M 60 114 Q 120 98 180 114" fill="none" stroke="#4ade80" strokeWidth="7" strokeLinecap="round" />
          <path d="M 60 114 Q 120 98 180 114" fill="none" stroke="#86efac" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          {[74, 94, 120, 146, 166].map((x, i) => {
            const y = 114 - Math.sin(((x - 60) / 120) * Math.PI) * 12;
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
          <ellipse cx="120" cy="96" rx="60" ry="32" fill="#dc2626" />
          <ellipse cx="120" cy="88" rx="54" ry="27" fill="#ef4444" />
          {/* beret sheen */}
          <ellipse cx="100" cy="80" rx="20" ry="10" fill="white" opacity="0.12" />
          <ellipse cx="140" cy="84" rx="10" ry="6" fill="#b91c1c" opacity="0.4" />
          {/* beret knob */}
          <circle cx="130" cy="74" r="7" fill="#dc2626" />
          <circle cx="130" cy="72" r="4" fill="#ef4444" />
          <ellipse cx="120" cy="96" rx="60" ry="9" fill="#991b1b" opacity="0.35" />
        </g>
      )}

      {/* ── EYES ── */}
      {sunnies ? (
        <g>
          {/* wide frames for big pug eyes */}
          <ellipse cx="96" cy="144" rx="26" ry="20" fill="#0f172a" />
          <ellipse cx="144" cy="144" rx="26" ry="20" fill="#0f172a" />
          {/* bridge */}
          <line x1="122" y1="144" x2="118" y2="144" stroke="#334155" strokeWidth="5" />
          {/* arms */}
          <line x1="70" y1="144" x2="60" y2="142" stroke="#334155" strokeWidth="4" />
          <line x1="170" y1="144" x2="180" y2="142" stroke="#334155" strokeWidth="4" />
          {/* lens sheen */}
          <ellipse cx="85" cy="138" rx="10" ry="6" fill="#1e293b" opacity="0.6" />
          <ellipse cx="133" cy="138" rx="10" ry="6" fill="#1e293b" opacity="0.6" />
          {/* coloured tint */}
          <ellipse cx="96" cy="144" rx="22" ry="16" fill="#7c3aed" opacity="0.25" />
          <ellipse cx="144" cy="144" rx="22" ry="16" fill="#7c3aed" opacity="0.25" />
        </g>
      ) : (
        <g>
          {/* eye socket shadow */}
          <circle cx="96" cy="144" r="26" fill="#0e0602" opacity="0.28" />
          <circle cx="144" cy="144" r="26" fill="#0e0602" opacity="0.28" />
          {/* sclera — warm white, slightly bulging */}
          <circle cx="96" cy="144" r="22" fill="#f8ece0" />
          <circle cx="144" cy="144" r="22" fill="#f8ece0" />
          {/* iris */}
          <circle cx="96" cy="145" r="17" fill="url(#pEye)" />
          <circle cx="144" cy="145" r="17" fill="url(#pEye)" />
          {/* pupil */}
          <circle cx="96" cy="145" r="11" fill="#060402" />
          <circle cx="144" cy="145" r="11" fill="#060402" />
          {/* main catchlight */}
          <circle cx="103" cy="136" r="7" fill="white" opacity="0.92" />
          <circle cx="151" cy="136" r="7" fill="white" opacity="0.92" />
          {/* secondary catchlight */}
          <circle cx="88" cy="152" r="3.5" fill="white" opacity="0.38" />
          <circle cx="136" cy="152" r="3.5" fill="white" opacity="0.38" />
          {/* iris ring */}
          <circle cx="96" cy="145" r="17" fill="none" stroke="#6a3010" strokeWidth="1.5" opacity="0.4" />
          <circle cx="144" cy="145" r="17" fill="none" stroke="#6a3010" strokeWidth="1.5" opacity="0.4" />
          {/* eyelid crease */}
          <path d="M 74 134 Q 96 124 118 134" fill="none" stroke="#4a2808" strokeWidth="3" opacity="0.4" />
          <path d="M 122 134 Q 144 124 166 134" fill="none" stroke="#4a2808" strokeWidth="3" opacity="0.4" />
          {/* lower lid */}
          <path d="M 74 154 Q 96 162 118 154" fill="none" stroke="#4a2808" strokeWidth="2" opacity="0.25" />
          <path d="M 122 154 Q 144 162 166 154" fill="none" stroke="#4a2808" strokeWidth="2" opacity="0.25" />
        </g>
      )}

      {/* ── MUZZLE ── */}
      <ellipse cx="120" cy="174" rx="40" ry="30" fill="url(#pMuzzle)" />
      {/* muzzle side wrinkle rolls */}
      <path d="M 82 164 Q 79 176 84 186" fill="none" stroke="#806030" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 158 164 Q 161 176 156 186" fill="none" stroke="#806030" strokeWidth="3.5" strokeLinecap="round" opacity="0.5" />
      {/* muzzle top crease */}
      <path d="M 88 162 Q 120 155 152 162" fill="none" stroke="#806030" strokeWidth="2" opacity="0.35" />

      {/* ── NOSE ── */}
      {/* nose bridge ridge */}
      <rect x="108" y="153" width="24" height="7" rx="3.5" fill="#100604" opacity="0.4" />
      {/* nose pad */}
      <ellipse cx="120" cy="166" rx="20" ry="14" fill="url(#pNose)" />
      {/* nostrils */}
      <ellipse cx="110" cy="165" rx="7.5" ry="6.5" fill="#200a04" />
      <ellipse cx="130" cy="165" rx="7.5" ry="6.5" fill="#200a04" />
      {/* nostril highlights */}
      <ellipse cx="108" cy="162" rx="3.5" ry="2.5" fill="#5a2808" opacity="0.7" />
      <ellipse cx="128" cy="162" rx="3.5" ry="2.5" fill="#5a2808" opacity="0.7" />
      {/* nose tip shine */}
      <ellipse cx="120" cy="160" rx="5" ry="3" fill="#4a1808" opacity="0.5" />

      {/* ── MOUTH ── */}
      <path d="M 120 179 Q 104 192 96 188" fill="none" stroke="#5a3010" strokeWidth="4" strokeLinecap="round" />
      <path d="M 120 179 Q 136 192 144 188" fill="none" stroke="#5a3010" strokeWidth="4" strokeLinecap="round" />
      {/* chin fold */}
      <path d="M 96 190 Q 120 198 144 190" fill="none" stroke="#806030" strokeWidth="2.5" opacity="0.35" />

      {/* ── CHIN WRINKLE ── */}
      <path d="M 92 198 Q 120 206 148 198" fill="none" stroke="#806030" strokeWidth="2.5" opacity="0.28" />

      {/* ── BANDANA ── */}
      {bandana && (
        <g>
          <path d="M 64 198 Q 120 186 176 198 L 120 228 Z" fill="#f97316" opacity="0.96" />
          <path d="M 64 198 Q 120 210 176 198" fill="none" stroke="#ea580c" strokeWidth="2.5" />
          {/* pattern dots */}
          {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
            <circle key={i} cx={64 + t * 112} cy={198} r="3" fill="#fed7aa" opacity="0.65" />
          ))}
          {/* fringe at tip */}
          <line x1="114" y1="226" x2="112" y2="236" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <line x1="120" y1="228" x2="120" y2="238" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <line x1="126" y1="226" x2="128" y2="236" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {/* ── BOWTIE ── */}
      {bowtie && !bandana && (
        <g transform="translate(120,200)">
          <ellipse cx="-24" cy="0" rx="22" ry="14" fill="#dc2626" />
          <ellipse cx="24" cy="0" rx="22" ry="14" fill="#dc2626" />
          <ellipse cx="-24" cy="0" rx="15" ry="8" fill="#ef4444" opacity="0.45" />
          <ellipse cx="24" cy="0" rx="15" ry="8" fill="#ef4444" opacity="0.45" />
          {/* centre knot */}
          <circle cx="0" cy="0" r="10" fill="#991b1b" />
          <circle cx="0" cy="0" r="7" fill="#dc2626" />
          <circle cx="-2" cy="-2" r="3" fill="#ef4444" opacity="0.5" />
        </g>
      )}

      {/* ── PEARLS ── */}
      {pearls && !bandana && !bowtie && (
        <g>
          <path d="M 64 200 Q 120 218 176 200" fill="none" stroke="#d1d5db" strokeWidth="3.5" strokeLinecap="round" />
          {[0.05, 0.14, 0.23, 0.32, 0.41, 0.5, 0.59, 0.68, 0.77, 0.86, 0.95].map((t, i) => {
            const x = 64 + t * 112;
            const y = 200 + Math.sin(t * Math.PI) * 17;
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
