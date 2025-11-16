'use client';

import CookieConsentBanner from 'react-cookie-consent';
import Link from 'next/link';

export function CookieConsent() {
  return (
    <CookieConsentBanner
      location="bottom"
      buttonText="Akceptuję"
      declineButtonText="Odrzuć"
      enableDeclineButton
      cookieName="kobecloud-cookie-consent"
      style={{
        background: 'rgba(11, 15, 25, 0.98)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(99, 102, 241, 0.2)',
        padding: '20px',
        alignItems: 'center',
        boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
      }}
      buttonStyle={{
        background: '#6366F1',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '600',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
      declineButtonStyle={{
        background: 'transparent',
        color: '#94a3b8',
        fontSize: '14px',
        fontWeight: '500',
        padding: '12px 24px',
        borderRadius: '8px',
        border: '1px solid rgba(148, 163, 184, 0.3)',
        cursor: 'pointer',
        marginRight: '12px',
        transition: 'all 0.2s',
      }}
      expires={365}
      overlay={false}
    >
      <div style={{ fontSize: '15px', lineHeight: '1.6', color: '#e2e8f0', maxWidth: '800px' }}>
        <strong style={{ color: '#fff', fontSize: '16px' }}>🍪 Używamy plików cookies</strong>
        <p style={{ margin: '8px 0 0 0', color: '#cbd5e1' }}>
          Ta strona wykorzystuje pliki cookies w celu poprawy jakości świadczonych usług.
          Kontynuując przeglądanie strony, wyrażasz zgodę na ich użycie.{' '}
          <Link
            href="/privacy"
            style={{
              color: '#6366F1',
              textDecoration: 'underline',
              fontWeight: '500'
            }}
          >
            Polityka prywatności
          </Link>
        </p>
      </div>
    </CookieConsentBanner>
  );
}
