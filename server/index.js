import express from 'express';
import path from 'path';

import index from './routes/index';

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', index);


app.listen(9000, () => console.log(`Server Running on port 9000`))

