
function encriptarTexto(){
    let texto = 'murcielago'
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
    console.log(guardado)
}
encriptarTexto();
function desencriptarTexto(){
    let textoEncriptado = 'mufatrcimesenterlaigober'
    let resultado = 'mufatrcimesenterlaigober'
    
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
    
    console.log(resultado)
    
}
desencriptarTexto();