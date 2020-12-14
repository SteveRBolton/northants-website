import { gql } from '@apollo/client';



// const getContentOrRedirectByUrlQuery = gql`
//   query DrupalPage($path: String!) {
//     route(path: $path) {
//       ... on DrupalNodeRoute {
//         node {
//             ...ServicePageNode
//         }
//       }
//       ... on DrupalNotFoundRoute {
//           info
//       }
//       ... on DrupalRedirectRoute {
//         destination
//         status
//       }
//     }
//   }
// `;
