import { useId } from 'react';

// Illustrated Prism board — wireframes, an ER diagram, and an AI agent at work.
// Drawn with theme tokens so it follows light/dark mode.
const C = {
  bg: 'var(--color-background-alt)',
  card: 'var(--color-card)',
  border: 'var(--color-border)',
  fg: 'var(--color-foreground)',
  muted: 'var(--color-muted-foreground)',
  primary: 'var(--color-primary)',
  onPrimary: 'var(--color-primary-foreground)',
  tint: 'color-mix(in srgb, var(--color-primary) 14%, transparent)',
};
const HUMAN = '#FB7185';
const STICKY = '#FDE68A';
const STICKY_INK = '#3F3A1E';
const MONO = 'var(--font-mono)';

// Prism's own logo (from the Prism repo): a triangle cut into four facets, the center in brand
// green, beside a monoline "prism" wordmark whose i is dotted with a tiny green prism.
const PRISM_GREEN = '#28E99F';
const CORNER_FACETS = [
  'M19.79 3.58L24.41 12.83A2 2 0 0 1 22.62 15.72L13.38 15.72A2 2 0 0 1 11.59 12.83L16.21 3.58A2 2 0 0 1 19.79 3.58Z',
  'M9.65 23.86L14.27 33.11A2 2 0 0 1 12.48 36L3.24 36A2 2 0 0 1 1.45 33.11L6.07 23.86A2 2 0 0 1 9.65 23.86Z',
  'M29.93 23.86L34.55 33.11A2 2 0 0 1 32.76 36L23.52 36A2 2 0 0 1 21.73 33.11L26.35 23.86A2 2 0 0 1 29.93 23.86Z',
];
const CENTER_FACET =
  'M13.38 18.54L22.62 18.54A2 2 0 0 1 24.41 21.43L19.79 30.68A2 2 0 0 1 16.21 30.68L11.59 21.43A2 2 0 0 1 13.38 18.54Z';

function PrismLogo({ x, y, height }) {
  return (
    <svg x={x} y={y} height={height} width={(height * 274) / 77} viewBox="0 3 274 77" overflow="visible">
      <g transform="translate(0 12) scale(1.7895) translate(-1.24 -2.47)" fill={C.fg}>
        {CORNER_FACETS.map((d) => <path key={d} d={d} />)}
        <path d={CENTER_FACET} fill={PRISM_GREEN} />
      </g>
      <g transform="translate(80 0)" fill="none" stroke={C.fg} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 26V74" />
        <circle cx="20" cy="42" r="16" />
        <path d="M52 58V40Q52 26 66 26" />
        <path d="M82 26V58" />
        <path d="M121 31C118 27 114 26 110 26C103 26 99 29 99 34C99 39 104 41 110 42C116 43 122 45 122 50C122 55 117 58 110 58C105 58 100 56 97 53" />
        <path d="M136 26V58M136 40Q136 26 149 26Q162 26 162 40V58M162 40Q162 26 175 26Q188 26 188 40V58" />
      </g>
      <path d="M162 6 169 18H155Z" fill={PRISM_GREEN} stroke={PRISM_GREEN} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

function Bar({ x, y, w, h = 5, fill = C.muted, opacity = 0.45 }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} opacity={opacity} />;
}

function Cursor({ x, y, color, label, labelInk, labelWidth }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0 L0 15 L4 11 L7 18 L10 16.5 L7 10 L12.5 10 Z" fill={color} stroke={C.card} strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="12" y="15" width={labelWidth} height="17" rx="8.5" fill={color} />
      <text x={12 + labelWidth / 2} y="26.5" textAnchor="middle" fontSize="9.5" fontWeight="600" fontFamily={MONO} fill={labelInk}>
        {label}
      </text>
    </g>
  );
}

