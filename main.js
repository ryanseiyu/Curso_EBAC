const form = document.getElementById('form-atividade');
const nomes = [];
const telefones = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    const telefone = Array.from(String(inputTelefone.value), Number);

    if (telefone.length != 8) {
        alert(`Deve ter 8 digitos`);
        inputNome.value = '';
        inputTelefone.value = '';
    } else {
        if (nomes.includes(inputNome.value)) {
            alert(`A pessoa: ${inputNome.value} já existe`);
        } else {
            nomes.push(inputNome.value);
            telefones.push(parseInt(inputTelefone.value));

            let linha = '<tr>';
            linha += `<td>${inputNome.value}</td>`;
            linha += `<td>${inputTelefone.value}</td>`;
            linha += '</tr>';

            linhas += linha;

            inputNome.value = '';
            inputTelefone.value = '';
        }
    }

    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
