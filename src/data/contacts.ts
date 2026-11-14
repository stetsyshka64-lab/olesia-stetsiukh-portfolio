// Месенджери й соцмережі. Порядок — як у socials.svg з макета (зверху вниз).
// top — вертикальна позиція іконки всередині socials.svg (42×332).
// Поки href порожній, іконка показується, але не клікається.
export const socials = [
  { name: 'Telegram', href: 'https://t.me/OlaStetsukh', top: 0 },
  { name: 'WhatsApp', href: 'https://wa.me/380971905474', top: 72 },
  { name: 'Viber', href: 'viber://chat?number=%2B380971905474', top: 144 },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/olesia-stetsiukh-aa0279408/', top: 218 },
  { name: 'Behance', href: 'https://www.behance.net/970dfa27', top: 292 },
] as const;
