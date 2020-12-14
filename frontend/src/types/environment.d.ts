declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT: string;
      NEXT_PUBLIC_THEME: 'north' | 'west' | 'gds' | undefined;
    }
  }
}

export {};
