const getMayaAdapter = require('../adapters/maya/index')
const Config = require('../Config');
const toBase64 = require('../ToBase64');
const Paymaya = require('../Paymaya');

//use secret key
Paymaya.setPublicKey('sk-NMda607FeZNGRt9xCdsIRiZ4Lqu6LT898ItHbN4qPSe');

describe('Maya Adapter', () => {
    let mayaAdapter;
    beforeAll(done => {
        mayaAdapter = getMayaAdapter();
        done();
    })
    it('should make payment', function (done) {
        //transaction
        const transaction = {
            "totalAmount": {
                "amount": 200,
                "currency": "PHP"
            },
            "paymentTokenId": "0zjacza65HEobriYGN9g5XwaWZYVSeErdNnaNCLCo8QvUXuGg49KPJSy1XbhHPL8OisYOiYPJSQ2BxqR2AuC682Yu5G5LzrU0SK6ByWi0TyhkekWf1ssl6cMBWAVAOdArLcY1QXEyHdr8EsRAS2bHeMEpUU6OSmxmky5Fk"
        }
        mayaAdapter.makePayment(transaction)
            .then(response => {
                console.log(response);
                done();
            })
            .catch(done.fail);
    });
    it('should accept payment', function (done) {
        const transaction = {
            //test id
            id : 'e732f996-cb87-4120-b712-166d8183c01d',
            captureAmount : {
                amount : 100,
                currency : 'PHP'
            },
            requestReferenceNumber : 'some reference number'
        }

        mayaAdapter.acceptPayment(transaction)
            .then(response => {
                console.log(response);
                done();
            })
            .catch(done.fail);
    });
    it('should ')
})