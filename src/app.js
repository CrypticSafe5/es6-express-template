/*
	https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/
*/

import app from './bin/www';

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
	console.log('app | online');
});