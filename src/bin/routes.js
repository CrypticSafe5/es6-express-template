import express from 'express';
import errorCode from '../../config/statusCodes';
import V1 from './controllers/V1';

export function controllerWrapper(controller, request, response) {
    return controller(request).then((responseObject) => {
        return response.send(responseObject);
    }).catch((err) => {
        if (typeof err !== 'string') err = err.toString();
        const responseObject = errorCode[errorCode.hasOwnProperty(err) ? err : 'default'];
        return response.status(responseObject.status).send(responseObject.message);
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
