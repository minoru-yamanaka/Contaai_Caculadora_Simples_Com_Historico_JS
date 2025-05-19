export const Historico = {
    CHAVE_HISTORICO: 'historicoCalculadora',

    salvarCalculo(calculo) {
        let historico = this.obterHistorico();
        historico.push(calculo);
        localStorage.setItem(this.CHAVE_HISTORICO, JSON.stringify(historico));
    },

    obterHistorico() {
        const historicoArmazenado = localStorage.getItem(this.CHAVE_HISTORICO);
        return historicoArmazenado ? JSON.parse(historicoArmazenado) : [];
    },

    limparHistorico() {
        localStorage.removeItem(this.CHAVE_HISTORICO);
    }
};