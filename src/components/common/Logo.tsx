import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, height = 60 }) => {
  // Calculer la largeur proportionnellement à la hauteur avec plus d'espace pour le texte
  const width = showText ? (height * 240) / 60 : (height * 60) / 60;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={showText ? "0 0 240 60" : "0 0 60 60"} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Symbole : deux cercles connectés (créateur / communauté) */}
      <circle cx="20" cy="30" r="10" fill="#4F46E5"/>
      <circle cx="50" cy="30" r="10" fill="#22D3EE"/>
      <rect x="20" y="28" width="30" height="4" fill="#4F46E5"/>

      {/* Texte */}
      {showText && (
        <text x="70" y="36" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="#111827" letterSpacing="0.5">
          Creator
          <tspan fill="#4F46E5">Bridge</tspan>
        </text>
      )}
    </svg>
  );
};

export default Logo;
