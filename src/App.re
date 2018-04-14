open BsReactNative;

let app = () =>
  <ReasonApollo.Provider client=Apollo.instance>
    <Router />
  </ReasonApollo.Provider>;
