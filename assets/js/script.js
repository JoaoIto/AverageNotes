let calcBtn = document.getElementById("submit");
calcBtn;
addEventListener("click", function calcMedia() {
  let lista = [];
  for (let i = 0; i < 3; i++) {
    lista[i] = parseFloat(document.getElementById("note" + (i + 1)).value);
  }
  console.log(lista);
  let resultNotes = document.getElementById("result");
  let result = (lista[0] + lista[1] + lista[2]) / 3;
  resultNotes.innerHTML = "Final note: " + Math.round(result);
  if (result <= 0) {
    resultNotes.innerHTML = "Sua Nota é inválida!";
  }
});