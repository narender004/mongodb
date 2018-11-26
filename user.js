const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var user = {

    name :{
        Type : String
    },
    MobNo :{
Type: Number
    } 

} 
var User = new Schema(user, {
    collection: 'user'
});



module.exports = mongoose.model('user', User);