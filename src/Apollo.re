/* open ApolloLinks; */
open ApolloInMemoryCache;

type dataObject = {
  .
  "__typename": string,
  "id": string
};

/* Create an InMemoryCache */
let inMemoryCache =
  createInMemoryCache(~dataIdFromObject=(obj: dataObject) => obj##id, ());

/* Create an HTTP Link */
let httpLink = ApolloLinks.createHttpLink(~uri="https://api.graph.cool/simple/v1/cjfzh78qe0m1f0160xcrosm5l", ());

let instance = ReasonApollo.createApolloClient({
  "link": httpLink,
  "cache": inMemoryCache,
  "ssrMode": Js.Nullable.undefined,
  "ssrForceFetchDelay": Js.Nullable.undefined,
  "connectToDevTools": Js.Nullable.undefined,
  "queryDeduplication": Js.Nullable.undefined
});
