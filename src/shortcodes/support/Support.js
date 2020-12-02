import React from 'react';

import config from '../../../data/SiteConfig';

import './style.scss';

export default function Support() {
  return (
    <div className="support-container">
      <p>
        يمكنك دعمنا عبر منصة باتريون لكي نستطيع تسخير وقت أكبر في نشر وتجديد
        المحتوى. <br />
        الدعم سيساعدنا كذلك على تطوير ذلك المحتوى وتحسينه.
      </p>
      <a href={config.patreonPageUrl} className="btn-patreon" target="_blank">
        <span>ادعمنا على باتريون</span>
        <svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32px"
          height="32px"
        >
          <path d="M 2 3 L 2 21 L 6 21 L 6 3 L 2 3 z M 15 3 C 11.141 3 8 6.141 8 10 C 8 13.859 11.141 17 15 17 C 18.859 17 22 13.859 22 10 C 22 6.141 18.859 3 15 3 z" />
        </svg>
      </a>
    </div>
  );
}
