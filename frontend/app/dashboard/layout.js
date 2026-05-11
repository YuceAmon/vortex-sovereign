'use client';
import GlobalMarketBar from '../components/GlobalMarketBar';
import RoyalBackground from '../components/RoyalBackground';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ backgroundColor: '#020617', minHeight: '100vh' }}>
      <GlobalMarketBar />
      <RoyalBackground />
      <div style={{ position: 'relative', zIndex: 10, paddingTop: '20px' }}>
        {children}
      </div>
    </div>
  );
}