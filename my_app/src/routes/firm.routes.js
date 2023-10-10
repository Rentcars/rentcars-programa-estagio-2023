const express = require('express')
const router = express.Router()
const firm = require('../controllers/firm.controller')

router.post('/', firm.create)
router.get('/', firm.findAll)
router.get('/:id', firm.findOne)
router.put('/:id', firm.update)
router.delete('/:id', firm.delete)

module.exports = router