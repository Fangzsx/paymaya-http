const Config = require('./Config');
const Transaction = require('../src/domain/Transaction')

class Paymaya{
    static setUrl(url){
        Config.set('SERVER_URL', url)
    }

    static checkout(order){
        const transaction = new Transaction();
        return transaction.checkout(order)
    }
    static getCheckoutInfo(id){
        const transaction = new Transaction();
        return transaction.getCheckoutInfo(id)
    }

}
module.exports = Paymaya;