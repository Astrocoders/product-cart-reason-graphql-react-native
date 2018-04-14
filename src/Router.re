open BsReactNative;

type state = {
  route: RouterActions.route,
};

type action = | Push(RouterActions.route);

let component = ReasonReact.reducerComponent("Router");

let make = (_children) => {
  ...component,
  initialState: () => { route: Home },
  reducer: (action, _state) => {
    switch(action) {
      | Push(route) => ReasonReact.Update({ route: route })
    }
  },
  render: self => {
    let push = (route, _) => self.send(Push(route));

    switch(self.state.route) {
      | Home => <Home push />
      | ProductAdd => <ProductAdd push />
    }
  }
};
