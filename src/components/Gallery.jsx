import React from 'react';
import { useLanguage } from '../i18n.jsx';
import ImageSlot from './ImageSlot.jsx';

const SLOTS = ['fd-g1', 'fd-g2', 'fd-g3', 'fd-g4'];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(24px,3vw,40px) clamp(20px,5vw,64px) clamp(48px,6vw,80px)' }}>
      <h2
        style={{
          fontFamily: "'Inter'",
          fontWeight: 600,
          fontSize: 'clamp(24px,2.6vw,34px)',
          letterSpacing: '-0.015em',
          margin: '0 0 26px',
        }}
      >
        {t('gal_h2')}
      </h2>
      <div className="fd-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {SLOTS.map((id, i) => (
          <figure style={{ margin: 0 }} key={id}>
            <ImageSlot id={id} radius={14} aspectRatio="3/4" placeholder={`Photo ${i + 1}`} />
          </figure>
        ))}
      </div>
    </section>
  );
}
