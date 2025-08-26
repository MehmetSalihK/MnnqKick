// Configuration directe pour éviter les conflits
const CHANNEL_NAME = 'mnnq';

// Kick akış verilerini alacak fonksiyonu tanımlayın
async function getKickStreamData() {
    const apiUrl = `https://kick.com/api/v2/channels/${CHANNEL_NAME}/`; // Nom du canal direct
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) { // Cevabın uygun olup olmadığını kontrol et
            throw new Error(`HTTP Hatası: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Kick verilerini alırken hata oluştu:', error);
        return null;
    }
}

// Akış durumunu kontrol etme fonksiyonu
async function check() {
    try {
        console.log('Checking stream status for:', CHANNEL_NAME);
        const kickData = await getKickStreamData();
        console.log('Kick data received:', kickData);

        // Eğer akış canlıysa, simgeyi ve başlığı güncelle
        if (kickData && kickData.livestream && kickData.livestream.is_live) {
            console.log('Stream is LIVE!');
            setBrowserActionIconAndTitle(true);  // Akış canlı
            
            // Bildirim kontrolü
            const isNotified = await getNotifiedStatus();
            console.log('Notification status:', isNotified);
            if (!isNotified) {
                console.log('Showing notification...');
                showNotification(kickData.livestream, kickData.user);
                setNotifiedStatus(true);
            }
        } else {
            console.log('Stream is OFFLINE');
            setBrowserActionIconAndTitle(false); // Akış çevrimdışı
            setNotifiedStatus(false); // Yayıncı canlı değilse sıfırla
        }
    } catch (error) {
        console.error('Akışı kontrol ederken hata oluştu:', error);
    }
}

// Uzantının düğmesinin simgesini ve başlığını güncelleme fonksiyonu
function setBrowserActionIconAndTitle(isLive) {
    const title = isLive ? `mnnq - CANLI YAYINDA` : `mnnq - ÇEVRİMDIŞI`;
    console.log('Setting icon and title:', title, 'isLive:', isLive);

    // Dinamik olarak simgeyi değiştirmek için chrome.action.setIcon kullanın
    const iconPath = isLive ? "images/icon_on_128.png" : "images/icon_off_128.png";
    const fullIconPath = chrome.runtime.getURL(iconPath);
    console.log('Trying to set icon:', fullIconPath);
    
    chrome.action.setIcon({ 
         path: {
             "16": chrome.runtime.getURL(isLive ? "images/icon_on_128.png" : "images/icon_off_128.png"),
             "32": chrome.runtime.getURL(isLive ? "images/icon_on_128.png" : "images/icon_off_128.png"),
             "48": chrome.runtime.getURL(isLive ? "images/icon_on_128.png" : "images/icon_off_128.png"),
             "128": chrome.runtime.getURL(isLive ? "images/icon_on_128.png" : "images/icon_off_128.png")
         }
     }).then(() => {
         console.log('Icon set successfully to:', fullIconPath);
     }).catch((error) => {
         console.error('Error setting icon:', error);
     });
    chrome.action.setTitle({ title });
}

// Bildirim gösterme fonksiyonu
function showNotification(livestream, user) {
    const username = user.username;
    const profilePic = user.profile_pic;
    console.log('Creating notification for:', username);

    // Son çalma fonksiyonu
    function playNotificationSound() {
        try {
            const audio = new Audio(chrome.runtime.getURL('images/carsound.mp3'));
            audio.volume = 0.5;
            audio.play().catch(error => {
                console.error('Error playing notification sound:', error);
            });
        } catch (error) {
            console.error('Error creating audio:', error);
        }
    }

    chrome.notifications.create({
        type: 'basic',
        iconUrl: profilePic || chrome.runtime.getURL('images/icon_on_128.png'),
        title: `${username} CANLI YAYINDA!`,
        message: `Kahveni al ve yayına gel! ☕️`,
        priority: 2,
        silent: false
    }, (notificationId) => {
        if (chrome.runtime.lastError) {
            console.error('Error creating notification:', chrome.runtime.lastError);
        } else {
            console.log('Notification created successfully:', notificationId);
            // Son çal
            playNotificationSound();
        }
    });
}

// chrome.storage kullanarak notification durumunu kaydet
function setNotifiedStatus(status) {
    chrome.storage.local.set({ notified: status });
}

// Notification durumunu almak
function getNotifiedStatus() {
    return new Promise((resolve) => {
        chrome.storage.local.get(['notified'], (result) => {
            resolve(result.notified || false);
        });
    });
}

// Uzantı başlatıldığında check fonksiyonunun ilk çağrısı
check();

// Her 30 saniyede bir check fonksiyonunu periyodik olarak çağır
setInterval(check, 30000);
