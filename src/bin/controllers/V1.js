/*
 * Any business logic/data manipulation
 * takes places in here, and there's
 * only 1 method per route. Also, only
 * 1 class per version of APIs.
 */

import { getGoogleLogo } from '../services/google';

export default class V1 {
	constructor() {
		return this;
	}

	/*
	 * Using the arrow function automatically
	 * binds the method to the instance of the
	 * class and saves a line as you then don't
	 * have to bind it in the constructor
	 */
	getPing = () => {
		return new Promise((resolve) => {
			return resolve('pong');
		});
	}

	postPing = () => {
		return new Promise((resolve) => {
			return resolve('pong');
		});
	}

	fetchGoogleLogo = () => {
		return new Promise((resolve, reject) => {
			getGoogleLogo().then((info) => {
				if (info.statusCode === 200) {
					return resolve('success');
				} else {
					return reject('Bad Request');
				}
			}).catch((err) => {
				return reject(err);
			});
		});
	}
}
