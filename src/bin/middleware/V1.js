class V1 {
	constructor() {
		this.getPing = this.getPing.bind(this);
		this.postPing = this.postPing.bind(this);
	}

	getPing(request, response) {
		response.send('pong');
	}

	postPing(request, response) {
		console.log('req.body: ', req.body);
		response.send('pong');
	}
}

export default V1;
