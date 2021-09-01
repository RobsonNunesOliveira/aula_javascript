function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}
function redirecionar(){
    window.open("https://globallab.org/en/#.YS650DFKhdg");
    //window.location.href = "https://globallab.org/en/#.YS650DFKhdg";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaoChage(elemento){
    console.log(elemento.value);

}
//4 AULA FUNÇOES

/*function soma(n1, n2){
//    return n1 + n2;
//}
//alert(soma(5,10));*/

/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
    
}
var idade = prompt("Qual sua idade ");
console.log(validaIdade(idade));*/



//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome);
//}

//alert(soma(5,10));
//alert(setReplace ("Vai Japao", "Japao", "Brasil"));
// 3 AULA CONDICIONAIS E LAÇOS DE REPETIÇAO

/*var d = new Date();
alert(d);*/

/*var d = new Date();
//alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());*/

/*var count;
for(count=0; count<=5; count++){
    alert(count);
};*/

/* while laço de repetiçao, enquanto count for menor ou igual a 5 imprima somando 1 var
// count
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    //count = count + 1;
    count++;
}; // Estrutura de repetiçao */


/*var idade = prompt("Qual sua idade")
if(idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};*/


// 2 AULA = ARRAY:
// DICIONARIO:
/*var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]// lista de dicionario
console.log(frutas)
alert(frutas[1].nome);*/



/*var fruta = {nome:"maça", cor: "vermelha"}
console.log(fruta.nome)
alert(fruta.cor);*/


//ARRAY:
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join("-"));
//console.log(lista[1]);
//alert(lista[1]);


// 1 AULA:
/*var nome = "Robson Nunes";
var idade = 41;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var n1 = 29;
var n2 = 10;
//alert(nome + " tem " +  idade + " anos");
alert (idade + idade2);     
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil")); 
// replace troca a palavra Japao por Brasil 
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toLocaleUpperCase());// toupercase: transforma em maiusculo
console.log(frase.toLowerCase()); // tolowercase : transforma em minusculo
console.log(n1*n2)*/