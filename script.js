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

   let soma = 0

   for(let i = 1;i <= 9; i++){
    console.log(cpf.Charat(i-1));
    soma = soma + (cpf.Charat(i-1) * (10 - (i-1)))
    }
        console.log(soma)



   if(/\d{3}-\d{3}-\d{3}-\d{2}/.teste(cpf))

    
    return true
}



