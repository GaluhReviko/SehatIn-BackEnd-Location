require('dotenv').config();
const express = require('express');
const storeRoutes = require('./routes/storeRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/stores', storeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
