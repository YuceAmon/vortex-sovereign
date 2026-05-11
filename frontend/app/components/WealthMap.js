'use client';
import { useState, useEffect } from 'react';

export default function WhaleRadar() {
  const [alerts, setAlerts] = useState([
    { id: 1, text: "500 BTC aktarıldı (Bilinmeyen Cüzdan -> Binance)", time: "1 dk önce" },
    { id: 2, text: "20,000 ETH kilitlendi (Lido Staking)", time: "5 dk önce" }
  ]);

  return (
    <div style={rStyles.box}>
      <h4 style={{ color: '#fbbf24', fontSize: '12px' }}>● BALİNA RADARI (LIVE)</h4>
      <div style={rStyles.list}>
        {alerts.map(a => (
          <div key={a.id} style={rStyles.alert}>
            <span style={{ color: '#38bdf8' }}>[{a.time}]</span> {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}

const rStyles = {
  box: { background: 'rgba(56, 189, 248, 0.05)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(56, 189, 248, 0.2)' },
  list: { marginTop: '10px', maxHeight: '150px', overflowY: 'auto' },
  alert: { fontSize: '11px', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px' }
};