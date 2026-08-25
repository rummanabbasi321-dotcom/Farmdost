import React from 'react';
import { useLanguage } from '../i18n.jsx';
import { WHATSAPP_HREF } from '../config.js';
import { LeafIconSmall } from './Icons.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: 'clamp(28px,3vw,44px) clamp(20px,5vw,64px)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Inter'", fontWeight: 600, fontSize: 15 }}>
        <span
          style={{
            display: 'inline-flex',
            width: 24,
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--color-accent)',
            borderRadius: 6,
            color: 'var(--color-accent)',
          }}
        >
          <LeafIconSmall />
        </span>
        FarmDost
      </div>
      <p style={{ fontSize: 13, color: 'color-mix(in srgb,var(--color-text) 55%,transparent)', margin: 0 }}>{t('foot')}</p>
      <a className="btn btn-ghost" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <span>{t('foot_wa')}</span>
      </a>
    </footer>
  );
}
