declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      CMS_GRAPHQL_ENDPOINT: string;
      /* Public vars. Available in browser */
      NEXT_PUBLIC_FEDERATED_GRAPHQL_ENDPOINT: string;
      NEXT_PUBLIC_THEME: 'north' | 'west' | 'gds' | undefined;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_GTM_CODE: string | undefined;
    }
  }
}

export {};
