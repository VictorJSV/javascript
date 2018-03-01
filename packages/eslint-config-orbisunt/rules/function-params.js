"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  create: function(context) {
    return {
      // CallExpression => si hay una llamada de una función
      CallExpression: function(node) {
        if (node.callee.name === "fooFunc") {
          if (typeof node.arguments[0].value !== "string") {
            context.report(node, "fooFunc(), primer parametro debe ser string");
          }
        }
      }
    };
  }
};
