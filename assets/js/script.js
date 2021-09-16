let calcBtn = document.getElementById("media-calc");
calcBtn;addEventListener("click", function calcMedia(){

  let lista = [];

  for(let i = 0; i < 3; i ++) {
    lista[i] = parseFloat(document.getElementById("nota" + (i + 1)).value);
  }

  console.log(lista);

  let resultNotes = document.getElementById("media");
  let result = (lista[0] + lista[1] + lista[2]) / 3;
  resultNotes.innerHTML = ("Sua média final foi:" + Math.round(result));

  if (result <= 0){

    resultNotes.innerHTML = "Sua Nota é inválida!"
  }
});