import packageJson from '../package.json';
import setApp from './bin/www';

const app = setApp();
const appName = packageJson.name;
const appVersion = packageJson.version;
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
	console.log(`[${appName}][${appVersion}]> online`);
});