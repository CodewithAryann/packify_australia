import { useId } from 'react'

// Original Australian-theme artwork (drawn for this site, not third-party logos).

type IconProps = { className?: string }

export function AusFlag({ className = 'w-8 h-4' }: IconProps) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 60 30" className={className} role="img" aria-label="Australian flag">
      <defs>
        <clipPath id={`c${id}`}><rect width="30" height="15" /></clipPath>
      </defs>
      <rect width="60" height="30" fill="#012169" />
      <g clipPath={`url(#c${id})`}>
        <path d="M0,0 L30,15 M30,0 L0,15" stroke="#fff" strokeWidth="3" />
        <path d="M0,0 L30,15 M30,0 L0,15" stroke="#C8102E" strokeWidth="1" />
        <path d="M15,0 V15 M0,7.5 H30" stroke="#fff" strokeWidth="5" />
        <path d="M15,0 V15 M0,7.5 H30" stroke="#C8102E" strokeWidth="3" />
      </g>
      <polygon fill="#fff" points="15.00,17.10 15.94,20.55 19.22,19.13 17.11,22.02 20.26,23.70 16.69,23.85 17.34,27.37 15.00,24.66 12.66,27.37 13.31,23.85 9.74,23.70 12.89,22.02 10.78,19.13 14.06,20.55" />
      <polygon fill="#fff" points="45.00,24.40 45.45,26.06 47.03,25.38 46.01,26.77 47.53,27.58 45.81,27.65 46.13,29.34 45.00,28.04 43.87,29.34 44.19,27.65 42.47,27.58 43.99,26.77 42.97,25.38 44.55,26.06" />
      <polygon fill="#fff" points="36.00,12.40 36.45,14.06 38.03,13.38 37.01,14.77 38.53,15.58 36.81,15.65 37.13,17.34 36.00,16.04 34.87,17.34 35.19,15.65 33.47,15.58 34.99,14.77 33.97,13.38 35.55,14.06" />
      <polygon fill="#fff" points="45.00,0.90 45.45,2.56 47.03,1.88 46.01,3.27 47.53,4.08 45.81,4.15 46.13,5.84 45.00,4.54 43.87,5.84 44.19,4.15 42.47,4.08 43.99,3.27 42.97,1.88 44.55,2.56" />
      <polygon fill="#fff" points="54.00,7.90 54.45,9.56 56.03,8.88 55.01,10.27 56.53,11.08 54.81,11.15 55.13,12.84 54.00,11.54 52.87,12.84 53.19,11.15 51.47,11.08 52.99,10.27 51.97,8.88 53.55,9.56" />
      <polygon fill="#fff" points="50.40,17.00 50.78,18.08 51.92,18.11 51.01,18.80 51.34,19.89 50.40,19.24 49.46,19.89 49.79,18.80 48.88,18.11 50.02,18.08" />
    </svg>
  )
}

export function Kangaroo({ className = 'w-28 h-auto', holdingBox = true }: IconProps & { holdingBox?: boolean }) {
  return (
    <svg viewBox="0 0 200 210" className={className} role="img" aria-label="Kangaroo holding a Packify box">
      <path d="M126 56 L114 30 L118 62 Z" fill="#5A3E24" />
      <path
        d="M152 62 C148 55 141 51 134 52 C127 54 122 60 119 68 C116 78 114 88 112 98 C108 106 100 112 92 120 C84 130 82 142 84 152 C70 158 50 168 30 186 L22 196 L40 198 C56 186 72 178 88 174 C90 182 92 188 94 194 L96 198 L146 198 L148 190 L118 184 C114 178 116 170 120 164 C128 154 134 142 134 128 C134 118 134 112 134 108 L152 104 L154 111 L138 120 C138 106 138 92 140 80 C141 72 144 68 148 67 L153 66 C155 64 154 62 152 62 Z"
        fill="#7A5230"
      />
      <path d="M84 152 C82 138 88 124 98 118 C108 122 116 134 116 150 C114 160 100 166 84 152 Z" fill="#8A6038" />
      <path d="M136 54 L136 26 L127 58 Z" fill="#7A5230" />
      <path d="M134 50 L134 33 L130 52 Z" fill="#E4B896" />
      <path d="M134 112 C136 128 132 144 122 160 C118 168 116 174 118 180 L126 178 C124 166 136 150 140 120 L140 112 Z" fill="#D9B77E" />
      <circle cx="143" cy="59" r="2.4" fill="#241A12" />
      <ellipse cx="153" cy="62" rx="2" ry="1.5" fill="#241A12" />
      {holdingBox && (
        <g>
          <polygon points="138,98 158,98 166,92 146,92" fill="#FB923C" />
          <rect x="138" y="98" width="20" height="18" fill="#F97316" />
          <polygon points="158,98 166,92 166,110 158,116" fill="#EA580C" />
          <rect x="146" y="98" width="4" height="18" fill="#FBF7EF" opacity="0.85" />
        </g>
      )}
    </svg>
  )
}

