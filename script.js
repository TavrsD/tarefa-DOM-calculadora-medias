const notas = [];

function adicionarNota() {
    let notaText = document.getElementById('nota').value;
    if (notaText.trim() === '') {
        alert('Por favor, insira uma nota.');
        return;
    }
    notaText = notaText.replace(',', '.');
    const notaFloat = parseFloat(Number(notaText).toFixed(2));
    if (!isNaN(notaFloat) && notaFloat >= 0 && notaFloat <= 10) {
        notas.push(notaFloat);
        const telaNotas = document.getElementById('tela-notas');
        const notaElement = document.createElement('div');
        notaElement.textContent = `Nota ${notas.length}: ${notaFloat}`;
        telaNotas.appendChild(notaElement);
        document.getElementById('nota').value = '';
    } else {
        alert('A nota digitada é inválida, por favor, insira uma nota válida.');
    }
}

function calcularMedia() {
    if (notas.length === 0) {
        alert('Nenhuma nota foi adicionada.');
        return;
    }
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    const media = (soma / notas.length).toFixed(2);
    document.getElementById('media').textContent = media;
}

document.getElementById('adicionar').addEventListener('click', adicionarNota);
document.getElementById('calcular').addEventListener('click', calcularMedia);