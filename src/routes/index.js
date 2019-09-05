import express from 'express';

const router = express.Router();

router.get('/ping', (req, res)=>{
	res.send('pong');
});

router.post('/ping', (req, res)=>{
	console.log('req.body: ', req.body);
	res.send('pong');
});

export default router;