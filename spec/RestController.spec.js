const Paymaya = require("../Paymaya");
const RestController = require('../controllers/rest/RestController')


xdescribe('Rest Controller', () => {
    //init url
    const url = 'https://pg-sandbox.paymaya.com/'
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
        const transaction = {
            totalAmount: {value: 2000, currency: 'PHP'},
            buyer: {
                contact: {phone: '09295399252', email: 'jygrzn@gmail.com'},
                billingAddress: {city: 'Las Piñas City, NCR', zipCode: '01744', countryCode: 'Ph'},
                shippingAddress: {
                    firstName: 'Diane Lawrence',
                    city: 'Las Piñas City, NCR',
                    zipCode: '01744',
                    countryCode: 'Ph',
                    middleName: 'Sta. Ana',
                    lastName: 'Garzon',
                    email: 'dlgarzon@gmail.com',
                    phone: '09999999999',
                    shippingType: 'ST'
                },
                firstName: 'Jay Gilbert',
                middleName: 'Sta Ana',
                lastName: 'Garzon',
                birthday: '1995-12-05',
                customerSince: '2022-06-04',
                sex: 'M'
            },
            items: [
                {
                    amount: {
                        details: {
                            subtotal: '1700',
                            discount: '0',
                            serviceCharge: '0',
                            shippingFee: '0',
                            tax: '0'
                        },
                        value: 2000
                    },
                    totalAmount: {
                        details: {
                            subtotal: '1700',
                            discount: '0',
                            serviceCharge: '100',
                            shippingFee: '100',
                            tax: '100'
                        },
                        value: 2000
                    },
                    name: 'laptop',
                    quantity: '1',
                    code: '12345678',
                    description: 'elegantly designed laptop'
                }
            ],
            requestReferenceNumber: 'random reference number'
        }
        const options = {
            body : transaction
        }

        restController.request('POST', 'checkout/v1/checkouts', options)
            .then(response => {
                console.log(response);
                done();
            })
            .catch(done.fail);
    });
})