'use client';
import { useState, useEffect } from 'react';

export default function GlobalMarketBar() {
  const [times, setTimes] = useState({ ny: '', ln: '', tk: '' });

  useEffect(() => {
    const updateTime = () => {
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setTimes({
        ny: new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'America/New_York' }).format(new Date()),
        ln: new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Europe/London' }).format(new Date()),
        tk: new Intl.DateTimeFormat('ja-JP', { ...options, timeZone: 'Asia/Tokyo' }).format(new Date())
      });
    };
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={mStyles.bar}>
      <div style={mStyles.item}>● NEW YORK <span style={mStyles.time}>{times.ny}</span></div>
      <div style={mStyles.item}>● LONDON <span style={mStyles.time}>{times.ln}</span></div>
      <div style={mStyles.item}>● TOKYO <span style={mStyles.time}>{times.tk}</span></div>
      <div style={{ ...mStyles.item, color: '#22c55e', marginLeft: 'auto' }}>VORTEX NETWORK: GLOBAL ENCRYPTION ACTIVE</div>
    </div>
  );
}

const mStyles = {
  bar: { display: 'flex', gap: '40px', background: '#0b0e11', padding: '12px 50px', fontSize: '11px', color: '#94a3b8', borderBottom: '1px solid #1e2329', zIndex: 100, position: 'relative' },
  item: { letterSpacing: '2px', fontWeight: '500' },
  time: { color: '#fbbf24', marginLeft: '8px' }
};