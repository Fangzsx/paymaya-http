const HttpRestAdapter = require('../src/adapters/http/HttpRestAdapter')
const https = require('https')
const Paymaya = require("../src/Paymaya");

describe('http rest adapter', () => {
    const url = 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts';
    Paymaya.setUrl(url);

    const httpRestAdapter = new HttpRestAdapter(https);
    it('should POST request', function (done) {

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
            method : 'POST',
            hostname: "pg-sandbox.paymaya.com",
            port: null,
            path: "/checkout/v1/checkouts",
            headers :{
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Basic cGstWjBPU3pMdkljT0kyVUl2RGhkVEdWVmZSU1NlaUdTdG5jZXF3VUU3bjBBaDpzay1YOHFvbFlqeTYya0l6RWJyMFFSSzFoNGI0S0RWSGFOY3dNWWszOWpJblNs"
            },
            body : JSON.stringify(transaction)
        }

        httpRestAdapter.request(url, options)
            .then(response => {
                console.log(response)
                done();
            })
            .catch(done.fail);

    });
})