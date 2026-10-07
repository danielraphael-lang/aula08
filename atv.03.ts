export class Estudante {
   
    private _nome: string = "";
    private _nota1: number = 0;
    private _nota2: number = 0;

    constructor(nome: string, nota1: number, nota2: number) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(novoNome: string) {
        if (novoNome && novoNome.trim().length > 0) {
            this._nome = novoNome;
        } else {
            console.log("Erro: O nome não pode ser vazio. Definido como 'Estudante Sem Nome'.");
            this._nome = "Estudante Sem Nome";
        }
    }
    public get nota1(): number {
        return this._nota1;
    }
    public set nota1(novaNota: number) {
        if (novaNota >= 0 && novaNota <= 10) {
            this._nota1 = novaNota;
        } else {
            console.log(`Erro: Nota 1 (${novaNota}) inválida. Deve ser entre 0 e 10. Definida como 0.`);
            this._nota1 = 0;
        }
    }
    public get nota2(): number {
        return this._nota2;
    }
    public set nota2(novaNota: number) {
        if (novaNota >= 0 && novaNota <= 10) {
            this._nota2 = novaNota;
        } else {
            console.log(`Erro: Nota 2 (${novaNota}) inválida. Deve ser entre 0 e 10. Definida como 0.`);
            this._nota2 = 0;
        }
    }
    public calcularMedia(): number {
        return (this._nota1 + this._nota2) / 2;
    }
    public exibirInformacoes(): void {
        console.log("--- Ficha do Estudante ---");
        console.log(`Nome: ${this._nome}`);
        console.log(`Nota 1: ${this._nota1.toFixed(1)}`);
        console.log(`Nota 2: ${this._nota2.toFixed(1)}`);
        console.log(`Média Final: ${this.calcularMedia().toFixed(1)}`);
    }
}