function Table({ x, y, name, rows }) {
  const h = 26 + rows.length * 19 + 6;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="150" height={h} rx="8" fill={C.card} stroke={C.border} />
      <path d="M0 8 a8 8 0 0 1 8 -8 h134 a8 8 0 0 1 8 8 v18 h-150 Z" fill={C.tint} />
      <text x="12" y="17.5" fontSize="10.5" fontWeight="700" fontFamily={MONO} fill={C.fg}>{name}</text>
      {rows.map(([field, type, key], i) => (
        <g key={field} transform={`translate(0 ${26 + i * 19})`}>
          <text x="12" y="14" fontSize="9.5" fontFamily={MONO} fill={C.fg}>{field}</text>
          <text x="100" y="14" fontSize="9" fontFamily={MONO} fill={C.muted}>{type}</text>
          {key && <text x="140" y="14" textAnchor="end" fontSize="8" fontWeight="700" fontFamily={MONO} fill={C.primary}>{key}</text>}
        </g>
      ))}
    </g>
  );
}

export default function PrismPreview() {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const dots = `prism-dots-${uid}`;
  const desk = `prism-desk-${uid}`;

  return (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="w-full h-full block" aria-hidden="true">
      <defs>
        <pattern id={dots} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill={C.primary} opacity="0.22" />
        </pattern>
        <clipPath id={desk}>
          <rect x="262" y="78" width="300" height="200" rx="10" />
        </clipPath>
      </defs>

      {/* Canvas */}
      <rect width="800" height="450" fill={C.bg} />
      <rect width="800" height="450" fill={`url(#${dots})`} />

      {/* Top bar */}
      <rect width="800" height="40" fill={C.card} />
      <line x1="0" y1="40.5" x2="800" y2="40.5" stroke={C.border} />
      <PrismLogo x={16} y={11} height={19} />
      <text x="96" y="25" fontSize="10" fontFamily={MONO} fill={C.muted}>/ checkout-flow</text>
      <circle cx="636" cy="20" r="10" fill={C.primary} stroke={C.card} strokeWidth="2" />
      <text x="636" y="23.5" textAnchor="middle" fontSize="9.5" fontWeight="700" fontFamily={MONO} fill={C.onPrimary}>AI</text>
      <circle cx="654" cy="20" r="10" fill={HUMAN} stroke={C.card} strokeWidth="2" />
      <text x="654" y="23.5" textAnchor="middle" fontSize="9.5" fontWeight="700" fontFamily={MONO} fill="#3B0A12">F</text>
      <rect x="682" y="10" width="102" height="21" rx="6" fill={C.primary} />
      <text x="733" y="24" textAnchor="middle" fontSize="10" fontWeight="700" fontFamily={MONO} fill={C.onPrimary}>Share</text>

      {/* Tool rail */}
      <rect x="16" y="64" width="36" height="196" rx="10" fill={C.card} stroke={C.border} />
      <rect x="22" y="102" width="24" height="24" rx="6" fill={C.tint} />
      <g fill="none" stroke={C.muted} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M29 76 L29 89 L32.5 85.5 L35 91 L37 90 L34.5 84.5 L39 84.5 Z" />
        <rect x="27.5" y="107.5" width="13" height="13" rx="2.5" stroke={C.primary} />
        <circle cx="34" cy="146" r="7" />
        <path d="M27 182 L41 168 M35 168 L41 168 L41 174" />
        <path d="M27 206 C 31 196, 35 214, 41 202" />
        <path d="M28 228 h12 v8 l-4 4 h-8 Z M36 240 v-4 h4" />
      </g>

      {/* Mobile wireframe — selected by the agent */}
      <text x="84" y="63" fontSize="9" fontFamily={MONO} fill={C.muted}>Login · Mobile</text>
      <rect x="80" y="78" width="150" height="290" rx="16" fill={C.card} stroke={C.border} />
      <circle cx="155" cy="118" r="14" fill={C.tint} />
      <svg x="146" y="109" width="18" height="18" viewBox="1.24 2.47 33.53 33.53">
        {CORNER_FACETS.map((d) => <path key={d} d={d} fill={C.fg} />)}
        <path d={CENTER_FACET} fill={PRISM_GREEN} />
      </svg>
      <Bar x={113} y={145} w={84} h={7} fill={C.fg} opacity={0.8} />
      <Bar x={100} y={160} w={110} h={4} />
      <rect x="96" y="182" width="118" height="24" rx="6" fill={C.bg} stroke={C.border} />
      <Bar x={104} y={192} w={48} h={4} />
      <rect x="96" y="214" width="118" height="24" rx="6" fill={C.bg} stroke={C.border} />
      <Bar x={104} y={224} w={62} h={4} />
      <rect x="96" y="250" width="118" height="26" rx="6" fill={C.primary} />
      <Bar x={133} y={261} w={44} h={4} fill={C.onPrimary} opacity={0.85} />
      <rect x="96" y="290" width="56" height="22" rx="6" fill="none" stroke={C.border} />
      <rect x="158" y="290" width="56" height="22" rx="6" fill="none" stroke={C.border} />
      <circle cx="124" cy="301" r="4" fill={C.muted} opacity="0.45" />
      <circle cx="186" cy="301" r="4" fill={C.muted} opacity="0.45" />
      <Bar x={118} y={338} w={74} h={4} />
      <rect x="75" y="73" width="160" height="300" rx="19" fill="none" stroke={C.primary} strokeWidth="1.5" />
      {[[75, 73], [235, 73], [75, 373], [235, 373]].map(([hx, hy]) => (
        <rect key={`${hx}-${hy}`} x={hx - 3.5} y={hy - 3.5} width="7" height="7" rx="1.5" fill={C.card} stroke={C.primary} strokeWidth="1.5" />
      ))}

      {/* Desktop wireframe */}
      <text x="262" y="64" fontSize="9" fontFamily={MONO} fill={C.muted}>Dashboard · Desktop</text>
      <rect x="262" y="78" width="300" height="200" rx="10" fill={C.card} />
      <g clipPath={`url(#${desk})`}>
        <rect x="262" y="102" width="64" height="176" fill={C.bg} />
        <polygon points="340,252 362,232 384,240 408,214 432,222 456,196 480,204 504,178 528,186 540,176 540,256 340,256" fill={C.tint} />
      </g>
      <rect x="262" y="78" width="300" height="200" rx="10" fill="none" stroke={C.border} />
      {[274, 284, 294].map((cx) => <circle key={cx} cx={cx} cy="90" r="3" fill={C.border} />)}
      <rect x="312" y="85" width="140" height="10" rx="5" fill={C.bg} />
      <line x1="262" y1="102.5" x2="562" y2="102.5" stroke={C.border} />
      <line x1="326.5" y1="102" x2="326.5" y2="278" stroke={C.border} />
      <Bar x={274} y={116} w={40} fill={C.primary} opacity={0.9} />
      <Bar x={274} y={132} w={34} />
      <Bar x={274} y={148} w={40} />
      <Bar x={274} y={164} w={28} />
      {[338, 410, 482].map((sx, i) => (
        <g key={sx}>
          <rect x={sx} y="114" width="66" height="40" rx="6" fill={C.bg} stroke={C.border} />
          <Bar x={sx + 8} y={123} w={30} h={4} />
          <Bar x={sx + 8} y={135} w={[38, 30, 44][i]} h={8} fill={C.fg} opacity={0.75} />
        </g>
      ))}
      <rect x="338" y="164" width="210" height="102" rx="6" fill="none" stroke={C.border} />
      <polyline points="340,252 362,232 384,240 408,214 432,222 456,196 480,204 504,178 528,186 540,176" fill="none" stroke={C.primary} strokeWidth="2" strokeLinejoin="round" />

      {/* ER diagram */}
      <text x="600" y="64" fontSize="9" fontFamily={MONO} fill={C.muted}>schema.prisma</text>
      <Table x={600} y={70} name="User" rows={[['id', 'uuid', 'PK'], ['email', 'text'], ['name', 'text']]} />
      <Table x={600} y={196} name="Board" rows={[['id', 'uuid', 'PK'], ['ownerId', 'uuid', 'FK'], ['title', 'text']]} />
      <g fill="none" stroke={C.primary} strokeWidth="1.5">
        <path d="M600 106 C 578 106, 578 251, 590 251" />
        <path d="M590 245 L600 251 L590 257 M590 251 H600" />
        <path d="M594 100 V112" />
      </g>

      {/* Design → code */}
      <rect x="600" y="306" width="184" height="112" rx="8" fill={C.card} stroke={C.border} />
      <text x="611" y="323" fontSize="9" fontWeight="700" fontFamily={MONO} fill={C.fg}>login.tsx</text>
      <rect x="716" y="313" width="60" height="15" rx="7.5" fill={C.tint} />
      <text x="746" y="323.5" textAnchor="middle" fontSize="7.5" fontWeight="700" fontFamily={MONO} fill={C.primary}>AS CODE</text>
      <line x1="600" y1="334.5" x2="784" y2="334.5" stroke={C.border} />
      <g fontSize="8.5" fontFamily={MONO}>
        <text x="611" y="351"><tspan fill={C.primary}>{'<Screen'}</tspan><tspan fill={C.muted}>{' name="Login">'}</tspan></text>
        <text x="621" y="365"><tspan fill={C.primary}>{'<Input'}</tspan><tspan fill={C.muted}>{' label="Email" />'}</tspan></text>
        <text x="621" y="379"><tspan fill={C.primary}>{'<Button'}</tspan><tspan fill={C.muted}>{' primary>'}</tspan></text>
        <text x="631" y="393" fill={C.fg}>Sign in</text>
        <text x="621" y="407" fill={C.primary}>{'</Button>'}</text>
      </g>

      {/* Sticky note pointing at the mobile frame */}
      <path d="M432 336 C 360 352, 300 336, 246 308" fill="none" stroke={C.muted} strokeWidth="1.3" strokeDasharray="4 4" opacity="0.8" />
      <path d="M254 306 L245 307.5 L250 315" fill="none" stroke={C.muted} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <g transform="rotate(-3 500 340)">
        <rect x="434" y="298" width="132" height="84" rx="4" fill="#000" opacity="0.12" transform="translate(2 4)" />
        <rect x="434" y="298" width="132" height="84" rx="4" fill={STICKY} />
        <text x="446" y="318" fontSize="9.5" fontWeight="700" fontFamily={MONO} fill={STICKY_INK}>Ask AI ✦</text>
        <text x="446" y="336" fontSize="9" fontFamily={MONO} fill={STICKY_INK}>Add a forgot-</text>
        <text x="446" y="349" fontSize="9" fontFamily={MONO} fill={STICKY_INK}>password link</text>
        <text x="446" y="362" fontSize="9" fontFamily={MONO} fill={STICKY_INK}>under Sign in</text>
      </g>

      {/* Agent status */}
      <rect x="250" y="404" width="300" height="32" rx="16" fill={C.card} stroke={C.border} />
      <circle cx="270" cy="420" r="4" fill={C.primary} />
      <circle cx="270" cy="420" r="8" fill="none" stroke={C.primary} opacity="0.35" />
      <text x="284" y="423.5" fontSize="9.5" fontFamily={MONO} fill={C.muted}>
        <tspan fill={C.fg} fontWeight="700">Claude Code</tspan> is editing Login…
      </text>

      {/* Cursors */}
      <Cursor x={206} y={262} color={C.primary} label="Claude Code" labelInk={C.onPrimary} labelWidth={74} />
      <Cursor x={470} y={204} color={HUMAN} label="Fahim" labelInk="#3B0A12" labelWidth={44} />
    </svg>
  );
}
