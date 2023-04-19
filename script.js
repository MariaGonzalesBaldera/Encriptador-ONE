const texto1 =  document.querySelector('.text-area1');
const textoRespuesta = document.querySelector('.text-area2');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');
const divEncontrado = document.querySelector('.div-texto2-encontrado');
const mensaje = document.querySelector('.mensaje');

const letras = ['ai' , 'enter' , 'imes' , 'ober' , 'ufat']

function encriptarTexto(texto){
    let guardado = '';
    for (let i = 0; i < texto.length; i++) {
        guardado+=texto[i]
        for (let vocal in letras) {
            if(texto[i] == letras[vocal][0] ){
                guardado+=(letras[vocal].slice(1))
            }
        }    
    }   
    return guardado
}

function desencriptarTexto(texto){
    let textoEncriptado = texto
    let resultado = texto
    for (let i = 0; i < textoEncriptado.length; i++) {
        for (const key in letras) {
            if (textoEncriptado.includes(letras[key])){
                resultado = resultado.replace(letras[key] , letras[key][0])
            }
        }
    }
    return resultado   
}

function validacion(texto){
    if(texto.length > 0){
        if(!validarMayuscula(texto) && !validarAcentos(texto)){
            divEncontrado.style.display = 'inline-block';
            textoRespuesta.textContent = encriptarTexto(texto)
            return true
        }else{
            saltarAlert();
        }
    }
}

btnEncriptar.addEventListener('click',(event)=>{
    event.preventDefault();
    const textoIngresado = texto1.value

    validacion(textoIngresado) ? textoRespuesta.textContent = encriptarTexto(textoIngresado) :  ''
})

btnDesencriptar.addEventListener('click',(event)=>{
    event.preventDefault();
    const textoIngresado = texto1.value

    validacion(textoIngresado) ? textoRespuesta.textContent = desencriptarTexto(textoIngresado) : ''
})

btnCopiar.addEventListener('click',(event)=>{
    event.preventDefault()
    navigator.clipboard.writeText(textoRespuesta.textContent)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Copiado'
      })
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
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Solo letras minúsculas y sin acentos'
      })
      texto1.value='';
      texto1.focus();
}