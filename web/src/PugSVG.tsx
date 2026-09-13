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
    <svg viewBox="0 0 220 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pugFur" cx="45%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e8c48a" />
          <stop offset="55%" stopColor="#c9924c" />
          <stop offset="100%" stopColor="#9a6228" />
        </radialGradient>
        <radialGradient id="pugBelly" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#f7e2be" />
          <stop offset="100%" stopColor="#ddb87a" />
        </radialGradient>
        <radialGradient id="pugFace" cx="48%" cy="38%" r="58%">
          <stop offset="0%" stopColor="#d4a060" />
          <stop offset="100%" stopColor="#9a6030" />
        </radialGradient>
        <radialGradient id="pugMask" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#4a2808" />
          <stop offset="100%" stopColor="#200e02" />
        </radialGradient>
        <radialGradient id="pugMuzzle" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#e8c49a" />
          <stop offset="100%" stopColor="#c8904a" />
        </radialGradient>
        <radialGradient id="pugEar" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#6b3a18" />
          <stop offset="100%" stopColor="#2d1508" />
        </radialGradient>
        <radialGradient id="pugLeg" cx="40%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#daa85a" />
          <stop offset="100%" stopColor="#8a5820" />
        </radialGradient>
        <radialGradient id="pugEye" cx="32%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#7b3a10" />
          <stop offset="55%" stopColor="#2d1508" />
          <stop offset="100%" stopColor="#100800" />
        </radialGradient>
        <filter id="pugDrop" x="-20%" y="-20%" width="150%" height="150%">
          <feDropShadow dx="1" dy="4" stdDeviation="5" floodColor="#00000028" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="110" cy="372" rx="72" ry="9" fill="#00000018" />

      {/* curly tail */}
      <path d="M 150 268 Q 184 252 178 226 Q 173 206 160 214 Q 153 222 158 236 Q 163 250 148 258"
        fill="none" stroke="#8a5820" strokeWidth="14" strokeLinecap="round" />
      <path d="M 150 268 Q 180 254 175 230 Q 171 212 162 218"
        fill="none" stroke="#c9924c" strokeWidth="8" strokeLinecap="round" opacity="0.55" />
      <circle cx="160" cy="214" r="9" fill="#ddb87a" />

      {/* back haunches */}
      <ellipse cx="70" cy="302" rx="27" ry="34" fill="url(#pugLeg)" />
      <ellipse cx="150" cy="302" rx="27" ry="34" fill="url(#pugLeg)" />
      <ellipse cx="65" cy="312" rx="14" ry="20" fill="#8a5820" opacity="0.2" />
      <ellipse cx="156" cy="312" rx="14" ry="20" fill="#8a5820" opacity="0.2" />

      {/* body */}
      <ellipse cx="110" cy="248" rx="64" ry="68" fill="url(#pugFur)" filter="url(#pugDrop)" />
      <ellipse cx="82" cy="256" rx="18" ry="50" fill="#8a5820" opacity="0.1" />
      <ellipse cx="138" cy="256" rx="18" ry="50" fill="#8a5820" opacity="0.1" />
      <ellipse cx="110" cy="260" rx="40" ry="50" fill="url(#pugBelly)" />

      {/* dress */}
      {dress && (
        <g>
          <path d="M 60 218 Q 110 208 160 218 L 175 310 Q 110 326 45 310 Z" fill="#f472b6" opacity="0.93" />
          <path d="M 60 218 Q 110 210 160 218" fill="none" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
          {[0,1,2,3,4,5,6].map(i => (
            <path key={i}
              d={`M ${55+i*18} 310 Q ${64+i*18} 330 ${73+i*18} 310`}
              fill="#f9a8d4" opacity="0.8" />
          ))}
          <path d="M 72 218 L 68 248 M 110 210 L 110 248 M 148 218 L 152 248"
            stroke="#ec4899" strokeWidth="1.5" opacity="0.4" />
        </g>
      )}

      {/* raincoat */}
      {raincoat && !dress && (
        <g>
          <ellipse cx="110" cy="244" rx="64" ry="62" fill="#facc15" opacity="0.92" />
          <path d="M 52 218 Q 110 208 168 218" fill="none" stroke="#eab308" strokeWidth="8" strokeLinecap="round" />
          <path d="M 52 218 Q 110 230 168 218" fill="none" stroke="#fde047" strokeWidth="3" opacity="0.5" />
          {[60,80,100,120,140].map((x,i) => (
            <circle key={i} cx={x} cy={260+i%2*12} r="3" fill="#eab308" opacity="0.5" />
          ))}
          {/* buttons */}
          <circle cx="110" cy="232" r="4" fill="#eab308" />
          <circle cx="110" cy="250" r="4" fill="#eab308" />
          <circle cx="110" cy="268" r="4" fill="#eab308" />
        </g>
      )}

      {/* sweater */}
      {sweater && !dress && !raincoat && (
        <g>
          <ellipse cx="110" cy="242" rx="64" ry="58" fill="#6366f1" opacity="0.92" />
          {[-30,-15,0,15,30].map((dx, i) => (
            <line key={i} x1={110+dx} y1={198} x2={110+dx-1} y2={294}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          <path d="M 52 214 Q 110 204 168 214" fill="none" stroke="#4f46e5" strokeWidth="12" strokeLinecap="round" />
          <path d="M 52 214 Q 110 204 168 214" fill="none" stroke="#818cf8" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        </g>
      )}

      {/* handbag — dress accessory */}
      {dress && (
        <g transform="translate(168,232)">
          <rect x="0" y="0" width="32" height="26" rx="7" fill="#be185d" />
          <path d="M 5 0 Q 16 -13 27 0" fill="none" stroke="#f472b6" strokeWidth="4" strokeLinecap="round" />
          <rect x="9" y="9" width="14" height="10" rx="3" fill="#f9a8d4" />
          <circle cx="16" cy="14" r="3" fill="#be185d" />
        </g>
      )}

      {/* front legs */}
      <rect x="68" y="292" width="30" height="52" rx="15" fill="url(#pugLeg)" />
      <ellipse cx="83" cy="344" rx="18" ry="10" fill="#9a6228" />
      <rect x="122" y="292" width="30" height="52" rx="15" fill="url(#pugLeg)" />
      <ellipse cx="137" cy="344" rx="18" ry="10" fill="#9a6228" />

      {/* socks */}
      {socks && (
        <g>
          <rect x="68" y="318" width="30" height="26" rx="13" fill="#f0abfc" />
          <line x1="68" y1="327" x2="98" y2="327" stroke="#e879f9" strokeWidth="3" />
          <line x1="68" y1="334" x2="98" y2="334" stroke="#e879f9" strokeWidth="3" />
          <rect x="122" y="318" width="30" height="26" rx="13" fill="#f0abfc" />
          <line x1="122" y1="327" x2="152" y2="327" stroke="#e879f9" strokeWidth="3" />
          <line x1="122" y1="334" x2="152" y2="334" stroke="#e879f9" strokeWidth="3" />
        </g>
      )}

      {/* boots */}
      {boots && (
        <g>
          <rect x="62" y="316" width="42" height="30" rx="10" fill="#92400e" />
          <ellipse cx="83" cy="346" rx="24" ry="11" fill="#78350f" />
          <rect x="64" y="316" width="38" height="10" rx="5" fill="#a16207" />
          <rect x="116" y="316" width="42" height="30" rx="10" fill="#92400e" />
          <ellipse cx="137" cy="346" rx="24" ry="11" fill="#78350f" />
          <rect x="118" y="316" width="38" height="10" rx="5" fill="#a16207" />
        </g>
      )}

      {/* sneakers */}
      {sneakers && !boots && (
        <g>
          <ellipse cx="83" cy="346" rx="24" ry="11" fill="#3b82f6" />
          <rect x="59" y="330" width="48" height="18" rx="9" fill="#60a5fa" />
          <line x1="67" y1="334" x2="99" y2="334" stroke="white" strokeWidth="2" />
          <circle cx="83" cy="330" r="3" fill="white" opacity="0.7" />
          <ellipse cx="137" cy="346" rx="24" ry="11" fill="#3b82f6" />
          <rect x="113" y="330" width="48" height="18" rx="9" fill="#60a5fa" />
          <line x1="121" y1="334" x2="153" y2="334" stroke="white" strokeWidth="2" />
          <circle cx="137" cy="330" r="3" fill="white" opacity="0.7" />
        </g>
      )}

      {/* paw toes */}
      {!boots && !sneakers && (
        <g fill="#9a6228">
          <circle cx="74" cy="346" r="6.5" />
          <circle cx="83" cy="349" r="6.5" />
          <circle cx="92" cy="346" r="6.5" />
          <circle cx="128" cy="346" r="6.5" />
          <circle cx="137" cy="349" r="6.5" />
          <circle cx="146" cy="346" r="6.5" />
        </g>
      )}

      {/* neck */}
      <ellipse cx="110" cy="186" rx="38" ry="22" fill="#b8784a" />
      <path d="M 76 186 Q 110 196 144 186" fill="none" stroke="#8a5820" strokeWidth="4" opacity="0.25" />

      {/* head */}
      <ellipse cx="110" cy="142" rx="64" ry="60" fill="url(#pugFace)" filter="url(#pugDrop)" />

      {/* dark mask */}
      <ellipse cx="110" cy="154" rx="48" ry="44" fill="url(#pugMask)" opacity="0.68" />
      <ellipse cx="110" cy="150" rx="52" ry="46" fill="url(#pugMask)" opacity="0.15" />

      {/* forehead wrinkles */}
      <path d="M 88 108 Q 110 102 132 108" fill="none" stroke="#7a4a20" strokeWidth="3.5" strokeLinecap="round" opacity="0.65" />
      <path d="M 86 118 Q 110 111 134 118" fill="none" stroke="#7a4a20" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <path d="M 88 128 Q 110 122 132 128" fill="none" stroke="#7a4a20" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M 107 106 Q 110 114 113 106" fill="none" stroke="#5a3010" strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />

      {/* ears */}
      <path d="M 54 128 Q 36 108 42 84 Q 50 66 68 80 Q 80 96 76 122 Q 70 136 56 130 Z" fill="url(#pugEar)" />
      <path d="M 58 126 Q 44 108 48 88 Q 54 74 66 84 Q 74 98 72 120" fill="none" stroke="#1a0a00" strokeWidth="2" opacity="0.35" />
      <path d="M 166 128 Q 184 108 178 84 Q 170 66 152 80 Q 140 96 144 122 Q 150 136 164 130 Z" fill="url(#pugEar)" />
      <path d="M 162 126 Q 176 108 172 88 Q 166 74 154 84 Q 146 98 148 120" fill="none" stroke="#1a0a00" strokeWidth="2" opacity="0.35" />

      {/* tophat */}
      {tophat && (
        <g>
          <rect x="56" y="70" width="108" height="10" rx="5" fill="#1f2937" />
          <rect x="68" y="22" width="84" height="50" rx="7" fill="#1f2937" />
          <rect x="71" y="25" width="78" height="14" rx="5" fill="#374151" />
          <rect x="70" y="63" width="80" height="9" rx="4" fill="#374151" />
          <rect x="68" y="62" width="84" height="4" rx="2" fill="#dc2626" />
        </g>
      )}

      {/* tiara */}
      {tiara && !tophat && (
        <g>
          <path d="M 72 100 Q 72 82 110 74 Q 148 82 148 100" fill="none" stroke="#e2c97e" strokeWidth="4" />
          <path d="M 86 98 L 86 80 M 110 96 L 110 70 M 134 98 L 134 80" stroke="#e2c97e" strokeWidth="3" strokeLinecap="round" />
          <circle cx="110" cy="68" r="7" fill="#f472b6" />
          <circle cx="86" cy="78" r="5" fill="#a78bfa" />
          <circle cx="134" cy="78" r="5" fill="#a78bfa" />
          <circle cx="98" cy="72" r="3.5" fill="#67e8f9" />
          <circle cx="122" cy="72" r="3.5" fill="#67e8f9" />
          <path d="M 72 100 Q 110 94 148 100" fill="none" stroke="#f5d060" strokeWidth="3" />
        </g>
      )}

      {/* flowerband */}
      {flowerband && !tophat && !tiara && (
        <g>
          <path d="M 58 108 Q 110 94 162 108" fill="none" stroke="#86efac" strokeWidth="6" strokeLinecap="round" />
          {[72,90,110,130,148].map((x,i) => {
            const y = 108 - Math.sin(((x-58)/104)*Math.PI)*10;
            const colors = ["#f472b6","#fbbf24","#f472b6","#a78bfa","#f472b6"];
            return (
              <g key={i} transform={`translate(${x},${y})`}>
                {[0,60,120,180,240,300].map(a => (
                  <ellipse key={a} cx={Math.cos(a*Math.PI/180)*6} cy={Math.sin(a*Math.PI/180)*6}
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
          <ellipse cx="110" cy="92" rx="52" ry="28" fill="#dc2626" />
          <ellipse cx="110" cy="86" rx="46" ry="24" fill="#ef4444" />
          <ellipse cx="130" cy="80" rx="8" ry="5" fill="#b91c1c" opacity="0.5" />
          <circle cx="118" cy="78" r="5" fill="#dc2626" />
          <ellipse cx="110" cy="92" rx="52" ry="8" fill="#b91c1c" opacity="0.4" />
        </g>
      )}

      {/* eyes */}
      {sunnies ? (
        <g>
          <ellipse cx="88" cy="138" rx="23" ry="17" fill="#1e293b" />
          <ellipse cx="132" cy="138" rx="23" ry="17" fill="#1e293b" />
          <path d="M 111 138 Q 111 138 111 138" stroke="#475569" strokeWidth="5" />
          <line x1="65" y1="138" x2="57" y2="136" stroke="#475569" strokeWidth="3.5" />
          <line x1="155" y1="138" x2="163" y2="136" stroke="#475569" strokeWidth="3.5" />
          <ellipse cx="79" cy="133" rx="8" ry="5" fill="#334155" opacity="0.45" />
          <ellipse cx="123" cy="133" rx="8" ry="5" fill="#334155" opacity="0.45" />
        </g>
      ) : (
        <g>
          <circle cx="88" cy="138" r="23" fill="#1a0800" opacity="0.22" />
          <circle cx="132" cy="138" r="23" fill="#1a0800" opacity="0.22" />
          <circle cx="88" cy="138" r="20" fill="#f5ece0" />
          <circle cx="132" cy="138" r="20" fill="#f5ece0" />
          <circle cx="88" cy="139" r="15" fill="url(#pugEye)" />
          <circle cx="132" cy="139" r="15" fill="url(#pugEye)" />
          <circle cx="88" cy="139" r="10" fill="#0d0500" />
          <circle cx="132" cy="139" r="10" fill="#0d0500" />
          <circle cx="94" cy="131" r="6" fill="white" opacity="0.9" />
          <circle cx="138" cy="131" r="6" fill="white" opacity="0.9" />
          <circle cx="96" cy="132" r="2.5" fill="#0d0500" />
          <circle cx="140" cy="132" r="2.5" fill="#0d0500" />
          <circle cx="82" cy="144" r="3" fill="white" opacity="0.35" />
          <circle cx="126" cy="144" r="3" fill="white" opacity="0.35" />
          <path d="M 68 130 Q 88 122 108 130" fill="none" stroke="#5a3010" strokeWidth="2.5" opacity="0.45" />
          <path d="M 112 130 Q 132 122 152 130" fill="none" stroke="#5a3010" strokeWidth="2.5" opacity="0.45" />
        </g>
      )}

      {/* muzzle */}
      <ellipse cx="110" cy="168" rx="36" ry="28" fill="url(#pugMuzzle)" />
      <path d="M 76 160 Q 74 170 78 178" fill="none" stroke="#8a5820" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M 144 160 Q 146 170 142 178" fill="none" stroke="#8a5820" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M 82 156 Q 110 150 138 156" fill="none" stroke="#8a5820" strokeWidth="2" opacity="0.35" />

      {/* nose */}
      <rect x="97" y="150" width="26" height="6" rx="3" fill="#1a0800" opacity="0.45" />
      <ellipse cx="110" cy="160" rx="18" ry="12" fill="#1a0800" />
      <ellipse cx="102" cy="159" rx="6.5" ry="5.5" fill="#2d1008" />
      <ellipse cx="118" cy="159" rx="6.5" ry="5.5" fill="#2d1008" />
      <ellipse cx="104" cy="155" rx="3.5" ry="2.5" fill="#5a3010" opacity="0.65" />
      <ellipse cx="116" cy="155" rx="3.5" ry="2.5" fill="#5a3010" opacity="0.65" />

      {/* mouth */}
      <path d="M 110 171 Q 96 182 90 179" fill="none" stroke="#6b3a18" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 110 171 Q 124 182 130 179" fill="none" stroke="#6b3a18" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 90 180 Q 110 188 130 180" fill="none" stroke="#8a5820" strokeWidth="2" opacity="0.35" />

      {/* chin wrinkle */}
      <path d="M 86 186 Q 110 192 134 186" fill="none" stroke="#8a5820" strokeWidth="2.5" opacity="0.3" />

      {/* bandana */}
      {bandana && (
        <g>
          <path d="M 58 192 Q 110 182 162 192 L 110 218 Z" fill="#f97316" opacity="0.95" />
          <path d="M 58 192 Q 110 200 162 192" fill="none" stroke="#ea580c" strokeWidth="2" />
          {[0.2,0.4,0.6,0.8].map((t,i) => (
            <circle key={i} cx={58+t*104} cy={192} r="2.5" fill="#fed7aa" opacity="0.7" />
          ))}
        </g>
      )}

      {/* bowtie */}
      {bowtie && !bandana && (
        <g transform="translate(110,192)">
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
          <path d="M 58 192 Q 110 208 162 192" fill="none" stroke="#e5e7eb" strokeWidth="3" strokeLinecap="round" />
          {[0.05,0.15,0.25,0.35,0.45,0.55,0.65,0.75,0.85,0.95].map((t, i) => {
            const x = 58 + t * 104;
            const y = 192 + Math.sin(t * Math.PI) * 15;
            return <circle key={i} cx={x} cy={y} r="5.5" fill={i%3===0?"#fce7f3":i%3===1?"#f5f5f5":"#fce7f3"}
              stroke="#d1d5db" strokeWidth="0.5" />;
          })}
        </g>
      )}
    </svg>
  );
}
