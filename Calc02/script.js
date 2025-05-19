import { Calculadora } from './Classes.js';
import { Historico } from './localStorage.js';

const visor = document.getElementById('visor');
const listaHistorico = document.getElementById('lista-historico');
const calculadora = new Calculadora();

// Expor as funções ao escopo global para os event handlers do HTML
window.adicionarAoVisor = function(valor) {
    calculadora.appendToDisplay(valor);
    atualizarVisor();
}

window.limparVisor = function() {
    calculadora.clearDisplay();
    atualizarVisor();
}

window.apagarUltimo = function() {
    calculadora.deleteLast();
    atualizarVisor();
}

window.calcular = function() {
    const resultado = calculadora.calculate();
    atualizarVisor();
    if (resultado !== 'Erro') {
        Historico.salvarCalculo(resultado);
        carregarHistorico();
    }
}

window.limparHistorico = function() {
    Historico.limparHistorico();
    carregarHistorico();
}

function atualizarVisor() {
    visor.value = calculadora.displayValue;
}

function carregarHistorico() {
    listaHistorico.innerHTML = '';
    const historico = Historico.obterHistorico();
    historico.forEach(item => {
        const itemLista = document.createElement('li');
        itemLista.textContent = item;
        listaHistorico.appendChild(itemLista);
    });
}

// Inicializar o histórico ao carregar a página
carregarHistorico();

// Garante que o visor comece vazio
atualizarVisor();