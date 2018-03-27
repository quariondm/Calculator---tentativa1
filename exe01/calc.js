
function botao(num) {
    var x = document.calc.visor.value;
    document.calc.visor.value = x + num;
}

function resolve() {
    var res = 0;
    res = document.getElementById('visor').value;
    document.getElementById('visor').value = null;
    document.getElementById('visor').value = eval(res);
}

function limpa() {
    document.getElementById('visor').value = '';
    

}