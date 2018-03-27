function gerarBotoes(){
    console.log('aeaeae');
    var botoes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var om = ['adicao', 'subtracao', 'divisao', 'multiplicacao', 'igual', 'limpar'];

    let i = 0;
    let j = 0;

    for (i = 0; i < botoes.length; i++) {
        // console.log(i);
        document.getElementById("botao").innerHTML += '<button onclick>'+botoes[i]+'</button>';
    }
    for (j = 0; j < om.length; j++) {
        console.log(om[j]);
    }
 
}
function executarBotao(numero){
    console.log(numero);
}