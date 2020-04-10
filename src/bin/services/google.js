import fetch from 'node-fetch';

const { URL_GOOGLE } = process.env;

export function getGoogleLogo() {
    return new Promise((resolve, reject) => {
        return fetch(`${URL_GOOGLE}/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg`).then((response) => response.json()).then((response) => {
            return resolve(response);
        }).catch((err) => {
            console.log('/src/bin/services getGoogleLogo() error: ',err);
            return reject(err.toString('utf8'));
        });
    });
}
