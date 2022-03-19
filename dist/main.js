"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var submittedData = document.querySelector("#submittedData");
submittedData.addEventListener("click", function (e) {
  e.preventDefault();
  var inputClientName = document.querySelector(".inputClientName").value;
  var inputBruteAnnualAmount = Number(document.querySelector(".inputBruteAnnualAmount").value);
  var inputDeductionAmount = Number(document.querySelector(".inputDeductionAmount").value);
  var result = document.querySelector("#result");
  var newTax = new _impuestos["default"](inputBruteAnnualAmount, inputDeductionAmount);
  var newClient = new _cliente["default"](inputClientName, newTax);
  var taxesToPay = newClient.calculateTaxes();
  result.innerHTML = taxesToPay.text;
}); // Muestra en consola

var impuesto = new _impuestos["default"]("5400000", "200000");
var cliente = new _cliente["default"]('Ambar', impuesto);
var pagar = cliente.calculateTaxes();
console.log(pagar.text);