export function CricketBall({ className = 'w-8 h-8' }: IconProps) {
  return (
    <svg viewBox="-16 -16 32 32" className={className} role="img" aria-label="Cricket ball">
      <circle r="14" fill="#B3201F" />
      <path d="M-9,-10 C-3,-4 -3,4 -9,10" fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="1.6 1.6" />
      <path d="M9,-10 C3,-4 3,4 9,10" fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="1.6 1.6" />
    </svg>
  )
}

export function CricketBat({ className = 'w-6 h-12' }: IconProps) {
  return (
    <svg viewBox="-10 -26 20 54" className={className} role="img" aria-label="Cricket bat">
      <rect x="-1.8" y="-24" width="3.6" height="18" rx="1.5" fill="#4A3423" />
      <rect x="-2" y="-20" width="4" height="1.4" fill="#F97316" />
      <rect x="-2" y="-16" width="4" height="1.4" fill="#F97316" />
      <rect x="-6.5" y="-6" width="13" height="32" rx="3" fill="#E4B76B" />
      <line x1="0" y1="-4" x2="0" y2="24" stroke="#C9A66B" strokeWidth="0.8" />
    </svg>
  )
}


// Southern Cross: five stars, used as a quiet decoration on dark sections.
export function SouthernCross({ className = 'w-24 h-24', color = '#fff' }: IconProps & { color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} role="img" aria-label="Southern Cross">
      <polygon fill={color} points="30.0,49.4 30.8,52.3 33.6,51.1 31.8,53.6 34.5,55.0 31.4,55.1 32.0,58.1 30.0,55.8 28.0,58.1 28.6,55.1 25.5,55.0 28.2,53.6 26.4,51.1 29.2,52.3" />
      <polygon fill={color} points="14.0,27.4 14.8,30.3 17.6,29.1 15.8,31.6 18.5,33.0 15.4,33.1 16.0,36.1 14.0,33.8 12.0,36.1 12.6,33.1 9.5,33.0 12.2,31.6 10.4,29.1 13.2,30.3" />
      <polygon fill={color} points="30.0,1.4 30.8,4.3 33.6,3.1 31.8,5.6 34.5,7.0 31.4,7.1 32.0,10.1 30.0,7.8 28.0,10.1 28.6,7.1 25.5,7.0 28.2,5.6 26.4,3.1 29.2,4.3" />
      <polygon fill={color} points="48.0,19.4 48.8,22.3 51.6,21.1 49.8,23.6 52.5,25.0 49.4,25.1 50.0,28.1 48.0,25.8 46.0,28.1 46.6,25.1 43.5,25.0 46.2,23.6 44.4,21.1 47.2,22.3" />
      <polygon fill={color} points="40.0,37.2 40.7,39.1 42.7,39.1 41.1,40.3 41.6,42.3 40.0,41.1 38.4,42.3 38.9,40.3 37.3,39.1 39.3,39.1" />
    </svg>
  )
}

