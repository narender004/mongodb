
const User = require('./user');



module.exports = {


create(req, res) {
    let user = {};
    if (undefined !== req.body.orchestra) concert.orchestra = req.body.orchestra;
    if (undefined !== req.body.date) concert.date = req.body.date;
    if (undefined !== req.body.hour) concert.hour = req.body.hour;
    if (undefined !== req.body.venue) concert.venue = req.body.venue;
    if (undefined !== req.body.link) concert.link = req.body.link;

    const newConcert = new User(user);
    newConcert.save(err => {
        if (err) {
            return res.status(500).json({ errorCode: "INTERNAL_SERVER_ERROR"});
        }
    });
    return res.status(200).json(newConcert);
},

}

