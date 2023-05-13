// const a = 10
// const b = 20

// if(a < b){
//     console.log("B é maior que A")
// }


// const pNumero = Number(prompt("Digite um numero"))
// const sNumero = Number(prompt("Digite outro numero"))

// function comparar(n1,n2){
//     if(n1 === n2){
//     console.log("Os numeros sao iguais")
//     }else{
//     console.log("Os numeros NAO iguais")

// }
// }

// comparar(pNumero,sNumero)


// const pNumero = Number(prompt("Digite um numero"))
// const sNumero = Number(prompt("Digite outro numero"))

// function comparar(n1,n2){
//     if(n1 > n2){
//     console.log(`o ${n1} é maior que o ${n2}`)
//     }else if(n1 < n){
//     console.log(`o ${n1} é menor que o ${n2}`)
//     }else{ 
//     console.log(`o ${n1} é igual ao ${n2}`)    
//     }

// }

// comparar(pNumero,sNumero)

// let nacionalidade = "brasileiro";

// switch ((nacionalidade)) {
//     case "brasileiro":
//     console.log("Olá brasileiro")
//     break
//     case "brasileira":
//     console.log("Olá brasileira")
//     break
//     default:
//     console.log("Você não é do Brasil?")
//     break
// }


// const pokemon = prompt(`escolha um pokemon 
// 1 - bulbasauro
// 2 - squirtle
// 3 - chamander`)


const pokemon = Number(prompt(`escolha um pokemon 
1 - bulbasauro (planta e veneno)
2 - squirtle (fogo)
3 - chamander (agua)`))

switch(pokemon){
    case 1:
    console.log("você escolheu o bulbasauro, o pokemon jardineiro")
    break;
    case 2:
    console.log("você escolheu o squirtle, o pokemon que faz natação")
    break;
    case 3:
    console.log("você escolheu o chamander, o pokemon com fogo")
    break;
    default:
    console.log("usuário, se é loko, só pode escolher 3")

}