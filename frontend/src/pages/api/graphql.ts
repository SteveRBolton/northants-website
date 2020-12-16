import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server-micro';

const gateway = new ApolloGateway({
  serviceList: [{ name: 'drupal', url: process.env.NEXT_PUBLIC_CMS_GRAPHQL_ENDPOINT }],
  // Experimental: Enabling this enables the query plan view in Playground.
  __exposeQueryPlanExperimental: true,
});

const server = new ApolloServer({
  gateway,
  // Apollo Graph Manager (previously known as Apollo Engine)
  // When enabled and an `ENGINE_API_KEY` is set in the environment,
  // provides metrics, schema management and trace reporting.
  engine: false,

  // Subscriptions are unsupported but planned for a future Gateway version.
  subscriptions: false,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = server.createHandler({ path: '/api/graphql' });
export default handler;
