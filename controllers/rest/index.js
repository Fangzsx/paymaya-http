const RestController = require('./RestController');
const getHttpRestAdapter = require('../../adapters/http')

function getRestController(){
    return new RestController(getHttpRestAdapter())
}
module.exports = getRestController