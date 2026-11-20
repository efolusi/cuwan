/**
 * Product-site copy for Cuwan in English and Indonesian.
 *
 * Guardrail numbers match the product policy (20x leverage cap, 15% AI range
 * buffer, 5% preventive stop-out). Do not invent other measured claims here.
 */

export const LOCALES = ['en', 'id'] as const
export type Locale = (typeof LOCALES)[number]

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'id'
}

export const LEVERAGE_CAP = 20
export const MIN_MARGIN_BUFFER_PCT = 15
export const PREVENTIVE_STOP_OUT_PCT = 5

/** Sign-in and app entry; web app lives on cuwan-cloud. */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.cuwan.efolusi.com'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://cuwan.efolusi.com'
export const SSO_URL = process.env.NEXT_PUBLIC_SSO_URL || 'https://sso.efolusi.com'

export type Dictionary = {
  metaTitle: string
  metaDescription: string
  brand: string
  nav: { features: string; guardrails: string; how: string; privacy: string; terms: string }
  switchLang: string
  hero: { eyebrow: string; titleBefore: string; titleAccent: string; titleAfter: string; lede: string; cta: string; secondary: string; proof: string }
  facts: Array<{ k: string; v: string }>
  features: { eyebrow: string; title: string; items: Array<{ title: string; body: string }> }
  guardrails: { eyebrow: string; title: string; lede: string; items: Array<{ title: string; body: string }> }
  how: { eyebrow: string; title: string; steps: Array<{ title: string; body: string }> }
  closing: { title: string; lede: string; cta: string }
  footer: { product: string; legal: string; note: string }
  privacy: { title: string; lede: string; sections: Array<{ title: string; body: string }> }
  terms: { title: string; lede: string; sections: Array<{ title: string; body: string }> }
}

