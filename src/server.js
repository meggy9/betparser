import express from 'express';

import homeController from './controllers/homeController';

const app = express();

app.get('/', homeController.index);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
