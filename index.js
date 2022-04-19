const express = require('express');
const categoriesRoutes = require('./src/routes/categories');
const loginRoutes = require('./src/routes/login');
const userRoutes = require('./src/routes/user');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/categories', categoriesRoutes);
app.use('/login', loginRoutes);
app.use('/user', userRoutes);