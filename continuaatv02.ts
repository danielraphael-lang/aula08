import { Produto } from "./atv02";

console.log("Criando Produto 1...");
const produto1 = new Produto("Notebook", 3500.99);
produto1.exibirInformacoes();
console.log();

console.log("Criando Produto 2 (com dados inválidos)...");
const produto2 = new Produto("", -50.0);
produto2.exibirInformacoes();
console.log();

console.log("Modificando valores do Produto 1...");
produto1.nome = "Notebook Gamer"; 
produto1.preco = 4200.00;        
produto1.exibirInformacoes();