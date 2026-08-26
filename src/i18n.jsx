import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const EN = {
  nav_solution: 'Solution',
  nav_crops: 'Crops',
  nav_compare: 'Compare',
  nav_about: 'About',
  nav_impact: 'Impact',
  nav_whatsapp: 'WhatsApp',
  nav_menu: 'Menu',
  nav_close: 'Close menu',
  hero_kicker: 'Hermetic grain storage',
  hero_h1: 'Store your harvest.<br/>Lose nothing.',
  hero_sub:
    'FarmDost hermetic bags seal grain airtight from harvest to sale — stopping insects, moisture and mould without a single chemical. Less spoilage, better quality, a higher price at market.',
  hero_cta: 'Message us on WhatsApp',
  hero_how: 'How it works ↓',
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
  crop4n: 'Sesame & chillies',
  crop4b: 'Protect export crops without chemical fumigation — cleaner storage, cleaner shipments.',
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
  about_kicker: 'Why FarmDost',
  about_h2: 'Born from real loss in the field',
  about_p1:
    'I come from an agricultural background, and I experienced post-harvest grain loss firsthand — watching stored grain spoil or get damaged by pests season after season, with no affordable solution available.',
  about_p2:
    'That direct experience of losing precious grain, and seeing it repeated across smallholder farms everywhere, is what drove me to find and adopt hermetic storage — and eventually to build FarmDost around it. Every bag can carry a QR code, so buyers see where grain came from and how it was stored.',
  impact_kicker: 'Our impact',
  impact_h2: 'From proof of concept to national scale',
  impact_reach_t: 'Reach across Pakistan',
  impact_reach_p:
    'FarmDost has sold about 45,000 hermetic bags, reaching around 5,200 farmers. Crops covered include wheat, rice, sesame, maize and chillies — across major belts and trading hubs such as Faisalabad, Lahore, Multan, Gujranwala, Sialkot, Bhakkar, Mianwali, Karachi, Hyderabad, Tando Jam, Peshawar, Mardan and Dera Ismail Khan.',
  impact_grain_t: 'Grain protected',
  impact_grain_p:
    'At roughly 60 kg per bag, that is an estimated 2,700 tons of grain protected from storage loss. Farmers using the bags report post-harvest losses reduced to near zero, with better seed germination when bags are reused for seed storage.',
  impact_export_t: 'Why exporters change the game',
  impact_export_p:
    'Selling one bag at a time does not scale. One relationship with an exporter can protect grain sourced from thousands of farmers. Sesame and rice exporters serving the EU face growing scrutiny over pesticide residue in storage and shipment. FarmDost’s chemical-free hermetic storage, with QR-based traceability, gives verifiable proof of non-chemical handling — something the market increasingly demands.',
  impact_vision_t: 'Long-term vision',
  impact_vision_p:
    'Pakistan produces roughly 29 million tons of wheat and 9 million tons of rice a year. Post-harvest losses run about 8–12% of food grain — around 10% for wheat and 15% for rice — an estimated 4+ million tons lost yearly before maize, pulses, sesame and other crops. FarmDost has protected about 2,700 tons so far. Our 5–10 year vision is to make a real dent in that national loss, then replicate as a leading post-harvest solutions provider across South Asia.',
  ct_h2: "Let's talk storage",
  ct_p:
    'We work with farmers and exporters directly — pricing, sizes, bulk orders and QR-ready bags. Message us on WhatsApp and we will get straight back to you.',
  ct_hours: 'Available 9am – 8pm, every day.',
  ct_wa_label: 'WhatsApp',
  f_name: 'Your name',
  f_phone: 'Phone / WhatsApp',
  f_msg: 'What do you grow, and how much?',
  f_btn: 'Send enquiry',
  f_note: "We'll reply on WhatsApp or by phone.",
  f_name_ph: 'Full name',
  f_phone_ph: '0317 581 3079',
  f_msg_ph: 'e.g. 50 maund of wheat to store this season',
  foot: 'Empowering farmers, securing harvests · © 2026 FarmDost',
  foot_wa: 'WhatsApp us →',
  stat1v: '45k',
  stat2v: '5,200',
  stat3v: '2,700 t',
  stat4v: '~0',
  stat1: 'Bags sold',
  stat2: 'Farmers reached',
  stat3: 'Grain protected',
  stat4: 'Storage loss reported',
};

