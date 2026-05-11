'use client'; // Eğer Binance verilerini tarayıcıda işleyeceksen ekle

// Mevcut mantığın burada kalsın
const analyzeMarket = () => {
  // ... btcData ve diğer mantıklar ...
  return "Piyasa stabil..."; 
};

// Vercel'in beklediği ana bileşen
export default function VezirPage() {
  const message = analyzeMarket();

  return (
    <div style={{ padding: '20px', backgroundColor: '#000', color: '#fff' }}>
      <h1>Vezir Analiz Sistemi</h1>
      <p>{message}</p>
    </div>
  );
}