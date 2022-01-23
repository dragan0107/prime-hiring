const router = require('express').Router();

const {
    addDev,
    getDev,
    updateDev,
    dismissDev,
    hireDev,
} = require('../controllers/devController');

router
    .get('/', getDev)
    .post('/', addDev)
    .put('/:id', updateDev)
    .put('/:id/dismiss', dismissDev)
    .put('/:id/hire', hireDev);

module.exports = router;
