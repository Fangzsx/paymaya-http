const Config = require('./Config');

class Paymaya{
    static setUrl(url){
        Config.set('SERVER_URL', url)
    }

}
module.exports = Paymaya