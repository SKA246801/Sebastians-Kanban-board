const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const auth = require('../routes/auth.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', auth);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}
app.get('/', (req, res) => {
  res.send('Test');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Your sample of MERN authentication is running at ${PORT} in ${process.env.NODE_ENV} environment`
  )
);