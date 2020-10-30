const app = require('./src/app');
app.get('/', (req, res) => res.send('Hello World!'))
const port = process.env.PORT||3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))