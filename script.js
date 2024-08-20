let dom =document;
console.log(dom);

let titulo = document.getElementById("titulo").value;
console.log(titulo);


console.log(titulo);

function submeter(){
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    console.log(nome);
    console.log (valida_idade(cpf))
    console.log(email)


}
function valida_cpf(cpf){
    

    if (cpf=""){
        alert ("esse campo não pode ser vazio")
        return false 
    }

    cpf = cpf.trim();

    if (/[a-zA-Z]/.test(cpf)){
       alert("Contém letras")
        return false
    }
   if (!/^[\w3]$/.teste(cpf)){
    alert("só pode conter numero, . ou - ")
    return false
   } 
   if(cpf.leight == 11 || cpf.leight == 14 ){
    alert("formato invalido")
    
   }
   if(cpf.leight != 11 && cpf.leight != 14 ){
    alert("Formato invalido")
    return false
   }
   let digito_verificador1 = digitoverificador
   

   let soma = 0

   for(let i = 1;i <= 9; i++){
    console.log(cpf.Charat(i-1));
    soma = soma + (cpf.Charat(i-1) * (10 - (i-1)))
    }
        console.log(soma)
        let resto = soma % 11

        if(resto < 2){
            if(cpf.Charat(9) != 0 )
            alert("cpf invalido")
        } 
}
    let digitoverificador = 11 - resto
    if(digitoverificador != cpf.Charat(9)){
        alert("cpf invalido")
    }

    let s = 0 

    for(let i = 1; i <= 11; i++ ){
        console.log(cpf.Charat(i-1))
        s = s + (cpf.Charat(i-1) * (11 - (i - 1)))
    }
    console.log(s)

    let r = s % 11 
    if(resto < 2){
        if(cpf.Charat(10) != 0 )
        alert("cpf invalido")
    }
    let verificado_2 = 11 - r
    if(verificado_2 != cpf.Charat(10)){
        alert("cpf invalido")
    } 

    verificado_2 = digito_verificador1 

    return true 





