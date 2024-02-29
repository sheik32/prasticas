function validarTexto(texto) {
    let caracteresEspeciales = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let numeros = /[0-9]/g;  
    let vacio = "";  
      
    if (texto.match(mayusculas) || texto.match(caracteresEspeciales)) {
        alert("No se permiten caracteres especiales ni mayúsculas.");
        return true; 
    } else if (texto.match(numeros)) {
        alert("No se permiten números.");
        return true;
    } else if (texto === vacio) {
        alert("Ingrese un mensaje para encriptar.");
        return true;
    } else {
        return false;
    }
}


let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click",function ()  {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {        
        textInput = "";     
     
    }
               
})


const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click", function() {        
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value = "";
});


let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click", function(){
    let textoIngresado = document.querySelector("#input-texto").value;
    let Desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
})


function desencriptar(textoIngresado) {
    let encriptado = "";
    for (const obj in reglas) {
        for (let i = 0; i < textoIngresado.length; i++) {
            const caracter = textoIngresado[i];
            if (/[A-Z0-9]/.test(caracter)) { 
                alert("No se puede desencriptar texto que contiene números o letras mayúsculas.");
                return ""; 
            }
            if (/[a-z]/.test(caracter)) { 
                encriptado = textoIngresado.replaceAll(reglas[obj], obj);
                textoIngresado = encriptado;
            }
        }
    }
    return encriptado;
}

