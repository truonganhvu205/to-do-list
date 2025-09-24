const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.delete('/:id', siteController.delete)
router.put('/:id', siteController.update)
router.post('/', siteController.create)
router.get('/', siteController.index)

module.exports = router
