const HttpRestAdapter = require('./HttpRestAdapter');
const http = require('https');


function getHttpRestAdapter(){
    return new HttpRestAdapter(http);
}

module.exports = getHttpRestAdapter;