import React from 'react';
import { useLanguage } from '../i18n.jsx';
import ImageSlot from './ImageSlot.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,64px)', scrollMarginTop: 70 }}>
      <div
        className="fd-split"
        style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(28px,5vw,72px)', alignItems: 'center' }}
      >
        <div>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 11,
              fontSize: 13,
              letterSpacing: '.06em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: 18,
            }}
          >
            <span style={{ width: 36, height: 1, background: 'var(--color-accent)', display: 'inline-block' }} />
            <span>{t('about_kicker')}</span>
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 'clamp(28px,3vw,40px)',
              letterSpacing: '-0.015em',
              margin: '0 0 18px',
            }}
          >
            {t('about_h2')}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'color-mix(in srgb,var(--color-text) 78%,transparent)',
              maxWidth: '56ch',
              margin: '0 0 16px',
            }}
          >
            {t('about_p1')}
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'color-mix(in srgb,var(--color-text) 78%,transparent)',
              maxWidth: '56ch',
              margin: 0,
            }}
          >
            {t('about_p2')}
          </p>
        </div>
        <figure style={{ margin: 0 }}>
          <ImageSlot id="fd-about" radius={16} aspectRatio="4/5" placeholder="Field photo" />
        </figure>
      </div>
    </section>
  );
}
