'use client';

export default function MoneyHeatmap() {
  const assets = [
    { name: 'BTC', flow: '+1.2B', intensity: 'rgba(243, 186, 47, 0.8)' },
    { name: 'ETH', flow: '-200M', intensity: 'rgba(56, 189, 248, 0.4)' },
    { name: 'GOLD', flow: '+500M', intensity: 'rgba(251, 191, 36, 0.9)' },
    { name: 'USDT', flow: '+2.1B', intensity: 'rgba(34, 197, 94, 0.6)' },
  ];

  return (
    <div style={hStyles.container}>
      <h4 style={hStyles.title}>MONEY FLOW HEATMAP (GLOBAL)</h4>
      <div style={hStyles.grid}>
        {assets.map(asset => (
          <div key={asset.name} style={{ ...hStyles.tile, backgroundColor: asset.intensity }}>
            <span style={hStyles.name}>{asset.name}</span>
            <span style={hStyles.flow}>{asset.flow}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const hStyles = {
  container: { background: '#0b0e11', padding: '20px', borderRadius: '25px', border: '1px solid #1e293b' },
  title: { fontSize: '10px', color: '#94a3b8', letterSpacing: '2px', marginBottom: '15px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  tile: { height: '80px', borderRadius: '15px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.3s' },
  name: { fontWeight: 'bold', fontSize: '18px', color: '#000' },
  flow: { fontSize: '12px', color: '#000', opacity: 0.8 }
};