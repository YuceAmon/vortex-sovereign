'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const BinanceContext = createContext();

export const BinanceProvider = ({ children }) => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    // Binance WebSocket Bağlantısı (Canlı Fiyat Akışı)
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newPrices = {};
      data.forEach(item => {
        if (['BTCUSDT', 'ETHUSDT', 'SOLUSDT', 'BNBUSDT'].includes(item.s)) {
          newPrices[item.s] = {
            price: parseFloat(item.c).toFixed(2),
            change: parseFloat(item.P).toFixed(2)
          };
        }
      });
      setPrices(prev => ({ ...prev, ...newPrices }));
    };

    return () => ws.close();
  }, []);

  return (
    <BinanceContext.Provider value={prices}>
      {children}
    </BinanceContext.Provider>
  );
};

export const useBinance = () => useContext(BinanceContext);