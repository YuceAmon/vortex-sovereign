'use client';
import MoneyHeatmap from '../components/Heatmap';
import VezirSignal from '../components/VezirSignal';
import AlphaFeed from '../components/AlphaFeed';
import WealthMap from '../components/WealthMap';
import SentimentGauge from '../components/Sentiment';
import Sidebar from '../../components/Sidebar';
export default function SovereignDashboard() {
  return (
  <div className="flex"> {/* Bu yeni eklediğimiz dış çerçeve */}
    <Sidebar /> {/* Az önce oluşturduğun menü burada görünecek */}

    <main style={masterStyles.container} className="flex-1">
      {/* Dashboard içeriğin burada kalmaya devam edecek */}
      </div>

      {/* Orta Sıra: Piyasa Isı Haritası ve Balina Takibi */}
      <div style={masterStyles.midRow}>
        <div style={{ flex: 1 }}><MoneyHeatmap /></div>
        <div style={{ flex: 1 }}><WealthMap /></div>
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