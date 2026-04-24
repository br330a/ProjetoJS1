//metodos
//limpeza e validação
const email = "          email@empresa.com         ";
const emailLimpo = email.trim();  //funcao que remove espaços da string
console.log(email)
console.log(emailLimpo)

if(emailLimpo.includes('@')){     //verificar se dentro de emailLimpo inclui ("@")
    console.log("email válido")
}else{
    console.log("email inválido")
}


//transformação de texto

const tituloLivro = "Como Aprender a Programar";

const textoLow = tituloLivro.toLowerCase();

const textoUp = tituloLivro.toLocaleUpperCase();

const textoSplit = tituloLivro.split(" ");  // separa pra oq estar dentro dos aspas (teste apagar o espaço dentro, ou colocar "a")
//tem o .join() também que junta segundo oq vc colocar (inverso do split())
console.log(tituloLivro)
console.log(textoLow)
console.log(textoUp)
console.log(textoSplit)