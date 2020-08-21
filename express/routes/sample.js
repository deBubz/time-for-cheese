const router = require('express').Router();


// GET all
router.route('/').get((req, res) => {
    try {
        res.send({
            this: 'Something worked',
        })
    } catch (err){
        res.status(400).json(`Err: ${err}`);
    }
})


module.exports = router;