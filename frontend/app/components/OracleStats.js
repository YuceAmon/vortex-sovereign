export default function OracleStats() {
  const stats = [
    { label: "Başarı Oranı", value: "%91.4", color: "#22c55e" },
    { label: "Aktif Analiz", value: "24", color: "#38bdf8" },
    { label: "Mühürlü İşlem", value: "1,204", color: "#fbbf24" }
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px 0' }}>
      {stats.map(s => (
        <div key={s.label} style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #1e2329' }}>
          <div style={{ fontSize: '10px', color: '#94a3b8' }}>{s.label.toUpperCase()}</div>
          <div style={{ fontSize: '24px', color: s.color, fontWeight: 'bold' }}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}