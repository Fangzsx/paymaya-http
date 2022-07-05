const MayaAdapter = require('./MayaAdapter');
const http = require('https');

function getMayaAdapter(){


    const options = {

    }

    return new MayaAdapter(http, options)
}
module.exports = getMayaAdapter;