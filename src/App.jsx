import React, { useState } from 'react';

export default function App() {
  const [salonName] = useState("زیباسرای طوبی");
  const [managerName] = useState("خانم رشیدی");
  const [managerPhone] = useState("09190358813");
  const [cardNumber, setCardNumber] = useState("");

  const [selectedService, setSelectedService] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("09190358813");
  const [customerInstagram, setCustomerInstagram] = useState("");
  const [customerBale, setCustomerBale] = useState("");
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
    <div className="min-h-screen bg-[#0f0f0f] text-slate-100 font-sans p-4 flex justify-center pb-20" style={{ backgroundColor: '#0f0f0f', color: '#f1f5f9', minHeight: '100vh', padding: '16px', direction: 'rtl', display: 'flex', justifyContent: 'center' }}>
      <div className="w-full max-w-md bg-[#161616] border border-amber-500/40 rounded-3xl p-5 shadow-2xl space-y-5" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#161616', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '24px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* هدر بالایی */}
        <div className="text-center space-y-1 bg-[#1c1a16] border border-amber-500/30 rounded-2xl p-3" style={{ textAlign: 'center', backgroundColor: '#1c1a16', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '12px' }}>
          <p className="text-[10px] tracking-widest text-amber-400 font-mono" style={{ fontSize: '10px', color: '#fbbf24', margin: '0 0 4px 0' }}>ROYALBOOK | پلتفرم هوشمند هلدینگ رویال‌فام</p>
          <p className="text-xs font-bold text-amber-300" style={{ fontSize: '12px', fontWeight: 'bold', color: '#fde047', margin: '0 0 2px 0' }}>سیستم رزواسیون و عدم کنسلی سالن‌های زیبایی</p>
          <p className="text-[10px] text-slate-400" style={{ fontSize: '10px', color: '#94a3b8', margin: 0 }}>تحت مالکیت استارتاپ رویال‌فام</p>
        </div>

        {/* اطلاعات سالن */}
        <div className="text-center space-y-1" style={{ textAlign: 'center' }}>
          <h1 className="text-2xl font-black text-white" style={{ fontSize: '22px', fontWeight: '900', color: '#ffffff', margin: '0 0 4px 0' }}>{salonName}</h1>
          <p className="text-xs text-slate-400" style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 2px 0' }}>مدیریت: سرکار {managerName}</p>
          <p className="text-[11px] text-amber-300 font-mono" style={{ fontSize: '11px', color: '#fde047', margin: 0 }}>تلفن مدیریت: {managerPhone}</p>
        </div>

        {/* قوانین عدم کنسلی */}
        <div className="bg-red-950/30 border border-red-500/30 rounded-2xl p-3 text-center space-y-1 text-xs text-red-300" style={{ backgroundColor: 'rgba(127, 29, 29, 0.3)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '16px', padding: '12px', textAlign: 'center', color: '#fca5a5', fontSize: '11px' }}>
          <p className="font-bold" style={{ fontWeight: 'bold', margin: '0 0 4px 0' }}>⚠️ قوانین مهم رزرو (عدم کنسلی):</p>
          <p className="text-[11px] text-slate-300" style={{ margin: 0, color: '#cbd5e1' }}>وجه واریزی به‌عنوان بیعانه قطعی‌سازی نوبت بوده و به هیچ وجه قابل استرداد یا کنسلی نمی‌باشد.</p>
        </div>

        {/* پلن پایه */}
        <div className="bg-[#1f1d18] border border-amber-500/30 rounded-2xl p-4 text-center space-y-2" style={{ backgroundColor: '#1f1d18', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
          <p className="text-xs font-bold text-amber-400" style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 4px 0' }}>✨ پلن پایه حرفه‌ای (۲.۵ میلیون تومان)</p>
          <p className="text-[11px] text-slate-300" style={{ fontSize: '11px', color: '#cbd5e1', margin: '0 0 6px 0' }}>📊 سی‌آرام هوشمند (ظرفیت ۱۰۰ مشتری) + پنل پیامک</p>
          <div className="text-[10px] text-slate-400 pt-1 border-t border-amber-500/10" style={{ fontSize: '10px', color: '#94a3b8', paddingTop: '6px' }}>مشتریان ثبت‌شده: ۱ از ۱۰۰</div>
        </div>

        {/* دو پلن دیگر */}
        <div className="grid grid-cols-2 gap-2 text-center" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', textAlign: 'center' }}>
          <div className="bg-[#1c1a16] border border-amber-500/20 rounded-xl p-2.5 space-y-1" style={{ backgroundColor: '#1c1a16', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '12px', padding: '10px' }}>
            <p className="text-[11px] font-bold text-amber-400" style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 2px 0' }}>پلن پیشرفته (۶ میلیون)</p>
            <p className="text-[9px] text-slate-400" style={{ fontSize: '9px', color: '#94a3b8', margin: 0 }}>سالن‌های حرفه‌ای</p>
          </div>
          <div className="bg-[#1c1a16] border border-amber-500/40 rounded-xl p-2.5 space-y-1" style={{ backgroundColor: '#1c1a16', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '12px', padding: '10px' }}>
            <p className="text-[11px] font-bold text-amber-300" style={{ fontSize: '11px', fontWeight: 'bold', color: '#fde047', margin: '0 0 2px 0' }}>پلن VIP (۱۲ میلیون)</p>
            <p className="text-[9px] text-slate-400" style={{ fontSize: '9px', color: '#94a3b8', margin: 0 }}>امکانات کامل</p>
          </div>
        </div>

        {/* شماره کارت پویا */}
        <div className="bg-[#1c1a16] border border-dashed border-amber-500/50 rounded-2xl p-4 text-center space-y-2" style={{ backgroundColor: '#1c1a16', border: '1px dashed rgba(245, 158, 11, 0.5)', borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
          <p className="text-xs font-bold text-amber-400" style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', margin: '0 0 8px 0' }}>💳 شماره کارت جهت واریز بیعانه:</p>
          <input 
            type="text" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            placeholder="شماره کارت را وارد کنید..." 
            style={{ width: '100%', backgroundColor: '#111', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '10px', padding: '8px', textAlign: 'center', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }}
          />
          <p className="text-[11px] text-slate-400" style={{ fontSize: '11px', color: '#94a3b8', margin: '6px 0 0 0' }}>به نام: {managerName}</p>
        </div>

        {/* فرم رزرو */}
        <form onSubmit={handleBooking} className="bg-[#1a1a1a] border border-slate-800 rounded-2xl p-4 space-y-4" style={{ backgroundColor: '#1a1a1a', border: '1px solid #27272a', borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 className="text-xs font-bold text-amber-400 text-center" style={{ fontSize: '12px', fontWeight: 'bold', color: '#fbbf24', textAlign: 'center', margin: 0 }}>رزرو آنلاین خدمات و پرداخت بیعانه</h2>
          
          <div className="space-y-1 text-xs" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label className="text-slate-400 text-[11px]" style={{ fontSize: '11px', color: '#94a3b8' }}>انتخاب خدمت تخصصی (نرخ کرج):</label>
            <select 
              value={selectedService} 
              onChange={(e) => setSelectedService(e.target.value)} 
              style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '10px', padding: '10px', color: '#e2e8f0', fontSize: '12px', boxSizing: 'border-box' }}
            >
              <option value="">انتخاب کنید...</option>
              {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>

          <div className="space-y-1 text-xs" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label className="text-slate-400 text-[11px]" style={{ fontSize: '11px', color: '#94a3b8' }}>نام و نام خانوادگی مشتری:</label>
            <input 
              type="text" 
              placeholder="مثال: سارا رضایی" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)} 
              style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '10px', padding: '10px', color: '#e2e8f0', fontSize: '12px', boxSizing: 'border-box' }}
            />
          </div>

          <div className="space-y-1 text-xs" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label className="text-slate-400 text-[11px]" style={{ fontSize: '11px', color: '#94a3b8' }}>شماره تماس مشتری:</label>
            <input 
              type="tel" 
              value={customerPhone} 
              onChange={(e) => setCustomerPhone(e.target.value)} 
              style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '10px', padding: '10px', color: '#e2e8f0', fontSize: '12px', boxSizing: 'border-box' }}
            />
          </div>

          {/* شبکه‌های اجتماعی مشتری */}
          <div className="bg-[#121212] border border-slate-800 rounded-xl p-3 space-y-2" style={{ backgroundColor: '#121212', border: '1px solid #27272a', borderRadius: '12px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p className="text-[11px] font-bold text-amber-400" style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>شبکه‌های اجتماعی مشتری:</p>
            <div className="space-y-2 text-xs">
              <div>
                <label className="text-slate-400 text-[10px]" style={{ fontSize: '10px', color: '#94a3b8' }}>آیدی اینستاگرام:</label>
                <input 
                  type="text" 
                  placeholder="@username" 
                  value={customerInstagram} 
                  onChange={(e) => setCustomerInstagram(e.target.value)} 
                  style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '8px', padding: '8px', color: '#e2e8f0', fontSize: '11px', boxSizing: 'border-box', marginTop: '2px' }}
                />
              </div>
              <div>
                <label className="text-slate-400 text-[10px]" style={{ fontSize: '10px', color: '#94a3b8' }}>آیدی پیام‌رسان بله:</label>
                <input 
                  type="text" 
                  placeholder="@bale_id" 
                  value={customerBale} 
                  onChange={(e) => setCustomerBale(e.target.value)} 
                  style={{ width: '100%', backgroundColor: '#111', border: '1px solid #3f3f46', borderRadius: '8px', padding: '8px', color: '#e2e8f0', fontSize: '11px', boxSizing: 'border-box', marginTop: '2px' }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', paddingTop: '4px' }}>
            <input 
              type="checkbox" 
              checked={depositPaid} 
              onChange={(e) => setDepositPaid(e.target.checked)} 
              style={{ width: '16px', height: '16px', accentColor: '#f59e0b' }} 
            />
            <span className="text-xs text-slate-300" style={{ fontSize: '11px', color: '#cbd5e1' }}>بیعانه را پرداخت کردم (پذیرش قوانین عدم کنسلی)</span>
          </div>

          <button type="submit" className="w-full py-3 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition" style={{ width: '100%', padding: '12px', backgroundColor: '#f59e0b', color: '#09090b', fontWeight: 'bold', borderRadius: '10px', border: 'none', fontSize: '12px', cursor: 'pointer' }}>
            ثبت نهایی و دریافت کد پیگیری
          </button>
        </form>

        {bookingSuccess && (
          <div className="bg-emerald-950/60 border border-emerald-500 rounded-xl p-3 text-center text-xs text-emerald-400 font-bold" style={{ backgroundColor: 'rgba(6, 78, 59, 0.6)', border: '1px solid #059669', borderRadius: '12px', padding: '12px', textAlign: 'center', color: '#34d399', fontSize: '11px', fontWeight: 'bold' }}>
            🎉 نوبت شما ثبت شد! کد پیگیری: {bookingSuccess}
          </div>
        )}

        {/* فوتر مالکیت استارتاپ رویال‌فام */}
        <div className="bg-[#121212] border border-slate-800 rounded-2xl p-3 text-center text-[11px] text-slate-400 space-y-1" style={{ backgroundColor: '#121212', border: '1px solid #27272a', borderRadius: '16px', padding: '12px', textAlign: 'center', fontSize: '11px', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <p className="font-bold text-amber-400" style={{ fontWeight: 'bold', color: '#fbbf24', margin: 0 }}>مالکیت: استارتاپ رویال‌فام</p>
          <p className="text-slate-300" style={{ margin: 0, color: '#cbd5e1' }}>پشتیبانی و توسعه: امیرسام یعقوبی</p>
          <p className="font-mono text-slate-300" style={{ margin: 0, color: '#cbd5e1' }}>تماس: 09366681963</p>
        </div>

      </div>
    </div>
  );
}
