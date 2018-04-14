open BsReactNative;

module ProductAddFormParams = {
  type state = {
    name: string,
    price: string,
    barcode: string,
  };
  type fields = [ | `name | `price | `barcode];
  let lens = [
    (`name, s => s.name, (s, v) => {...s, name: v}),
    (`price, s => s.price, (s, v) => {...s, price: v}),
    (`barcode, s => s.barcode, (s, v) => {...s, barcode: v}),
  ];
};

module ProductAddForm = ReForm.Create(ProductAddFormParams);

module Mutation = [%graphql
  {|
mutation ProductAddMutation($barcode: String!, $name: String!, $price: Int!) {
  createProduct(barcode: $barcode, name: $name, price: $price) {
    id
  }
}
|}
];

module ProductAddMutation = ReasonApollo.CreateMutation(Mutation);

module Styles = {
  let wrapper = Style.(style([flex(1.)]));
  let title =
    Style.(
      style([
        marginTop(Pt(100.)),
        fontSize(Float(40.)),
        textAlign(Center),
      ])
    );
  let input =
    Style.(
      style([
        height(Pt(50.)),
        marginTop(Pt(10.)),
        paddingLeft(Pt(5.)),
        backgroundColor("#f5f5f5"),
      ])
    );
  let addButton =
    Style.(
      style([
        padding(Pt(15.)),
        backgroundColor("#000"),
        alignItems(Center),
        justifyContent(Center),
        paddingBottom(Pt(30.)),
      ])
    );
  let buttonText = Style.(style([color("#fff")]));
};

module Input = {
  let component = ReasonReact.statelessComponent("Label");
  let make =
      (
        ~label,
        ~placeholder=?,
        ~keyboardType=?,
        ~field,
        ~handleChange,
        ~getErrorForField,
        ~value,
        _children,
      ) => {
    ...component,
    render: _self =>
      <View>
        <Text value=label />
        <TextInput
          value
          style=Styles.input
          ?placeholder
          ?keyboardType
          onChangeText=(handleChange(field))
        />
        (
          switch (getErrorForField(field)) {
          | Some(error) => <Text value=error />
          | None => ReasonReact.nullElement
          }
        )
      </View>,
  };
};

let onSubmit = (~mutate, ~push, {values}: ProductAddForm.onSubmit) => {
  let price = values.price |> float_of_string |> ( *. )(100.) |> int_of_float;
  let mutation =
    Mutation.make(~barcode=values.barcode, ~name=values.name, ~price, ());
  Js.Promise.(
    mutate(
      Js.Nullable.return({
        "variables": Js.Nullable.return(mutation##variables),
        "refetchQueries": Js.Null_undefined.return([|"HomeQuery"|]),
      }),
    )
    |> then_(data => { Js.log(data); push(RouterActions.Home, ()) |> resolve })
    |> catch(error => Js.log(error) |> resolve)
    |> ignore
  );
};

let component = ReasonReact.statelessComponent("ProductAdd");

let make = (~push, _children) => {
  ...component,
  render: _self =>
    <ProductAddMutation>
      ...(
           (mutate, _data) =>
             <ProductAddForm
               onSubmit=(onSubmit(~mutate, ~push))
               initialState={name: "", price: "0", barcode: ""}
               schema=[
                 (`name, Required),
                 (`price, Required),
                 (`barcode, Required),
               ]
               i18n=ReForm.Validation.I18n.ptBR>
               ...(
                    ({handleSubmit, handleChange, form, getErrorForField}) =>
                      <View style=Styles.wrapper>
                        <View style=Styles.wrapper>
                          <Text value="Novo produto" style=Styles.title />
                          <Input
                            label="Nome"
                            placeholder="Aguardente Pangalactica"
                            field=`name
                            handleChange
                            value=form.values.name
                            getErrorForField
                          />
                          <Input
                            label={j|Preço|j}
                            placeholder="0.00"
                            keyboardType=`numeric
                            field=`price
                            handleChange
                            value=form.values.price
                            getErrorForField
                          />
                          <Input
                            label={j|Barcode|j}
                            placeholder="0"
                            keyboardType=`numeric
                            field=`barcode
                            handleChange
                            value=form.values.barcode
                            getErrorForField
                          />
                        </View>
                        <TouchableOpacity
                          style=Styles.addButton onPress=handleSubmit>
                          <Text
                            style=Styles.buttonText
                            value="Adicionar produto"
                          />
                        </TouchableOpacity>
                      </View>
                  )
             </ProductAddForm>
         )
    </ProductAddMutation>,
};
