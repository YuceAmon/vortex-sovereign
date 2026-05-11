'use client';
import { useState } from 'react';

export default function TheCitadel() {
  const [votes, setVotes] = useState({ proposal1: 85, proposal2: 12 });

  return (
    <main style={cStyles.main}>
      <h1 style={cStyles.title}>THE CITADEL: GOVERNANCE</h1>
      <section style={cStyles.proposalCard}>
        <div style={cStyles.header}>
          <h3>ÖNERİ #2026-05: Altın Rezerv Stratejisi</h3>
          <span style={cStyles.tag}>AÇIK OYLAMA</span>
        </div>
        <p style={{ color: '#94a3b8' }}>Küresel likidite dengesi için altın portföyünün %20 artırılması öneriliyor.</p>
        <div style={cStyles.voteBar}>
          <div style={{ ...cStyles.progress, width: `${votes.proposal1}%` }}>{votes.proposal1}% ONAY</div>
        </div>
        <button style={cStyles.monarchBtn}>MÜHÜRLE (MONARCH ONLY)</button>
      </section>
    </main>
  );
}

const cStyles = {
  main: { backgroundColor: '#020617', minHeight: '100vh', padding: '60px' },
  title: { color: '#fbbf24', letterSpacing: '15px', textAlign: 'center', marginBottom: '50px' },
  proposalCard: { background: '#0f172a', border: '1px solid #1e293b', padding: '40px', borderRadius: '25px', maxWidth: '800px', margin: '0 auto' },
  header: { display: 'flex', justifyContent: 'space-between', marginBottom: '20px' },
  tag: { color: '#22c55e', fontSize: '12px', border: '1px solid #22c55e', padding: '4px 10px', borderRadius: '5px' },
  voteBar: { background: '#1e293b', height: '30px', borderRadius: '15px', overflow: 'hidden', margin: '30px 0' },
  progress: { background: 'linear-gradient(90deg, #fbbf24, #d97706)', height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '20px', fontSize: '12px', fontWeight: 'bold', color: '#000' },
  monarchBtn: { width: '100%', padding: '15px', background: '#fbbf24', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }
};