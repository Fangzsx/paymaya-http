const PaymayaAdapter = require('../adapters/payment/paymaya/PaymayaAdapter');

describe('paymaya adapter', () => {
    let adapter;
    beforeAll(done => {
        const options = {
            currency : 'PHP',
            //public key -> pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah
            endpoint : 'https://pg-sandbox.paymaya.com/',
            accessKey : 'pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah' //todo: <- swap between public key and secret key
        }
        adapter = new PaymayaAdapter(options);
        done();
    })
    const transaction = {
        id : 'e732f996-cb87-4120-b712-166d8183c01d', // <- payment id for accepting payment
        requestReferenceNumber : 'dummy ref number',
        value : 100
    }
    it('should make payment', function (done) {
        adapter.makePayment(transaction)
            .then(response => {
                console.log(response);
                done();
            })
            .catch(done.fail);
    });
    xit('should accept payment', function (done) {

        adapter.acceptPayment(transaction)
            .then(response => {
                console.log(response);
                done();
            })
            .catch(done.fail);
    });
})