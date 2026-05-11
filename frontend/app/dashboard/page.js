'use client';
import MoneyHeatmap from '../components/Heatmap';
import VezirSignal from '../components/VezirSignal';
import AlphaFeed from '../components/AlphaFeed';
import WhaleRadar from '../components/WhaleRadar';
import SentimentGauge from '../components/Sentiment';

export default function SovereignDashboard() {
  return (
    <main style={masterStyles.container}>
      {/* Üst Sıra: Nihai Karar ve Duygu Analizi */}
      <div style={masterStyles.topRow}>
        <div style={{ flex: 2 }}><VezirSignal /></div>
        <div style={{ flex: 1 }}><SentimentGauge value={72} /></div>
      </div>

      {/* Orta Sıra: Piyasa Isı Haritası ve Balina Takibi */}
      <div style={masterStyles.midRow}>
        <div style={{ flex: 1 }}><MoneyHeatmap /></div>
        <div style={{ flex: 1 }}><WhaleRadar /></div>
      </div>

      {/* Alt Sıra: Elit Sosyal Akış */}
      <div style={masterStyles.bottomRow}>
        <AlphaFeed />
      </div>
    </main>
  );
}

const masterStyles = {
  container: { padding: '0 40px 40px', display: 'flex', flexDirection: 'column', gap: '30px' },
  topRow: { display: 'flex', gap: '30px', alignItems: 'stretch' },
  midRow: { display: 'flex', gap: '30px' },
  bottomRow: { width: '100%' }
};