//Questão 1
console.log("Questão 1");

let indice = 13;
let soma = 0 ;
let k = 0;

while (k < indice) {
    k = k +1;
    soma = soma + k;
}

console.log(`Resposta da primeira questão = ${soma};`);

//Questão 2
console.log("");
console.log("Questão 2");

const fibonacci = [];
const confere = n => {
    if (n <= 1) {
      return n;
    }
     
    let a = 0, b = 1, c = 1;
    
    while (c < n) {
      c = a + b;
      fibonacci.push(c);
      a = b;
      b = c;
    }
    const verifica = fibonacci.includes(n) ? "pertence" : "não pertence";
    return console.log(`O número ${n} ${verifica};`);
};

confere(35);

//Questão 3

fetch('../json/faturamento.json')
    .then((response) => response.json())
    .then((json) => {
      let vetor = json;

    console.log("");
    console.log("Questão 3");
    let min = Math.min.apply(null, vetor.janeiro.map(item =>
      item.faturamento).filter(Boolean));
      
    let max = Math.max.apply(null, vetor.janeiro.map(item =>
      item.faturamento).filter(Boolean));

    let diaCorrespondente = (valor) => vetor.janeiro.find(item => item.faturamento == valor);

    console.log(`O menor faturamento ocorreu no ${diaCorrespondente(min).dia} e o valor é de R$ ${min}`);
    console.log(`O maior faturamento ocorreu no ${diaCorrespondente(max).dia} e o valor é de R$ ${max}`);

    let vetor1 = [];

    let novoVetor = vetor.janeiro.forEach(element => {
      if(element.faturamento > 0) {
         vetor1.push(element.faturamento);
      }
    });

    const vetor2 = [];
    const vetorMedia = [];
    let media = (vetor1.reduce((a, b) => a + b, 0)/vetor1.length).toFixed(2);

    for (const i in vetor.janeiro) {
      if (vetor.janeiro[i].faturamento > 0) {
        vetor2.push(vetor.janeiro[i]);
      }
    
    }
    for (const i in vetor.janeiro) {
      if (vetor.janeiro[i].faturamento > media) {
        vetorMedia.push(vetor.janeiro[i]);
      }
    }

    console.log("Dias com faturamento diferente de 0:");
    console.table(vetor2);
    console.log(`Média: ${media}`);
    console.log("");
    console.log(`O número de dias no mês com faturamento diário superior à média mensal é ${vetorMedia.length}`);

});


const distribuidora = [
  {"estado": "sp", "faturamento" : 67836.43},
  {"estado": "rj", "faturamento" : 36678.66},
  {"estado": "mg", "faturamento" :  29229.88},
  {"estado": "es", "faturamento" : 27165.48},
  {"estado": "outros", "faturamento" : 19849.53}
]

const total = distribuidora.reduce((a, b) => a + b.faturamento, 0);
const final = distribuidora.map(e => ({...e, FaturamentoEmPorcentagem: (e.faturamento * 100 / total).toFixed(2)}));


const exibirQuestao4 = setTimeout(questao4, 50);

function questao4() {
  console.log("");
  console.log("Questão 4")
  console.table(final);
}

const exibirQuestao5 = setTimeout(reverse, 50);

function reverse() {
  let string = "Alef Bryan";
  let o = '';
  for (var i = string.length - 1; i >= 0; i--)
    o += string[i];
  console.log("");
  console.log("Questão 5")
  console.log(o);
}