import createServer from './App';
import { APP_PORT, APP_ZONE } from './shared/configs/App';
import { ORM_CONFIG } from './shared/configs/ORM';

import { createConnection } from 'typeorm';

const app = createServer();

app.listen(APP_PORT, async () => {
  await createConnection(ORM_CONFIG);
  // eslint-disable-next-line no-console
  console.log(`
  *** APP IS RUNNING ON:
  *** PORT: ${APP_PORT}
  *** ZONE: ${APP_ZONE}
  `);
});
