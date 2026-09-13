import type { AccessoryId } from "./types";

export function PugSVG({ worn }: { worn: Set<AccessoryId> }) {
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
    <svg viewBox="0 0 220 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Body fur — warm fawn */}
        <radialGradient id="pgFur" cx="45%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#e8c18a" />
          <stop offset="60%"  stopColor="#c9944f" />
          <stop offset="100%" stopColor="#a06828" />
        </radialGradient>
        {/* Belly — lighter */}
        <radialGradient id="pgBelly" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#f7e4c0" />
          <stop offset="100%" stopColor="#ddb87a" />
        </radialGradient>
        {/* Face — slightly darker than body */}
        <radialGradient id="pgFace" cx="50%" cy="38%" r="58%">
          <stop offset="0%"   stopColor="#d4a060" />
          <stop offset="100%" stopColor="#9a6030" />
        </radialGradient>
        {/* Muzzle / mask — dark pug mask */}
        <radialGradient id="pgMask" cx="50%" cy="50%" r="55%">
          <stop offset="0%"   stopColor="#5a3010" />
          <stop offset="100%" stopColor="#2d1508" />
        </radialGradient>
        {/* Muzzle pad — lighter buff */}
        <radialGradient id="pgMuzzle" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#e8c49a" />
          <stop offset="100%" stopColor="#c8904a" />
        </radialGradient>
        {/* Ear — dark velvety */}
        <radialGradient id="pgEar" cx="40%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#6b3a18" />
          <stop offset="100%" stopColor="#2d1508" />
        </radialGradient>
        {/* Leg shadow */}
        <radialGradient id="pgLeg" cx="40%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#daa85a" />
          <stop offset="100%" stopColor="#8a5820" />
        </radialGradient>
        {/* Eye iris */}
        <radialGradient id="pgEye" cx="35%" cy="30%" r="65%">
          <stop offset="0%"   stopColor="#6b3010" />
          <stop offset="60%"  stopColor="#2d1508" />
          <stop offset="100%" stopColor="#100800" />
        </radialGradient>
        <filter id="pgShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#00000030" />
        </filter>
        <filter id="pgSoft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ── GROUND SHADOW ── */}
      <ellipse cx="110" cy="370" rx="70" ry="10" fill="#00000018" />

      {/* ── CURLY TAIL ── */}
      <path
        d="M 152 268 Q 185 255 180 228 Q 175 208 162 216 Q 155 224 160 236 Q 165 248 150 256"
        fill="none" stroke="#8a5820" strokeWidth="13" strokeLinecap="round"
      />
      {/* tail tip lighter curl */}
      <path
        d="M 152 268 Q 180 256 176 232 Q 172 214 163 220"
        fill="none" stroke="#c9944f" strokeWidth="7" strokeLinecap="round" opacity="0.6"
      />
      <circle cx="162" cy="216" r="9" fill="#ddb87a" />

      {/* ── BACK HAUNCHES ── */}
      <ellipse cx="68"  cy="300" rx="26" ry="34" fill="url(#pgLeg)" />
      <ellipse cx="152" cy="300" rx="26" ry="34" fill="url(#pgLeg)" />
      {/* haunch shading */}
      <ellipse cx="62"  cy="308" rx="14" ry="20" fill="#8a5820" opacity="0.25" />
      <ellipse cx="158" cy="308" rx="14" ry="20" fill="#8a5820" opacity="0.25" />

      {/* ── BODY — wide barrel chest ── */}
      <ellipse cx="110" cy="248" rx="62" ry="68" fill="url(#pgFur)" filter="url(#pgShadow)" />
      {/* body side shading */}
      <ellipse cx="80"  cy="255" rx="18" ry="50" fill="#8a5820" opacity="0.12" />
      <ellipse cx="140" cy="255" rx="18" ry="50" fill="#8a5820" opacity="0.12" />
      {/* belly */}
      <ellipse cx="110" cy="260" rx="38" ry="50" fill="url(#pgBelly)" />
      {/* belly centre line */}
      <path d="M 110 215 Q 110 265 110 305" fill="none" stroke="#c9944f" strokeWidth="1.5" opacity="0.2" />

      {/* ── JUMPER ── */}
      {jumper && (
        <g>
          <ellipse cx="110" cy="242" rx="62" ry="58" fill="#6366f1" opacity="0.92" />
          {/* knit ribbing */}
          {[-28,-14,0,14,28].map((dx, i) => (
            <line key={i}
              x1={110+dx} y1={200} x2={110+dx-1} y2={292}
              stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round"
            />
          ))}
          {/* collar band */}
          <path d="M 55 214 Q 110 205 165 214" fill="none" stroke="#4f46e5" strokeWidth="11" strokeLinecap="round" />
          <path d="M 55 214 Q 110 205 165 214" fill="none" stroke="#6366f1" strokeWidth="7" strokeLinecap="round" />
        </g>
      )}

      {/* ── HANDBAG ── */}
      {bag && (
        <g transform="translate(166,228)">
          <rect x="0" y="0" width="36" height="30" rx="7" fill="#f43f5e" />
          <path d="M 6 0 Q 18 -15 30 0" fill="none" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
          <rect x="10" y="11" width="16" height="11" rx="4" fill="#fda4af" />
          <circle cx="18" cy="16" r="3.5" fill="#f43f5e" />
        </g>
      )}

      {/* ── FRONT LEGS — short stubby pug legs ── */}
      {/* left leg */}
      <rect x="66"  y="290" width="30" height="52" rx="15" fill="url(#pgLeg)" />
      <ellipse cx="81"  cy="342" rx="18" ry="10" fill="#a06828" />
      {/* right leg */}
      <rect x="124" y="290" width="30" height="52" rx="15" fill="url(#pgLeg)" />
      <ellipse cx="139" cy="342" rx="18" ry="10" fill="#a06828" />

      {/* ── SOCKS ── */}
      {socks && (
        <g>
          <rect x="66"  y="316" width="30" height="26" rx="13" fill="#10b981" />
          <line x1="66"  y1="325" x2="96"  y2="325" stroke="#34d399" strokeWidth="3" />
          <line x1="66"  y1="332" x2="96"  y2="332" stroke="#34d399" strokeWidth="3" />
          <rect x="124" y="316" width="30" height="26" rx="13" fill="#10b981" />
          <line x1="124" y1="325" x2="154" y2="325" stroke="#34d399" strokeWidth="3" />
          <line x1="124" y1="332" x2="154" y2="332" stroke="#34d399" strokeWidth="3" />
        </g>
      )}

      {/* ── SHOES ── */}
      {shoes && (
        <g>
          <ellipse cx="81"  cy="344" rx="22" ry="11" fill="#0ea5e9" />
          <rect    x="59"   y="330" width="44" height="16" rx="8" fill="#38bdf8" />
          <line x1="66" y1="333" x2="96" y2="333" stroke="white" strokeWidth="2" />
          <ellipse cx="139" cy="344" rx="22" ry="11" fill="#0ea5e9" />
          <rect    x="117"  y="330" width="44" height="16" rx="8" fill="#38bdf8" />
          <line x1="124" y1="333" x2="154" y2="333" stroke="white" strokeWidth="2" />
        </g>
      )}

      {/* ── PAW TOES ── */}
      {!shoes && (
        <g fill="#8a5820">
          <circle cx="73"  cy="344" r="6.5" />
          <circle cx="82"  cy="347" r="6.5" />
          <circle cx="91"  cy="344" r="6.5" />
          <circle cx="131" cy="344" r="6.5" />
          <circle cx="140" cy="347" r="6.5" />
          <circle cx="149" cy="344" r="6.5" />
        </g>
      )}

      {/* ── NECK — thick pug neck ── */}
      <ellipse cx="110" cy="188" rx="38" ry="22" fill="#b8784a" />
      {/* neck shadow fold */}
      <path d="M 76 188 Q 110 196 144 188" fill="none" stroke="#8a5820" strokeWidth="4" opacity="0.3" />

      {/* ── HEAD — big round pug head ── */}
      <ellipse cx="110" cy="142" rx="62" ry="58" fill="url(#pgFace)" filter="url(#pgShadow)" />

      {/* ── DARK MASK — the classic pug black mask ── */}
      {/* mask covers forehead-to-muzzle area */}
      <ellipse cx="110" cy="152" rx="46" ry="42" fill="url(#pgMask)" opacity="0.72" />
      {/* mask fade edges */}
      <ellipse cx="110" cy="148" rx="50" ry="44" fill="url(#pgMask)" opacity="0.18" />

      {/* ── FOREHEAD WRINKLES ── */}
      <path d="M 90 110 Q 110 104 130 110" fill="none" stroke="#7a4a20" strokeWidth="3"   strokeLinecap="round" opacity="0.7" />
      <path d="M 88 120 Q 110 113 132 120" fill="none" stroke="#7a4a20" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
      <path d="M 90 130 Q 110 123 130 130" fill="none" stroke="#7a4a20" strokeWidth="2"   strokeLinecap="round" opacity="0.3" />
      {/* centre brow furrow */}
      <path d="M 107 108 Q 110 116 113 108" fill="none" stroke="#5a3010" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

      {/* ── EARS — soft floppy button ears ── */}
      {/* left ear */}
      <path d="M 56 126 Q 38 108 44 86 Q 52 68 68 82 Q 78 96 74 120 Q 68 134 58 128 Z"
        fill="url(#pgEar)" />
      {/* ear inner fold */}
      <path d="M 60 124 Q 46 108 50 90 Q 56 76 66 86 Q 72 98 70 118"
        fill="none" stroke="#1a0a00" strokeWidth="2" opacity="0.4" />
      {/* right ear */}
      <path d="M 164 126 Q 182 108 176 86 Q 168 68 152 82 Q 142 96 146 120 Q 152 134 162 128 Z"
        fill="url(#pgEar)" />
      <path d="M 160 124 Q 174 108 170 90 Q 164 76 154 86 Q 148 98 150 118"
        fill="none" stroke="#1a0a00" strokeWidth="2" opacity="0.4" />

      {/* ── TOP HAT ── */}
      {tophat && (
        <g>
          <rect x="58" y="72" width="104" height="9" rx="4.5" fill="#1f2937" />
          <rect x="70" y="24"  width="80"  height="50" rx="7"   fill="#1f2937" />
          <rect x="73" y="27"  width="74"  height="13" rx="5"   fill="#374151" />
          <rect x="70" y="66"  width="80"  height="8"  rx="3"   fill="#374151" />
        </g>
      )}

      {/* ── CROWN ── */}
      {crown && (
        <g>
          <path d="M 70 100 L 70 72 L 90 86 L 110 64 L 130 86 L 150 72 L 150 100 Z" fill="#fbbf24" />
          <rect x="70" y="98" width="80" height="13" rx="5" fill="#f59e0b" />
          <circle cx="110" cy="70" r="7"   fill="#ef4444" />
          <circle cx="82"  cy="84" r="5.5" fill="#3b82f6" />
          <circle cx="138" cy="84" r="5.5" fill="#3b82f6" />
          {/* crown details */}
          <line x1="70" y1="98" x2="150" y2="98" stroke="#d97706" strokeWidth="1.5" opacity="0.5" />
        </g>
      )}

      {/* ── BOW ── */}
      {bow && !tophat && !crown && (
        <g transform="translate(110,88)">
          <ellipse cx="-20" cy="0" rx="18" ry="11" fill="#ec4899" />
          <ellipse cx="20"  cy="0" rx="18" ry="11" fill="#ec4899" />
          <circle  cx="0"   cy="0" r="8"            fill="#f9a8d4" />
          <ellipse cx="-20" cy="0" rx="14" ry="7"   fill="#f472b6" opacity="0.4" />
          <ellipse cx="20"  cy="0" rx="14" ry="7"   fill="#f472b6" opacity="0.4" />
        </g>
      )}

      {/* ── EYES — large bulging pug eyes ── */}
      {sunnies ? (
        <g>
          {/* wide sunglass frames for big pug eyes */}
          <ellipse cx="88"  cy="138" rx="22" ry="16" fill="#1e293b" />
          <ellipse cx="132" cy="138" rx="22" ry="16" fill="#1e293b" />
          <line x1="110" y1="138" x2="110" y2="138" stroke="#475569" strokeWidth="4" />
          <line x1="66"   y1="138" x2="58"  y2="136" stroke="#475569" strokeWidth="3" />
          <line x1="154"  y1="138" x2="162" y2="136" stroke="#475569" strokeWidth="3" />
          {/* lens sheen */}
          <ellipse cx="80"  cy="133" rx="7" ry="4" fill="#334155" opacity="0.5" />
          <ellipse cx="124" cy="133" rx="7" ry="4" fill="#334155" opacity="0.5" />
        </g>
      ) : (
        <g>
          {/* eye socket dark surround */}
          <circle cx="88"  cy="138" r="22" fill="#1a0800" opacity="0.25" />
          <circle cx="132" cy="138" r="22" fill="#1a0800" opacity="0.25" />
          {/* sclera — slightly off-white, bulging */}
          <circle cx="88"  cy="138" r="19" fill="#f5ece0" />
          <circle cx="132" cy="138" r="19" fill="#f5ece0" />
          {/* iris — dark warm brown */}
          <circle cx="88"  cy="139" r="14" fill="url(#pgEye)" />
          <circle cx="132" cy="139" r="14" fill="url(#pgEye)" />
          {/* pupil */}
          <circle cx="88"  cy="139" r="9"  fill="#0d0500" />
          <circle cx="132" cy="139" r="9"  fill="#0d0500" />
          {/* primary highlight */}
          <circle cx="93"  cy="132" r="5"  fill="white" opacity="0.9" />
          <circle cx="137" cy="132" r="5"  fill="white" opacity="0.9" />
          {/* secondary small highlight */}
          <circle cx="82"  cy="144" r="2.5" fill="white" opacity="0.4" />
          <circle cx="126" cy="144" r="2.5" fill="white" opacity="0.4" />
          {/* eyelid top crease */}
          <path d="M 70 130 Q 88 122 106 130" fill="none" stroke="#5a3010" strokeWidth="2" opacity="0.5" />
          <path d="M 114 130 Q 132 122 150 130" fill="none" stroke="#5a3010" strokeWidth="2" opacity="0.5" />
        </g>
      )}

      {/* ── MUZZLE — big round pug muzzle ── */}
      <ellipse cx="110" cy="166" rx="34" ry="26" fill="url(#pgMuzzle)" />
      {/* muzzle side rolls / wrinkles */}
      <path d="M 78 158 Q 76 168 80 176"  fill="none" stroke="#8a5820" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M 142 158 Q 144 168 140 176" fill="none" stroke="#8a5820" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* muzzle top crease */}
      <path d="M 84 155 Q 110 150 136 155" fill="none" stroke="#8a5820" strokeWidth="2" opacity="0.4" />

      {/* ── NOSE — flat wide pug nose ── */}
      {/* nose bridge */}
      <rect x="96" y="148" width="28" height="6" rx="3" fill="#1a0800" opacity="0.5" />
      {/* nose pad */}
      <ellipse cx="110" cy="158" rx="17" ry="11" fill="#1a0800" />
      {/* nostrils */}
      <ellipse cx="102" cy="157" rx="6" ry="5" fill="#2d1008" />
      <ellipse cx="118" cy="157" rx="6" ry="5" fill="#2d1008" />
      {/* nose highlight */}
      <ellipse cx="105" cy="154" rx="3" ry="2" fill="#5a3010" opacity="0.7" />
      <ellipse cx="115" cy="154" rx="3" ry="2" fill="#5a3010" opacity="0.7" />

      {/* ── MOUTH ── */}
      <path d="M 110 169 Q 96 180 90 177"  fill="none" stroke="#6b3a18" strokeWidth="3" strokeLinecap="round" />
      <path d="M 110 169 Q 124 180 130 177" fill="none" stroke="#6b3a18" strokeWidth="3" strokeLinecap="round" />
      {/* chin fold */}
      <path d="M 90 178 Q 110 185 130 178" fill="none" stroke="#8a5820" strokeWidth="2" opacity="0.4" />

      {/* ── CHIN WRINKLE ── */}
      <path d="M 88 184 Q 110 190 132 184" fill="none" stroke="#8a5820" strokeWidth="2.5" opacity="0.35" />

      {/* ── SCARF ── */}
      {scarf && (
        <g>
          <path d="M 58 190 Q 110 180 162 190 Q 110 204 58 190 Z" fill="#dc2626" />
          <path d="M 58 190 Q 110 202 162 190" fill="none" stroke="#b91c1c" strokeWidth="2" />
          {/* hanging end */}
          <rect x="68" y="190" width="18" height="36" rx="7" fill="#dc2626" />
          <line x1="68" y1="202" x2="86" y2="202" stroke="#b91c1c" strokeWidth="2.5" />
          <line x1="68" y1="210" x2="86" y2="210" stroke="#b91c1c" strokeWidth="2.5" />
          {/* fringe */}
          <line x1="68" y1="224" x2="70" y2="232" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
          <line x1="74" y1="225" x2="76" y2="233" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
          <line x1="80" y1="224" x2="82" y2="232" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
          <line x1="86" y1="224" x2="88" y2="232" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {/* ── NECKLACE ── */}
      {necklace && !scarf && (
        <g>
          <path d="M 60 190 Q 110 206 160 190" fill="none" stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />
          {[0.08,0.18,0.28,0.38,0.48,0.58,0.68,0.78,0.88,0.96].map((t, i) => {
            const x = 60 + t * 100;
            const y = 190 + Math.sin(t * Math.PI) * 15;
            return (
              <circle key={i} cx={x} cy={y} r="5"
                fill={i % 2 === 0 ? "#a855f7" : "#ec4899"}
              />
            );
          })}
        </g>
      )}
    </svg>
  );
}
