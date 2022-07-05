const config = {
    SERVER_URL : '',
    PUBLIC_KEY : '',
    SECRET_KEY : '',
    CONTENT_TYPE : '',
    ACCEPT : ''
}

const Config = {
    get : function(key){
        if(config.hasOwnProperty(key)){
            return config[key]
        }
        throw new Error('Configuration key not found.');
    },
    set : function(key, value){
        config[key] = value;
    }
}
module.exports= Config;
