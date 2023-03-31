var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET skills listing. */
router.get('/', skillsCtrl.index);
// get /add for adding
router.get('/add', skillsCtrl.add);

router.get('/:id', skillsCtrl.show);
// post / create
router.post('/', skillsCtrl.create);
// delete /:id delete
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
