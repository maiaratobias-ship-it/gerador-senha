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

function aumentaTamanho() {
    if (tamanhosenha < 20) {
        tamanhosenha = tamanhosenha+1;
        }
        numerosenha.textocontet = tamanhosenha;
        geraSenha();
        }
        const campoSenha = document.querySelector('#campo-senha');
        const che



















function geraSenha(){
    let senha =´';
    if(checkbox[0].checkede) { 
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if(checkbox[1].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[2].checked)

        