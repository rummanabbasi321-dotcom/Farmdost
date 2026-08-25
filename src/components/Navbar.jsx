import React from 'react';
import { useLanguage } from '../i18n.jsx';
import { WHATSAPP_HREF } from '../config.js';
import { LeafIcon, WhatsAppIcon } from './Icons.jsx';

export default function Navbar() {
  const { t, toggle, langLabel } = useLanguage();

  return (
    <nav
      className="nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(10px)',
        background: 'color-mix(in srgb, var(--color-bg) 82%, transparent)',
        borderBottom: '1px solid var(--color-divider)',
      }}
    >
      <span className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 17 }}>
        <span
          style={{
            display: 'inline-flex',
            width: 26,
            height: 26,
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--color-accent)',
            borderRadius: 7,
            color: 'var(--color-accent)',
          }}
        >
          <LeafIcon />
        </span>
        FarmDost
      </span>
      <a href="#solution">{t('nav_solution')}</a>
      <a href="#crops">{t('nav_crops')}</a>
      <a href="#compare">{t('nav_compare')}</a>
      <a href="#about">{t('nav_about')}</a>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginLeft: 'auto' }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={toggle}
          style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
        >
          {langLabel}
        </button>
        <a
          className="btn btn-primary"
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <WhatsAppIcon />
          <span>{t('nav_whatsapp')}</span>
        </a>
      </div>
    </nav>
  );
}
