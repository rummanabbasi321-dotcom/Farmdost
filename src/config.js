// WhatsApp / phone — Pakistan mobile, E.164
// Digits only for wa.me; spaced display for humans.
export const WHATSAPP_NUMBER = '923175813079';
export const CONTACT_PHONE_E164 = '+923175813079';
export const CONTACT_PHONE_DISPLAY = '+92 317 581 3079';
export const CONTACT_PHONE_LOCAL = '0317 581 3079';
export const TEL_HREF = `tel:${CONTACT_PHONE_E164}`;

const WA_TEXT_EN =
  'Assalamualaikum, I would like to ask about FarmDost hermetic bags.';
const WA_TEXT_UR =
  'السلام علیکم، مجھے FarmDost ہرمیٹک بیگ کے بارے میں معلومات چاہیے۔';

export function getWhatsAppHref(lang = 'en') {
  const text = lang === 'ur' ? WA_TEXT_UR : WA_TEXT_EN;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** @deprecated Prefer getWhatsAppHref(lang) for language-aware message */
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
