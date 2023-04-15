const texto1 =  document.querySelector('.text-area1');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const textoRespuesta = document.querySelector('.text-area2');
const divEncontrado = document.querySelector('.div-texto2-encontrado');
const btnCopiar = document.querySelector('.btn-copiar');
const mensaje = document.querySelector('.mensaje');

function encriptarTexto(texto){
    let guardado = ''
    for (let i = 0; i < texto.length; i++) {
        guardado+=texto[i]
        if(texto[i]=='a'){
            guardado+=('i')

        }
        if(texto[i]=='e'){
            guardado+=('nter')

        }
        if(texto[i]=='i'){
            guardado+=('mes')

        }
        if(texto[i]=='o'){
            guardado+=('ber')

        }
        if(texto[i]=='u'){
            guardado+=('fat')

        }
    }
    return guardado;
}

function desencriptarTexto(texto){
    let textoEncriptado = texto
    let resultado = texto
    
    for (let i = 0; i < textoEncriptado.length; i++) {
        
        if (textoEncriptado.includes('ai')){
            resultado = resultado.replace('ai','a')
        }
        if (textoEncriptado.includes('enter')){
            resultado = resultado.replace('enter','e')
        }
        if (textoEncriptado.includes('imes')){
            resultado = resultado.replace('imes','i')
        }
        if (textoEncriptado.includes('ober')){
            resultado = resultado.replace('ober','o')
        }
        if (textoEncriptado.includes('ufat')){
            resultado = resultado.replace('ufat','u')
        }
    }
    
    return resultado
    
}

btnEncriptar.addEventListener('click',(event)=>{
    event.preventDefault();
    const textoIngresado = texto1.value

    if(textoIngresado.length > 0){
        if(!validarMayuscula(textoIngresado) && !validarAcentos(textoIngresado)){
            divEncontrado.style.display = 'inline-block';
            textoRespuesta.textContent = encriptarTexto(textoIngresado)
        }else{
            saltarAlert();
        }
    }
})

btnDesencriptar.addEventListener('click',(event)=>{
    event.preventDefault();
    const textoIngresado = texto1.value

    if(textoIngresado.length > 0){
        if(!validarMayuscula(textoIngresado) && !validarAcentos(textoIngresado)){
            divEncontrado.style.display = 'inline-block';
            textoRespuesta.textContent = desencriptarTexto(textoIngresado)
        }else{
            saltarAlert();
        }
    }
})

btnCopiar.addEventListener('click',(event)=>{
    event.preventDefault()
    navigator.clipboard.writeText(textoRespuesta.textContent)
})

function validarMayuscula(texto){
    for (let i = 0; i < texto.length; i++) {
        if(texto[i] === texto[i].toUpperCase() && texto[i] !== texto[i].toLowerCase()){
            return true;
        }
    }
    return false;
}
function validarAcentos(texto) {
    var patron = /[áéíóúÁÉÍÓÚ]/;
    return patron.test(texto); 
}

function saltarAlert(){
    setTimeout(function() {
        mensaje.style.fontSize = "15px";

        setTimeout(function() {
            mensaje.style.fontSize = "13px";
        }, 1000);
      }, 500);
}