const axios = require('axios');
const { storage, bucketName, fileName } = require('../config/config');

const fetchData = async () => {
  const response = await axios.get(process.env.JSON_FILE_URL);
  return response.data;
};

const updateJsonFile = async (data) => {
  const file = storage.bucket(bucketName).file(fileName);
  await file.save(JSON.stringify(data, null, 2), {
    resumable: false,
    contentType: 'application/json',
  });
};

const getStoreByName = async (name) => {
  const data = await fetchData();
  return data.find(store => store.nama_toko === name);
};

const addStore = async (newStore) => {
  const data = await fetchData();
  data.push(newStore);
  await updateJsonFile(data);
  return data;
};

const updateStore = async (name, updatedStore) => {
  const data = await fetchData();
  const index = data.findIndex(store => store.nama_toko === name);
  if (index !== -1) {
    data[index] = updatedStore;
    await updateJsonFile(data);
    return data;
  } else {
    return null;
  }
};

const deleteStore = async (name) => {
  const data = await fetchData();
  const index = data.findIndex(store => store.nama_toko === name);
  if (index !== -1) {
    data.splice(index, 1);
    await updateJsonFile(data);
    return data;
  } else {
    return null;
  }
};

module.exports = {
  fetchData,
  getStoreByName,
  addStore,
  updateStore,
  deleteStore,
};
