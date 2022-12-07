function escrever (valor) {
    let teclaValor = tel.value = valor;

    arrayInput.push(teclaValor);

    tel.value = arrayInput.join('');
}
  
  const listaDeNumerosTeclado = document.querySelectorAll('.tecla');
  const tel = document.querySelector('.tel');
  const arrayInput = [];
  
  for (let contador = 0; contador < listaDeNumerosTeclado.length; contador++) {
    const tecla = listaDeNumerosTeclado[contador];

    tecla.onclick = function () {
    
        escrever(tecla.value);

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
  

  