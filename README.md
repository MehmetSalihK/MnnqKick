# MNNQ Canlı Yayın Bildirimi

🔔 **KICK.COM/MNNQ** kanalı canlı yayına geçtiğinde anında bildirim alan Chrome uzantısı!

## 📋 Özellikler

- ✅ **Otomatik Bildirim**: MNNQ canlı yayına geçtiğinde anında masaüstü bildirimi
- 🔊 **Ses Bildirimi**: Özel ses efekti ile bildirim
- 🎨 **Dinamik İkon**: Canlı/çevrimdışı duruma göre değişen uzantı ikonu
- ⚡ **Gerçek Zamanlı**: Kick.com API'si ile anlık durum takibi
- 🎯 **Hafif ve Hızlı**: Minimal kaynak kullanımı

## 🚀 Kurulum

### Chrome Web Mağazası'ndan (Önerilen)
*Henüz mevcut değil - Geliştirme aşamasında*

### Manuel Kurulum (Geliştirici Modu)

1. **Projeyi İndirin**
   ```bash
   git clone https://github.com/kullanici/Miniq.git
   cd Miniq
   ```

2. **Chrome'da Uzantıları Açın**
   - Chrome'da `chrome://extensions/` adresine gidin
   - Sağ üst köşeden "Geliştirici modu"nu aktif edin

3. **Uzantıyı Yükleyin**
   - "Paketlenmemiş uzantı yükle" butonuna tıklayın
   - İndirdiğiniz `Miniq` klasörünü seçin
   - Uzantı otomatik olarak yüklenecektir

## 🎮 Kullanım

### İlk Kurulum Sonrası
- Uzantı otomatik olarak MNNQ kanalını izlemeye başlar
- Tarayıcı araç çubuğunda uzantı ikonu görünür:
  - 🔴 **Yeşil İkon**: Kanal canlı yayında
  - ⚫ **Gri İkon**: Kanal çevrimdışı

### Bildirimler
- MNNQ canlı yayına geçtiğinde:
  - Masaüstü bildirimi görünür
  - Özel ses efekti çalar
  - Uzantı ikonu yeşile döner

### Popup Menü
- Uzantı ikonuna tıklayarak:
  - Mevcut yayın durumunu görün
  - Sosyal medya linklerine erişin
  - Kanal bilgilerini kontrol edin

## ⚙️ Yapılandırma

### Kanal Değiştirme
`js/background.js` dosyasında:
```javascript
const CHANNEL_NAME = 'mnnq'; // Buradan kanal adını değiştirebilirsiniz
```

### Ses Ayarları
`js/background.js` dosyasında ses seviyesini ayarlayın:
```javascript
audio.volume = 0.5; // 0.0 (sessiz) - 1.0 (maksimum) arası
```

## 📁 Proje Yapısı

```
Miniq/
├── manifest.json          # Uzantı yapılandırması
├── index.html             # Popup arayüzü
├── css/                   # Stil dosyaları
│   ├── style.css
│   ├── menu.css
│   └── ...
├── js/                    # JavaScript dosyaları
│   ├── background.js      # Ana servis worker
│   ├── config.js          # Yapılandırma
│   ├── app.js            # Popup mantığı
│   └── ...
└── images/               # Görseller ve sesler
    ├── icon_on_128.png   # Canlı ikon
    ├── icon_off_128.png  # Çevrimdışı ikon
    ├── carsound.mp3      # Bildirim sesi
    └── ...
```

## 🔧 Geliştirme

### Gereksinimler
- Chrome 88+ (Manifest V3 desteği)
- Temel HTML/CSS/JavaScript bilgisi

### Yerel Geliştirme
1. Projeyi klonlayın
2. Değişikliklerinizi yapın
3. Chrome'da uzantıyı yeniden yükleyin
4. Test edin

### API Kullanımı
Uzantı Kick.com'un resmi API'sini kullanır:
```
https://kick.com/api/v2/channels/{CHANNEL_NAME}
```

## 🐛 Sorun Giderme

### Bildirimler Gelmiyor
- Chrome bildirim izinlerini kontrol edin
- Uzantı izinlerinin aktif olduğundan emin olun
- Konsol hatalarını kontrol edin (`F12` > Console)

### İkon Değişmiyor
- Uzantıyı yeniden yükleyin
- Chrome'u yeniden başlatın
- Dosya yollarını kontrol edin

### Ses Çalmıyor
- Tarayıcı ses ayarlarını kontrol edin
- `carsound.mp3` dosyasının mevcut olduğundan emin olun
- Ses dosyası formatını kontrol edin

## 📝 Değişiklik Geçmişi

### v0.1 (Mevcut)
- ✅ Temel bildirim sistemi
- ✅ Dinamik ikon değişimi
- ✅ Ses bildirimi
- ✅ MNNQ kanal desteği

### Gelecek Sürümler
- 🔄 Çoklu kanal desteği
- 🎨 Özelleştirilebilir bildirim sesleri
- 📊 İstatistik takibi
- 🌙 Karanlık tema

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Yeni bir branch oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin yeni-ozellik`)
5. Pull Request oluşturun

## 👨‍💻 Geliştirici

**Paris'deki Bebeg** (sketur60) tarafından geliştirilmiştir.

## 📞 İletişim

- 🎮 **Kick**: [kick.com/mnnq](https://kick.com/mnnq)
- 👨‍💻 **Geliştirici**: Paris'deki Bebeg (sketur60)
- 🐛 **Hata Bildirimi**: GitHub Issues sayfasından bildirebilirsiniz

## 🔒 Gizlilik

Bu uzantı:
- Kişisel verilerinizi toplamaz
- Sadece Kick.com API'sini kullanır
- Yerel depolama sadece bildirim ayarları için kullanılır

## 📄 İzinler

Bu uzantı aşağıdaki izinleri gerektirir:
- `notifications`: Masaüstü bildirimleri göndermek için
- `storage`: Kullanıcı ayarlarını kaydetmek için
- `activeTab`: Kick.com sayfasını izlemek için

---

⭐ **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

*MNNQ ile birlikte hiçbir canlı yayını kaçırmayın!* 🎮🔥
