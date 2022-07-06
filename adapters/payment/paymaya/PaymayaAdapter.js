//todo : add default options
//todo :add options manually

//set http as request handler (..for now)
const toBase64 = require('../../../ToBase64');
const getHttpAdapter = require('../../http/index');


class PaymayaAdapter{
    constructor(options) {
        this.options = options;
        this.http = getHttpAdapter();
    }

    makePayment(transaction){
        //format input as per paymaya
        const order = JSON.stringify(
            {
            'requestReferenceNumber' : transaction.requestReferenceNumber,
            'totalAmount' : {
                'value' : transaction.value,
                //get currency from options
                'currency' : this.options.currency
            }
        });
        //create checkout based on data
        const path = 'checkout/v1/checkouts';
        return this._request({
            method : 'POST',
            path : path,
            body : order
        })
            .then(result => {
                return {
                    checkOutId : result.checkoutId,
                    amount : transaction.value,
                    redirectUrl : result.redirectUrl
                }
            })


    }
    acceptPayment(transaction){
        const path = '/payments/v1/payments/' + transaction.id + '/capture';
        const order = JSON.stringify({
            'captureAmount' : {
                'amount' : transaction.value,
                'currency' : this.options.currency
            },
            'requestReferenceNumber' : transaction.requestReferenceNumber
        })
        return this._request({
            method : 'POST',
            path : path,
            body : order
        })
    }
    refundPayment(transaction){
        const path = 'payments/v1/payments/' + transaction.id + '/cancel';

    }


    //custom request method for paymaya adapter, use http to perform requests.
    //req = object
    _request(req){
        const auth = 'Basic ' + toBase64(this.options.accessKey);
        const headers = {
            "Content-Type": "application/json",
            "Authorization": auth,
        }
        const options = {
            method : req.method,
            headers : headers,
            body : req.body
        }
        const url = this.options.endpoint + req.path;
        return this.http.request(url, options);
    }
}
module.exports = PaymayaAdapter;