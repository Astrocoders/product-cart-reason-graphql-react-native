open BsReactNative;

module Styles = {
  let wrapper = Style.(style([backgroundColor("#fff"), padding(Pt(10.))]));
};

let formatPrice = price => {
  price |> float_of_int |> (/.)(_, 100.) |> string_of_float
};

let component = ReasonReact.statelessComponent("ProductItem");

let make = (~name, ~price, _children) => {
  ...component,
  render: _self =>
  <View style=Styles.wrapper>
    <Text value=name />
    <Text value=formatPrice(price) />
  </View>
};
