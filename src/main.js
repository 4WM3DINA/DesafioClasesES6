import Clientes from "./cliente.js";
import Impuestos from "./impuestos.js";

const submittedData = document.querySelector("#submittedData");

submittedData.addEventListener("click", (e) => {
	e.preventDefault();
	const inputClientName = document.querySelector(".inputClientName").value;
	const inputBruteAnnualAmount = Number(document.querySelector(".inputBruteAnnualAmount").value);
	const inputDeductionAmount = Number(document.querySelector(".inputDeductionAmount").value);
	const result = document.querySelector("#result");

	const newTax = new Impuestos(inputBruteAnnualAmount, inputDeductionAmount);
	const newClient = new Clientes(inputClientName, newTax);
	const taxesToPay = newClient.calculateTaxes();

	result.innerHTML = taxesToPay.text;
});
// Muestra en consola
const impuesto = new Impuestos("5400000", "200000");
const cliente = new Clientes('Ambar', impuesto);

const pagar = cliente.calculateTaxes();

console.log(pagar.text);