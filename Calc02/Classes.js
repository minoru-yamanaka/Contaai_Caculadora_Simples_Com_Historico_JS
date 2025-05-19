export class Calculadora {
    constructor() {
        this.displayValue = '';
    }

    appendToDisplay(value) {
        this.displayValue += value;
        return this.displayValue;
    }

    clearDisplay() {
        this.displayValue = '';
        return this.displayValue;
    }

    deleteLast() {
        this.displayValue = this.displayValue.slice(0, -1);
        return this.displayValue;
    }

    calculate() {
        try {
            this.displayValue = eval(this.displayValue); // Atenção ao eval() em produção
            return this.displayValue;
        } catch (error) {
            this.displayValue = 'Erro';
            return this.displayValue;
        }
    }
}