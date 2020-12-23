const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter((p) => p.includes('R$'));
// console.log(precosFiltro);

const precoNumeros = precosFiltro.map((p) => Number(p.replace('R$ ', '')));
console.log(precoNumeros);
