import React from 'react';
import { useLanguage } from '../i18n.jsx';
import ImageSlot from './ImageSlot.jsx';
import { AirtightLinerIcon, OxygenIcon, QualityIcon, MoneyIcon } from './Icons.jsx';

const CARDS = [
  { Icon: AirtightLinerIcon, tKey: 'c1t', bKey: 'c1b' },
  { Icon: OxygenIcon, tKey: 'c2t', bKey: 'c2b' },
  { Icon: QualityIcon, tKey: 'c3t', bKey: 'c3b' },
  { Icon: MoneyIcon, tKey: 'c4t', bKey: 'c4b' },
];

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section
      id="solution"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,64px)',
        scrollMarginTop: 70,
      }}
    >
      <div
        className="fd-split"
        style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(28px,5vw,72px)', alignItems: 'center' }}
      >
        <figure style={{ margin: 0 }}>
          <ImageSlot
            id="fd-cutaway"
            radius={16}
            aspectRatio="1/1"
            fit="contain"
            placeholder="Bag"
            style={{ background: 'var(--color-surface)' }}
          />
        </figure>
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
            <span>{t('sol_kicker')}</span>
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 'clamp(28px,3vw,40px)',
              lineHeight: 1.1,
              letterSpacing: '-0.015em',
              margin: '0 0 18px',
            }}
          >
            {t('sol_h2')}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: 'color-mix(in srgb,var(--color-text) 78%,transparent)',
              maxWidth: '54ch',
              margin: '0 0 30px',
            }}
          >
            {t('sol_p')}
          </p>
          <div className="fd-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {CARDS.map(({ Icon, tKey, bKey }) => (
              <div className="card" key={tKey} style={{ padding: 20 }}>
                <div style={{ color: 'var(--color-accent)', marginBottom: 12 }}>
                  <Icon />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 16, margin: '0 0 8px' }}>{t(tKey)}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: 'color-mix(in srgb,var(--color-text) 70%,transparent)', margin: 0 }}>
                  {t(bKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
