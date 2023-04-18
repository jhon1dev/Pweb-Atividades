const minusButton = document.getElementsByClassName("decrescer-controle-ajuste");
const plusButton = document.getElementsByClassName("acrescer-controle-ajuste");
const entradas = document.getElementsByClassName("controle-contador");

for (let i = 0; i < minusButton.length; i++) {

  minusButton[i].addEventListener("click", () => {
    entradas[i].value = parseInt(decrescer(entradas[i].value));
  });
}

for (let i = 0; i < minusButton.length; i++) {

  plusButton[i].addEventListener("click", () => {
    entradas[i].value = parseInt(acrescer(entradas[i].value));
  });
}


function acrescer(valorAtual) {
  if (valorAtual >= parseInt(0) && valorAtual < parseInt(100)) {
    return parseInt(valorAtual) + parseInt(10);
  }

  return "00";
}

function decrescer(valorAtual) {
  valorAtual = Number(valorAtual);

  if (valorAtual == 0) return 0;
  return parseInt(valorAtual) - parseInt(10);


}
