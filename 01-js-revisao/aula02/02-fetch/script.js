fetch('https://viacep.com.br/ws/01001000/json/')
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
  });

// Sintax mais limpa com Async e await
async function fetchCep(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
}

const produtos = fetchCep('https://viacep.com.br/ws/01001000/json/');
