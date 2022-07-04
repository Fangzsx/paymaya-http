const RestController = require('./RestController');
const getHttpRestAdapter = require('../adapters/http/index')

function getRestController(){
    return new RestController(getHttpRestAdapter())
}
module.exports = getRestController