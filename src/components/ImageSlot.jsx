import React from 'react';
import { IMAGES } from '../images.js';

// Mirrors the original <image-slot> elements: same id, aspect-ratio, border
// radius, object-fit, and the exact images from FarmDost Landing.html.
export default function ImageSlot({
  id,
  radius = 16,
  aspectRatio,
  placeholder,
  fit = 'cover',
  src,
  style = {},
}) {
  const imageSrc = src || IMAGES[id];

  return (
    <div
      id={id}
      className="fd-img-slot"
      style={{
        borderRadius: radius,
        aspectRatio,
        overflow: 'hidden',
        ...style,
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={placeholder || ''}
          style={{
            width: '100%',
            height: '100%',
            objectFit: fit,
            display: 'block',
          }}
        />
      ) : (
        placeholder
      )}
    </div>
  );
}
