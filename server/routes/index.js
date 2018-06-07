import path from 'path';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });

  export default router;

