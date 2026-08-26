import React from 'react';
import { useLanguage } from '../i18n.jsx';

const ROWS = [
  { key: 'cmp_r1', aKey: 'cmp_r1a', bKey: 'cmp_r1b', tag: true },
  { key: 'cmp_r2', aKey: 'cmp_r2a', bKey: 'cmp_r2b', tag: true },
  { key: 'cmp_r3', aKey: 'cmp_r3a', bKey: 'cmp_r3b', tag: false },
  { key: 'cmp_r4', aKey: 'cmp_r4a', bKey: 'cmp_r4b', tag: false },
  { key: 'cmp_r5', aKey: 'cmp_r5a', bKey: 'cmp_r5b', tag: false },
  { key: 'cmp_r6', aKey: 'cmp_r6a', bKey: 'cmp_r6b', tag: false },
];

export default function Comparison() {
  const { t } = useLanguage();

  return (
    <section id="compare" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(40px,5vw,72px) clamp(20px,5vw,64px)', scrollMarginTop: 70 }}>
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: 'clamp(28px,3vw,40px)',
          letterSpacing: '-0.015em',
          margin: '0 0 8px',
        }}
      >
        {t('cmp_h2')}
      </h2>
      <p style={{ fontSize: 15, color: 'color-mix(in srgb,var(--color-text) 68%,transparent)', margin: '0 0 26px' }}>
        {t('cmp_sub')}
      </p>
      <div className="fd-table-wrap">
        <table className="table" style={{ minWidth: 560 }}>
          <thead>
            <tr>
              <th style={{ width: '38%' }}>&nbsp;</th>
              <th>{t('cmp_col1')}</th>
              <th style={{ color: 'var(--color-accent)' }}>{t('cmp_col2')}</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.key}>
                <td style={{ fontWeight: 600 }}>{t(row.key)}</td>
                <td>
                  {row.tag ? <span className="tag tag-outline">{t(row.aKey)}</span> : t(row.aKey)}
                </td>
                <td>
                  {row.tag ? <span className="tag tag-accent">{t(row.bKey)}</span> : t(row.bKey)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
