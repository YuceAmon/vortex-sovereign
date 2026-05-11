'use client';
import { useState, useEffect } from 'react';

export default function VortexPro() {
  const [prices, setPrices] = useState([
    { name: 'Bitcoin', symbol: 'BTC', price: 64250.50, change: '+2.4%', color: '#f7931a' },
    { name: 'Ethereum', symbol: 'ETH', price: 3450.20, change: '+1.8%', color: '#627eea' },
    { name: 'Vortex', symbol: 'VTX', price: 1.45, change: '+12.5%', color: '#38bdf8' },
    { name: 'Solana', symbol: 'SOL', price: 145.10, change: '-0.5%', color: '#14f195' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        price: Math.max(0.01, p.price + (Math.random() - 0.5) * 5)
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Stil Nesneleri
  const styles = {
    mainContainer: { backgroundColor: '#020617', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative' },
    navbar: { display: 'flex', justifyContent: 'space-between', padding: '15px 40px', background: 'rgba(15, 23, 42, 0.8)', borderBottom: '1px solid #1e293b', alignItems: 'center' },
    logo: { color: '#38bdf8', letterSpacing: '3px', fontWeight: 'bold' },
    navRight: { display: 'flex', gap: '30px', alignItems: 'center' },
    balanceLabel: { fontSize: '10px', color: '#94a3b8', display: 'block' },
    balanceValue: { fontSize: '18px', fontWeight: 'bold', color: '#38bdf8' },
    depositBtn: { backgroundColor: '#fff', color: '#020617', padding: '10px 20px', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
    contentGrid: { display: 'grid', gridTemplateColumns: '1fr 380px', gap: '25px', padding: '30px' },
    priceGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '25px' },
    priceCard: { background: 'rgba(30, 41, 59, 0.4)', padding: '15px', borderRadius: '15px', border: '1px solid #1e293b' },
    cardHeader: { display: 'flex', justifyContent: 'space-between', fontSize: '12px' },
    cardPrice: { fontSize: '20px', fontWeight: 'bold', marginTop: '5px' },
    chartPanel: { background: 'rgba(15, 23, 42, 0.6)', borderRadius: '25px', padding: '25px', border: '1px solid #1e293b', height: '350px' },
    barChart: { display: 'flex', alignItems: 'flex-end', gap: '10px', height: '220px', marginTop: '30px' },
    bar: { flex: 1, borderRadius: '4px', transition: 'height 0.3s' },
    tradeAside: { background: 'rgba(15, 23, 42, 0.9)', borderRadius: '25px', padding: '30px', border: '1px solid #38bdf8', height: 'fit-content' },
    input: { width: '100%', padding: '15px', backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff', marginBottom: '20px', outline: 'none' },
    confirmBtn: { width: '100%', padding: '15px', borderRadius: '12px', border: 'none', backgroundColor: '#38bdf8', color: '#020617', fontWeight: 'bold', cursor: 'pointer' },
    modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
    modalContent: { backgroundColor: '#0f172a', padding: '30px', borderRadius: '24px', width: '90%', maxWidth: '450px', border: '1px solid #334155' },
    closeBtn: { background: 'none', border: 'none', color: '#64748b', fontSize: '20px', cursor: 'pointer' },
    methodCard: { display: 'flex', alignItems: 'center', background: '#1e293b', padding: '15px', borderRadius: '15px', marginTop: '15px', border: '1px solid #334155' },
    selectBtn: { backgroundColor: '#38bdf8', color: '#020617', padding: '5px 12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' },
    addressBox: { backgroundColor: '#020617', padding: '15px', borderRadius: '15px', marginTop: '20px', border: '1px dashed #38bdf8' }
  };

  return (
    <main style={styles.mainContainer}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>VORTEX PRO</h2>
        <div style={styles.navRight}>
          <div>
            <span style={styles.balanceLabel}>VARLIKLARIM</span>
            <span style={styles.balanceValue}>$142,500.80</span>
          </div>
          <button onClick={() => setIsModalOpen(true)} style={styles.depositBtn}>Para Yatır</button>
        </div>
      </nav>

      <div style={styles.contentGrid}>
        <section>
          <div style={styles.priceGrid}>
            {prices.map(p => (
              <div key={p.symbol} style={styles.priceCard}>
                <div style={styles.cardHeader}>
                  <span style={{ color: p.color, fontWeight: 'bold' }}>{p.symbol}</span>
                  <span style={{ color: p.change.includes('+') ? '#22c55e' : '#ef4444' }}>{p.change}</span>
                </div>
                <div style={styles.cardPrice}>${p.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
            ))}
          </div>

          <div style={styles.chartPanel}>
            <h3 style={{ margin: 0 }}>Grafik Analizi</h3>
            <div style={styles.barChart}>
              {[40, 70, 50, 90, 60, 80, 40, 100, 60, 85, 70, 110].map((h, i) => (
                <div key={i} style={{ ...styles.bar, height: `${h}%`, backgroundColor: i > 9 ? '#38bdf8' : 'rgba(56, 189, 248, 0.2)' }}></div>
              ))}
            </div>
          </div>
        </section>

        <aside style={styles.tradeAside}>
          <h3 style={{ marginBottom: '20px' }}>Hızlı İşlem</h3>
          <input type="text" placeholder="Miktar (USDT)" style={styles.input} />
          <button style={styles.confirmBtn}>İŞLEMİ ONAYLA</button>
        </aside>
      </div>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Bakiye Yükle</h3>
              <button onClick={() => setIsModalOpen(false)} style={styles.closeBtn}>✕</button>
            </div>
            <div style={styles.methodCard}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold' }}>Kripto Transfer</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>USDT (TRC20)</div>
              </div>
              <button style={styles.selectBtn}>Seç</button>
            </div>
            <div style={styles.addressBox}>
              <small style={{ color: '#38bdf8' }}>Cüzdan Adresi:</small>
              <div style={{ fontSize: '11px', marginTop: '5px', wordBreak: 'break-all', color: '#fff' }}>
                T9yDxGS2u7gv6asSNo71C7656EC7ab88b098defB
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}