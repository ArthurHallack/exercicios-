const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  const total = Object.values(faturamento).reduce((a, b) => a + b);
  const percentuais = {};
  for (let estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / total) * 100;
  }
  for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
  }