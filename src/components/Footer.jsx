import React from 'react';
import { useLanguage } from '../i18n.jsx';
import { getWhatsAppHref } from '../config.js';
import Logo from './Logo.jsx';

export default function Footer() {
  const { t, lang } = useLanguage();
  const whatsappHref = getWhatsAppHref(lang);

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
      <Logo height={40} className="fd-latin" />
      <p style={{ fontSize: 13, color: 'color-mix(in srgb,var(--color-text) 55%,transparent)', margin: 0 }}>{t('foot')}</p>
      <a className="btn btn-ghost" href={whatsappHref} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <span>{t('foot_wa')}</span>
      </a>
    </footer>
  );
}
