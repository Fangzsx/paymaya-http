const Config = require('./Config');

class Paymaya{

    static setUrl(url){
        Config.set('SERVER_URL', url)
    }
    static setAccept(type){
        Config.set('ACCEPT', type);
    }
    static setContentType(type){
        Config.set('CONTENT_TYPE', type)
    }

    static setPublicKey(value){
        Config.set('PUBLIC_KEY', value)
    }
    static setSecretKey(value){
        Config.set('SECRET_KEY', value)
    }

}
module.exports = Paymaya;