// PRECISO VERIFICAR O MOTIVO DE NÃO RESETAR O Nº NO CAMPO APÓS A FUNCTION START()

var state = { lista: [], resultado: [] };

function start() {
  addNumberToList();
  resetField();
  console.log(state.lista);
}

function addNumberToList() {
  var numberToAdd = document.querySelector('#numbers');
  numberToAdd.innerHTML = ' ';
  var numberToAdd = Number(numberToAdd.value);

  if (numberToAdd < 1 || numberToAdd > 100 || numberToAdd === '') {
    console.error('[ERRO] Número inválido.');
    return;
  }
  if (isNumberInList(numberToAdd)) {
    console.error('[ERRO] Número já existente.', numberToAdd);
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

function resetField() {
  var numberToAdd = document.querySelector('#numbers');
  numberToAdd.innerHTML = '';
}

function numberTable(numberToShow) {
  list = document.querySelector('#table');
  listReturn = document.createElement('option');
  listReturn.text = `Número ${numberToShow} adicionado.`;

  list.appendChild(listReturn);
}
/* else {
  for (let key in state.lista) {
    if (newNumber == key) {
      window.alert('[ERRO] Número já adicionado na lista.');
      return;
    }
  }

  if (newNumber) {
    state.lista.push(newNumber);
  }
}
console.log(state.lista);

function retorno() {}
*/
