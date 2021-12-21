 function path (msg) {
    var path = msg;
    return path.split('notes').pop().replace(/\s/g, "-")
 }
 module.exports = path;