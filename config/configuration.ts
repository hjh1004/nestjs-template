import { config as localConfiguration } from './local.configuration';
import { config as devConfiguration } from './dev.configuration';
import { config as prdConfiguration } from './prd.configuration';

export default () => {
  if (process.env.NODE_ENV === 'prd' || process.env.NODE_ENV === 'production') {
    return prdConfiguration;
  }
  if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'development') {
    return devConfiguration;
  }
  return localConfiguration;
};
