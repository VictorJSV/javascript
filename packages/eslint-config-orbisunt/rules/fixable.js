"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

// Dpcumentación: https://eslint.org/docs/developer-guide/working-with-rules#applying-fixes
module.exports = {
  create: function(context) {
    return {
      // CallExpression => si hay una llamada de una función
      CallExpression: function(node) {
        if (node.callee.name === "olaMundo") {
          context.report({
            node: node,
            message: "olaMundo(), está mal escrito... =(",
            fix: function(fixer) {
                return fixer.replaceText(node.callee, "holaMundo");
            }
          });
        }
      }
    };
  }
};
