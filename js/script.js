window.addEventListener('load', start);

function start() {
  console.log('Aula 10');
  console.log('Pagina totalmente carregada');

  var nameInput = document.getElementById('nameInput');
  nameInput.addEventListener('keyup', countName);

  var form = document.querySelector('form');
  form.addEventListener('submit', preventSubmit);
}

function countName(event) {
  var count = event.target.value;

  var span = document.getElementById('nameLength');
  span.textContent = count.length;
}

function preventSubmit(event) {
  event.preventDefault();

  var nameInput = document.getElementById('nameInput');
  alert(nameInput);
}
