'use client';
import { useEffect } from 'react';

export default function LibraryPage() {
  useEffect(() => {
    // PrintScreen ve Ekran Görüntüsü Engelleme Protokolü
    const preventScreenCapture = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText(""); // Clipboard'ı temizle
        alert("GİZLİLİK İHLALİ: EKİBİMİZE BİLDİRİLDİ.");
      }
    };

    window.addEventListener('keyup', preventScreenCapture);
    
    // CSS ile yazı seçimini engelleme
    document.body.style.userSelect = "none";

    // Temizlik: Sayfadan çıkıldığında dinleyiciyi kaldırır
    return () => {
      window.removeEventListener('keyup', preventScreenCapture);
      document.body.style.userSelect = "auto";
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>VORTEX SOVEREIGN: BİLGİ KÜTÜPHANESİ</h1>
      <p style={styles.text}>
        Buradaki tüm stratejiler ve veriler Monarch seviyesindeki üyelerimize özeldir. 
        Kopyalanması veya paylaşılması yasaktır.
      </p>
      
      <div style={styles.contentBox}>
        {/* Buraya kütüphane içeriklerini ekleyebilirsin */}
        <p>Stratejik Veriler Yükleniyor...</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#020617',
    minHeight: '100vh',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif'
  },
  title: {
    color: '#fbbf24',
    borderBottom: '2px solid #fbbf24',
    paddingBottom: '10px'
  },
  text: {
    fontSize: '1.1rem',
    opacity: 0.8
  },
  contentBox: {
    marginTop: '30px',
    padding: '20px',
    border: '1px border #1e293b',
    borderRadius: '8px',
    backgroundColor: '#0f172a'
  }
};