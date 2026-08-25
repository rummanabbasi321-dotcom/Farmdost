import React, { createContext, useContext, useMemo, useState } from 'react';

// English strings are the original inline content of each [data-i18n] element.
// Urdu strings are the exact `dict` object from the original bundle's
// Component class.
export const EN = {
  nav_solution: 'Solution',
  nav_crops: 'Crops',
  nav_compare: 'Compare',
  nav_about: 'About',
  nav_whatsapp: 'WhatsApp',
  hero_kicker: 'Hermetic grain storage',
  hero_h1: 'Store your harvest.<br/>Lose nothing.',
  hero_sub:
    'FarmDost hermetic bags seal grain airtight from harvest to sale — stopping insects, moisture and mould without a single chemical. Less spoilage, better quality, a higher price at market.',
  hero_cta: 'Message us on WhatsApp',
  hero_how: 'How it works ↓',
  stat1: 'Post-harvest loss avoided',
  stat2: 'Safe grain storage',
  stat3: 'Chemicals or fumigants',
  stat4: 'Airtight, moisture-proof seal',
  sol_kicker: 'What is a hermetic bag',
  sol_h2: 'Airtight science, simple to use',
  sol_p:
    "A hermetic bag is a multi-layer liner that seals grain away from outside air. Once tied shut, the insects and grain inside consume the trapped oxygen — and with nothing left to breathe, pests die and mould can't grow. No spraying, no re-fumigating, no loss.",
  c1t: 'Airtight liner',
  c1b: 'A sealed inner layer keeps outside air, water and pests locked out.',
  c2t: 'Oxygen runs out',
  c2b: 'Trapped insects use up the air, then die off naturally — no poison needed.',
  c3t: 'Quality preserved',
  c3b: 'Grain keeps its weight, colour and germination for a full season and beyond.',
  c4t: 'More money at sale',
  c4b: 'Store past the glut, sell clean grain later, and command a better price.',
  gal_h2: 'The bags, up close',
  crops_kicker: 'Built for every harvest',
  crops_h2: 'Whatever you grow, store it right',
  crop1n: 'Wheat',
  crop1b: "Hold the season's wheat weevil-free and sell when prices climb.",
  crop2n: 'Rice / Paddy',
  crop2b: 'Keep paddy dry and mould-free through the monsoon months.',
  crop3n: 'Maize',
  crop3b: 'Stop grain borers and aflatoxin before they eat your profit.',
  crop4n: 'Pulses & Seed',
  crop4b: 'Protect lentils, gram and seed stock with full germination intact.',
  cmp_h2: 'Ordinary sacks vs. FarmDost',
  cmp_sub: 'The same grain, six months later.',
  cmp_col1: 'Ordinary jute / PP sack',
  cmp_col2: 'FarmDost hermetic bag',
  cmp_r1: 'Insect damage',
  cmp_r1a: 'Spreads freely',
  cmp_r1b: 'Pests die off',
  cmp_r2: 'Moisture & mould',
  cmp_r2a: 'Seeps in',
  cmp_r2b: 'Sealed out',
  cmp_r3: 'Chemical fumigation',
  cmp_r3a: 'Repeated, costly',
  cmp_r3b: 'None needed',
  cmp_r4: 'Seed germination',
  cmp_r4a: 'Drops sharply',
  cmp_r4b: 'Stays high',
  cmp_r5: 'Safe storage life',
  cmp_r5a: 'Weeks',
  cmp_r5b: '12+ months',
  cmp_r6: 'Price at sale',
  cmp_r6a: 'Forced early sale',
  cmp_r6b: 'Sell on your terms',
  test_kicker: 'From the field',
  t1q: '"Last year I lost half my wheat to weevils. This season, not a single bag spoiled."',
  t1c: 'Wheat farmer · Sahiwal',
  t2q: '"I held my maize three extra months and sold at almost double the harvest-time rate."',
  t2c: 'Maize grower · Okara',
  t3q: '"No more fumigation smell, no more spraying. The grain just stays good."',
  t3c: 'Grain trader · Multan',
  about_kicker: 'About FarmDost',
  about_h2: 'Empowering farmers, securing harvests',
  about_p1:
    "Too many hardworking farmers watch a good harvest rot in storage before it ever reaches a fair price. FarmDost was built to change that — pairing time-tested hermetic storage with simple, honest technology made for Pakistan's fields.",
  about_p2:
    'Every bag can carry a QR code, so buyers see exactly where grain came from and how it was stored — building the trust and transparency our supply chains have always needed.',
  ct_h2: "Let's talk storage",
  ct_p:
    "We deal directly — no online cart, no middlemen. Message us on WhatsApp for pricing, sizes and bulk orders, and we'll get straight back to you.",
  ct_hours: 'Available 9am – 8pm, every day.',
  f_name: 'Your name',
  f_phone: 'Phone / WhatsApp',
  f_msg: 'What do you grow, and how much?',
  f_btn: 'Send enquiry',
  f_note: "We'll reply on WhatsApp or by phone.",
  foot: 'Empowering farmers, securing harvests · © 2026 FarmDost',
  foot_wa: 'WhatsApp us →',
};

