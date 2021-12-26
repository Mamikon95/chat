
var AllPhones = require('../data');
var PhoneModule = require('../phones');
//var ModelModule = require('../model/phone');
//var PhoneModel = ModelModule.Phone;



//PhoneModel.create({ model: "Motorolla", color: "White", price: 250 }, function(err) {
//    if (err) throw err;
//});

var AllPhones_obj = {};

for(var number in AllPhones.Phones) {
    AllPhones_obj[number] = PhoneModule(AllPhones.Phones[number]);
}

exports.phone = function(req,res) {
    if(AllPhones_obj[req.param('number')]) {
        //res.json(AllPhones_obj[req.param('number')].getInfo());

        res.render('../view/chat');
    } else {
        res.send('Такого телефона не существует!!!');
    }
};