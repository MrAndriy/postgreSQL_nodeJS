const express = require('express');
const router = require('./routes/router');

const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
