const notas = [];

function adicionarNota() {
    let notaText = document.getElementById('nota').value;
    if (notaText.trim() === '') {
        alert('Por favor, insira uma nota.');
        return;
    }
    notaText = notaText.replace(',', '.');
    const notaFloat = parseFloat(notaText).toFixed(2);
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

document.getElementById('adicionar').addEventListener('click', adicionarNota);