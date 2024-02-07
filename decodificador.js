function criptografarTexto() {
    let texto = document.querySelector('#texto').value;
    if (texto.trim() === '') {
        document.querySelector('#imagemTemporaria').style.display = '';
        document.querySelector('#aviso').style.display = '';
        document.querySelector('#resultado').innerText = '';
        document.querySelector('#buttonCopiar').style.display = 'none';
        return;
    }

    let resultadoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.querySelector('#resultado').innerText = resultadoCriptografado;
    document.querySelector('#imagemTemporaria').style.display = 'none';
    document.querySelector('#buttonCopiar').style.display = 'inline';
    document.querySelector('#aviso').style.display = 'none';

}


function descriptografarTexto() {
    let textoCriptografado = document.querySelector('#texto').value;
    if (textoCriptografado.trim() === '') {
        document.querySelector('#imagemTemporaria').style.display = '';
        document.querySelector('#aviso').style.display = '';
        document.querySelector('#resultado').innerText = '';
        document.querySelector('#buttonCopiar').style.display = 'none';
        return;
    }
    
    let resultadoDescriptografado = textoCriptografado
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');

    document.querySelector('#resultado').innerText = resultadoDescriptografado;
    document.querySelector('#imagemTemporaria').style.display = 'none';
    document.querySelector('#aviso').style.display = 'none';
    document.querySelector('#buttonCopiar').style.display = 'inline';
    

}

function copiarTexto() {
    let textoElemento = document.querySelector('#resultado');
    let textoParaCopiar = textoElemento.innerText;


    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert('Texto copiado para a área de transferência!');
        })
        .catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
}

