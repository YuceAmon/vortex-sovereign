'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TheVault() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role !== 'Monarch') {
      router.push('/dashboard');
    } else {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) return null;

  return (
    <main style={vStyles.main}>
      <h1 style={vStyles.title}>THE SOVEREIGN VAULT</h1>
      <div style={vStyles.grid}>
        <div style={vStyles.card}>
          <h3>ALTIN REZERVİ HEDEFİ</h3>
          <div style={{ fontSize: '32px', color: '#fbbf24' }}>5,000 GR</div>
          <p>Yıllık Hedef: %15 Büyüme</p>
        </div>
        <div style={vStyles.card}>
          <h3>STRATEJİK NOTLAR</h3>
          <p style={{ color: '#94a3b8' }}>"2026 Ağustos Paris seyahati öncesi likidite artırılacak."</p>
        </div>
      </div>
    </main>
  );
}

const vStyles = {
  main: { backgroundColor: '#020617', minHeight: '100vh', padding: '80px', fontFamily: 'serif' },
  title: { color: '#fbbf24', textAlign: 'center', fontSize: '50px', letterSpacing: '10px', marginBottom: '60px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' },
  card: { background: 'rgba(251, 191, 36, 0.05)', padding: '40px', borderRadius: '30px', border: '1px solid #fbbf24' }
};