// Golden wattle sprig, Australia's floral emblem.
export function Wattle({ className = 'w-20 h-28' }: IconProps) {
  return (
    <svg viewBox="0 0 80 110" className={className} role="img" aria-label="Golden wattle sprig">
      <path d="M40 108 C38 84 30 64 18 44" fill="none" stroke="#3F6B3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 86 C46 78 56 70 62 56" fill="none" stroke="#3F6B3A" strokeWidth="2.2" strokeLinecap="round" />
      <g fill="#00843D" opacity="0.85">
        <ellipse cx="26" cy="78" rx="12" ry="3" transform="rotate(-30 26 78)" />
        <ellipse cx="50" cy="90" rx="12" ry="3" transform="rotate(25 50 90)" />
        <ellipse cx="24" cy="60" rx="10" ry="2.6" transform="rotate(-40 24 60)" />
        <ellipse cx="54" cy="72" rx="10" ry="2.6" transform="rotate(30 54 72)" />
      </g>
      <g fill="#FFCD00">
        <circle cx="18" cy="40" r="6" /><circle cx="27" cy="34" r="5.5" /><circle cx="12" cy="30" r="5" /><circle cx="22" cy="24" r="5" />
        <circle cx="62" cy="52" r="6" /><circle cx="70" cy="44" r="5" /><circle cx="58" cy="42" r="5" />
      </g>
    </svg>
  )
}

// Outback skyline: sun, Uluru and low red hills, drawn as a faint backdrop.
export function OutbackSkyline({ className = 'w-full h-24' }: IconProps) {
  return (
    <svg viewBox="0 0 800 120" preserveAspectRatio="none" className={className} aria-hidden="true">
      <circle cx="610" cy="58" r="30" fill="#FDBA74" opacity="0.55" />
      <path d="M0 120 L0 96 C80 86 140 92 200 90 C260 88 300 70 340 60 C380 52 420 50 470 54 C510 58 540 70 570 84 C620 92 700 88 800 94 L800 120 Z" fill="#F97316" opacity="0.16" />
      <path d="M300 120 C310 96 322 80 350 72 C390 64 450 64 490 72 C515 78 528 98 536 120 Z" fill="#EA580C" opacity="0.22" />
      <path d="M0 120 L0 108 C120 100 240 112 380 106 C520 100 660 112 800 104 L800 120 Z" fill="#C9A66B" opacity="0.25" />
    </svg>
  )
}

// Stylised Australia outline with major cities, used for the delivery map.
export const AUS_MAIN = "M270.0,12.0 L279.0,45.0 L295.2,55.0 L301.5,90.0 L324.0,108.0 L342.0,130.0 L363.6,158.0 L369.9,190.0 L364.5,215.0 L349.2,240.0 L337.5,275.0 L310.5,288.0 L288.0,288.0 L256.5,285.0 L243.0,265.0 L234.0,260.0 L211.5,253.0 L208.8,237.0 L193.5,233.0 L166.5,220.0 L121.5,227.0 L99.0,243.0 L67.5,245.0 L48.6,255.0 L23.4,248.0 L28.8,220.0 L21.6,195.0 L9.0,165.0 L15.3,125.0 L40.5,110.0 L76.5,95.0 L88.2,80.0 L121.5,45.0 L148.5,53.0 L162.0,28.0 L180.0,20.0 L218.7,25.0 L211.5,43.0 L207.0,55.0 L220.5,65.0 L243.0,80.0 L261.0,70.0 L261.0,30.0 Z"
export const AUS_TAS = "M289.8,312.0 L322.2,314.0 L319.5,335.0 L306.0,341.0 L297.0,330.0 Z"
export const AUS_CITIES = [
  { name: 'Perth', x: 30.6, y: 225.0, dx: 8, anchor: 'start' },
  { name: 'Darwin', x: 164.7, y: 30.0, dx: 8, anchor: 'start' },
  { name: 'Adelaide', x: 234.9, y: 254.0, dx: -8, anchor: 'end' },
  { name: 'Brisbane', x: 364.5, y: 180.0, dx: -8, anchor: 'end' },
  { name: 'Sydney', x: 348.3, y: 244.0, dx: -8, anchor: 'end' },
  { name: 'Melbourne', x: 292.1, y: 283.0, dx: -8, anchor: 'end' },
  { name: 'Hobart', x: 313.2, y: 334.0, dx: -8, anchor: 'end' },
] as const
