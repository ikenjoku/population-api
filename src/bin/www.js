import http from 'http';
import app from '../app';

const PORT = parseInt(process.env.PORT, 10) || 6000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`POPULATION-API is running on ${PORT}`);
});
