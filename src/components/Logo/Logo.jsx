/**
 * Finverra brand mark — the "ascent" emblem: three ascending rounded bars
 * (a growth chart) with a bold upward trend arrow sweeping over them, set on
 * a deep emerald tile with a soft top-light highlight (512x512 source art).
 * Ids are suffixed with useId() because the mark is rendered in both the
 * header and the footer, and duplicate ids would make the paint references
 * ambiguous for anything else on the page.
 */
import { useId } from 'react';

export default function Logo({ className = '' }) {
  const suffix = useId().replace(/[^a-zA-Z0-9]/g, '');
  const id = {
    bg: `fvLogoBg${suffix}`,
    glow: `fvLogoGlow${suffix}`,
    bar: `fvLogoBar${suffix}`,
    arrow: `fvLogoArrow${suffix}`,
    shadow: `fvLogoShadow${suffix}`,
  };

  return (
    <svg className={className} viewBox="0 0 512 512" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id.bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#134E3A" />
          <stop offset="0.55" stopColor="#0B3527" />
          <stop offset="1" stopColor="#061E17" />
        </linearGradient>
        <radialGradient id={id.glow} cx="0.32" cy="0.26" r="0.8">
          <stop offset="0" stopColor="#3BEFA0" stopOpacity="0.32" />
          <stop offset="1" stopColor="#3BEFA0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id.bar} gradientUnits="userSpaceOnUse" x1="256" y1="392" x2="256" y2="212">
          <stop offset="0" stopColor="#0A7A54" />
          <stop offset="0.5" stopColor="#17BC79" />
          <stop offset="1" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id={id.arrow} gradientUnits="userSpaceOnUse" x1="150" y1="268" x2="384" y2="158">
          <stop offset="0" stopColor="#A7F3D0" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>
        <filter id={id.shadow} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#04150F" floodOpacity="0.5" />
        </filter>
      </defs>
      <rect x="28" y="28" width="456" height="456" rx="112" fill={`url(#${id.bg})`} />
      <rect x="28" y="28" width="456" height="456" rx="112" fill={`url(#${id.glow})`} />
      <g filter={`url(#${id.shadow})`}>
        {/* ascending growth bars */}
        <rect x="140" y="320" width="56" height="72" rx="18" fill={`url(#${id.bar})`} />
        <rect x="228" y="268" width="56" height="124" rx="18" fill={`url(#${id.bar})`} />
        <rect x="316" y="216" width="56" height="176" rx="18" fill={`url(#${id.bar})`} />
        {/* upward trend arrow */}
        <path
          d="M150 268 L344 177"
          fill="none"
          stroke={`url(#${id.arrow})`}
          strokeWidth="26"
          strokeLinecap="round"
        />
        <path d="M384 158 L357 204 L331 150 Z" fill={`url(#${id.arrow})`} />
      </g>
    </svg>
  );
}
