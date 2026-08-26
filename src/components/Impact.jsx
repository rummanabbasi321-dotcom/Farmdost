import React from 'react';
import { useLanguage } from '../i18n.jsx';

const BLOCKS = [
  { tKey: 'impact_reach_t', pKey: 'impact_reach_p' },
  { tKey: 'impact_grain_t', pKey: 'impact_grain_p' },
  { tKey: 'impact_export_t', pKey: 'impact_export_p' },
  { tKey: 'impact_vision_t', pKey: 'impact_vision_p' },
];

export default function Impact() {
  const { t } = useLanguage();

  return (
    <section
      id="impact"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,64px)',
        scrollMarginTop: 70,
      }}
    >
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
        <span>{t('impact_kicker')}</span>
      </span>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 'clamp(28px,3vw,40px)',
          letterSpacing: '-0.015em',
          margin: '0 0 28px',
          maxWidth: '28ch',
        }}
      >
        {t('impact_h2')}
      </h2>
      <div className="fd-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {BLOCKS.map(({ tKey, pKey }) => (
          <article className="card" style={{ padding: 24 }} key={tKey}>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 17,
                margin: '0 0 12px',
                color: 'var(--color-accent)',
              }}
            >
              {t(tKey)}
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                color: 'color-mix(in srgb,var(--color-text) 78%,transparent)',
                margin: 0,
              }}
            >
              {t(pKey)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
