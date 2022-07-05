function toBase64(string){
    const buffer = new Buffer.from(string);
    return buffer.toString('base64');
}
module.exports = toBase64