export const UR = {
  nav_solution: 'حل',
  nav_crops: 'فصلیں',
  nav_compare: 'موازنہ',
  nav_about: 'تعارف',
  nav_whatsapp: 'واٹس ایپ',
  hero_kicker: 'ہرمیٹک اناج ذخیرہ',
  hero_h1: 'فصل محفوظ رکھیں۔ نقصان صفر۔',
  hero_sub:
    'فارم دوست کے ہرمیٹک بیگ آپ کے اناج کو کٹائی سے منڈی تک ہوا بند رکھتے ہیں — کیڑوں، نمی اور پھپھوندی کو بغیر کسی کیمیکل کے روکتے ہیں۔ کم نقصان، بہتر معیار اور منڈی میں زیادہ قیمت۔',
  hero_cta: 'واٹس ایپ پر ہمیں پیغام بھیجیں',
  hero_how: 'یہ کیسے کام کرتا ہے ↓',
  stat1: 'کٹائی کے بعد بچایا گیا نقصان',
  stat2: 'محفوظ اناج ذخیرہ',
  stat3: 'کوئی کیمیکل یا دوا نہیں',
  stat4: 'مکمل ہوا و نمی بند سیل',
  sol_kicker: 'ہرمیٹک بیگ کیا ہے',
  sol_h2: 'سائنسی طریقہ، استعمال میں آسان',
  sol_p:
    'ہرمیٹک بیگ کئی تہوں والا لائنر ہے جو اناج کو باہر کی ہوا سے مکمل بند کر دیتا ہے۔ بند کرنے کے بعد اندر موجود کیڑے اور اناج آکسیجن ختم کر دیتے ہیں — سانس لینے کو کچھ نہ بچنے پر کیڑے مر جاتے ہیں اور پھپھوندی نہیں بنتی۔ نہ اسپرے، نہ بار بار دوا، نہ نقصان۔',
  c1t: 'ہوا بند لائنر',
  c1b: 'ایک سیل شدہ اندرونی تہہ باہر کی ہوا، پانی اور کیڑوں کو روکتی ہے۔',
  c2t: 'آکسیجن ختم',
  c2b: 'بند کیڑے ہوا استعمال کر کے قدرتی طور پر مر جاتے ہیں — کسی زہر کی ضرورت نہیں۔',
  c3t: 'معیار محفوظ',
  c3b: 'اناج اپنا وزن، رنگ اور اگاؤ پورے سیزن اور اس سے آگے برقرار رکھتا ہے۔',
  c4t: 'فروخت پر زیادہ منافع',
  c4b: 'قیمت بڑھنے تک اناج روکیں، صاف اناج بعد میں بیچیں اور بہتر قیمت پائیں۔',
  gal_h2: 'بیگ قریب سے',
  crops_kicker: 'ہر فصل کے لیے',
  crops_h2: 'آپ جو بھی اگائیں، صحیح طریقے سے محفوظ کریں',
  crop1n: 'گندم',
  crop1b: 'پورے سیزن کی گندم کیڑوں سے پاک رکھیں اور قیمت بڑھنے پر بیچیں۔',
  crop2n: 'چاول / دھان',
  crop2b: 'مون سون کے مہینوں میں دھان خشک اور پھپھوندی سے پاک رکھیں۔',
  crop3n: 'مکئی',
  crop3b: 'اناج کے کیڑوں اور افلاٹوکسن کو منافع کھانے سے پہلے روکیں۔',
  crop4n: 'دالیں و بیج',
  crop4b: 'مسور، چنے اور بیج کو مکمل اگاؤ کے ساتھ محفوظ رکھیں۔',
  cmp_h2: 'عام بوری بمقابلہ فارم دوست',
  cmp_sub: 'وہی اناج، چھ ماہ بعد۔',
  cmp_col1: 'عام جوٹ / پی پی بوری',
  cmp_col2: 'فارم دوست ہرمیٹک بیگ',
  cmp_r1: 'کیڑوں کا نقصان',
  cmp_r1a: 'آزادانہ پھیلتا',
  cmp_r1b: 'کیڑے مر جاتے',
  cmp_r2: 'نمی و پھپھوندی',
  cmp_r2a: 'اندر آ جاتی',
  cmp_r2b: 'بند',
  cmp_r3: 'کیمیائی دوا',
  cmp_r3a: 'بار بار، مہنگی',
  cmp_r3b: 'ضرورت نہیں',
  cmp_r4: 'بیج کا اگاؤ',
  cmp_r4a: 'تیزی سے گرتا',
  cmp_r4b: 'بلند رہتا',
  cmp_r5: 'محفوظ ذخیرہ مدت',
  cmp_r5a: 'چند ہفتے',
  cmp_r5b: '12+ ماہ',
  cmp_r6: 'فروخت کی قیمت',
  cmp_r6a: 'جلد بیچنا پڑتا',
  cmp_r6b: 'اپنی مرضی سے بیچیں',
  test_kicker: 'میدان سے',
  t1q: '"پچھلے سال میری آدھی گندم کیڑوں نے کھا لی۔ اس سیزن ایک بیگ بھی خراب نہیں ہوا۔"',
  t1c: 'گندم کاشتکار · ساہیوال',
  t2q: '"میں نے مکئی تین ماہ مزید روکی اور کٹائی کے وقت کی نسبت تقریباً دگنی قیمت پر بیچی۔"',
  t2c: 'مکئی کاشتکار · اوکاڑہ',
  t3q: '"نہ دوا کی بو، نہ اسپرے۔ اناج بس اچھا رہتا ہے۔"',
  t3c: 'اناج تاجر · ملتان',
  about_kicker: 'فارم دوست کے بارے میں',
  about_h2: 'کاشتکاروں کو بااختیار، فصلوں کو محفوظ',
  about_p1:
    'بہت سے محنتی کسان اچھی فصل کو ذخیرے میں سڑتے دیکھتے ہیں اس سے پہلے کہ وہ مناسب قیمت پا سکے۔ فارم دوست اسی کو بدلنے کے لیے بنا — آزمودہ ہرمیٹک ذخیرے کو سادہ اور دیانتدار ٹیکنالوجی کے ساتھ ملا کر جو پاکستان کے کھیتوں کے لیے بنی ہے۔',
  about_p2:
    'ہر بیگ پر QR کوڈ لگ سکتا ہے، تاکہ خریدار دیکھ سکیں کہ اناج کہاں سے آیا اور کیسے محفوظ کیا گیا — یہ وہ بھروسہ اور شفافیت پیدا کرتا ہے جس کی ہماری سپلائی چین کو ہمیشہ ضرورت رہی۔',
  ct_h2: 'آئیے ذخیرے پر بات کریں',
  ct_p:
    'ہم براہِ راست معاملہ کرتے ہیں — نہ آن لائن کارٹ، نہ درمیانی لوگ۔ قیمت، سائز اور بلک آرڈر کے لیے واٹس ایپ پر پیغام دیں، ہم فوراً جواب دیں گے۔',
  ct_hours: 'روزانہ صبح 9 سے رات 8 بجے تک دستیاب۔',
  f_name: 'آپ کا نام',
  f_phone: 'فون / واٹس ایپ',
  f_msg: 'آپ کیا اور کتنا اگاتے ہیں؟',
  f_btn: 'استفسار بھیجیں',
  f_note: 'ہم واٹس ایپ یا فون پر جواب دیں گے۔',
  foot: 'کاشتکاروں کو بااختیار، فصلوں کو محفوظ · © 2026 فارم دوست',
  foot_wa: 'واٹس ایپ کریں →',
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggle = () => setLang((l) => (l === 'en' ? 'ur' : 'en'));
  const dict = lang === 'ur' ? UR : EN;
  const t = (key) => dict[key] ?? EN[key] ?? key;
  const value = useMemo(
    () => ({ lang, toggle, t, langLabel: lang === 'en' ? 'اردو' : 'English' }),
    [lang]
  );
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
