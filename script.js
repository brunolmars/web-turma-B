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

}
function valida_idade(idade){

    if (idade=""){
        alert ("esse campo não pode ser vazio")
        return false 
    }
    if(idade = String){
    alert("não pode colocar letra")
return false
    }
    return true



}



