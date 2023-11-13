var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function (params) {
        duvida.classList.toggle('ativa')
    })
})