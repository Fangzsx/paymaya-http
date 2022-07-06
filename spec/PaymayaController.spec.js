const PaymayaController = require('../controllers/paymaya/PaymayaController');

describe('paymaya controller', () => {
    //create fake adapter
    let adapter;
    let paymayaController;
    beforeEach(done => {
        adapter = {
            makePayment : jasmine.createSpy().and.callFake(function(transaction){

                const resultObject = {
                    id : transaction.id,
                    amount : transaction.amount,
                    redirect : transaction.redirectUrl
                }
                return Promise.resolve(resultObject);
            })
        }
        paymayaController = new PaymayaController(adapter);

        done();
    })

    xit('should make payment', function (done) {
        //test data
        const transaction = {
            id : 'testCheckoutId',
            amount : 100,
            redirectUrl : 'https://payments-web-sandbox.paymaya.com/v2/checkout?id=521aec12-c53e-4770-9afe-147a7faf3349'
        }
        paymayaController.makePayment(transaction)
            .then(response => {
                console.log(response);
                done();
            })
            .catch(done.fail);
    });
    xit('should accept payment', function (done) {

    });
    xit('should  refund payment', function (done) {

    });


})