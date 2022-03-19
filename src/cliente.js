class Clientes {
    constructor (nombre,impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    calculateTaxes(){
        const valor = (this._impuesto.monto_bruto_anual - this._impuesto.deduccion) * 0.21;
        return{
            text:`El impuesto correspondiente al monto bruto anual de ${this._nombre} es: $${valor}`,
            valor: valor,
        };
    }
}
export default Clientes