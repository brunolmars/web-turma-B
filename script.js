let dom =document;
console.log(dom);

let titulo = document.getElementById("titulo").value;
console.log(titulo);


console.log(titulo);

function submeter(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    console.log(nome);
    console.log (valida_idade(idade))
    console.log(email)


}
function valida_idade(idade){
    

    if (idade=""){
        alert ("esse campo não pode ser vazio")
        return false 
    }

    idade = idade.trim();

    if (/[a-zA-Z]/.test(idade)){
       alert("Contém letras")
        return false
    }
   if (!/^[\d3.\d3.\d3\d2]$/.teste(idade)){
    alert("só pode conter numero, . ou - ")
    return false
   }

    
    return true
}



