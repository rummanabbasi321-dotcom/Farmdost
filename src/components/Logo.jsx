import React from 'react';
import logo from '../assets/farmdost-logo.png';

export default function Logo({ height = 44, className = '' }) {
  return (
    <a href="#top" className={`fd-logo ${className}`.trim()} aria-label="FarmDost home">
      <img
        src={logo}
        alt="FarmDost"
        height={height}
        style={{
          height,
          width: 'auto',
          display: 'block',
          borderRadius: 8,
        }}
      />
    </a>
  );
}
