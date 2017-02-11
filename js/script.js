//alert("Olá mundo!");
/*
var resposta = confirm("Deseja excluir?");
console.log(resposta);
var a = 10;
var b = 33;
//alert(a + b);
function somar(a, b){
    return a + b;
}
console.log(somar(2, 5));
*/
document.getElementById("btnCalcular").onclick = function(){
    var valorA = document.getElementById("campoA").value;
    var valorB = document.getElementById("campoB").value;
    
    console.log(parseInt(valorA) + parseInt(valorB));
}