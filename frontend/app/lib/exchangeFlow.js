// app/lib/exchangeFlow.js
export const getExchangeFlow = async () => {
  // Binance API'den gelen verilerin simülasyonu
  const data = {
    btc_inflow: 1200, // BTC
    btc_outflow: 3500, // BTC
    sentiment: "BULLISH" // Borsadan çıkış (outflow) daha fazlaysa bullish
  };
  
  return {
    net: data.btc_outflow - data.btc_inflow,
    status: data.btc_outflow > data.btc_inflow ? "HODL MODU" : "SATIŞ BASKISI",
    color: data.btc_outflow > data.btc_inflow ? "#22c55e" : "#ef4444"
  };
};