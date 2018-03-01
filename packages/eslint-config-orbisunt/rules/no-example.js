/**
 * @fileoverview Rule to find example words
 * @author Victor Sandoval
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "find example words",
      category: "Possible Errors"
    },
    fixable: "code",
    schema: [] // no options
  },
  create: function(context) {
    return {
      CallExpression: function(node) {
        if (node.callee.name === "example") {
          context.report(node, "No llames una función con nombre 'Example'")
        }
      }
    };
  }
};
