const storeService = require('../services/storeService');

const getAllStores = async (req, res) => {
  const stores = await storeService.fetchData();
  res.json(stores);
};

const getStoreByName = async (req, res) => {
  const store = await storeService.getStoreByName(req.params.name);
  if (store) {
    res.json(store);
  } else {
    res.status(404).send('Store not found');
  }
};

const addStore = async (req, res) => {
  const newStore = req.body;
  const updatedStores = await storeService.addStore(newStore);
  res.json(updatedStores);
};

const updateStore = async (req, res) => {
  const updatedStore = req.body;
  const result = await storeService.updateStore(req.params.name, updatedStore);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send('Store not found');
  }
};

const deleteStore = async (req, res) => {
  const result = await storeService.deleteStore(req.params.name);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send('Store not found');
  }
};

module.exports = {
  getAllStores,
  getStoreByName,
  addStore,
  updateStore,
  deleteStore,
};
