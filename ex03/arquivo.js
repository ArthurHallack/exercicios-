const faturamentoDiario = [
    22174.1664,
    24537.6698,
    26139.6134,
    0.0,
    0.0,
    26742.6612,
    0.0,
    42889.2258,
    46251.174,
    11191.4722,
    0.0,
    0.0,
    3847.4823,
    373.7838,
    2659.7563,
    48924.2448,
    18419.2614,
    0.0,
    0.0,
    35240.1826,
    43829.1667,
    18235.6852,
    4355.0662,
    3327.1025,
    0.0,
    0.0,
    25681.8318,
    1718.1221,
    13220.495,
    8414.61,
  ];
  const menorFaturamento = Math.min(...faturamentoDiario);
  console.log("O menor valor: " + menorFaturamento);
  
  const maiorFaturamento = Math.max(...faturamentoDiario);
  console.log("O maior valor: " + maiorFaturamento);
  
  const mediaMensal = faturamentoDiario.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0) / faturamentoDiario.length;
  const faturamentosAcimaDaMedia = faturamentoDiario.filter(faturamento => faturamento > mediaMensal);
  console.log(`Numero de dias em que o faturamento foi superior a media mensal: ${faturamentosAcimaDaMedia.length}`);
  console.log(`Faturamentos acima da media: ${faturamentosAcimaDaMedia.join(", ")}`);