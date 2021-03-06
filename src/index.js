import packageJson from '../package.json';
import setApp from './bin/util/www';

const app = setApp();
const { name, version } = packageJson;
const { PORT } = process.env;

app.listen(PORT, () => {
	console.log(`[${name}][${version}]> online`);
});
