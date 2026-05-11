'use client';

export default function VezirSignal() {
  // Bu veriler normalde bir API'den veya WebSocket'ten gelir
  const signal = { status: "TAARRUZ", confidence: "%91", target: "69,200$" };

  return (
    <div style={sStyles.card}>
      <div style={sStyles.overlay}></div>
      <div style={sStyles.content}>
        <span style={sStyles.label}>VEZİR STRATEJİK KOMUTA</span>
        <h2 style={{ 
          ...sStyles.status, 
          color: signal.status === "TAARRUZ" ? "#22c55e" : "#ef4444" 
        }}>
          {signal.status}
        </h2>
        <div style={sStyles.details}>
          <div style={sStyles.detailItem}>GÜVEN ENDEKSİ: <span style={{color: '#fbbf24'}}>{signal.confidence}</span></div>
          <div style={sStyles.detailItem}>İLK HEDEF: <span style={{color: '#fbbf24'}}>{signal.target}</span></div>
        </div>
        <div style={sStyles.monarchSeal}>MONARCH MÜHÜRLÜ ANALİZ</div>
      </div>
    </div>
  );
}

const sStyles = {
  card: { position: 'relative', background: '#020617', padding: '30px', borderRadius: '35px', border: '2px solid #fbbf24', overflow: 'hidden', textAlign: 'center', boxShadow: '0 0 30px rgba(251, 191, 36, 0.1)' },
  overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)' },
  content: { position: 'relative', zIndex: 1 },
  label: { fontSize: '9px', color: '#94a3b8', letterSpacing: '4px' },
  status: { fontSize: '48px', margin: '15px 0', letterSpacing: '8px', textShadow: '0 0 25px rgba(34, 197, 94, 0.3)', fontWeight: '900' },
  details: { display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', fontWeight: 'bold', marginBottom: '20px' },
  monarchSeal: { fontSize: '10px', color: '#fbbf24', border: '1px solid #fbbf24', display: 'inline-block', padding: '6px 20px', borderRadius: '50px', letterSpacing: '2px' }
};