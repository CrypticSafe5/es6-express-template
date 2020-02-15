import express from 'express';
import V1 from './controllers/V1';

const v1 = new V1();
const router = express.Router();

export function controllerWrapper(middleware, request, response) {
    middleware(request).then((happyPath) => {
        response.status(happyPath.status).send(happyPath.payload);
    }).catch((notHappyPath) => {
        response.status(notHappyPath.status).send(notHappyPath.payload);
    });
}

// V1 routes go here
router.get('/V1/ping', (req, res) => controllerWrapper(v1.getPing, req, res));
router.post('/V1/ping', (req, res) => controllerWrapper(v1.postPing, req, res));
router.get('/V1/googleLogo', (req, res) => controllerWrapper(v1.fetchGoogleLogo, req, res));

// V2 and so forth keep getting tacked on below

export default router;
