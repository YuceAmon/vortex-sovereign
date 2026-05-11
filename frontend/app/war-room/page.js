'use client';
import { useEffect, useRef } from 'react';

export default function WarRoom() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "interval": "H",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "tr",
          "enable_publishing": false,
          "hide_top_toolbar": false,
          "backgroundColor": "rgba(2, 6, 23, 1)",
          "gridColor": "rgba(30, 41, 59, 0.5)",
          "container_id": "vortex_chart",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <main style={wrStyles.main}>
      <header style={wrStyles.header}>
        <h2 style={{ color: '#fbbf24', letterSpacing: '5px' }}>VORTEX WAR ROOM</h2>
        <div style={wrStyles.status}>LIVE INTEL: ACTIVE</div>
      </header>
      <div style={wrStyles.layout}>
        <div id="vortex_chart" style={{ flex: 1, borderRadius: '20px', overflow: 'hidden', border: '1px solid #1e293b' }}></div>
        <aside style={wrStyles.sidebar}>
          <h4 style={{ color: '#fbbf24' }}>VEZİR ANALİZİ</h4>
          <p style={wrStyles.analysisText}>
            "Yüce Amon, RSI değerleri konsolidasyon bölgesinde. Genesis üyeleri için mühürlü analiz bekleniyor."
          </p>
          <button style={wrStyles.sealBtn}>STRATEJİYİ MÜHÜRLE</button>
        </aside>
      </div>
    </main>
  );
}

const wrStyles = {
  main: { backgroundColor: '#020617', height: '100vh', display: 'flex', flexDirection: 'column', padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  status: { color: '#22c55e', fontSize: '12px', fontWeight: 'bold' },
  layout: { display: 'flex', flex: 1, gap: '20px' },
  sidebar: { width: '300px', background: '#0f172a', borderRadius: '20px', padding: '25px', border: '1px solid #1e293b' },
  analysisText: { color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', fontStyle: 'italic' },
  sealBtn: { width: '100%', marginTop: '20px', padding: '15px', background: 'transparent', border: '1px solid #fbbf24', color: '#fbbf24', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }
};