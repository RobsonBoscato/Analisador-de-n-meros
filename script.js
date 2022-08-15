// PRECISO VERIFICAR O MOTIVO DE NÃO RESETAR O Nº NO CAMPO APÓS A FUNCTION START()

var state = { lista: [] };

function start() {
  addNumberToList();
}

function retorno() {
  listResume = document.querySelector('#res');

  const sum = state.lista.reduce((partialSum, a) => partialSum + a, 0);

  listResume.innerHTML = `
    Ao todo, a lista tem
    <strong>${state.lista.length}</strong> números cadastrados;<br>

    <br> O maior valor informado foi de
    <strong>${Math.max(...state.lista)} </strong> ;<br>

    <br> O menor valor informado foi de
    <strong>${Math.min(...state.lista)} </strong> ;<br>

    <br> Somando todos os valores, temos <strong>${sum}</strong> ;<br>

    <br> A média ficou de <strong>${(sum / state.lista.length)
      .toFixed(2)
      .replace('.', ',')}</strong> ;`;

  resetButton();
}

function addNumberToList() {
  var numberToAdd = document.querySelector('#numbers');
  numberToAdd.innerHTML = ' ';
  var numberToAdd = Number(numberToAdd.value);

  if (numberToAdd < 1 || numberToAdd > 100 || numberToAdd === '') {
    window.alert('[ERRO] Número inválido.');
    return;
  }
  if (isNumberInList(numberToAdd)) {
    window.alert('[ERRO] Número já existente.', numberToAdd);
    return;
  }
  state.lista.push(numberToAdd);
  numberTable(numberToAdd);
}

function isNumberInList(numberToCheck) {
  if (state.lista.includes(numberToCheck)) {
    //TRUE se estiver na lista
    return true;
  }
  return false;
}

function resetButton() {
  var resetButton = document.querySelector('#resetButton');
  resetButton.disabled = false;
}

function numberTable(numberToShow) {
  list = document.querySelector('#table');
  listReturn = document.createElement('option');
  listReturn.text = `Número ${numberToShow} adicionado.`;

  list.appendChild(listReturn);
}

function resetField() {
  listResume = document.querySelector('#res');
  listResume.innerHTML = '';
  list = document.querySelector('#table');
  list.innerHTML = '';
  state.lista = [];
}
