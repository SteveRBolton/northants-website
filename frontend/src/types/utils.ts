export const isGraphQLType = <T extends { __typename: string }, N extends string>(
  obj: T,
  typename: N
): obj is Extract<T, { __typename: N }> => {
  return obj.__typename === typename;
};
