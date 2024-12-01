const createContainer = require('./src/infrastructure/container/container');
const createServer = require('./src/infrastructure/server/server');

const container = createContainer();
const app = createServer(container);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});