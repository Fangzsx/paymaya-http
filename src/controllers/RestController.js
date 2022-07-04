const Config = require('../Config')

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
        this.headers['Authorization'] = 'Basic cGstWjBPU3pMdkljT0kyVUl2RGhkVEdWVmZSU1NlaUdTdG5jZXF3VUU3bjBBaDpzay1YOHFvbFlqeTYya0l6RWJyMFFSSzFoNGI0S0RWSGFOY3dNWWszOWpJblNs'
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