import React from 'react';
import { useLanguage } from '../i18n.jsx';
import { getWhatsAppHref } from '../config.js';
import { WhatsAppIcon } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Navbar() {
  const { t, toggle, langLabel, lang } = useLanguage();
  const whatsappHref = getWhatsAppHref(lang);

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
      <span className="nav-brand" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo height={48} />
      </span>
      <a href="#solution">{t('nav_solution')}</a>
      <a href="#crops">{t('nav_crops')}</a>
      <a href="#compare">{t('nav_compare')}</a>
      <a href="#about">{t('nav_about')}</a>
      <a href="#impact">{t('nav_impact')}</a>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginInlineStart: 'auto' }}>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={toggle}
          style={{ fontFamily: langLabel === 'اردو' ? 'var(--font-urdu)' : 'var(--font-heading)' }}
        >
          {langLabel}
        </button>
        <a
          className="btn btn-primary"
          href={whatsappHref}
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