export const UR = {
  nav_solution: 'حل',
  nav_crops: 'فصلیں',
  nav_compare: 'مقابلہ',
  nav_about: 'تعارف',
  nav_impact: 'اثرات',
  nav_whatsapp: 'WhatsApp',
  nav_menu: 'مینو',
  nav_close: 'مینو بند کریں',
  hero_kicker: 'ہرمیٹک اناج سٹوریج',
  hero_h1: 'اپنی فصل محفوظ رکھیں۔<br/>نقصان بالکل نہ ہونے دیں۔',
  hero_sub:
    'FarmDost کے ہرمیٹک بیگ کٹائی سے منڈی تک آپ کے اناج کو ہوا بند رکھتے ہیں — کیڑے، نمی اور پھپھوندی بغیر کسی کیمیکل کے رک جاتے ہیں۔ کم نقصان، بہتر معیار، اور منڈی میں اچھی قیمت۔',
  hero_cta: 'WhatsApp پر میسج کریں',
  hero_how: 'کیسے کام کرتا ہے ↓',
  sol_kicker: 'ہرمیٹک بیگ کیا ہے؟',
  sol_h2: 'سائنس آسان، استعمال بھی آسان',
  sol_p:
    'ہرمیٹک بیگ کئی تہوں والا لائنر ہے جو اناج کو باہر کی ہوا سے مکمل بند کر دیتا ہے۔ بند کرنے کے بعد اندر کے کیڑے اور اناج باقی آکسیجن استعمال کر لیتے ہیں — سانس لینے کو کچھ نہ بچے تو کیڑے مر جاتے ہیں اور پھپھوندی نہیں لگتی۔ نہ سپرے، نہ بار بار دوا، نہ نقصان۔',
  c1t: 'ہوا بند لائنر',
  c1b: 'اندر کی سیل شدہ تہہ باہر کی ہوا، پانی اور کیڑوں کو روکتی ہے۔',
  c2t: 'آکسیجن ختم ہو جاتی ہے',
  c2b: 'بند کیڑے ہوا ختم کر کے خود بخود مر جاتے ہیں — کسی زہر کی ضرورت نہیں۔',
  c3t: 'معیار برقرار',
  c3b: 'اناج کا وزن، رنگ اور اگاؤ پورے سیزن اور اس کے بعد بھی اچھا رہتا ہے۔',
  c4t: 'فروخت پر زیادہ کمائی',
  c4b: 'سستی کے موسم میں بیچنے کی بجائے صاف اناج روکیں، بعد میں بہتر قیمت پر بیچیں۔',
  gal_h2: 'بیگ قریب سے دیکھیں',
  crops_kicker: 'ہر فصل کے لیے',
  crops_h2: 'جو بھی اگائیں، صحیح طریقے سے محفوظ کریں',
  crop1n: 'گندم',
  crop1b: 'گندم کو سیزن بھر کیڑوں سے بچائیں، اور قیمت بڑھنے پر بیچیں۔',
  crop2n: 'چاول / دھان',
  crop2b: 'مون سون میں دھان کو خشک اور پھپھوندی سے پاک رکھیں۔',
  crop3n: 'مکئی',
  crop3b: 'کیڑوں اور aflatoxin کو روکیں، منافع ضائع نہ ہونے دیں۔',
  crop4n: 'تل اور مرچ',
  crop4b: 'ایکسپورٹ فصلوں کو بغیر کیمیکل کے محفوظ رکھیں — صاف سٹوریج، صاف شپمنٹ۔',
  cmp_h2: 'عام بوری اور FarmDost',
  cmp_sub: 'وہی اناج — چھ مہینے بعد۔',
  cmp_col1: 'عام جٹ / PP بوری',
  cmp_col2: 'FarmDost ہرمیٹک بیگ',
  cmp_r1: 'کیڑوں کا نقصان',
  cmp_r1a: 'آزادانہ پھیلتا ہے',
  cmp_r1b: 'کیڑے مر جاتے ہیں',
  cmp_r2: 'نمی اور پھپھوندی',
  cmp_r2a: 'اندر آ جاتی ہے',
  cmp_r2b: 'باہر رہتی ہے',
  cmp_r3: 'کیمیکل / دوا',
  cmp_r3a: 'بار بار، مہنگی',
  cmp_r3b: 'ضرورت نہیں',
  cmp_r4: 'بیج کا اگاؤ',
  cmp_r4a: 'جلدی گرتا ہے',
  cmp_r4b: 'اچھا رہتا ہے',
  cmp_r5: 'محفوظ سٹوریج کی مدت',
  cmp_r5a: 'چند ہفتے',
  cmp_r5b: '۱۲+ مہینے',
  cmp_r6: 'فروخت کی قیمت',
  cmp_r6a: 'جلدی بیچنا پڑتا ہے',
  cmp_r6b: 'اپنی مرضی سے بیچیں',
  test_kicker: 'کھیت سے آوازیں',
  t1q: '"پچھلے سال میری آدھی گندم کیڑوں نے کھا لی۔ اس سیزن ایک بیگ بھی خراب نہیں ہوا۔"',
  t1c: 'گندم کا کاشتکار · ساہیوال',
  t2q: '"میں نے مکئی تین مہینے اور روکی، کٹائی والے وقت سے لگ بھگ دگنی قیمت پر بیچی۔"',
  t2c: 'مکئی کا کاشتکار · اوکاڑہ',
  t3q: '"نہ دوا کی بو، نہ سپرے۔ اناج بس اچھا رہتا ہے۔"',
  t3c: 'اناج کا تاجر · ملتان',
  about_kicker: 'FarmDost کیوں؟',
  about_h2: 'کھیت میں حقیقی نقصان سے جنم لیا',
  about_p1:
    'میرا پسِ منظر زراعت سے ہے، اور میں نے کٹائی کے بعد کا نقصان خود دیکھا ہے — ہر سیزن ذخیرہ شدہ اناج خراب ہوتا یا کیڑوں سے متاثر ہوتا، اور کوئی سستی حل دستیاب نہیں تھا۔',
  about_p2:
    'قیمتی اناج ضائع ہوتے دیکھنا، اور چھوٹے کسانوں پر یہی صورتحال بار بار دیکھنا، یہی وجہ بنی کہ میں نے ہرمیٹک سٹوریج اپنایا — اور آخرکار اسی پر FarmDost بنایا۔ ہر بیگ پر QR کوڈ لگ سکتا ہے، تاکہ خریدار دیکھ سکیں اناج کہاں سے آیا اور کیسے محفوظ ہوا۔',
  impact_kicker: 'ہمارے اثرات',
  impact_h2: 'ثبوت سے قومی سطح تک',
  impact_reach_t: 'پاکستان بھر میں پہنچ',
  impact_reach_p:
    'FarmDost نے تقریباً ۴۵,۰۰۰ ہرمیٹک بیگ فروخت کیے ہیں، جن سے لگ بھگ ۵,۲۰۰ کسان جُڑے ہیں۔ فصلوں میں گندم، چاول، تل، مکئی اور مرچ شامل ہیں — اور اہم زرعی علاقے و تجارتی مراکز جیسے فیصل آباد، لاہور، ملتان، گوجرانوالہ، سیالکوٹ، بھکر، میانوالی، کراچی، حیدرآباد، ٹنڈو جام، پشاور، مردان اور ڈیرہ اسماعیل خان۔',
  impact_grain_t: 'محفوظ شدہ اناج',
  impact_grain_p:
    'تقریباً ۶۰ کلو فی بیگ کے حساب سے یہ اندازاً ۲,۷۰۰ ٹن اناج ہے جو سٹوریج کے نقصان سے بچا۔ بیگ استعمال کرنے والے کسان بتاتے ہیں کہ کٹائی کے بعد کا نقصان تقریباً صفر رہتا ہے، اور بیج سٹوریج میں اگاؤ بھی بہتر رہتا ہے۔',
  impact_export_t: 'ایکسپورٹرز کیوں بدل دیتے ہیں کھیل',
  impact_export_p:
    'ایک ایک بیگ بیچنا اسکیل نہیں کرتا۔ ایک ایکسپورٹر سے تعلق ہزاروں کسانوں کے اناج کو ایک ساتھ محفوظ کر سکتا ہے۔ EU جانے والے تل اور چاول کے ایکسپورٹرز پر سٹوریج و شپمنٹ میں pesticide residue کی جانچ بڑھ رہی ہے۔ FarmDost کا کیمیکل فری ہرمیٹک سٹوریج، QR ٹریس ایبلٹی کے ساتھ، بغیر کیمیکل ہینڈلنگ کا ثبوت دیتا ہے — جو مارکیٹ اب مانگتی ہے۔',
  impact_vision_t: 'طویل المدتی ویژن',
  impact_vision_p:
    'پاکستان سالانہ تقریباً ۲۹ ملین ٹن گندم اور ۹ ملین ٹن چاول پیدا کرتا ہے۔ کٹائی کے بعد کا نقصان خوراک کے اناج کا تقریباً ۸–۱۲٪ ہے — گندم پر لگ بھگ ۱۰٪ اور چاول پر ۱۵٪ — یعنی سالانہ ۴+ ملین ٹن سے زائد نقصان، مکئی، دالیں، تل وغیرہ کے علاوہ۔ FarmDost نے اب تک تقریباً ۲,۷۰۰ ٹن محفوظ کیا ہے۔ ہمارا ۵–۱۰ سالہ ویژن اس قومی نقصان میں حقیقی کمی لانا ہے، پھر جنوبی ایشیا میں نمایاں post-harvest حل فراہم کرنے والا بننا۔',
  ct_h2: 'سٹوریج پر بات کریں',
  ct_p:
    'ہم کسانوں اور ایکسپورٹرز سے براہِ راست کام کرتے ہیں — قیمت، سائز، بلک آرڈر اور QR والے بیگ۔ WhatsApp پر میسج کریں، ہم جلدی جواب دیں گے۔',
  ct_hours: 'روزانہ صبح ۹ بجے سے رات ۸ بجے تک دستیاب۔',
  ct_wa_label: 'WhatsApp',
  f_name: 'آپ کا نام',
  f_phone: 'فون / WhatsApp',
  f_msg: 'کیا اگاتے ہیں، اور کتنا؟',
  f_btn: 'استفسار بھیجیں',
  f_note: 'ہم WhatsApp یا فون پر جواب دیں گے۔',
  f_name_ph: 'پورا نام',
  f_phone_ph: '0317 581 3079',
  f_msg_ph: 'مثلاً: اس سیزن ۵۰ من گندم محفوظ کرنی ہے',
  foot: 'کسانوں کو سہولت، فصلوں کو تحفظ · © ۲۰۲۶ FarmDost',
  foot_wa: '← WhatsApp کریں',
  stat1v: '۴۵k',
  stat2v: '۵,۲۰۰',
  stat3v: '۲,۷۰۰ t',
  stat4v: '~۰',
  stat1: 'بیگ فروخت',
  stat2: 'کسان تک پہنچ',
  stat3: 'محفوظ اناج',
  stat4: 'رپورٹ شدہ سٹوریج نقصان',
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const toggle = () => setLang((l) => (l === 'en' ? 'ur' : 'en'));
  const dict = lang === 'ur' ? UR : EN;
  const t = (key) => dict[key] ?? EN[key] ?? key;

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang === 'ur' ? 'ur' : 'en';
    root.dir = lang === 'ur' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ur'
        ? 'FarmDost — اپنی فصل محفوظ رکھیں۔ نقصان نہ ہونے دیں۔'
        : 'FarmDost — Store your harvest. Lose nothing.';
  }, [lang]);

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
