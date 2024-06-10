const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.getAllStores);
router.get('/:name', storeController.getStoreByName);
router.post('/', storeController.addStore);
router.put('/:name', storeController.updateStore);
router.delete('/:name', storeController.deleteStore);

module.exports = router;
