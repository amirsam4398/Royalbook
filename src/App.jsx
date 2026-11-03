import React, { useState } from 'react';

export default function App() {
  const clientsData = {
    "tobabeauty89": {
      salonName: "زیباسرای طوبی",
      manager: "سرکار خانم طوبی رشیدی",
      phone: "09190358813",
      instagramId: "tobabeauty89",
      telegramId: "tobabeauty89",
      whatsappNumber: "989190358813",
      defaultCard: "6037-9974-1234-5678",
      cardHolder: "طوبی رشیدی",
      planName: "پلن پایه حرفه‌ای (۲.۵ میلیون تومان)",
      crmLimit: "سی‌آرام هوشمند (ظرفیت ۱۰۰ مشتری) + پنل پیامک",
      services: [
        { name: "شنیون تخصصی عروس و آرایش مو", price: "۱,۵۰۰,۰۰۰ تومان" },
        { name: "میکاپ و گریم تخصصی صورت", price: "۲,۰۰۰,۰۰۰ تومان" },
        { name: "رنگ، لایت و آمبره تخصصی مو", price: "۲,۵۰۰,۰۰۰ تومان" },
        { name: "کاشت و طراحی حرفه‌ای ناخن", price: "۶۰۰,۰۰۰ تومان" },
        { name: "پاکسازی و فیشیال تخصصی پوست", price: "۹۰۰,۰۰۰ تومان" }
      ],
      theme: { bg: "#09090b", cardBg: "#18181b", gold: "#d4af37", text: "#f4f4f5", muted: "#a1a1aa" }
    }
  };

  const pathParts = window.location.pathname.split('/');
  const currentSlug = pathParts[pathParts.length - 1] || "tobabeauty89";
  const client = clientsData[currentSlug] || clientsData["tobabeauty89"];

  const [customCard, setCustomCard] = useState(client.defaultCard);
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 1, name: "سارا رضایی", phone: "09123456789", service: "شنیون تخصصی عروس", status: "تایید شده (بیعانه پرداخت شد)" }
  ]);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedService, setSelectedService] = useState(client.services[0].name);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    const newCust = {
      id: Date.now(),
      name: clientName,
      phone: clientPhone,
      service: selectedService,
      status: "در انتظار واریز بیعانه"
    };
    setCustomers([newCust, ...customers]);
    setClientName('');
    setClientPhone('');
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  const handleCancel = (id) => {
    setCustomers(customers.filter(c => c.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: client.theme.bg, color: client.theme.text, fontFamily: 'Tahoma, sans-serif', direction: 'rtl', display: 'flex', justifyContent: 'center', padding: '15px' }}>
      <div style={{ width: '100%', maxWidth: '480px', backgroundColor: client.theme.cardBg, borderRadius: '24px', border: `2px solid ${client.theme.gold}`, boxShadow: '0 15px 40px rgba(212, 175, 55, 0.3)', padding: '26px', textAlign: 'center', height: 'fit-content', margin: 'auto' }}>
        
        <div style={{ fontSize: '12px', color: client.theme.gold, letterSpacing: '1.5px', marginBottom: '8px', fontWeight: 'bold' }}>
          ROYALBOOK | پلتفرم هوشمند هولدینگ رویال‌فام
        </div>

        <h1 style={{ fontSize: '28px', margin: '8px 0 6px 0', color: client.theme.text, fontWeight: 'bold' }}>
          {client.salonName}
        </h1>

        <p style={{ fontSize: '14px', color: client.theme.muted, marginBottom: '18px' }}>
          مدیریت: {client.manager}
        </p>

        <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)', border: `1px solid ${client.theme.gold}`, borderRadius: '14px', padding: '14px', marginBottom: '18px', textAlign: 'right' }}>
          <div style={{ fontSize: '13px', color: client.theme.gold, fontWeight: 'bold', marginBottom: '6px' }}>✨ {client.planName}</div>
          <div style={{ fontSize: '12px', color: client.theme.text, fontWeight: 'bold' }}>📊 {client.crmLimit}</div>
          <div style={{ fontSize: '11px', color: client.theme.muted, marginTop: '4px' }}>
            مشتریان ثبت‌شده: <span style={{ color: client.theme.gold, fontWeight: 'bold' }}>{customers.length} از ۱۰۰</span>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', border: `1px dashed ${client.theme.gold}`, borderRadius: '14px', padding: '14px', marginBottom: '18px', textAlign: 'center' }}>
          <div style={{ fontSize: '13px', color: client.theme.gold, fontWeight: 'bold', marginBottom: '6px' }}>💳 شماره کارت جهت واریز بیعانه:</div>
          {isEditingCard ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
              <input 
                type="text" 
                defaultValue={customCard}
                onChange={(e) => setCustomCard(e.target.value)}
                style={{ padding: '8px', borderRadius: '8px', backgroundColor: '#111', color: '#fff', border: `1px solid ${client.theme.gold}`, fontSize: '12px', textAlign: 'center' }}
              />
              <button onClick={() => setIsEditingCard(false)} style={{ backgroundColor: client.theme.gold, color: '#000', border: 'none', padding: '6px', borderRadius: '8px', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer' }}>
                ذخیره کارت
              </button>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '17px', color: '#fff', fontWeight: 'bold', letterSpacing: '1.5px', margin: '6px 0' }}>{customCard}</div>
              <div style={{ fontSize: '11px', color: client.theme.muted, marginBottom: '8px' }}>به نام: {client.cardHolder}</div>
              <button onClick={() => setIsEditingCard(true)} style={{ backgroundColor: 'transparent', color: client.theme.gold, border: `1px solid ${client.theme.gold}`, padding: '5px 12px', borderRadius: '8px', fontSize: '11px', cursor: 'pointer', fontWeight: 'bold' }}>
                ✏️ تغییر شماره کارت
              </button>
            </div>
          )}
        </div>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '14px', padding: '16px', marginBottom: '18px', textAlign: 'right' }}>
          <div style={{ fontSize: '15px', color: client.theme.gold, fontWeight: 'bold', marginBottom: '12px', textAlign: 'center' }}>رزرو آنلاین خدمات و پرداخت بیعانه</div>

          {successMsg && (
            <div style={{ backgroundColor: '#25D366', color: '#fff', padding: '10px', borderRadius: '8px', fontSize: '12px', textAlign: 'center', marginBottom: '12px', fontWeight: 'bold' }}>
              ✓ نوبت ثبت شد! لطفاً وجه بیعانه را واریز نمایید.
            </div>
          )}

          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontSize: '12px', color: client.theme.muted, fontWeight: 'bold' }}>انتخاب خدمت تخصصی (نرخ کرج):</label>
            <select 
              value={selectedService} 
              onChange={(e) => setSelectedService(e.target.value)}
              style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#111', color: '#fff', border: `1px solid ${client.theme.gold}`, fontSize: '12px' }}
            >
              {client.services.map((srv, idx) => (
                <option key={idx} value={srv.name}>{srv.name} — {srv.price}</option>
              ))}
            </select>

            <label style={{ fontSize: '12px', color: client.theme.muted, fontWeight: 'bold' }}>نام و نام خانوادگی مشتری:</label>
            <input 
              type="text" 
              placeholder="مثال: سارا رضایی" 
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#111', color: '#fff', border: `1px solid ${client.theme.gold}`, fontSize: '12px' }}
              required
            />

            <label style={{ fontSize: '12px', color: client.theme.muted, fontWeight: 'bold' }}>شماره تماس مشتری:</label>
            <input 
              type="tel" 
              placeholder="09123456789" 
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              style={{ padding: '10px', borderRadius: '8px', backgroundColor: '#111', color: '#fff', border: `1px solid ${client.theme.gold}`, fontSize: '12px' }}
              required
            />

            <button type="submit" style={{ marginTop: '8px', backgroundColor: client.theme.gold, color: '#000', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>
              ثبت نهایی در سی‌آرام و ارسال پیامک
            </button>
          </form>
        </div>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '14px', padding: '14px', marginBottom: '18px', textAlign: 'right' }}>
          <div style={{ fontSize: '13px', color: client.theme.gold, fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>📋 لیست نوبت‌ها و مدیریت کنسلی</div>
          {customers.length === 0 ? (
            <div style={{ fontSize: '11px', color: client.theme.muted, textAlign: 'center', padding: '8px' }}>نوبتی ثبت نشده است.</div>
          ) : (
            customers.map((c) => (
              <div key={c.id} style={{ backgroundColor: '#111', padding: '10px', borderRadius: '8px', marginBottom: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', fontSize: '11px' }}>
                <div style={{ fontWeight: 'bold', color: '#fff', marginBottom: '3px' }}>{c.name} ({c.phone})</div>
                <div style={{ color: client.theme.gold, marginBottom: '3px' }}>{c.service}</div>
                <div style={{ color: client.theme.muted, marginBottom: '6px' }}>وضعیت: {c.status}</div>
                <button onClick={() => handleCancel(c.id)} style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
                  ❌ لغو و کنسل کردن نوبت
                </button>
              </div>
            ))
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
          <a href={`tel:${client.phone}`} style={{ backgroundColor: client.theme.gold, color: '#000', textDecoration: 'none', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px' }}>
            📞 تماس مستقیم: {client.phone}
          </a>
          <a href={`https://wa.me/${client.whatsappNumber}`} target="_blank" rel="noreferrer" style={{ backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px' }}>
            💬 ارتباط در واتساپ
          </a>
          <a href={`https://t.me/${client.telegramId}`} target="_blank" rel="noreferrer" style={{ backgroundColor: '#0088cc', color: '#fff', textDecoration: 'none', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px' }}>
            ✈️ پیام در تلگرام
          </a>
          <a href={`https://instagram.com/${client.instagramId}`} target="_blank" rel="noreferrer" style={{ backgroundColor: 'transparent', color: client.theme.text, border: `1px solid ${client.theme.gold}`, textDecoration: 'none', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span>📸</span> اینستاگرام: @{client.instagramId}
          </a>
        </div>

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px dashed rgba(212, 175, 55, 0.4)', borderRadius: '12px', padding: '12px', textAlign: 'right', fontSize: '11px', color: client.theme.muted, lineHeight: '1.6', marginBottom: '18px' }}>
          <strong style={{ color: client.theme.gold, display: 'block', marginBottom: '4px' }}>📌 راهنمای نصب در بایو اینستاگرام:</strong>
          لینک عمومی وب‌سایت را کپی کرده و در قسمت <code style={{ color: client.theme.gold }}>Website</code> پروفایل اینستاگرام سالن قرار دهید.
        </div>

        <div style={{ fontSize: '11px', color: client.theme.muted, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', lineHeight: '1.6' }}>
          تمامی حقوق این پلتفرم تحت انحصار <b>استارتاپ فناورانه رویال‌فام</b> می‌باشد.<br />
          توسعه و پشتیبانی فنی: امیر سام یعقوبی<br />
          تماس پشتیبانی: <span style={{ color: client.theme.gold, fontWeight: 'bold' }}>09190358813</span>
        </div>
      </div>
    </div>
  );
}
