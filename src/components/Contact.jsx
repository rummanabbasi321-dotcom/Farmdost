import React from 'react';
import { useLanguage } from '../i18n.jsx';
import { WHATSAPP_HREF, CONTACT_PHONE_DISPLAY } from '../config.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function Contact() {
  const { t } = useLanguage();

  // Mirrors the original renderVals().onSubmit: prevent default and open
  // the same WhatsApp link in a new tab.
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(WHATSAPP_HREF, '_blank', 'noopener');
  };

  return (
    <section
      id="contact"
      style={{
        background:
          'radial-gradient(900px 420px at 15% -40%, color-mix(in srgb,var(--color-section-glow) 55%,transparent), transparent 64%), var(--color-section)',
        marginTop: 24,
        scrollMarginTop: 70,
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(48px,6vw,88px) clamp(20px,5vw,64px)' }}>
        <div
          className="fd-split"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'start' }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Inter'",
                fontWeight: 600,
                fontSize: 'clamp(30px,3.4vw,46px)',
                lineHeight: 1.08,
                letterSpacing: '-0.015em',
                margin: '0 0 16px',
                color: '#fff',
              }}
            >
              {t('ct_h2')}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', maxWidth: '44ch', margin: '0 0 28px' }}>
              {t('ct_p')}
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                fontSize: 16,
                padding: '14px 24px',
                background: '#fff',
                color: 'var(--color-accent)',
                borderColor: '#fff',
              }}
            >
              <WhatsAppIcon size={18} />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,.62)', margin: '14px 0 0' }}>{t('ct_hours')}</p>
          </div>
          <form
            onSubmit={handleSubmit}
            style={{
              background: '#fff',
              border: '1px solid var(--color-divider)',
              borderRadius: 'var(--radius-md)',
              padding: 'clamp(22px,3vw,32px)',
            }}
          >
            <div className="field" style={{ marginBottom: 16 }}>
              <label htmlFor="fd-name">{t('f_name')}</label>
              <input className="input" id="fd-name" type="text" placeholder="Full name" />
            </div>
            <div className="field" style={{ marginBottom: 16 }}>
              <label htmlFor="fd-phone">{t('f_phone')}</label>
              <input className="input" id="fd-phone" type="tel" placeholder="03xx xxxxxxx" />
            </div>
            <div className="field" style={{ marginBottom: 20 }}>
              <label htmlFor="fd-msg">{t('f_msg')}</label>
              <textarea className="input" id="fd-msg" placeholder="e.g. 50 maund of wheat to store this season" />
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{ minHeight: 44, fontSize: 15 }}>
              <span>{t('f_btn')}</span>
            </button>
            <p style={{ fontSize: 12.5, color: 'color-mix(in srgb,var(--color-text) 55%,transparent)', margin: '14px 0 0', textAlign: 'center' }}>
              {t('f_note')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
