const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
}

function encriptar (stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  /*e enter
    i imes
    a ai
    o ober
    u ufat
  */
  stringEncriptada = stringEncriptada.toLowerCase();// obriga a digitar sempre em lowercase

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {// se string Encriptada possui matrizCodigo[i][0]
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);// string encriptada recebendo a mudança do primeiro elemento pelo segundo da matriz
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(mensagem.value);
  textArea.value = textoDesencriptado;
  mensagem.value = "";
}

function desencriptar (stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }

  return stringDesencriptada;
}
//basicamente inverteu a logica

const btnCopiar = document.querySelector(".btn-copiar");

btnCopiar.addEventListener("click", function() {
  mensagem.select();
  document.execCommand('copy');
  alert("Texto copiado com sucesso!");
});
