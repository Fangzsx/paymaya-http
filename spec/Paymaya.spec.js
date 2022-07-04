const Paymaya = require('../src/Paymaya');
const Config = require('../src/Config')

describe('Paymaya', () => {
    //init url
    const url = 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts'
    Paymaya.setUrl(url)

    it('should retrieve url', function (done) {
        // console.log(Config.get('SERVER_URL'))
        done();
    });

    xit('should checkout', function (done) {
        Paymaya.checkout(transaction)
            .then(response => {
                console.log(response);
                done();
            }).catch(done.fail);
    });
})