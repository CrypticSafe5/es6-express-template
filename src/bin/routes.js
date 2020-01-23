import express from 'express';
import V1 from './middleware/V1';

const v1 = new V1();
const router = express.Router();

router.get('/V1/ping', v1.getPing);
router.post('/V1/ping', v1.postPing);

export default router;
