const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("Digite uma palavra: ", (str) => {
    let strInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i];
    }
    console.log(`A palavra invertida é: ${strInvertida}`);
    
    readline.close();
  });