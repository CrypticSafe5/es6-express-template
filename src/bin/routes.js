import express from 'express';
import V1 from './controllers/V1';

/*
 * This wrapper function exists solely
 * to enable testing on the controller's
 * methods without getting nasty returns
 * alternative solutions very much so
 * welcome
 */
export function controllerWrapper(middleware, request, response) {
    middleware(request).then((happyPath) => {
        return response.status(happyPath.status).send(happyPath.payload);
    }).catch((notHappyPath) => {
        return response.status(notHappyPath.status).send(notHappyPath.payload);
    });
}

export default () => {
    const v1 = new V1();
    const router = express.Router();
    
    // V1 routes go here
    router.get('/V1/ping', (req, res) => controllerWrapper(v1.getPing, req, res));
    router.post('/V1/ping', (req, res) => controllerWrapper(v1.postPing, req, res));
    router.get('/V1/googleLogo', (req, res) => controllerWrapper(v1.fetchGoogleLogo, req, res));

    // V2 and so forth keep getting tacked on below
    // ...

    return router;
}
