'use client';
import { useState, useEffect } from 'react';

export default function GlobalMarkets() {
  const [times, setTimes] = useState({ ny: '', ln: '', tk: '' });

  useEffect(() => {
    const updateTime = () => {
      const options = { hour: '2-digit', minute: '2-digit', hour12: false };
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
      <span>NEW YORK: {times.ny}</span>
      <span>LONDON: {times.ln}</span>
      <span>TOKYO: {times.tk}</span>
      <span style={{ color: '#22c55e' }}>● SERVER: SECURE</span>
    </div>
  );
}

const mStyles = {
  bar: { display: 'flex', gap: '30px', background: '#020617', padding: '10px 40px', fontSize: '10px', color: '#94a3b8', borderBottom: '1px solid #1e2329', letterSpacing: '2px' }
};