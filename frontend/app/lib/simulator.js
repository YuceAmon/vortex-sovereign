// Vezir'in Senaryo Analiz Motoru
export const runScenario = (event) => {
  const scenarios = {
    "FED_FAIZ_ARTISI": {
      gold: "+%2.5 İvme",
      btc: "-%4.2 Volatilite",
      advice: "Likiditeyi altına kaydırın, Yüce Amon."
    },
    "BINANCE_LISTELEME": {
      token: "+%40 Spekülasyon",
      advice: "Genesis üyeleri için 'Hızlı Giriş' protokolünü aktif et."
    }
  };
  return scenarios[event] || { advice: "Veri bekleniyor..." };
};