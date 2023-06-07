function jogar() {
  const palpite = document.getElementById("palpite");
  let numero = Math.floor(Math.random() * 6) + 1
  const dado = document.getElementById("dado");

  dado.src = "img/dice_" + numero + ".gif";



  if (numero == palpite.value) {
    alert("Acertou!");
  } else {
    alert("Errou!");
  }

}

let vez = 1;
let vencedor = "";

function jogar(tituloCasa) {
  let casa = document.getElementById(tituloCasa);
  var bg = casa.style.getPropertyValue("background-image");
  if(bg == "none" || bg == "") {          
    var fig = `url(JogodaVelha0${vez}.jpg)`;
    casa.style.setProperty("background", fig);
    if(vez == 1) {
      vez = 2;
    } else {
      vez = 1;
    }
    verificarFimDeJogo();
  }
}

function verificarFimDeJogo() {
  if (casasIguais(1, 2, 3) || 
    casasIguais(4, 5, 6) || 
    casasIguais(7, 8, 9) ||
    casasIguais(1, 4, 7) || 
    casasIguais(2, 5, 8) || 
    casasIguais(3, 6, 9) ||
    casasIguais(1, 5, 9) || 
    casasIguais(3, 5, 7)) {

    document.getElementById("resultado").innerHTML = 
      `<h3>O jogador ${vencedor} venceu</h3>`;
    reiniciar();
  }
}

function casasIguais(a, b, c) {
  let casaA = document.getElementById("casa" + a);
  let casaB = document.getElementById("casa" + b);
  let casaC = document.getElementById("casa" + c);
  var bgA = casaA.style.getPropertyValue("background-image");
  var bgB = casaB.style.getPropertyValue("background-image");
  var bgC = casaC.style.getPropertyValue("background-image");

  if ((bgA === bgB) && (bgB === bgC) && (bgA != "none" && bgA != "")) {
    if (bgA.indexOf("1.jpg") >= 0) {
      vencedor = "1";
    } else {
      vencedor = "2";
    }
    return true;
  } else {
    return false;
  }
}

function reiniciar() {
  document.getElementById("casa1").style.setProperty("background", "none");
  document.getElementById("casa2").style.setProperty("background", "none");
  document.getElementById("casa3").style.setProperty("background", "none");
  document.getElementById("casa4").style.setProperty("background", "none");
  document.getElementById("casa5").style.setProperty("background", "none");
  document.getElementById("casa6").style.setProperty("background", "none");
  document.getElementById("casa7").style.setProperty("background", "none");
  document.getElementById("casa8").style.setProperty("background", "none");
  document.getElementById("casa9").style.setProperty("background", "none");
  vez = 1;
  vencedor = "";
}