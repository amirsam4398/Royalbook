import React, { useState } from 'react';

export default function App() {
  const [salonName] = useState("زیباسرای طوبی");
  const [managerName] = useState("خانم رشیدی");
  const [managerPhone] = useState("09190358813");
  const [managerInstagram] = useState("Tobabeauty89");
  const [managerBalePhone] = useState("09190358813");
  const [cardNumber, setCardNumber] = useState("");

  const [selectedService, setSelectedService] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("09190358813");
  const [depositPaid, setDepositPaid] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const services = [
    { id: 1, name: "شنیون تخصصی عروس و آرایش مو - ۱,۸۰۰,۰۰۰ تومان", price: 1800000 },
    { id: 2, name: "میکاپ تخصصی صورت - ۲,۵۰۰,۰۰۰ تومان", price: 2500000 },
    { id: 3, name: "کاشت و ترمیم ناخن - ۶۵۰,۰۰۰ تومان", price: 650000 },
    { id: 4, name: "کاشت و اکستنشن مژه - ۷۵۰,۰۰۰ تومان", price: 750000 }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedService || !customerName || !customerPhone || !depositPaid) return;
    const code = "RB-" + Math.floor(100000 + Math.random() * 900000);
    setBookingSuccess(code);
  };

  return (
    <div style={{ backgroundColor: '#0f0f0f', color: '#f1f5f9', minHeight: '100vh', padding: '16px', fontFamily: 'sans-serif', direction: 'rtl', display: 'flex', justifyContent: 'center', paddingBottom: '80px' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#161616', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '24px', padding: '20px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* هدر بالایی ROYALBOOK */}
        <div style={{ textAlign: 'center', backgroundColor: '#1c1a16', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '12px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '2px', color: '#fbbf24', margin: '0 0 4px 0', fontFamily: 'monospace' }}>ROYALBOOK | پلتفرم هوشمند هلدینگ رویال‌فام</p>
          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#fde047', margin: '0 0 2px 0' }}>سیستم رزواسیون و عدم کنسلی سالن‌های زیبایی</p>
          <p style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>تحت مالکیت استارتاپ رویال‌فام</p>
        </div>

        {/* اطلاعات سالن و راه‌های ارتباطی مدیریت با لینک‌های مستقیم */}
        <div style={{ textAlign: 'center', backgroundColor: '#1c1a16', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '16px', padding: '12px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', margin: '0 0 4px 0' }}>{salonName}</h1>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 2px 0' }}>مدیریت: سرکار {managerName}</p>
          <p style={{ fontSize: '11px', color: '#fde047', margin: '0 0 6px 0', fontFamily: 'monospace' }}>تلفن مدیریت: {managerPhone}</p>
          
          <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px dashed rgba(245, 158, 11, 0.3)', display: 'flex', justifyContent: 'center', gap: '12px', fontSize: '11px' }}>
            <a 
              href={`https://instagram.com/${managerInstagram}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#38bdf8', textDecoration: 'none', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '4px 8px', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}
            >
              اینستاگرام (@{managerInstagram}) ↗
            </a>
            <a 
              href={`tel:${managerBalePhone}`} 
              style={{ color: '#4ade80', textDecoration: 'none', backgroundColor: 'rgba(74, 222, 128, 0.1)', padding: '4px 8px', borderRadius: '8px', border: '1px solid rgba(74, 222, 128, 0.2)' }}
            >
              پیام‌رسان بله ({managerBalePhone}) ↗
            </a>
          </div>
        </div>

        {/* قوانین عدم کنسلی */}
        <div style={{ backgroundColor: 'rgba(127, 29, 29, 0.3)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '16px', padding: '12px', textAlign: 'center', color: '#fca5a5', fontSize: '11px' }}>
          <p style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>⚠️ قوانین مهم رزرو (عدم کنسلی):</p>
          <p style={{ margin: 0, color: '#cbd5e1' }}>وجه واریزی به‌عنوان بیعانه قطعی‌سازی نوبت بوده و به هیچ وجه قابل استرداد یا کنسلی نمی‌باشد.</p>
        </div>

        {/* کتگوری / راهنمای نصب و قرار دادن در بایو اینستاگرام */}
        <div style={{ backgroundColor: '#1c1a16', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '12px', textAlign: 'right', fontSize: '11px', color: '#cbd5e1' }}>
          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 6px 0', textAlign: 'center' }}>📌 راهنمای نصب و قرار دادن در بایو اینستاگرام:</p>
          <ol style={{ margin: '0', paddingRight: '18px', lineHeight: '1.6', color: '#94a3b8' }}>
            <li>وارد پیج اینستاگرام سالن به آیدی <strong style={{ color: '#38bdf8' }}>@{managerInstagram}</strong> شوید.</li>
            <li>گزینه <strong style={{ color: '#fff' }}>Edit Profile</strong> را لمس کنید.</li>
            <li>آدرس زیر را کپی کرده و در قسمت <strong style={{ color: '#fff' }}>Website</strong> جای‌گذاری و ذخیره کنید:</li>
          </ol>
          <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#111', border: '1px dashed rgba(245, 158, 11, 0.4)', borderRadius: '8px', fontFamily: 'monospace', color: '#fde047', textAlign: 'center', wordBreak: 'break-all', fontSize: '10px' }}>
            https://royalbook-ten.vercel.app
          </div>
        </div>

        {/* شماره کارت پویا */}
        <div style={{ backgroundColor: '#1c1a16', border: '1px dashed rgba(245, 158, 11, 0.5)', borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0' }}>💳 شماره کارت جهت واریز بیعانه (پویا):</p>
          <input 
            type="text" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            placeholder="شماره کارت را وارد کنید..." 
            style={{ width: '100%', backgroundColor: '#111', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '10px', padding: '8px', textAlign: 'center', color: '#fff', fontFamily: 'monospace', fontSize: '14px', boxSizing: 'border-box' }}
          />
          <p style={{ fontSize: '11px', color: '#94a3b8', margin: '6px 0 0 0' }}>به نام: {managerName}</p>
        </div>

        {/* فرم رزرو آنلاین */}
        <form onSubmit={handleBooking} style={{ backgroundColor: '#1a1a1a', border: '1px solid #27272a', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', textAlign: 'center', margin: 0 }}>رزرو آنلاین خدمات و پرداخت بیعانه</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#94a3b8' }}>انتخاب خدمت تخصصی (نرخ کرج):</label>
            <select 
              value={selectedService} 
              onChange={(e) => setSelectedService(e.target.value)} 
              style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '10px', padding: '10px', color: '#e2e8f0', fontSize: '12px', boxSizing: 'border-box' }}
            >
              <option value="">انتخاب کنید...</option>
              {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#94a3b8' }}>نام و نام خانوادگی مشتری:</label>
            <input 
              type="text" 
              placeholder="مثال: سارا رضایی" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)} 
              style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '10px', padding: '10px', color: '#e2e8f0', fontSize: '12px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontSize: '11px', color: '#94a3b8' }}>شماره تماس مشتری:</label>
            <input 
              type="tel" 
              value={customerPhone} 
              onChange={(e) => setCustomerPhone(e.target.value)} 
              style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '10px', padding: '10px', color: '#e2e8f0', fontSize: '12px', fontFamily: 'monospace', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', paddingTop: '4px', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              checked={depositPaid} 
              onChange={(e) => setDepositPaid(e.target.checked)} 
              style={{ width: '16px', height: '16px', accentColor: '#f59e0b' }} 
            />
            <span style={{ fontSize: '11px', color: '#cbd5e1' }}>بیعانه را پرداخت کردم (پذیرش قوانین عدم کنسلی)</span>
          </div>

          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#f59e0b', color: '#09090b', fontWeight: 'bold', borderRadius: '10px', border: 'none', fontSize: '12px', cursor: 'pointer' }}>
            ثبت نهایی و دریافت کد پیگیری
          </button>
        </form>

        {bookingSuccess && (
          <div style={{ backgroundColor: 'rgba(6, 78, 59, 0.6)', border: '1px solid #059669', borderRadius: '12px', padding: '12px', textAlign: 'center', color: '#34d399', fontSize: '11px', fontWeight: 'bold' }}>
            🎉 نوبت شما ثبت شد! کد پیگیری: {bookingSuccess}
          </div>
        )}

        {/* فوتر مالکیت و پشتیبانی */}
        <div style={{ backgroundColor: '#121212', border: '1px solid #27272a', borderRadius: '16px', padding: '12px', textAlign: 'center', fontSize: '11px', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <p style={{ fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>مالکیت: استارتاپ رویال‌فام</p>
          <p style={{ margin: 0, color: '#cbd5e1' }}>توسعه و پشتیبانی: امیرسام یعقوبی</p>
          <p style={{ margin: 0, fontFamily: 'monospace', color: '#cbd5e1' }}>تماس: 09366681963</p>
        </div>

      </div>
    </div>
  );
}

