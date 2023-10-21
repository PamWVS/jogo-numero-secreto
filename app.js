let listaSorteados = [];
let quantidadeDisponivel = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto){
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});  
}

function exibirMensagemInicial (){
  exibirTextoTela('h1', 'Jogo do número secreto');
  exibirTextoTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
   let chute = document.querySelector('input').value;
   console.log(numeroSecreto);

    if (chute == numeroSecreto){
      exibirTextoTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = (`descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
      exibirTextoTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
       if (chute > numeroSecreto){
          exibirTextoTela('p', 'O número secreto é menor');
        } else { 
           exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    }
 }

 function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * quantidadeDisponivel + 1);
   let elementosNaLista = listaSorteados.length;

   if(elementosNaLista == quantidadeDisponivel){
    listaSorteados = [];
   }
   if(listaSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   } else {
    listaSorteados.push(numeroEscolhido);
    console.log(listaSorteados);
    return numeroEscolhido;
   }
 }

 function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
 }

 function reiniciarJogo(){
   numeroSecreto = gerarNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
 }
 //O return aqui serve para quando a função ser executada ela retorne um valor para a variavel