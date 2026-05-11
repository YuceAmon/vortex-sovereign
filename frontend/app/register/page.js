'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleEntry = () => {
    if (!name.trim()) return;
    localStorage.setItem('userName', name);
    // Monarch Kontrolü: Yüce Amon ise tam yetki ver
    const role = name.toLowerCase().includes('amon') ? 'Monarch' : 'Novice';
    localStorage.setItem('userRole', role);
    router.push('/dashboard');
  };

  return (
    <main style={styles.entryBody}>
      <div style={styles.glowOverlay}></div>
      <div style={styles.loginCard}>
        <h1 style={styles.vortexTitle}>VORTEX</h1>
        <p style={styles.subtitle}>SOVEREIGN EDITION</p>
        <div style={styles.inputContainer}>
          <input 
            type="text" 
            placeholder="KİMLİĞİNİZİ DOĞRULAYIN" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.entryInput}
          />
          <button onClick={handleEntry} style={styles.entryBtn}>KALE KAPILARINI AÇ</button>
        </div>
        <p style={styles.disclaimer}>Sovereign Shield tarafından korunmaktadır.</p>
      </div>
    </main>
  );
}

const styles = {
  entryBody: { backgroundColor: '#020617', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', fontFamily: 'serif' },
  glowOverlay: { position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)', zIndex: 1 },
  loginCard: { textAlign: 'center', zIndex: 2, padding: '50px', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '40px', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(20px)' },
  vortexTitle: { fontSize: '60px', letterSpacing: '25px', color: '#fff', margin: 0, fontWeight: '100' },
  subtitle: { color: '#38bdf8', letterSpacing: '8px', fontSize: '12px', marginBottom: '40px' },
  entryInput: { width: '100%', padding: '20px', background: 'transparent', border: 'none', borderBottom: '1px solid #1e293b', color: '#fff', textAlign: 'center', fontSize: '18px', outline: 'none', marginBottom: '20px' },
  entryBtn: { width: '100%', padding: '15px', background: 'transparent', border: '1px solid #38bdf8', color: '#38bdf8', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' },
  disclaimer: { fontSize: '10px', color: '#475569', marginTop: '30px', letterSpacing: '2px' }
};