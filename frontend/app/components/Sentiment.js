'use client';

export default function SentimentGauge({ value = 65 }) {
  const getColor = (v) => v > 70 ? '#22c55e' : v < 30 ? '#ef4444' : '#fbbf24';
  
  return (
    <div style={sStyles.container}>
      <div style={sStyles.label}>PİYASA KORKU & AÇGÖZLÜLÜK ENDEKSİ</div>
      <div style={sStyles.gauge}>
        <div style={{ ...sStyles.needle, left: `${value}%`, backgroundColor: getColor(value) }}></div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginTop: '5px' }}>
        <span>AŞIRI KORKU</span>
        <span style={{ color: getColor(value), fontWeight: 'bold' }}>{value > 50 ? 'AÇGÖZLÜLÜK' : 'KORKU'}</span>
        <span>AŞIRI AÇGÖZLÜLÜK</span>
      </div>
    </div>
  );
}

const sStyles = {
  container: { background: '#0b0e11', padding: '20px', borderRadius: '20px', border: '1px solid #1e293b' },
  label: { fontSize: '10px', color: '#94a3b8', textAlign: 'center', marginBottom: '15px' },
  gauge: { height: '6px', background: 'linear-gradient(90deg, #ef4444, #fbbf24, #22c55e)', borderRadius: '3px', position: 'relative' },
  needle: { position: 'absolute', top: '-5px', width: '4px', height: '16px', borderRadius: '2px', border: '1px solid #fff', transition: 'all 0.5s ease' }
};