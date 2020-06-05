import React from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp';

import './style.scss';

export default function NewsletterForm() {
  const [email, setEmail] = React.useState('');
  const [listFields, setListFields] = React.useState({ name: '' });
  const [message, setMessage] = React.useState('');
  const [result, setResult] = React.useState({});

  React.useEffect(() => {
    if (result.result === 'success') {
      setMessage(
        'انتهينا تقريبا... نحتاج فقط إلى تأكيد بريدك الإلكتروني، اضغط على الرابط في رسالة البريد الإلكتروني التي أرسلناها إليك للتو.'
      );
    }

    if (result.result === 'error') {
      if (email) {
        setMessage('لقد سبق لك الإشتراك في قائمة روف البريدية.');
      } else {
        setMessage('البريد الإلكتروني غير سليم.');
      }
    }
  }, [result.msg]);

  function handleSubmit(email, listFields) {
    return async function(e) {
      e.preventDefault();
      const result = await addToMailchimp(email, listFields);
      setResult(result);
    };
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setListFields({ ...listFields, name: e.target.value });
  }

  return (
    <>
      {message && <blockquote className={result.result}>{message}</blockquote>}
      <div>
        <div className="newsletter-form">
          <h4>القائمة البريدية لتوتومينا</h4>
          <p>
            اشترك في قائمة توتومينا البريدية وتوصل بأحدث الدروس والمقالات
            الحصرية.{' '}
          </p>
          <p>ننشر أيضا أحدث عروض العمل عن بعد في ميدان البرمجة وتطوير الويب.</p>
          <form onSubmit={handleSubmit(email, { listFields })}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="البريد الإلكتروني"
            />
            <input
              type="text"
              value={listFields.name}
              onChange={handleNameChange}
              placeholder="الإسم الكامل"
            />
            <button className="button">أريد الإشتراك</button>
          </form>
        </div>
      </div>
    </>
  );
}
