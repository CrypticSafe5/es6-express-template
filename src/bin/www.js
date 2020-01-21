import express from 'express';
import indexRouter from '../routes/index';
import indexRouter2 from '../routes/index2';

export default () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use('/app1', indexRouter);
    app.use('/app2', indexRouter2);

    return app;
}
