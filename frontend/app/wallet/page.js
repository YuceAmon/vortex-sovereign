'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WalletPage() {
  const [userName, setUserName] = useState('Kullanıcı');

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) setUserName(savedName);
  }, []);

  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', amount: '0.45', value: '28,912.72', profit: '+4.5%', color: '#f7931a' },
    { name: 'Ethereum', symbol: 'ETH', amount: '2.5', value: '8,625.50', profit: '+1.2%', color: '#627eea' },
    { name: 'Vortex Token', symbol: 'VTX', amount: '1500', value: '2,175.00', profit: '+12.8%', color: '#38bdf8' },
  ];

  const styles = {
    main: { backgroundColor: '#020617', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', background: '#0f172a', borderBottom: '1px solid #1e293b' },
    container: { maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' },
    header: { background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '40px', borderRadius: '30px', border: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' },
    listSection: { background: '#0f172a', padding: '30px', borderRadius: '30px', border: '1px solid #1e293b' },
    table: { width: '100%', borderCollapse: 'collapse', textAlign: 'left' },
    td: { padding: '20px 15px', borderBottom: '1px solid #1e293b' },
    progressBar: { display: 'flex', height: '10px', borderRadius: '5px', overflow: 'hidden', margin: '20px 0' }
  };

  return (
    <main style={styles.main}>
      <nav style={styles.nav}>
        <Link href="/dashboard" style={{ color: '#94a3b8', textDecoration: 'none' }}>← Borsaya Dön</Link>
        <h2 style={{ color: '#38bdf8', margin: 0, letterSpacing: '2px', fontSize: '18px' }}>VORTEX WALLET</h2>
        <div style={{ background: '#38bdf8', color: '#020617', padding: '8px 15px', borderRadius: '10px', fontWeight: 'bold' }}>
          {userName[0].toUpperCase()}
        </div>
      </nav>

      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>TOPLAM VARLIK</span>
            <h1 style={{ fontSize: '48px', margin: '10px 0 0 0' }}>$39,713.22</h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>GÜNLÜK KÂR</span>
            <div style={{ color: '#22c55e', fontSize: '20px', fontWeight: 'bold' }}>+$1,240.15</div>
          </div>
        </header>

        <section style={styles.listSection}>
          <h3>Varlık Dağılımı</h3>
          <div style={styles.progressBar}>
            <div style={{ width: '60%', backgroundColor: '#f7931a' }}></div>
            <div style={{ width: '25%', backgroundColor: '#627eea' }}></div>
            <div style={{ width: '15%', backgroundColor: '#38bdf8' }}></div>
          </div>

          <table style={styles.table}>
            <thead>
              <tr style={{ color: '#64748b', fontSize: '13px' }}>
                <th style={{ padding: '15px' }}>VARLIK</th>
                <th style={{ padding: '15px' }}>MİKTAR</th>
                <th style={{ padding: '15px' }}>DEĞER</th>
                <th style={{ padding: '15px' }}>DURUM</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.symbol}>
                  <td style={styles.td}><strong>{asset.name}</strong></td>
                  <td style={styles.td}>{asset.amount} {asset.symbol}</td>
                  <td style={styles.td}>${asset.value}</td>
                  <td style={{ ...styles.td, color: '#22c55e' }}>{asset.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}