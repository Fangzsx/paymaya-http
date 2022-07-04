const getRestController = require('../controllers/')

class Transaction{
    constructor() {
        this.rest = getRestController()
    }
    checkout(order){
        const options = {
            body : order
        }
        return this.rest.request('POST', 'checkout/v1/checkouts', options)
    }

}
module.exports = Transaction