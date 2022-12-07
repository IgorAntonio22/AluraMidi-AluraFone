function tocaSom (idElementoAudio) {
const elemento = document.querySelector(idElementoAudio);

if (elemento !== null && elemento.localName === 'audio') {
    elemento.play();
} else {
    console.log('Elemento não encontrado ou seletor');
}

}


const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //seleciona o segundo atributo class do nosso objeto[contador]

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    }



    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') { 
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
