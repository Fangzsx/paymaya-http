const getRestController = require('../../controllers/rest/index');

const defaultOptions = {
    base : 'https://pg-sandbox.paymaya.com/',
}

class MayaAdapter{
    constructor(options) {
        this.rest = getRestController();
        this.options = Object.assign(defaultOptions, options)
    }

    makePayment(transaction){
        this.options.body = transaction
        return this.rest.request('POST', 'payments/v1/payments', this.options);
    }

    acceptPayment(transaction){
        this.options.body = {
            'captureAmount' : transaction.captureAmount,
            'requestReferenceNumber' : transaction.requestReferenceNumber
        }
        return this.rest.request('POST', 'payments/v1/payments/' + transaction.id + '/capture', this.options)
        //reformat to custom object?
    }
    refundPayment(transaction){


    }




}
module.exports = MayaAdapter;