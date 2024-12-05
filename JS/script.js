function Converter(){

let opcaoEscolhida = document.getElementById("selectMenu1").value
let valorConverter = document.getElementById("valorConverter").value

if(opcaoEscolhida == 0){
    alert("Escolha uma outra opção!")
}

else if(opcaoEscolhida == 1 && valorConverter !== ""){
    let valorConvertido = valorConverter * 1.8 + 32
    alert(valorConverter + "° Celsius é igual a "+ valorConvertido.toFixed(0)+ "° Fahrenheit")
}

else if(opcaoEscolhida == 2 && valorConverter !== ""){
    let valorConvertido = (valorConverter - 32) * 5/9
    alert(valorConverter + "° Fahrenheit é igual a "+valorConvertido.toFixed(0)+ "° Celsius")
}
}