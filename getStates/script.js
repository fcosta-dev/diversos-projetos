const selectStateElement = document.getElementById('states')
const fetchApi = () => {
  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((response) => response.json())
    .then((result) => {
      result.forEach(element => {
        const stateOptionElement = document.createElement('option');
        stateOptionElement.innerText = element.nome;
        stateOptionElement.value = element.sigla;
        selectStateElement.appendChild(stateOptionElement);
      })
    })
}
fetchApi();
