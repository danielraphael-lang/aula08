class ContaBancaria {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }
    public depositar(valor: number): void {
        this.saldo += valor;
    }
    public sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
    public getSaldo(): number {
        return this.saldo;
    }
}
const conta = new ContaBancaria("001", 100);
conta.depositar(50);
console.log(conta.getSaldo());