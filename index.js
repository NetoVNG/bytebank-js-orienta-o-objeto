import {Cliente} from "./Clientes.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Neto";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Malu";
cliente2.cpf = 11122233309;

const contaCorrenteNeto = new ContaCorrente();
contaCorrenteNeto.agencia = 1001;
contaCorrenteNeto._saldo = 0;
contaCorrenteNeto.cliente = cliente1;
contaCorrenteNeto.depositar(200);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200
contaCorrenteNeto.transferir(valor, conta2);

console.log("valor: ", valor)
console.log(conta2);
