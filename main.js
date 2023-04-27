const form = document.getElementById ('form-validar');
const numeroA = document.getElementById('numeroA');
let formEValido = false;

function validaNumero(numeroB) {
    return numeroB > numeroA.value;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroB = document.getElementById('numeroB');
    const mensagemSucesso = `Valor de B: ${numeroB.value} é maior do que A: ${numeroA.value}`;
    const mensagemErro = `Valor de B deve ser maior`;

    formEValido = validaNumero(numeroB.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = '';
        numeroA.style.border = '1px solid black';
        numeroB.style.border = '1px solid black';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';

        const containerMensagemSucesso = document.querySelector('.success-message');
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = '';
        }
})

/*numeroA.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEValido = validaNumero(e.target.value);

    if (!formEValido) {
        numeroA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        numeroA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
});*/