const texto1 =  document.querySelector('.text-area1');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const textoRespuesta = document.querySelector('.text-area2');
const divEncontrado = document.querySelector('.div-texto2-encontrado');
const btnCopiar = document.querySelector('.btn-copiar');

btnEncriptar.addEventListener('click',(event)=>{
    event.preventDefault();
    const textoIngresado = texto1.value

    if(textoIngresado.length > 0){
        divEncontrado.style.display = 'inline-block';
        textoRespuesta.textContent = encriptarTexto(textoIngresado)
    }
})
btnDesencriptar.addEventListener('click',(event)=>{
    event.preventDefault();
    const textoIngresado = texto1.value

    if(textoIngresado.length > 0){
        divEncontrado.style.display = 'inline-block';
        textoRespuesta.textContent = desencriptarTexto(textoIngresado)
    }
})
//falta terminar
btnCopiar.addEventListener('click',(event)=>{
    event.preventDefault()
    navigator.clipboard.writeText(textoRespuesta.textContent)
})

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