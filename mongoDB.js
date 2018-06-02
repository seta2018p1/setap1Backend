var express = require('express');
var router = express.Router();
var cors = require('cors');
var mongojs = require('mongojs');

var db = mongojs('mongodb://seta2018Admin:seta2018@ds051843.mlab.com:51843/heroku_gd64lk6m',['test']);
router.use(cors());

router.get('/mongoDB', cors(), (req, res, next) => {
    db.test.find((err, success) => {
        if (err) {
            res.send("There is some err: ", err);
        }

        res.json(success);
    })
    // res.send('Bookings Route');
})

router.post("/mongoDB", (req, res) => {
    var test = req.body.data;

    if (!booking.userName) {
        res.status(400);
        res.json({
            error: "Bad request."
        });
    } else {
        db.test.save(test, (err, save) => {
            if(err) {
                res.send(err);
            }
            res.json(save);
        });
    }
})

module.exports = router;