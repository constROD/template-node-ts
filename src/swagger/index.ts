/* eslint-disable import/no-named-default */
import { tests } from './Test';

export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Symple API Users Service',
    description: 'Symple API Users Service',

    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  paths: {
    ...tests,
  },
};
