const menu = {
  seletor: 'principal',
};

// console.log(menu.seletor.toUpperCase());

function upperName(name) {
  return name.toUpperCase();
}

// console.log(upperName('Igao'));

const lowerName = () => {};

const upperName2 = (name) => name.toUpperCase();

// console.log(upperName2('oi'));

function handleMouse({ clientX, clientY }) {
  const x = clientX;
  const y = clientY;
}

document.addEventListener('click', handleMouse);

const frutas = ['banana', 'uva'];
const [fruta1] = frutas;

// console.log(fruta1); // banana

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
// console.log(lados, perimetro(10));

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

// showList('Google', 'Igor', 'Rafael', 'Teste');

const numeros = [10, 20, 5];
const maior = Math.max(...numeros);

// console.log(maior);

const numeros2 = [9, 14, ...numeros, 10, 20];
// console.log(numeros2);

const carro = {
  cor: 'Azul',
  portas: 4,
};

carroAno = { ...carro, ano: 2020 };

console.log(carroAno);
