const express = require('express');
const categoriesRoutes = require('./src/routes/categories');
const loginRoutes = require('./src/routes/login');
const userRoutes = require('./src/routes/user');
const postRoutes = require('./src/routes/blogPosts');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});

app.use('/categories', categoriesRoutes);
app.use('/login', loginRoutes);
app.use('/post', postRoutes);
app.use('/user', userRoutes);