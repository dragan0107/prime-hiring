const router = require('express').Router();

const {
    addDev,
    getFreeDev,
    updateDev,
    dismissDev,
    hireDev,
    deleteDev,
} = require('../controllers/devController');

router
    .get('/', getFreeDev)
    .post('/', addDev)
    .put('/:id', updateDev)
    .put('/:id/dismiss', dismissDev)
    .put('/:id/hire', hireDev)
    .delete('/:id', deleteDev);

module.exports = router;
