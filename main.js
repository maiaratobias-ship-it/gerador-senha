document.querySelector('.parametro-senha_texto');

 numerosenha.textocontet =5;

    cons botoes = document.querySelector('. parametro-senha_botao-texto');
    botoes[0].onclick = diminuiTamanho;
    botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhosenha)>1) {
        tamanhosenha = tamanhosenha-1;
    }
    numerosenha.textocontet = tamanhosenha;
}
        