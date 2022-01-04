import createServer from './App';
import { APP_PORT, APP_ZONE } from './shared/configs';

const app = createServer();

app.listen(APP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`
  *** APP IS RUNNING ON:
  *** PORT: ${APP_PORT}
  *** ZONE: ${APP_ZONE}
  `);
});
