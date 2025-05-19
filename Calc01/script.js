const visor = document.getElementById('visor');
const listaHistorico = document.getElementById('lista-historico');
const CHAVE_HISTORICO = 'historicoCalculadora';

function adicionarAoVisor(valor) {
    visor.value += valor;
}

function limparVisor() {
    visor.value = '';
}

function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    try {
        const resultado = eval(visor.value); // Cuidado com o uso de eval() em produção
        visor.value = resultado;
        salvarCalculo(visor.value);
        carregarHistorico();
    } catch (erro) {
        visor.value = 'Erro';
    }
}

// --- Local Storage para Histórico (CRUD) ---

// Create/Update: Salvar um novo cálculo no histórico
function salvarCalculo(calculo) {
    let historico = obterHistorico();
    historico.push(calculo);
    localStorage.setItem(CHAVE_HISTORICO, JSON.stringify(historico));
}

// Read: Obter o histórico de cálculos
function obterHistorico() {
    const historicoArmazenado = localStorage.getItem(CHAVE_HISTORICO);
    return historicoArmazenado ? JSON.parse(historicoArmazenado) : [];
}

// Read: Carregar e exibir o histórico na página
function carregarHistorico() {
    listaHistorico.innerHTML = '';
    const historico = obterHistorico();
    historico.forEach(item => {
        const itemLista = document.createElement('li');
        itemLista.textContent = item;
        listaHistorico.appendChild(itemLista);
    });
}

// Delete: Limpar todo o histórico
function limparHistorico() {
    localStorage.removeItem(CHAVE_HISTORICO);
    carregarHistorico();
}

// Inicializar o histórico ao carregar a página
carregarHistorico();