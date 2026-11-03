import React, { useState } from 'react';

export default function App() {
  const [salonName] = useState("زیباسرای طوبی");
  const [managerName] = useState("خانم رشیدی");
  const [cardNumber] = useState("6037-9974-1234-5678");

  const [selectedService, setSelectedService] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [depositPaid, setDepositPaid] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const services = [
    { id: 1, name: "شنیون تخصصی عروس و آرایش مو - ۱,۵۰۰,۰۰۰ تومان", price: 1500000 },
    { id: 2, name: "اصلاح صورت، ابرو و وکس تخصصی - ۳۵۰,۰۰۰ تومان", price: 350000 },
    { id: 3, name: "رنگ، لایت و آمبره مو - ۲,۲۰۰,۰۰۰ تومان", price: 2200000 }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedService || !customerName || !customerPhone || !depositPaid) return;
    const code = "RB-" + Math.floor(100000 + Math.random() * 900000);
    setBookingSuccess(code);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-slate-100 font-sans p-4 flex justify-center pb-20">
      <div className="w-full max-w-md bg-[#161616] border border-amber-500/40 rounded-3xl p-5 shadow-2xl space-y-5">
        
        <div className="text-center space-y-1">
          <p className="text-[10px] tracking-widest text-amber-400 font-mono">ROYALBOOK | پلتفرم هوشمند هلدینگ رویال‌فام</p>
          <h1 className="text-2xl font-black text-white">{salonName}</h1>
          <p className="text-xs text-slate-400">مدیریت: سرکار {managerName}</p>
        </div>

        <div className="bg-[#1f1d18] border border-amber-500/30 rounded-2xl p-4 text-center space-y-2">
          <p className="text-xs font-bold text-amber-400">✨ پلن پایه حرفه‌ای (۲.۵ میلیون تومان)</p>
          <p className="text-[11px] text-slate-300">📊 سی‌آرام هوشمند (ظرفیت ۱۰۰ مشتری) + پنل پیامک</p>
          <div className="text-[10px] text-slate-400 pt-1 border-t border-amber-500/10">مشتریان ثبت‌شده: ۱ از ۱۰۰</div>
        </div>

        <div className="bg-[#1c1a16] border border-dashed border-amber-500/50 rounded-2xl p-4 text-center space-y-2">
          <p className="text-xs font-bold text-amber-400">💳 شماره کارت جهت واریز بیعانه:</p>
          <p className="text-lg font-mono font-bold tracking-wider text-white">{cardNumber}</p>
          <p className="text-[11px] text-slate-400">به نام: {managerName}</p>
        </div>

        <form onSubmit={handleBooking} className="bg-[#1a1a1a] border border-slate-800 rounded-2xl p-4 space-y-4">
          <h2 className="text-xs font-bold text-amber-400 text-center">رزرو آنلاین خدمات و پرداخت بیعانه</h2>
          
          <div className="space-y-1 text-xs">
            <label className="text-slate-400 text-[11px]">انتخاب خدمت تخصصی (نرخ کرج):</label>
            <select 
              value={selectedService} 
              onChange={(e) => setSelectedService(e.target.value)} 
              className="w-full bg-[#111] border border-slate-700 rounded-xl p-2.5 text-slate-200 text-xs"
            >
              <option value="">انتخاب کنید...</option>
              {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>

          <div className="space-y-1 text-xs">
            <label className="text-slate-400 text-[11px]">نام و نام خانوادگی مشتری:</label>
            <input 
              type="text" 
              placeholder="مثال: سارا رضایی" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)} 
              className="w-full bg-[#111] border border-slate-700 rounded-xl p-2.5 text-slate-200 text-xs"
            />
          </div>

          <div className="space-y-1 text-xs">
            <label className="text-slate-400 text-[11px]">شماره تماس مشتری:</label>
            <input 
              type="tel" 
              placeholder="09123456789" 
              value={customerPhone} 
              onChange={(e) => setCustomerPhone(e.target.value)} 
              className="w-full bg-[#111] border border-slate-700 rounded-xl p-2.5 text-slate-200 text-xs font-mono"
            />
          </div>

          <div className="flex items-center justify-center gap-2 pt-2">
            <input 
              type="checkbox" 
              checked={depositPaid} 
              onChange={(e) => setDepositPaid(e.target.checked)} 
              className="accent-amber-500 w-4 h-4 rounded" 
            />
            <span className="text-xs text-slate-300">بیعانه را پرداخت کردم</span>
          </div>

          <button type="submit" className="w-full py-3 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition">
            ثبت نهایی و دریافت کد پیگیری
          </button>
        </form>

        {bookingSuccess && (
          <div className="bg-emerald-950/60 border border-emerald-500 rounded-xl p-3 text-center text-xs text-emerald-400 font-bold">
            🎉 نوبت شما ثبت شد! کد پیگیری: {bookingSuccess}
          </div>
        )}

      </div>
    </div>
  );
}
