open BsReactNative;

module Query = [%graphql
  {|
query HomeQuery {
  allProducts {
    id
    name
    barcode
    price
    createdAt
  }
}
|}
];

module Styles = {
  let title =
    Style.(
      style([
        marginTop(Pt(100.)),
        fontSize(Float(40.)),
        textAlign(Center),
      ])
    );
  let addButton =
    Style.(style([padding(Pt(15.)), backgroundColor("#000")]));
  let buttonText = Style.(style([color("#fff")]));
};

module QueryContainer = ReasonApollo.CreateQuery(Query);

let renderItem =
  FlatList.renderItem(({item}) =>
    <ProductItem name=item##name price=item##price />
  );

let component = ReasonReact.statelessComponent("Home");

let make = (~push, _children) => {
  ...component,
  render: _self =>
    <View>
      <Text value="ProductCart" style=Styles.title />
      <View>
        <TouchableOpacity
          style=Styles.addButton onPress=(push(RouterActions.ProductAdd))>
          <Text style=Styles.buttonText value="Adicionar produto" />
        </TouchableOpacity>
      </View>
      <QueryContainer>
        ...(
             ({data}) =>
               switch (data) {
               | NoData => <Text value="Reason is awesome!" />
               | Error(_) => <Text value="Something went wrong" />
               | Loading => <Text value="Loading..." />
               | Data(data) =>
                 <FlatList
                   data=data##allProducts
                   renderItem
                   keyExtractor=((product, _) => product##id)
                 />
               }
           )
      </QueryContainer>
    </View>,
};
