class RestController{
    constructor(adapter) {
        this.adapter = adapter;
    }
    request(url, options){

        return this.adapter.request(url, options)

    }

}
module.exports = RestController;