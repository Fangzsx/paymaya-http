class PaymayaController{
    constructor(adapter) {
        this.adapter = adapter;
    }

    makePayment(transaction){
        return this.adapter.makePayment(transaction);
    }
    acceptPayment(transaction){
        return this.adapter.acceptPayment(transaction);
    }
    refundPayment(transaction){
    }

}
module.exports = PaymayaController;