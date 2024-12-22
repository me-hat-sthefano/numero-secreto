// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'jogo de adivinhar';
// console.log(titulo.innerHTML); // precisamos usar o .innerHTML por que se não aparecerá a linha completa
// //de html, "<h1>jogo de adivinhar</h1>"


// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'chute um número de 1 a 10';
// console.log(paragrafo.innerHTML);
let listaDeNumerosSorteados = []; 
let numeroMAXIMO = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 0;
exibirMensagenInicial();
console.log(numeroAleatorio);


function exibirMensagenInicial(){
    exibirTextoNaTela('h1', 'jogo de adivinhar');
    exibirTextoNaTela('p', `chute um numero de 1 a ${numeroMAXIMO}`);
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function verificarChute(){
    tentativas++;
    let palavraTentativa = (tentativas > 1) ? 'tentativas' : 'tentativa';
    let chute = document.querySelector('input').value; //utilizamos o .value para absorver apenas o valor inserido no input
    console.log('o botão foi clicado');
    console.log(chute == numeroAleatorio);
    if (chute == numeroAleatorio)
    {
        exibirTextoNaTela('h1', 'acertou!');
        exibirTextoNaTela('p', `você descobriu o numero com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('btnChute').setAttribute('disabled', true); //esse true é apenas para leitura humana, o navegador literalmente não le esse true. o elemento disabled estará lá independente do que voce escrever aqui
    } else {
        if (chute > numeroAleatorio) {
        exibirTextoNaTela('p', 'o chute foi muito alto');
    } else exibirTextoNaTela('p', 'o chute foi muito baixo');}
    limparCampo();
}


function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numeroMAXIMO+1); //armazena o aleatorio
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroMAXIMO){ //verifica se o limite dos numeros aleatorios não repetidos foi atingido, se caso sim esvaziar array
        listaDeNumerosSorteados = [];
    }


   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {//verifica no array que criamos lá em cima se este numero já apareceu.
    return gerarNumeroAleatorio(); // o nome disso é recursão, ele vai gerar novamente um numero para verificar se ele ja apareceu
    //estamos pedindo para que um novo numero seja gerado caso ele ja tenha aparecido no array

//a recursão é quando uma função é chamada novamente dentro da propria função, não é uma boa pratica mas para numeros pequenos funciona

   } else{
    listaDeNumerosSorteados.push(numeroEscolhido);// o push INSERE algo dentro do array NO FINAL DO ARRAY
    console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }

}
 //o includes pode ser exclusivo do JS verifique na documentação de outras linguagens 



//na variavel nos armazenamos apenas 1 numero aleatorio
//para ir gerando cada vez numeros aleatorios diferentes
// sera necessario chamar a função sem guardar valor em uma variavel
//especifica      console.log(gerarNumeroAleatorio());




//como é um jogo de adivinhação não podemos ficar gerando numeros aleatorios
//toda hora pois o jogo perderia o sentido
//vamos armazenar um unico numero aleatorio na variavel


//return não é obrigatorio em funções de javascript


function limparCampo(){
    document.querySelector('input').value = '';
}


function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    console.log(numeroAleatorio);
    limparCampo();
    tentativas = 0;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
   // document.getElementById('btnChute').setAttribute('disabled', false);
   document.getElementById('btnChute').removeAttribute("disabled");

}

let frutas = ["maçã", "banana"];
console.log(frutas[0]);