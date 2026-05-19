# Kırmızı Çiğköfte - Online Menü 🔥

Kırmızı Çiğköfte firması için profesyonel ve şık bir online menü uygulaması.

## 🚀 Özellikler

- ✨ **Kırmızı Tema Tasarım** - Firmanızın kimliğine uygun renkler
- 📱 **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- 📊 **Google Sheets Entegrasyonu** - Ürünlerinizi Google Sheet'ten otomatik yükleyin
- 🏷️ **Kategori Filtreleme** - Ürünleri kategorilere göre filtreleyin
- 🖼️ **Profesyonel Ürün Kartları** - Eşit boyutlarda görseller ve düzgün açıklamalar
- ⚡ **Hızlı ve Hafif** - React ile optimize edilmiş performans

## 📋 Kurulum

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Google API Key Ayarlayın

1. **Google Cloud Console** sitesine gidin
2. Yeni bir proje oluşturun
3. **Google Sheets API** ve **Google Drive API** etkinleştirin
4. **API Key** oluşturun
5. `src/App.js` dosyasında API Key'i güncelleyin (satır 18):

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

### 3. Uygulamayı Çalıştırın
```bash
npm start
```

Uygulamanız `http://localhost:3000` adresinde açılacaktır.

## 📊 Google Sheet Formatı

Aşağıdaki sütunlara sahip bir Google Sheet oluşturun:

| Kategori | Ürün | Açıklama | Fiyat | Resim |
|----------|------|----------|-------|-------|
| Çiğköfte | Klasik Çiğköfte | Sos ve salata ile... | 25 | https://... |
| Içecek | Ayran | Taze ayran | 5 | https://... |

### Sütun Açıklamaları:
- **Kategori**: Ürünün kategorisi (Çiğköfte, İçecek, Salata, vb.)
- **Ürün**: Ürün adı
- **Açıklama**: Kısa ürün açıklaması (250 karaktere kadar önerilir)
- **Fiyat**: Ürün fiyatı (TL cinsinden)
- **Resim**: Ürün resminin URL'i

## 🔗 Google Sheet Paylaşımı

Sheet'i herkesin görüntüleyebilmesi için:
1. Google Sheet'i açın
2. **Paylaş** butonuna tıklayın
3. Erişim türünü **"Herkes"** yapın

## 🎨 Tasarım Detayları

### Renkler:
- **Ana Kırmızı**: #cc2200
- **Açık Kırmızı**: #ff4433
- **Arka Plan**: Beyaz ve hafif kırmızı gradient

### Font:
- Segoe UI, Tahoma, Geneva, Verdana

### Responsive Breakpoints:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobil: 480px - 767px
- Küçük Cihazlar: 360px ve altı

## 📁 Proje Yapısı

```
online_menu/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js / Header.css
│   │   ├── CategoryFilter.js / CategoryFilter.css
│   │   ├── ProductGrid.js / ProductGrid.css
│   │   └── ProductCard.js / ProductCard.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```

## 🛠️ Teknolojiler

- **React 18**: Modern UI kütüphanesi
- **Axios**: HTTP istekleri için
- **Google Sheets API**: Veri kaynağı
- **CSS3**: Modern tasarım ve animasyonlar

## 📱 Özellikler Detaylı

### Header
- Kırmızı Çiğköfte logosu ve brand ismi
- Responsive tasarım
- Hover efektleri

### Kategori Filtreleme
- Tüm kategorileri otomatik listele
- Smooth geçişler
- Mobile-friendly düğmeler

### Ürün Grid'i
- Dinamik grid layout
- Eşit boyutlarda ürün kartları
- Hover animasyonları

### Ürün Kartları
- Ürün resmi (eşit boyut)
- Kategori badge'i
- Ürün adı ve açıklaması
- Fiyat gösterimi
- Fallback resim (eğer resim yüklenmezse)

## 🚀 Build ve Deployment

### Production Build
```bash
npm run build
```

### Vercel'de Deploy Etme
```bash
npm install -g vercel
vercel
```

### GitHub Pages'de Deploy Etme
```bash
npm run build
# Build klasörünü GitHub Pages ayarlarında seçin
```

## 📝 Notlar

- Ürün resimlerinin kare format (1:1) olması önerilir
- Resim boyutu en az 280x280px olmalıdır
- Açıklamalar 100-150 karakter aralığında ideal görünür
- Fiyat formatı: rakam olarak yazılmalı (örn: 25, 5.50)

## 🤝 Destek

Sorularınız için GitHub issues açabilirsiniz.

## 📄 Lisans

Bu proje MIT lisansı altında açık kaynaklı kullanılabilir.

---

**Lezzetin Adresi - Kırmızı Çiğköfte** 🔥