export const copy: Record<Locale, Dictionary> = {
  en: {
    metaTitle: 'Cuwan · Grid bots with anti-liquidation guardrails',
    metaDescription:
      'Run grid bots on crypto futures and spot under a 20x leverage cap and a preventive stop-out. Sign in with your Efolusi account.',
    brand: 'Cuwan',
    nav: {
      features: 'Features',
      guardrails: 'Guardrails',
      how: 'How it works',
      privacy: 'Privacy',
      terms: 'Terms',
    },
    switchLang: 'Bahasa Indonesia',
    hero: {
      eyebrow: 'Grid bots · Futures and spot · Anti-liquidation',
      titleBefore: 'Grid bots that stay ',
      titleAccent: 'clear',
      titleAfter: ' of liquidation.',
      lede: `Set a price range, let AI draft the levels, and run the grid on futures or spot under a hard ${LEVERAGE_CAP}x leverage cap.`,
      cta: 'Continue with Efolusi',
      secondary: 'See how it works',
      proof: 'Pre-launch. Sign-in works today; grid bots are rolling out.',
    },
    facts: [
      { k: `${LEVERAGE_CAP}x`, v: 'Hard leverage cap' },
      { k: `${MIN_MARGIN_BUFFER_PCT}%`, v: 'Buffer on AI range drafts' },
      { k: 'Preventive', v: 'Close attempt before liquidation' },
      { k: 'Futures + spot', v: 'One grid engine' },
    ],
    features: {
      eyebrow: 'What you get',
      title: 'A grid bot that works the range.',
      items: [
        {
          title: 'Futures and spot',
          body: 'Set an upper and lower price and a level count. The same grid engine places the limit orders on either market.',
        },
        {
          title: 'AI-drafted ranges',
          body: 'Ask for a starting grid and read the proposed bounds, levels and sizing, with the reasoning, before any order goes live.',
        },
        {
          title: 'Guardrails by default',
          body: `Every futures bot inherits the ${LEVERAGE_CAP}x cap and the preventive close. There is no setting to skip them.`,
        },
        {
          title: 'One Efolusi account',
          body: 'Sign in with the account you already use across Efolusi. No new password to create or remember.',
        },
      ],
    },
    guardrails: {
      eyebrow: 'Anti-liquidation',
      title: 'Three rules the server enforces.',
      lede: 'These are product constants, not marketing rounding.',
      items: [
        {
          title: `${LEVERAGE_CAP}x leverage cap`,
          body: 'Futures grids cannot ask for more. Recommended starting leverage stays lower.',
        },
        {
          title: `${MIN_MARGIN_BUFFER_PCT}% AI draft buffer`,
          body: 'Range drafts leave margin room before the edge of the grid.',
        },
        {
          title: `${PREVENTIVE_STOP_OUT_PCT}% preventive close`,
          body: 'The bot tries to close before the exchange would liquidate the position.',
        },
      ],
    },
    how: {
      eyebrow: 'How it works',
      title: 'From range to running grid.',
      steps: [
        { title: 'Sign in', body: 'Use your Efolusi account. Exchange API keys stay in the app, not on this site.' },
        { title: 'Set the range', body: 'Pick futures or spot, bounds, and level count — or ask AI for a draft.' },
        { title: 'Arm the guardrails', body: 'Leverage cap and preventive close stay on. Review, then start the bot.' },
        { title: 'Watch and stop', body: 'Follow status from the web app or phone; stop any bot in one action.' },
      ],
    },
    closing: {
      title: 'Run grids with the guardrails on.',
      lede: 'Product site here. The dashboard and bots live in the Cuwan app.',
      cta: 'Continue with Efolusi',
    },
    footer: {
      product: 'Product of Efolusi',
      legal: 'Legal',
      note: 'Exchange API keys never leave the Cuwan app. This site holds marketing and legal pages only.',
    },
    privacy: {
      title: 'Privacy',
      lede: 'How Cuwan handles personal data on this product site and in the linked app.',
      sections: [
        {
          title: 'What this site collects',
          body: 'This product site is static marketing. It does not run bots or hold exchange keys. Cloudflare may process request metadata to serve the Worker. Optional Cloudflare Web Analytics is cookieless and does not collect personal data.',
        },
        {
          title: 'Accounts and the app',
          body: 'Sign-in uses Efolusi SSO. Account data, exchange API keys, and trading activity live in the Cuwan app and API (cuwan-cloud), under their own privacy terms once you sign in.',
        },
        {
          title: 'Contact',
          body: 'Privacy questions: privacy@efolusi.com.',
        },
      ],
    },
    terms: {
      title: 'Terms',
      lede: 'Terms for using the Cuwan product site and the linked Cuwan service.',
      sections: [
        {
          title: 'The product',
          body: 'Cuwan provides grid-trading tools with enforced leverage and stop-out guardrails. Crypto trading is risky; you can lose money. Cuwan does not give investment advice.',
        },
        {
          title: 'This site vs the app',
          body: 'Pages on this host are informational. Bot control, keys, and orders happen only in the Cuwan app after you sign in with Efolusi.',
        },
        {
          title: 'Acceptable use',
          body: 'Do not abuse the service, attempt to bypass guardrails, or use Cuwan for unlawful activity.',
        },
        {
          title: 'Contact',
          body: 'Legal questions: legal@efolusi.com.',
        },
      ],
    },
  },
  id: {
    metaTitle: 'Cuwan · Bot grid dengan pengaman anti-likuidasi',
    metaDescription:
      'Jalankan bot grid pada futures dan spot kripto dengan batas leverage 20x dan penutupan preventif. Masuk dengan akun Efolusi.',
    brand: 'Cuwan',
    nav: {
      features: 'Fitur',
      guardrails: 'Pengaman',
      how: 'Cara kerja',
      privacy: 'Privasi',
      terms: 'Ketentuan',
    },
    switchLang: 'English',
    hero: {
      eyebrow: 'Bot grid · Futures dan spot · Anti-likuidasi',
      titleBefore: 'Bot grid yang tetap ',
      titleAccent: 'jauh',
      titleAfter: ' dari likuidasi.',
      lede: `Tentukan rentang harga, biarkan AI menyusun level, dan jalankan grid di futures atau spot dengan batas leverage keras ${LEVERAGE_CAP}x.`,
      cta: 'Lanjut dengan Efolusi',
      secondary: 'Lihat cara kerja',
      proof: 'Pra-rilis. Masuk sudah jalan; bot grid sedang digulirkan.',
    },
    facts: [
      { k: `${LEVERAGE_CAP}x`, v: 'Batas leverage keras' },
      { k: `${MIN_MARGIN_BUFFER_PCT}%`, v: 'Penyangga pada draf rentang AI' },
      { k: 'Preventif', v: 'Coba tutup sebelum likuidasi' },
      { k: 'Futures + spot', v: 'Satu mesin grid' },
    ],
    features: {
      eyebrow: 'Yang Anda dapat',
      title: 'Bot grid yang mengerjakan rentang.',
      items: [
        {
          title: 'Futures dan spot',
          body: 'Tentukan harga atas dan bawah serta jumlah level. Mesin grid yang sama menempatkan limit order di kedua pasar.',
        },
        {
          title: 'Rentang draf AI',
          body: 'Minta grid awal dan baca batas, level, serta ukuran yang diusulkan beserta alasannya sebelum order hidup.',
        },
        {
          title: 'Pengaman bawaan',
          body: `Setiap bot futures memakai batas ${LEVERAGE_CAP}x dan penutupan preventif. Tidak ada pengaturan untuk melewatkannya.`,
        },
        {
          title: 'Satu akun Efolusi',
          body: 'Masuk dengan akun yang sudah dipakai di Efolusi. Tidak perlu kata sandi baru.',
        },
      ],
    },
    guardrails: {
      eyebrow: 'Anti-likuidasi',
      title: 'Tiga aturan yang ditegakkan server.',
      lede: 'Ini konstanta produk, bukan pembulatan pemasaran.',
      items: [
        {
          title: `Batas leverage ${LEVERAGE_CAP}x`,
          body: 'Grid futures tidak bisa meminta lebih. Leverage awal yang disarankan lebih rendah.',
        },
        {
          title: `Penyangga draf AI ${MIN_MARGIN_BUFFER_PCT}%`,
          body: 'Draf rentang menyisakan ruang margin sebelum tepi grid.',
        },
        {
          title: `Penutupan preventif ${PREVENTIVE_STOP_OUT_PCT}%`,
          body: 'Bot mencoba menutup sebelum bursa melikuidasi posisi.',
        },
      ],
    },
    how: {
      eyebrow: 'Cara kerja',
      title: 'Dari rentang ke grid yang berjalan.',
      steps: [
        { title: 'Masuk', body: 'Pakai akun Efolusi. Kunci API bursa tinggal di aplikasi, bukan di situs ini.' },
        { title: 'Tentukan rentang', body: 'Pilih futures atau spot, batas, dan jumlah level — atau minta draf AI.' },
        { title: 'Aktifkan pengaman', body: 'Batas leverage dan penutupan preventif tetap menyala. Tinjau, lalu jalankan bot.' },
        { title: 'Pantau dan hentikan', body: 'Ikuti status dari web app atau ponsel; hentikan bot dengan satu tindakan.' },
      ],
    },
    closing: {
      title: 'Jalankan grid dengan pengaman menyala.',
      lede: 'Situs produk di sini. Dasbor dan bot ada di aplikasi Cuwan.',
      cta: 'Lanjut dengan Efolusi',
    },
    footer: {
      product: 'Produk Efolusi',
      legal: 'Legal',
      note: 'Kunci API bursa tidak pernah keluar dari aplikasi Cuwan. Situs ini hanya halaman pemasaran dan legal.',
    },
    privacy: {
      title: 'Privasi',
      lede: 'Bagaimana Cuwan menangani data pribadi di situs produk ini dan di aplikasi terkait.',
      sections: [
        {
          title: 'Apa yang dikumpulkan situs ini',
          body: 'Situs produk ini bersifat pemasaran statis. Tidak menjalankan bot atau menyimpan kunci bursa. Cloudflare dapat memproses metadata permintaan untuk menyajikan Worker. Cloudflare Web Analytics opsional tanpa cookie dan tanpa data pribadi.',
        },
        {
          title: 'Akun dan aplikasi',
          body: 'Masuk memakai Efolusi SSO. Data akun, kunci API bursa, dan aktivitas trading ada di aplikasi dan API Cuwan (cuwan-cloud), dengan ketentuan privasi mereka sendiri setelah Anda masuk.',
        },
        {
          title: 'Kontak',
          body: 'Pertanyaan privasi: privacy@efolusi.com.',
        },
      ],
    },
    terms: {
      title: 'Ketentuan',
      lede: 'Ketentuan memakai situs produk Cuwan dan layanan Cuwan terkait.',
      sections: [
        {
          title: 'Produk',
          body: 'Cuwan menyediakan alat trading grid dengan batas leverage dan penutupan preventif. Trading kripto berisiko; Anda bisa kehilangan uang. Cuwan tidak memberi nasihat investasi.',
        },
        {
          title: 'Situs vs aplikasi',
          body: 'Halaman di host ini bersifat informasi. Kontrol bot, kunci, dan order hanya terjadi di aplikasi Cuwan setelah masuk dengan Efolusi.',
        },
        {
          title: 'Penggunaan yang diterima',
          body: 'Jangan menyalahgunakan layanan, mencoba melewati pengaman, atau memakai Cuwan untuk kegiatan melanggar hukum.',
        },
        {
          title: 'Kontak',
          body: 'Pertanyaan legal: legal@efolusi.com.',
        },
      ],
    },
  },
}
