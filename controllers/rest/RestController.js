const Config = require('../../Config')
const toBase64 = require('../../ToBase64')

class RestController{
    constructor(adapter) {
        this.adapter = adapter;
    }
    setUrl(path){
        const base = Config.get('SERVER_URL');
        return new URL(base + path);
    }

    writeHeaders(){
        this.headers = {};
        this.headers['Content-Type'] = 'application/json';
        //convert public key to base 64
        this.headers['Authorization'] = 'Basic ' + toBase64(Config.get('PUBLIC_KEY'));
        this.headers['Accept'] = 'application/json'
    }

    init(path){
        return Promise.resolve()
            .then(() => this.writeHeaders())
            .then(() => this.setUrl(path))
    }

    request(method, path, args = {}){
        if(args && args.body){
            args.body = JSON.stringify(args.body);
        }
        return this.init(path)
            .then((url) => this.send(url, {method, ...args}));
    }
    send(url, args){
        if (args.query) {
            for (const p in args.query) {
                url.searchParams.set(p, JSON.stringify(args.query[p]));
            }
        }
        if(args.headers){
            this.headers = Object.assign(this.headers, args.headers)
        }
        const options = {
            method : args.method,
            body : args.body,
            headers : this.headers
        }
        return this.adapter.request(url, options)
    }

}
module.exports = RestController;