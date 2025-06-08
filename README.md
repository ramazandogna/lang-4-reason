# 🧪 PekAfilli v2

Şık, SSR uyumlu, tamamen modüler bir **Next.js 15** projesi.  
Dark/light tema desteği, Tailwind CSS 4.1 ile stil yönetimi ve modern bileşen mimarisiyle geliştirilmiştir.

---

## 🚀 Teknolojiler

| Teknoloji      | Versiyon  | Açıklama                      |
| -------------- | --------- | ----------------------------- |
| **Next.js**    | 15.3.3    | App Router, SSR destekli yapı |
| **React**      | 19.1.0    | Modern komponent yaklaşımı    |
| **Tailwind**   | 4.1.8     | Utility-first CSS framework   |
| **TypeScript** | ^5        | Tip güvenliği                 |
| **Lucide**     | ^0.476.0  | İkon kütüphanesi              |
| **Turbopack**  | (default) | Hızlı geliştirme sunucusu     |

---

## 🎨 Özellikler

- ✅ Dark/Light Tema Desteği (SSR uyumlu)
- ✅ Cookie ile Kalıcı Tema Seçimi
- ✅ `ThemeProvider` + `Context API` kullanımı
- ✅ Header + Footer + Ana içerik alanı
- ✅ Özelleştirilmiş 404 Sayfası (tema destekli)
- ✅ Tam responsive tasarım
- ✅ Prettier + Tailwind plugin
- ✅ ESLint + Husky + Lint-staged setup

---

## 📁 Proje Yapısı

```bash
src/
├── app/
│   ├── layout.tsx             # Global layout yapısı
│   ├── page.tsx               # Anasayfa
│   ├── not-found.tsx          # 404 Sayfası
│   ├── theme-provider.tsx     # Tema context ve yönetimi
│   └── api/
│       └── theme/route.ts     # Tema değişikliği için API
├── components/
│   ├── Header/                # Header bileşeni
│   ├── Footer/                # Footer bileşeni
│   └── ThemeToggle.tsx        # Tema geçiş butonu
├── lib/
│   └── get-initial-theme.ts   # SSR cookie okuma
├── styles/
│   └── globals.css            # Temaya özel CSS değişkenleri
```

---

## ⚙️ Kurulum

```bash
git clone https://github.com/ramazandogna/lang-4-reason.git
cd lang-4-reason
pnpm install
pnpm dev
```

> Eğer `pnpm` kurulu değilse:

```bash
npm install -g pnpm
```

---

## 📝 Scriptler

| Komut        | Açıklama                                   |
| ------------ | ------------------------------------------ |
| `pnpm dev`   | Geliştirme sunucusunu başlatır (Turbopack) |
| `pnpm build` | Production için derleme yapar              |
| `pnpm start` | Production sunucusunu başlatır             |
| `pnpm lint`  | ESLint ile kodu kontrol eder               |

---

## 💡 Tema Sistemi

- `html[data-theme]` kullanılarak SSR uyumlu dark/light tema sağlanır.
- `ThemeProvider` ile context yönetimi yapılır.
- `/api/theme` route’u ile tema bilgisi cookie’ye yazılır.
- Geçişler `ThemeToggle` bileşeniyle yapılır.

---

## 📄 Lisans

MIT Lisansı.  
İstediğiniz gibi kullanabilir, geliştirebilir ve dağıtabilirsiniz.
