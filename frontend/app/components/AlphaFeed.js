'use client';

export default function AlphaFeed() {
  const posts = [
    { user: 'Monarch', msg: 'Paris operasyonu için likidite hazırlıkları tamamlandı.', time: '12:00' },
    { user: 'Genesis_Elite', msg: 'Binance üzerindeki satış emirleri zayıflıyor, yukarı yönlü ivme beklentisi.', time: '12:45' }
  ];

  return (
    <div style={fStyles.box}>
      <h4 style={fStyles.title}>ALPHA FEED: SECURE CHANNEL</h4>
      <div style={fStyles.list}>
        {posts.map((p, i) => (
          <div key={i} style={fStyles.post}>
            <div style={fStyles.meta}>
              <span style={{ color: p.user === 'Monarch' ? '#fbbf24' : '#38bdf8' }}>@{p.user}</span>
              <span style={fStyles.time}>{p.time}</span>
            </div>
            <p style={fStyles.text}>{p.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const fStyles = {
  box: { background: 'rgba(15, 23, 42, 0.8)', padding: '20px', borderRadius: '25px', border: '1px solid #1e293b' },
  title: { fontSize: '10px', color: '#fbbf24', letterSpacing: '2px', marginBottom: '15px' },
  post: { padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' },
  meta: { display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 'bold' },
  time: { color: '#475569' },
  text: { fontSize: '13px', color: '#cbd5e1', marginTop: '5px' }
};