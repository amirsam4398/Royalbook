import React, { useState } from 'react';

export default function App() {
  const [salonName, setSalonName] = useState(import.meta.env.VITE_SALON_NAME || "زیباسرای طوبی");
  const [managerName, setManagerName] = useState(import.meta.env.VITE_MANAGER_NAME || "خانم رشیدی");
  const [cardNumber, setCardNumber] = useState(import.meta.env.VITE_CARD_NUMBER || "6037-9974-1234-5678");

  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerSocialId, setCustomerSocialId] = useState('');
  const [depositPaid, setDepositPaid] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const services = [
    { id: 1, name: "شنیون تخصصی و میکرو آرایش مو (نرخ کرج)", price: 1800000 },
    { id: 2, name: "اصلاح صورت، ابرو و وکس تخصصی", price: 350000 },
    { id: 3, name: "رنگ، لایت و آمبره مو (تعرفه کرج)", price: 2200000 },
    { id: 4, name: "کاشت و ترمیم حرفه‌ای ناخن", price: 550000 }
  ];

  const [crmCustomers, setCrmCustomers] = useState([
    { id: 1, name: "سارا احمدی", phone: "09123456789", socialId: "@sara_ah", lastService: "شنیون تخصصی" }
  ]);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !customerName || !customerPhone || !depositPaid) return;
    
    const code = "RB-" + Math.floor(100000 + Math.random() * 900000);
    setBookingSuccess({ code, service: selectedService.name, date: selectedDate, time: selectedTime });
    
    setCrmCustomers(prev => [
      { id: Date.now(), name: customerName, phone: customerPhone, socialId: customerSocialId || "ثبت نشده", lastService: selectedService.name },
      ...prev
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20 select-none">
      <header className="bg-slate-900 border-b border-amber-500/20 sticky top-0 z-50 px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-sm font-bold text-amber-400">{salonName}</h1>
          <p className="text-[10px] text-slate-400">مدیریت: {managerName}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('home')} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${activeTab === 'home' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}>رزرو آنلاین</button>
          <button onClick={() => setActiveTab('crm')} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${activeTab === 'crm' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'}`}>سی‌آرام</button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-4">
        {activeTab === 'home' ? (
          <>
            <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-4 text-center">
              <h2 className="text-lg font-bold text-white mb-1">{salonName}</h2>
              <p className="text-xs text-amber-300">مدیریت: {managerName}</p>
            </div>

            <form onSubmit={handleBooking} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-amber-400">خدمات تخصصی سالن</h3>
              <div className="space-y-2">
                {services.map(s => (
                  <div key={s.id} onClick={() => setSelectedService(s)} className={`p-2.5 rounded-xl border cursor-pointer flex justify-between items-center text-xs ${selectedService?.id === s.id ? 'border-amber-500 bg-amber-500/10 text-amber-300' : 'border-slate-800 bg-slate-800/40 text-slate-300'}`}>
                    <span>{s.name}</span>
                    <span className="font-bold text-amber-400">{s.price.toLocaleString()} تومان</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-white" />
                <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-xl px-2 py-2 text-white">
                  <option value="">ساعت نوبت</option>
                  <option value="10:00">۱۰:۰۰ صبح</option>
                  <option value="14:00">۱۴:۰۰ عصر</option>
                </select>
              </div>

              <div className="space-y-2 text-xs">
                <input type="text" placeholder="نام مشتری" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white" />
                <input type="tel" placeholder="شماره موبایل" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white" />
                <input type="text" placeholder="آیدی اینستاگرام یا بله" value={customerSocialId} onChange={(e) => setCustomerSocialId(e.target.value)} className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-white" />
              </div>

              <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/30 text-center space-y-1 text-xs">
                <p className="text-amber-300">شماره کارت واریز بیعانه: <span className="font-mono font-bold">{cardNumber}</span></p>
                <label className="flex items-center justify-center gap-2 pt-1 cursor-pointer">
                  <input type="checkbox" checked={depositPaid} onChange={(e) => setDepositPaid(e.target.checked)} className="accent-amber-500 w-4 h-4 rounded" />
                  <span>بیعانه را پرداخت کردم</span>
                </label>
              </div>

              <button type="submit" className="w-full py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs">ثبت نهایی نوبت</button>
            </form>

            {bookingSuccess && (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 text-center text-xs">
                <p className="text-emerald-400 font-bold">🎉 نوبت ثبت شد! کد پیگیری: {bookingSuccess.code}</p>
              </div>
            )}
          </>
        ) : (
          <div className="space-y-4 text-xs">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2">
              <h3 className="font-bold text-amber-400">سی‌آرام هوشمند</h3>
              <p className="text-slate-400">تعداد ثبت‌شدگان: {crmCustomers.length}</p>
            </div>
            <div className="space-y-2">
              {crmCustomers.map(c => (
                <div key={c.id} className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>{c.name}</span>
                    <span className="text-amber-400">{c.phone}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[10px]">
                    <span>آیدی: <strong className="text-amber-300">{c.socialId}</strong></span>
                    <span>خدمت: {c.lastService}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
