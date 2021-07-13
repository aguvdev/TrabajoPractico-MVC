const path = require('path');

module.exports = {
    index : (req,res) => res.sendFile(path.join(__dirname,'..', 'views', 'home.html')),
    about : (req,res) => res.sendFile(path.join(__dirname,'..', 'views', 'about.html'))
}