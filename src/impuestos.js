class Impuestos {
    constructor(monto_bruto_anual, deduccion){
        this._monto_bruto_anual = monto_bruto_anual;
        this.deduccion = deduccion;
    }
    get monto_bruto_anual(){
        return this._monto_bruto_anual;
    }
    set monto_bruto_anual(monto_bruto_anual){
        this._monto_bruto_anual = monto_bruto_anual;
    }
    get deduccion(){
        return this._deduccion;
    }
    set deduccion(deduccion){
        this._deduccion = deduccion;
    }

}
export default Impuestos