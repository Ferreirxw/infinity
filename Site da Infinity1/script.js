const textoAnimado = document.getElementById('textoAnimado');
const palavras = ['INFINITY', 'FORNECEDORES', 'A NOVA ERA', 'OS MELHORES'];
let indice = 0;

function alterarTexto() {
  textoAnimado.textContent = palavras[indice];
  indice = (indice + 1) % palavras.length;
}

alterarTexto();
setInterval(alterarTexto, 1000);



