import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n.jsx';
import { getWhatsAppHref } from '../config.js';
import { WhatsAppIcon } from './Icons.jsx';
import Logo from './Logo.jsx';

const LINKS = [
  { href: '#solution', key: 'nav_solution' },
  { href: '#crops', key: 'nav_crops' },
  { href: '#compare', key: 'nav_compare' },
  { href: '#about', key: 'nav_about' },
  { href: '#impact', key: 'nav_impact' },
];

export default function Navbar() {
  const { t, toggle, langLabel, lang } = useLanguage();
  const whatsappHref = getWhatsAppHref(lang);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={`nav ${open ? 'nav-open' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        backdropFilter: 'blur(10px)',
        background: 'color-mix(in srgb, var(--color-bg) 92%, transparent)',
        borderBottom: '1px solid var(--color-divider)',
      }}
    >
      <span className="nav-brand" style={{ display: 'flex', alignItems: 'center' }}>
        <Logo height={44} className="fd-logo-desktop" />
        <Logo height={36} className="fd-logo-mobile" />
      </span>

      <div className="nav-links">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {t(link.key)}
          </a>
        ))}
      </div>

      <div className="nav-actions">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={toggle}
          style={{ fontFamily: langLabel === 'اردو' ? 'var(--font-urdu)' : 'var(--font-heading)' }}
        >
          {langLabel}
        </button>
        <a
          className="btn btn-primary nav-wa"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <WhatsAppIcon />
          <span className="nav-wa-label">{t('nav_whatsapp')}</span>
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? t('nav_close') : t('nav_menu')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {t(link.key)}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', width: '100%', marginTop: 8 }}
            onClick={close}
          >
            <WhatsAppIcon />
            <span>{t('nav_whatsapp')}</span>
          </a>
        </div>
      )}
    </nav>
  );
}
