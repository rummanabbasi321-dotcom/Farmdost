import React from 'react';
import { useLanguage } from '../i18n.jsx';
import { WHATSAPP_HREF } from '../config.js';
import { WhatsAppIcon } from './Icons.jsx';
import ImageSlot from './ImageSlot.jsx';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(48px,7vw,100px) clamp(20px,5vw,64px) clamp(40px,5vw,72px)',
      }}
    >
      <div
        className="fd-hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 'clamp(28px,5vw,72px)',
          alignItems: 'center',
        }}
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
              marginBottom: 22,
            }}
          >
            <span style={{ width: 36, height: 1, background: 'var(--color-accent)', display: 'inline-block' }} />
            <span>{t('hero_kicker')}</span>
          </span>
          <h1
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 600,
              fontSize: 'clamp(40px,5.6vw,74px)',
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              margin: '0 0 20px',
            }}
            dangerouslySetInnerHTML={{ __html: t('hero_h1') }}
          />
          <p
            style={{
              fontSize: 'clamp(16px,1.4vw,19px)',
              lineHeight: 1.6,
              maxWidth: '52ch',
              color: 'color-mix(in srgb,var(--color-text) 78%,transparent)',
              margin: '0 0 32px',
            }}
          >
            {t('hero_sub')}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              className="btn btn-primary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', fontSize: 15, padding: '12px 22px' }}
            >
              <WhatsAppIcon size={17} />
              <span>{t('hero_cta')}</span>
            </a>
            <a className="btn btn-ghost" href="#solution" style={{ textDecoration: 'none', fontSize: 15 }}>
              <span>{t('hero_how')}</span>
            </a>
          </div>
        </div>
        <figure className="fd-hero-figure" style={{ margin: 0, animation: 'fd-float 7s ease-in-out infinite' }}>
          <ImageSlot id="fd-hero" radius={16} aspectRatio="4/5" fit="contain" placeholder="FarmDost bag" />
        </figure>
      </div>
    </section>
  );
}
