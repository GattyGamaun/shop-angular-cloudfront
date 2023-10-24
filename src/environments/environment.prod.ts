import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://67a22jex2e.execute-api.eu-north-1.amazonaws.com',
    order: 'https://67a22jex2e.execute-api.eu-north-1.amazonaws.com',
    import: 'https://db716dr0mj.execute-api.eu-north-1.amazonaws.com',
    bff: 'https://67a22jex2e.execute-api.eu-north-1.amazonaws.com',
    cart: 'https://67a22jex2e.execute-api.eu-north-1.amazonaws.com',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
