// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Apollo = require("./Apollo.bs.js");
var Router = require("./Router.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ApolloProvider = require("reason-apollo/src/ApolloProvider.bs.js");

function app() {
  return ReasonReact.element(/* None */0, /* None */0, ApolloProvider.make(Apollo.instance, /* array */[ReasonReact.element(/* None */0, /* None */0, Router.make(/* array */[]))]));
}

exports.app = app;
/* Apollo Not a pure module */
