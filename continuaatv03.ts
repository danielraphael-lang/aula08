import { Estudante } from "./atv.03";


console.log("Criando Estudante 1...");
const estudante1 = new Estudante("Lucas Silva", 8.5, 9.0);
estudante1.exibirInformacoes();
console.log();

console.log("Criando Estudante 2 (com notas inválidas)...");
const estudante2 = new Estudante("Ana Costa", -2.5, 11.0);
estudante2.exibirInformacoes();
console.log();

console.log("Corrigindo as notas da Ana Costa...");
estudante2.nota1 = 7.0;
estudante2.nota2 = 6.5;
estudante2.exibirInformacoes();