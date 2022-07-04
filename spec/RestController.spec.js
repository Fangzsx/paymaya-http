const Paymaya = require("../src/Paymaya");
const RestController = require('../src/controllers/RestController')


describe('Rest Controller', () => {
    //init url
    const url = 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts'
    Paymaya.setUrl(url)

    it('should post request', function (done) {

        let adapter = {
            request : jasmine.createSpy().and.callFake(function (url, options){
                const response = JSON.parse(JSON.stringify({url : url, options : options}))
                return Promise.resolve(response);
            })
        }
        const restController = new RestController(adapter);

        //request
        const options = {}

        restController.request(url, options)
            .then(response => {
                // console.log(response);
                done();
            })
            .catch(done.fail);
    });
})