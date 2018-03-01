/**
 * @fileoverview Rule to find pass params
 * @author Victor Sandoval
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  create: function(context) {
    return {
      // CallExpression => si hay una llamada de una función
      CallExpression: function(node) {
        if (context.options.indexOf(node.callee.name) > -1) {
          context.report(node, node.callee.name + "() NO está permitido");
        }
      }
    };
  }
};
