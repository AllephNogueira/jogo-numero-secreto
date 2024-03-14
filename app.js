/*/ Pegar o seletor h1 e colocar na variavel
let titulo = document.querySelector('h1'); 
// Inserir o novo texto do h1
titulo.innerHTML = 'Jogo da sorte.';
*/

//let NumeroAleatorio = parseInt(Math.random() * 100 +1);
//let textoParagrafo = document.querySelector('.texto__paragrafo');
//textoParagrafo.innerHTML = `Jogo do numero secreto, escolha um numero entre 1 e 100.`;

let listaDeNumerosSorteados = []; // Lista vazia
let numeroLimite = 10; // O ultimo numero que pode ser sorteado
let numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio);
let tentativas = 1;
exibirMensagemIncial();






function verificarChute(){
    // Pegar o valor que esta la dentro do input / Valor que o usuario esta digitando
    let valorUsuario = document.querySelector('input').value; // Pegar o valor que o usuario digitou.

    //console.log("Valor que o usuario digitou ", valorUsuario);

    if(valorUsuario == numeroAleatorio){

        alteraSeletor('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTentativas = `Você descobriu o numero com apenas ${tentativas} ${palavraTentativa}`;


        alteraSeletor('p', mensagemTentativas)
        // Apos gerar a mensagem de que o usuario ganhou o jogo ele vai liberar o botao que estava desativado para começar um novo jogo.
        // Pegando o botao NOVO JOGO
        document.getElementById('reiniciar').removeAttribute('disabled');



    }else{
        if(numeroAleatorio > valorUsuario){
        alteraSeletor('p', 'Hmmm... o numero é maior!');
        }else{
            alteraSeletor('p', 'Hmmm... o numero é menor!');
        }


        tentativas++; // Caso eu caia no ELSE ele sempre vai somar mais 1.
        limpaCampo();
        
    }// Final do ELSE



    return valorUsuario;
}





function alteraSeletor(tag, texto){

    // Funcao para alterar a tag e o texto que vamos modificar.

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    // Campo recebe o H1
    // innerHTML = O texto
    // Saida : alterar no 'h1' e adicionar o novo  texto

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    //https://responsivevoice.org/
    // Texto, Qual voz vai usar, qual velocidade.




    //document.querySelector('h1').innerHTML = 'Estou hackenado o seu site, mane';

}

function exibirMensagemIncial(){

    alteraSeletor('h1', 'Bem vindo ao jogo da sorte.');
    alteraSeletor('p', `Escolha um numero de 1 a ${numeroLimite}`);
}






function gerarNumeroAleatorio(){
    // Sortear numeros de 1 a 3
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1); // Inseri o numero na variavel

    let quantidadeDeElementos = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = []; // Se quantidade de elementos for igual a 3 ele limpa a lista de novo.
        // Assim o jogo nunca vai repetir nenhum numero.
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){  // Aqui verifico se esse numero ja esta dentro do meu Array(listaDeNumerosSorteados) se o numero estiver la, ele entra no IF e gerarNumeroAleatorio.
        return gerarNumeroAleatorio();
    }else{ // Se o numero nao estiver la, ele vai retornar o numero escolhido
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


// Funcao para limpar o campo

function limpaCampo(){

    chute = document.querySelector('input'); // Pegando o input e colocando dentro da variavel
    chute.value = '';  // Dizendo que a variavel vai se tornar uma string vazia

    // Outra forma de fazer é

    //document.querySelector('input').value = console.clear();

}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true); 
    // Logica do codigo
    // Quando o usuario ganhar o jogo
    // Vamos clicar em NOVO JOGO
    // Vamos gerar um novo numero
    // Limpar o campo == Limpar o numero que foi digitado anteriormente
    // Vamos exibir novamente a mensagem inicial
    // Vamos acessar o reiniciar e desabilitar o disable 
    // Isso serve para o usuario ser obrigado a jogar ate o final antes de iniciar um novo jogo.

    // Vamos impedir que o usuario clique no Novo jogo / Desabilitando o botao disable.
}







/* Outra forma de fazer sem colocar em uma variavel.


document.querySelector('h1').innerHTML = 'Estou hackenado o seu site, mane';

Dessa forma tambem podemos utilizar o console.

*/