import type { AccessoryId } from "./types";

export function CatSVG({ worn }: { worn: Set<AccessoryId> }) {
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
        {/* Warm tabby orange fur */}
        <radialGradient id="cFur" cx="42%" cy="30%" r="68%">
          <stop offset="0%" stopColor="#f8d070" />
          <stop offset="35%" stopColor="#e8a830" />
          <stop offset="70%" stopColor="#c07818" />
          <stop offset="100%" stopColor="#8a5210" />
        </radialGradient>
        {/* Creamy belly */}
        <radialGradient id="cBelly" cx="50%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#fffbf0" />
          <stop offset="55%" stopColor="#fdf0c8" />
          <stop offset="100%" stopColor="#f0d090" />
        </radialGradient>
        {/* Face */}
        <radialGradient id="cFace" cx="46%" cy="34%" r="62%">
          <stop offset="0%" stopColor="#f8d070" />
          <stop offset="50%" stopColor="#e0a030" />
          <stop offset="100%" stopColor="#b07820" />
        </radialGradient>
        {/* Green cat eye iris */}
        <radialGradient id="cEye" cx="28%" cy="24%" r="68%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="35%" stopColor="#22c55e" />
          <stop offset="65%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#052e16" />
        </radialGradient>
        {/* Inner ear pink */}
        <radialGradient id="cInnerEar" cx="50%" cy="45%" r="58%">
          <stop offset="0%" stopColor="#fecdd3" />
          <stop offset="100%" stopColor="#fb7185" />
        </radialGradient>
        {/* Leg */}
        <radialGradient id="cLeg" cx="38%" cy="28%" r="68%">
          <stop offset="0%" stopColor="#f0c060" />
          <stop offset="60%" stopColor="#c08020" />
          <stop offset="100%" stopColor="#8a5810" />
        </radialGradient>
        {/* Nose */}
        <radialGradient id="cNose" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#be185d" />
        </radialGradient>
        <filter id="cShadow" x="-25%" y="-25%" width="155%" height="155%">
          <feDropShadow dx="0" dy="5" stdDeviation="8" floodColor="#00000028" />
        </filter>
      </defs>

      {/* ── GROUND SHADOW ── */}
      <ellipse cx="120" cy="390" rx="78" ry="10" fill="#00000020" />

      {/* ── TAIL ── long elegant cat tail */}
      <path d="M 162 270 Q 208 244 202 196 Q 196 156 178 168 Q 168 180 176 204 Q 184 228 162 250"
        fill="none" stroke="#8a5210" strokeWidth="18" strokeLinecap="round" />
      {/* tail highlight stripe */}
      <path d="M 162 270 Q 204 246 198 200 Q 193 162 180 172"
        fill="none" stroke="#f8d070" strokeWidth="8" strokeLinecap="round" opacity="0.4" />
      {/* tail tip */}
      <circle cx="178" cy="168" r="13" fill="#f0c060" />
      <circle cx="178" cy="168" r="8" fill="#fdf0c8" opacity="0.6" />

      {/* ── BACK LEGS ── */}
      <ellipse cx="76" cy="304" rx="26" ry="36" fill="url(#cLeg)" />
      <ellipse cx="164" cy="304" rx="26" ry="36" fill="url(#cLeg)" />
      {/* shading */}
      <ellipse cx="71" cy="316" rx="14" ry="22" fill="#60380a" opacity="0.18" />
      <ellipse cx="169" cy="316" rx="14" ry="22" fill="#60380a" opacity="0.18" />
      {/* highlight */}
      <ellipse cx="70" cy="292" rx="10" ry="14" fill="#f8d070" opacity="0.2" />
      <ellipse cx="170" cy="292" rx="10" ry="14" fill="#f8d070" opacity="0.2" />

      {/* ── BODY ── */}
      <ellipse cx="120" cy="250" rx="64" ry="70" fill="url(#cFur)" filter="url(#cShadow)" />
      {/* side shading */}
      <ellipse cx="82" cy="258" rx="20" ry="54" fill="#60380a" opacity="0.11" />
      <ellipse cx="158" cy="258" rx="20" ry="54" fill="#60380a" opacity="0.11" />
      {/* belly */}
      <ellipse cx="120" cy="262" rx="40" ry="54" fill="url(#cBelly)" />
      {/* tabby body stripes */}
      <path d="M 68 222 Q 82 216 92 232" fill="none" stroke="#c07818" strokeWidth="3" strokeLinecap="round" opacity="0.32" />
      <path d="M 66 244 Q 80 237 90 252" fill="none" stroke="#c07818" strokeWidth="3" strokeLinecap="round" opacity="0.28" />
      <path d="M 66 266 Q 80 259 90 272" fill="none" stroke="#c07818" strokeWidth="2.5" strokeLinecap="round" opacity="0.22" />
      <path d="M 172 222 Q 158 216 148 232" fill="none" stroke="#c07818" strokeWidth="3" strokeLinecap="round" opacity="0.32" />
      <path d="M 174 244 Q 160 237 150 252" fill="none" stroke="#c07818" strokeWidth="3" strokeLinecap="round" opacity="0.28" />
      <path d="M 174 266 Q 160 259 150 272" fill="none" stroke="#c07818" strokeWidth="2.5" strokeLinecap="round" opacity="0.22" />

      {/* ── DRESS ── */}
      {dress && (
        <g>
          <path d="M 62 218 Q 120 206 178 218 L 196 332 Q 120 350 44 332 Z" fill="#f472b6" opacity="0.93" />
          <path d="M 62 218 Q 120 208 178 218" fill="none" stroke="#ec4899" strokeWidth="7" strokeLinecap="round" />
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <path key={i} d={`M ${48+i*18} 332 Q ${57+i*18} 352 ${66+i*18} 332`} fill="#f9a8d4" opacity="0.85" />
          ))}
          <path d="M 88 218 L 84 254 M 120 208 L 120 254 M 152 218 L 156 254" stroke="#ec4899" strokeWidth="1.5" opacity="0.35" />
          <circle cx="96" cy="236" r="2.5" fill="#fce7f3" opacity="0.8" />
          <circle cx="132" cy="248" r="2" fill="#fce7f3" opacity="0.8" />
          <circle cx="110" cy="260" r="2" fill="#fce7f3" opacity="0.8" />
        </g>
      )}

      {/* ── RAINCOAT ── */}
      {raincoat && !dress && (
        <g>
          <ellipse cx="120" cy="248" rx="64" ry="66" fill="#fde047" opacity="0.93" />
          <path d="M 56 218 Q 120 206 184 218" fill="none" stroke="#ca8a04" strokeWidth="9" strokeLinecap="round" />
          <path d="M 56 218 Q 120 232 184 218" fill="none" stroke="#fef08a" strokeWidth="3.5" opacity="0.5" />
          <circle cx="120" cy="234" r="5" fill="#ca8a04" />
          <circle cx="120" cy="254" r="5" fill="#ca8a04" />
          <circle cx="120" cy="274" r="5" fill="#ca8a04" />
          <rect x="88" y="252" width="22" height="18" rx="5" fill="#ca8a04" opacity="0.35" />
          <ellipse cx="150" cy="244" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
          <ellipse cx="164" cy="260" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
          <ellipse cx="78" cy="258" rx="3" ry="5" fill="#93c5fd" opacity="0.5" />
        </g>
      )}

      {/* ── SWEATER ── */}
      {sweater && !dress && !raincoat && (
        <g>
          <ellipse cx="120" cy="244" rx="64" ry="62" fill="#6366f1" opacity="0.93" />
          {[-34,-18,-2,14,30,46].map((dx, i) => (
            <line key={i} x1={120+dx} y1={202} x2={120+dx-1} y2={306}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          ))}
          {[-18,14].map((dx, i) => (
            <path key={i} d={`M ${120+dx} 210 Q ${120+dx+8} 224 ${120+dx} 238 Q ${120+dx-8} 252 ${120+dx} 266`}
              fill="none" stroke="#a5b4fc" strokeWidth="2" opacity="0.5" />
          ))}
          <path d="M 56 216 Q 120 204 184 216" fill="none" stroke="#4338ca" strokeWidth="13" strokeLinecap="round" />
          <path d="M 56 216 Q 120 204 184 216" fill="none" stroke="#818cf8" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
        </g>
      )}

      {/* ── HANDBAG (with dress) ── */}
      {dress && (
        <g transform="translate(180,236)">
          <rect x="0" y="0" width="36" height="30" rx="8" fill="#be185d" />
          <path d="M 5 0 Q 18 -16 31 0" fill="none" stroke="#f472b6" strokeWidth="4.5" strokeLinecap="round" />
          <rect x="10" y="10" width="16" height="12" rx="4" fill="#f9a8d4" />
          <circle cx="18" cy="16" r="3.5" fill="#be185d" />
          <line x1="18" y1="10" x2="18" y2="22" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
        </g>
      )}

      {/* ── FRONT LEGS ── */}
      <rect x="76" y="292" width="32" height="60" rx="16" fill="url(#cLeg)" />
      <ellipse cx="92" cy="352" rx="20" ry="11" fill="#8a5210" />
      <rect x="132" y="292" width="32" height="60" rx="16" fill="url(#cLeg)" />
      <ellipse cx="148" cy="352" rx="20" ry="11" fill="#8a5210" />
      <ellipse cx="82" cy="302" rx="8" ry="14" fill="#f8d070" opacity="0.18" />
      <ellipse cx="138" cy="302" rx="8" ry="14" fill="#f8d070" opacity="0.18" />

      {/* ── SOCKS ── */}
      {socks && (
        <g>
          <rect x="76" y="322" width="32" height="30" rx="15" fill="#f0abfc" />
          <line x1="76" y1="332" x2="108" y2="332" stroke="#e879f9" strokeWidth="3.5" />
          <line x1="76" y1="340" x2="108" y2="340" stroke="#e879f9" strokeWidth="3.5" />
          <rect x="132" y="322" width="32" height="30" rx="15" fill="#f0abfc" />
          <line x1="132" y1="332" x2="164" y2="332" stroke="#e879f9" strokeWidth="3.5" />
          <line x1="132" y1="340" x2="164" y2="340" stroke="#e879f9" strokeWidth="3.5" />
        </g>
      )}

      {/* ── BOOTS ── */}
      {boots && (
        <g>
          <rect x="68" y="320" width="48" height="34" rx="12" fill="#92400e" />
          <ellipse cx="92" cy="354" rx="27" ry="13" fill="#78350f" />
          <rect x="70" y="320" width="44" height="12" rx="6" fill="#b45309" />
          <rect x="78" y="324" width="22" height="6" rx="3" fill="#92400e" />
          <rect x="85" y="322" width="8" height="10" rx="2" fill="#d97706" />
          <rect x="124" y="320" width="48" height="34" rx="12" fill="#92400e" />
          <ellipse cx="148" cy="354" rx="27" ry="13" fill="#78350f" />
          <rect x="126" y="320" width="44" height="12" rx="6" fill="#b45309" />
          <rect x="134" y="324" width="22" height="6" rx="3" fill="#92400e" />
          <rect x="141" y="322" width="8" height="10" rx="2" fill="#d97706" />
        </g>
      )}

      {/* ── SNEAKERS ── */}
      {sneakers && !boots && (
        <g>
          <ellipse cx="92" cy="354" rx="27" ry="13" fill="#2563eb" />
          <rect x="65" y="336" width="54" height="20" rx="10" fill="#3b82f6" />
          <line x1="74" y1="340" x2="110" y2="340" stroke="white" strokeWidth="2.5" />
          <line x1="74" y1="346" x2="110" y2="346" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <circle cx="92" cy="336" r="4" fill="white" opacity="0.7" />
          <ellipse cx="148" cy="354" rx="27" ry="13" fill="#2563eb" />
          <rect x="121" y="336" width="54" height="20" rx="10" fill="#3b82f6" />
          <line x1="130" y1="340" x2="166" y2="340" stroke="white" strokeWidth="2.5" />
          <line x1="130" y1="346" x2="166" y2="346" stroke="white" strokeWidth="1.5" opacity="0.5" />
          <circle cx="148" cy="336" r="4" fill="white" opacity="0.7" />
        </g>
      )}

      {/* ── PAW TOES ── */}
      {!boots && !sneakers && (
        <g>
          <circle cx="79" cy="354" r="7" fill="#8a5210" />
          <circle cx="92" cy="358" r="7" fill="#8a5210" />
          <circle cx="105" cy="354" r="7" fill="#8a5210" />
          <circle cx="135" cy="354" r="7" fill="#8a5210" />
          <circle cx="148" cy="358" r="7" fill="#8a5210" />
          <circle cx="161" cy="354" r="7" fill="#8a5210" />
          <circle cx="80" cy="352" r="3" fill="#b07820" opacity="0.38" />
          <circle cx="93" cy="356" r="3" fill="#b07820" opacity="0.38" />
          <circle cx="136" cy="352" r="3" fill="#b07820" opacity="0.38" />
          <circle cx="149" cy="356" r="3" fill="#b07820" opacity="0.38" />
        </g>
      )}

      {/* ── NECK ── */}
      <ellipse cx="120" cy="186" rx="36" ry="20" fill="#d09030" />
      <path d="M 86 188 Q 120 198 154 188" fill="none" stroke="#906010" strokeWidth="4" opacity="0.25" />
      <ellipse cx="106" cy="178" rx="14" ry="8" fill="#f8d070" opacity="0.22" />

      {/* ── HEAD ── */}
      <ellipse cx="120" cy="144" rx="64" ry="60" fill="url(#cFace)" filter="url(#cShadow)" />
      <ellipse cx="104" cy="116" rx="26" ry="18" fill="#f8d070" opacity="0.2" />

      {/* ── TABBY FOREHEAD STRIPES ── */}
      <path d="M 100 108 Q 120 100 140 108" fill="none" stroke="#a06010" strokeWidth="4" strokeLinecap="round" opacity="0.52" />
      <path d="M 98 120 Q 120 111 142 120" fill="none" stroke="#a06010" strokeWidth="3" strokeLinecap="round" opacity="0.38" />
      <path d="M 100 132 Q 120 124 140 132" fill="none" stroke="#a06010" strokeWidth="2.5" strokeLinecap="round" opacity="0.26" />
      {/* M-mark on forehead */}
      <path d="M 108 108 Q 112 116 116 108 Q 120 116 124 108 Q 128 116 132 108"
        fill="none" stroke="#a06010" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />

      {/* ── EARS ── pointed cat ears with inner pink */}
      {/* left ear */}
      <polygon points="54,120 40,62 90,100" fill="#d09030" />
      <polygon points="58,116 48,72 84,100" fill="url(#cInnerEar)" />
      {/* ear fur tufts */}
      <line x1="42" y1="66" x2="48" y2="58" stroke="#f8d070" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="62" x2="52" y2="54" stroke="#f8d070" strokeWidth="2" strokeLinecap="round" />
      {/* right ear */}
      <polygon points="186,120 200,62 150,100" fill="#d09030" />
      <polygon points="182,116 192,72 156,100" fill="url(#cInnerEar)" />
      <line x1="198" y1="66" x2="192" y2="58" stroke="#f8d070" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="192" y1="62" x2="188" y2="54" stroke="#f8d070" strokeWidth="2" strokeLinecap="round" />

      {/* ── TOP HAT ── */}
      {tophat && (
        <g>
          <rect x="56" y="64" width="128" height="12" rx="6" fill="#111827" />
          <rect x="70" y="12" width="100" height="54" rx="8" fill="#111827" />
          <rect x="73" y="15" width="94" height="16" rx="6" fill="#1f2937" />
          <rect x="70" y="56" width="100" height="10" rx="5" fill="#1f2937" />
          <rect x="70" y="55" width="100" height="6" rx="3" fill="#dc2626" />
          <ellipse cx="104" cy="34" rx="20" ry="9" fill="white" opacity="0.06" />
        </g>
      )}

      {/* ── TIARA ── */}
      {tiara && !tophat && (
        <g>
          <path d="M 76 102 Q 76 78 120 68 Q 164 78 164 102" fill="none" stroke="#d4a840" strokeWidth="5" />
          <line x1="92" y1="100" x2="92" y2="78" stroke="#e8c050" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="120" y1="96" x2="120" y2="64" stroke="#e8c050" strokeWidth="4" strokeLinecap="round" />
          <line x1="148" y1="100" x2="148" y2="78" stroke="#e8c050" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="120" cy="62" r="9" fill="#f472b6" />
          <circle cx="120" cy="62" r="6" fill="#fb7185" />
          <circle cx="122" cy="59" r="2.5" fill="white" opacity="0.8" />
          <circle cx="92" cy="76" r="6.5" fill="#a78bfa" />
          <circle cx="94" cy="73" r="2" fill="white" opacity="0.8" />
          <circle cx="148" cy="76" r="6.5" fill="#a78bfa" />
          <circle cx="150" cy="73" r="2" fill="white" opacity="0.8" />
          <circle cx="106" cy="70" r="4.5" fill="#67e8f9" />
          <circle cx="134" cy="70" r="4.5" fill="#67e8f9" />
          <path d="M 76 102 Q 120 96 164 102" fill="none" stroke="#f0d060" strokeWidth="4" />
          <path d="M 76 102 Q 120 96 164 102" fill="none" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </g>
      )}

      {/* ── FLOWER BAND ── */}
      {flowerband && !tophat && !tiara && (
        <g>
          <path d="M 58 110 Q 120 94 182 110" fill="none" stroke="#4ade80" strokeWidth="7" strokeLinecap="round" />
          <path d="M 58 110 Q 120 94 182 110" fill="none" stroke="#86efac" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          {[72, 94, 120, 146, 168].map((x, i) => {
            const y = 110 - Math.sin(((x - 58) / 124) * Math.PI) * 12;
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
          <ellipse cx="120" cy="92" rx="62" ry="32" fill="#dc2626" />
          <ellipse cx="120" cy="84" rx="56" ry="28" fill="#ef4444" />
          <ellipse cx="100" cy="76" rx="22" ry="11" fill="white" opacity="0.11" />
          <ellipse cx="144" cy="80" rx="10" ry="6" fill="#b91c1c" opacity="0.38" />
          <circle cx="132" cy="70" r="7" fill="#dc2626" />
          <circle cx="132" cy="68" r="4" fill="#ef4444" />
          <ellipse cx="120" cy="92" rx="62" ry="9" fill="#991b1b" opacity="0.32" />
        </g>
      )}

      {/* ── EYES ── */}
      {sunnies ? (
        <g>
          <ellipse cx="94" cy="142" rx="22" ry="17" fill="#0f172a" />
          <ellipse cx="146" cy="142" rx="22" ry="17" fill="#0f172a" />
          <line x1="116" y1="142" x2="124" y2="142" stroke="#334155" strokeWidth="5" />
          <line x1="72" y1="142" x2="62" y2="140" stroke="#334155" strokeWidth="4" />
          <line x1="168" y1="142" x2="178" y2="140" stroke="#334155" strokeWidth="4" />
          <ellipse cx="83" cy="136" rx="9" ry="5.5" fill="#1e293b" opacity="0.55" />
          <ellipse cx="135" cy="136" rx="9" ry="5.5" fill="#1e293b" opacity="0.55" />
          <ellipse cx="94" cy="142" rx="18" ry="13" fill="#7c3aed" opacity="0.22" />
          <ellipse cx="146" cy="142" rx="18" ry="13" fill="#7c3aed" opacity="0.22" />
        </g>
      ) : (
        <g>
          {/* eye whites */}
          <ellipse cx="94" cy="142" rx="18" ry="21" fill="#fffef8" />
          <ellipse cx="146" cy="142" rx="18" ry="21" fill="#fffef8" />
          {/* iris - vivid green */}
          <ellipse cx="94" cy="143" rx="14" ry="17" fill="url(#cEye)" />
          <ellipse cx="146" cy="143" rx="14" ry="17" fill="url(#cEye)" />
          {/* slit pupil */}
          <ellipse cx="94" cy="143" rx="4.5" ry="14" fill="#020f04" />
          <ellipse cx="146" cy="143" rx="4.5" ry="14" fill="#020f04" />
          {/* catchlights */}
          <circle cx="101" cy="133" r="5.5" fill="white" opacity="0.92" />
          <circle cx="153" cy="133" r="5.5" fill="white" opacity="0.92" />
          <circle cx="88" cy="151" r="3" fill="white" opacity="0.38" />
          <circle cx="140" cy="151" r="3" fill="white" opacity="0.38" />
          {/* iris ring */}
          <ellipse cx="94" cy="143" rx="14" ry="17" fill="none" stroke="#15803d" strokeWidth="1.5" opacity="0.35" />
          <ellipse cx="146" cy="143" rx="14" ry="17" fill="none" stroke="#15803d" strokeWidth="1.5" opacity="0.35" />
          {/* eyelid */}
          <path d="M 76 130 Q 94 120 112 130" fill="none" stroke="#a06010" strokeWidth="3" opacity="0.42" />
          <path d="M 128 130 Q 146 120 164 130" fill="none" stroke="#a06010" strokeWidth="3" opacity="0.42" />
          <path d="M 76 154 Q 94 162 112 154" fill="none" stroke="#a06010" strokeWidth="2" opacity="0.22" />
          <path d="M 128 154 Q 146 162 164 154" fill="none" stroke="#a06010" strokeWidth="2" opacity="0.22" />
        </g>
      )}

      {/* ── NOSE ── */}
      <path d="M 113 163 Q 120 158 127 163 L 124 169 Q 120 172 116 169 Z" fill="url(#cNose)" />
      <ellipse cx="117" cy="161" rx="3" ry="2" fill="#fecdd3" opacity="0.7" />

      {/* ── MOUTH ── */}
      <path d="M 120 170 Q 106 181 100 178" fill="none" stroke="#a06010" strokeWidth="3" strokeLinecap="round" />
      <path d="M 120 170 Q 134 181 140 178" fill="none" stroke="#a06010" strokeWidth="3" strokeLinecap="round" />

      {/* ── WHISKERS ── */}
      {/* left */}
      <line x1="44" y1="155" x2="100" y2="162" stroke="#7c4a08" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      <line x1="42" y1="164" x2="100" y2="165" stroke="#7c4a08" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      <line x1="44" y1="173" x2="100" y2="169" stroke="#7c4a08" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      {/* right */}
      <line x1="196" y1="155" x2="140" y2="162" stroke="#7c4a08" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      <line x1="198" y1="164" x2="140" y2="165" stroke="#7c4a08" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
      <line x1="196" y1="173" x2="140" y2="169" stroke="#7c4a08" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />

      {/* ── BANDANA ── */}
      {bandana && (
        <g>
          <path d="M 66 192 Q 120 180 174 192 L 120 222 Z" fill="#f97316" opacity="0.96" />
          <path d="M 66 192 Q 120 204 174 192" fill="none" stroke="#ea580c" strokeWidth="2.5" />
          {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
            <circle key={i} cx={66 + t * 108} cy={192} r="3" fill="#fed7aa" opacity="0.65" />
          ))}
          <line x1="114" y1="220" x2="112" y2="230" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <line x1="120" y1="222" x2="120" y2="232" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <line x1="126" y1="220" x2="128" y2="230" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {/* ── BOWTIE ── */}
      {bowtie && !bandana && (
        <g transform="translate(120,194)">
          <ellipse cx="-24" cy="0" rx="22" ry="14" fill="#dc2626" />
          <ellipse cx="24" cy="0" rx="22" ry="14" fill="#dc2626" />
          <ellipse cx="-24" cy="0" rx="15" ry="8" fill="#ef4444" opacity="0.45" />
          <ellipse cx="24" cy="0" rx="15" ry="8" fill="#ef4444" opacity="0.45" />
          <circle cx="0" cy="0" r="10" fill="#991b1b" />
          <circle cx="0" cy="0" r="7" fill="#dc2626" />
          <circle cx="-2" cy="-2" r="3" fill="#ef4444" opacity="0.5" />
        </g>
      )}

      {/* ── PEARLS ── */}
      {pearls && !bandana && !bowtie && (
        <g>
          <path d="M 66 194 Q 120 212 174 194" fill="none" stroke="#d1d5db" strokeWidth="3.5" strokeLinecap="round" />
          {[0.05, 0.14, 0.23, 0.32, 0.41, 0.5, 0.59, 0.68, 0.77, 0.86, 0.95].map((t, i) => {
            const x = 66 + t * 108;
            const y = 194 + Math.sin(t * Math.PI) * 17;
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
