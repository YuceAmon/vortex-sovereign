'use client';
import { useEffect, useState } from 'react';

export default function UserProfile({ params }) {
  const [userData, setUserData] = useState({ name: 'Yüce Amon', role: 'Monarch', region: 'Azerbaijan' });

  return (
    <main style={pStyles.main}>
      <div style={pStyles.profileCard}>
        <div style={pStyles.avatarBorder}>
          <div style={pStyles.avatar}>AMON</div>
        </div>
        <h1 style={pStyles.name}>{userData.name}</h1>
        <div style={pStyles.badge}>{userData.role}</div>
        <div style={pStyles.infoGrid}>
          <div style={pStyles.infoBox}>BÖLGE: {userData.region}</div>
          <div style={pStyles.infoBox}>SADAKAT: 154 GÜN</div>
        </div>
        <div style={pStyles.bio}>"Gelecek, mühürlenmiş bir stratejidir."</div>
      </div>
    </main>
  );
}

const pStyles = {
  main: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617' },
  profileCard: { textAlign: 'center', padding: '50px', background: 'linear-gradient(145deg, #0f172a, #020617)', borderRadius: '40px', border: '1px solid rgba(251, 191, 36, 0.3)', width: '400px' },
  avatarBorder: { width: '120px', height: '120px', borderRadius: '50%', padding: '3px', background: 'linear-gradient(45deg, #fbbf24, transparent)', margin: '0 auto 20px' },
  avatar: { width: '100%', height: '100%', borderRadius: '50%', background: '#0b0e11', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#fbbf24', fontWeight: 'bold' },
  name: { fontSize: '28px', color: '#fff', marginBottom: '10px', letterSpacing: '2px' },
  badge: { display: 'inline-block', padding: '5px 15px', borderRadius: '20px', border: '1px solid #fbbf24', color: '#fbbf24', fontSize: '12px', fontWeight: 'bold' },
  infoGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '30px' },
  infoBox: { padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', fontSize: '10px', color: '#94a3b8' },
  bio: { marginTop: '30px', color: '#475569', fontSize: '13px', fontStyle: 'italic' }
};