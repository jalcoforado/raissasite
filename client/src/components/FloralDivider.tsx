/**
 * FloralDivider — Decorative floral garland separator between sections
 * Simulates embroidered floral elements with SVG
 */

interface FloralDividerProps {
  variant?: "rose" | "blue" | "green";
  className?: string;
}

export default function FloralDivider({ variant = "rose", className = "" }: FloralDividerProps) {
  const colors = {
    rose: { flower: "#D4919A", leaf: "#A8C9A5", stem: "#A8C9A5" },
    blue: { flower: "#8EB4D7", leaf: "#A8C9A5", stem: "#A8C9A5" },
    green: { flower: "#A8C9A5", leaf: "#8EB4D7", stem: "#A8C9A5" },
  };

  const c = colors[variant];

  return (
    <div className={`flex items-center justify-center py-6 ${className}`}>
      <svg width="280" height="40" viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left branch */}
        <path d="M60 20 Q80 18 100 20 Q110 20 120 18" stroke={c.stem} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
        {/* Right branch */}
        <path d="M160 18 Q170 20 180 20 Q200 22 220 20" stroke={c.stem} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
        
        {/* Left leaves */}
        <ellipse cx="75" cy="17" rx="5" ry="3" fill={c.leaf} opacity="0.6" transform="rotate(-20 75 17)" />
        <ellipse cx="85" cy="22" rx="5" ry="3" fill={c.leaf} opacity="0.5" transform="rotate(15 85 22)" />
        <ellipse cx="95" cy="16" rx="4" ry="2.5" fill={c.leaf} opacity="0.6" transform="rotate(-10 95 16)" />
        
        {/* Right leaves */}
        <ellipse cx="185" cy="22" rx="5" ry="3" fill={c.leaf} opacity="0.5" transform="rotate(-15 185 22)" />
        <ellipse cx="195" cy="17" rx="5" ry="3" fill={c.leaf} opacity="0.6" transform="rotate(20 195 17)" />
        <ellipse cx="205" cy="22" rx="4" ry="2.5" fill={c.leaf} opacity="0.6" transform="rotate(10 205 22)" />
        
        {/* Left flowers */}
        <circle cx="65" cy="18" r="4" fill={c.flower} opacity="0.7" />
        <circle cx="65" cy="18" r="2" fill="white" opacity="0.5" />
        <circle cx="105" cy="19" r="3" fill={c.flower} opacity="0.5" />
        <circle cx="105" cy="19" r="1.5" fill="white" opacity="0.4" />
        
        {/* Center flower (main) */}
        <circle cx="140" cy="20" r="6" fill={c.flower} opacity="0.8" />
        <circle cx="140" cy="20" r="3" fill="white" opacity="0.5" />
        <circle cx="140" cy="14" r="3.5" fill={c.flower} opacity="0.6" />
        <circle cx="140" cy="26" r="3.5" fill={c.flower} opacity="0.6" />
        <circle cx="134" cy="17" r="3.5" fill={c.flower} opacity="0.6" />
        <circle cx="146" cy="17" r="3.5" fill={c.flower} opacity="0.6" />
        <circle cx="134" cy="23" r="3.5" fill={c.flower} opacity="0.6" />
        <circle cx="146" cy="23" r="3.5" fill={c.flower} opacity="0.6" />
        
        {/* Right flowers */}
        <circle cx="175" cy="19" r="3" fill={c.flower} opacity="0.5" />
        <circle cx="175" cy="19" r="1.5" fill="white" opacity="0.4" />
        <circle cx="215" cy="18" r="4" fill={c.flower} opacity="0.7" />
        <circle cx="215" cy="18" r="2" fill="white" opacity="0.5" />

        {/* Tiny dots (embroidery feel) */}
        <circle cx="55" cy="20" r="1" fill={c.flower} opacity="0.4" />
        <circle cx="50" cy="18" r="0.8" fill={c.leaf} opacity="0.4" />
        <circle cx="225" cy="20" r="1" fill={c.flower} opacity="0.4" />
        <circle cx="230" cy="18" r="0.8" fill={c.leaf} opacity="0.4" />
      </svg>
    </div>
  );
}
