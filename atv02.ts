export class Produto {
    
    private _nome: string = "";
    private _preco: number = 0;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
    public get nome(): string {
        return this._nome;
    }
    public set nome(novoNome: string) {
        if (novoNome && novoNome.trim().length > 0) {
            this._nome = novoNome;
        } else {
            console.log("Erro: O nome do produto não pode ser vazio. Definido como 'Sem nome'.");
            this._nome = "Sem nome";
        }
    }
    public get preco(): number {
        return this._preco;
    }
    public set preco(novoPreco: number) {
        if (novoPreco >= 0) {
            this._preco = novoPreco;
        } else {
            console.log("Erro: O preço não pode ser negativo. Definido como R\$ 0.00.");
            this._preco = 0;
        }
    }
    public exibirInformacoes(): void {
        console.log("--- Informações do Produto ---");
        console.log(`Nome: ${this._nome}`);
        console.log(`Preço: R$ ${this._preco.toFixed(2)}`);
    }
}