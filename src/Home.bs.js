// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ProductItem = require("./ProductItem.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Text$BsReactNative = require("bs-react-native/src/components/text.js");
var View$BsReactNative = require("bs-react-native/src/components/view.js");
var Style$BsReactNative = require("bs-react-native/src/style.js");
var FlatList$BsReactNative = require("bs-react-native/src/components/flatList.js");
var TouchableOpacity$BsReactNative = require("bs-react-native/src/components/touchableOpacity.js");

var Graphql_error = Caml_exceptions.create("Home.Query.Graphql_error");

var query = "query HomeQuery  {\nallProducts  {\nid  \nname  \nbarcode  \nprice  \ncreatedAt  \n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["allProducts"];
    var match$1 = Js_json.decodeArray(value$1);
    var tmp;
    if (match$1) {
      tmp = match$1[0].map((function (value) {
              var match = Js_json.decodeObject(value);
              if (match) {
                var value$1 = match[0];
                var value$2 = value$1["id"];
                var match$1 = Js_json.decodeString(value$2);
                var tmp;
                if (match$1) {
                  tmp = match$1[0];
                } else {
                  throw Graphql_error;
                }
                var value$3 = value$1["name"];
                var match$2 = Js_json.decodeString(value$3);
                var tmp$1;
                if (match$2) {
                  tmp$1 = match$2[0];
                } else {
                  throw Graphql_error;
                }
                var value$4 = value$1["barcode"];
                var match$3 = Js_json.decodeString(value$4);
                var tmp$2;
                if (match$3) {
                  tmp$2 = match$3[0];
                } else {
                  throw Graphql_error;
                }
                var value$5 = value$1["price"];
                var match$4 = Js_json.decodeNumber(value$5);
                var tmp$3;
                if (match$4) {
                  tmp$3 = match$4[0] | 0;
                } else {
                  throw Graphql_error;
                }
                return {
                        id: tmp,
                        name: tmp$1,
                        barcode: tmp$2,
                        price: tmp$3,
                        createdAt: value$1["createdAt"]
                      };
              } else {
                throw Graphql_error;
              }
            }));
    } else {
      throw Graphql_error;
    }
    return {
            allProducts: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function make() {
  return {
          query: query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables() {
  return {
          query: query,
          variables: null,
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var Query = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var title = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.marginTop(/* Pt */Block.__(0, [100])),
      /* :: */[
        Style$BsReactNative.fontSize(/* Float */Block.__(0, [40])),
        /* :: */[
          Style$BsReactNative.textAlign(/* Center */3),
          /* [] */0
        ]
      ]
    ]);

var addButton = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.padding(/* Pt */Block.__(0, [15])),
      /* :: */[
        Style$BsReactNative.backgroundColor("#000"),
        /* [] */0
      ]
    ]);

var buttonText = Style$BsReactNative.style(/* :: */[
      Style$BsReactNative.color("#fff"),
      /* [] */0
    ]);

var Styles = /* module */[
  /* title */title,
  /* addButton */addButton,
  /* buttonText */buttonText
];

var QueryContainer = ReasonApollo.CreateQuery([
      query,
      parse
    ]);

function renderItem(param) {
  return FlatList$BsReactNative.renderItem((function (param) {
                var item = param[/* item */0];
                return ReasonReact.element(/* None */0, /* None */0, ProductItem.make(item.name, item.price, /* array */[]));
              }), param);
}

var component = ReasonReact.statelessComponent("Home");

function make$1(push, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, View$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* array */[
                      ReasonReact.element(/* None */0, /* None */0, Text$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[title], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["ProductCart"], /* array */[])),
                      ReasonReact.element(/* None */0, /* None */0, View$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* array */[ReasonReact.element(/* None */0, /* None */0, TouchableOpacity$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[addButton], /* None */0, /* Some */[Curry._1(push, /* ProductAdd */1)], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* array */[ReasonReact.element(/* None */0, /* None */0, Text$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[buttonText], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["Adicionar produto"], /* array */[]))]))])),
                      ReasonReact.element(/* None */0, /* None */0, Curry.app(QueryContainer[/* make */3], [
                                /* None */0,
                                /* None */0,
                                /* None */0,
                                /* None */0,
                                /* None */0,
                                /* None */0,
                                /* None */0,
                                /* None */0,
                                /* None */0,
                                (function (param) {
                                    var data = param[/* data */0];
                                    if (typeof data === "number") {
                                      if (data === 0) {
                                        return ReasonReact.element(/* None */0, /* None */0, Text$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["Loading..."], /* array */[]));
                                      } else {
                                        return ReasonReact.element(/* None */0, /* None */0, Text$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["Reason is awesome!"], /* array */[]));
                                      }
                                    } else if (data.tag) {
                                      return ReasonReact.element(/* None */0, /* None */0, FlatList$BsReactNative.make(data[0].allProducts, renderItem, (function (product, _) {
                                                          return product.id;
                                                        }), /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0)(/* array */[]));
                                    } else {
                                      return ReasonReact.element(/* None */0, /* None */0, Text$BsReactNative.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */["Something went wrong"], /* array */[]));
                                    }
                                  })
                              ]))
                    ]));
    });
  return newrecord;
}

exports.Query = Query;
exports.Styles = Styles;
exports.QueryContainer = QueryContainer;
exports.renderItem = renderItem;
exports.component = component;
exports.make = make$1;
/* title Not a pure module */
