// Vezir'e eklenen Binance mantığı:
const analyzeMarket = () => {
  const btcData = prices['BTCUSDT'];
  if (btcData.change > 5) {
    return `Yüce Amon, Binance verilerine göre Bitcoin'de sert bir boğa ivmesi var. Genesis seviyesindeki analizleri açmamı ister misiniz?`;
  }
  return `Piyasa stabil, efendim. Emir defterindeki spread oranları sizin için optimize edildi.`;
};