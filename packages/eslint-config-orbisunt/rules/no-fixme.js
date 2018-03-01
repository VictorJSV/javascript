/**
 * @fileoverview Rule to find FIXME
 * @author Victor Sandoval
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "find FIXME",
      category: "Possible Errors"
    },
    fixable: "code",
    schema: [] // no options
  },
  create: function(context) {
    var sourceCode = context.getSourceCode();
    return {
      Program: function() {
        var comments = sourceCode.getAllComments();
        comments.map((node)=> {
          if (node.value.indexOf('FIXME') > -1) {
            context.report(node, "NO FIXME PERMITIDO")
          }
        })
      }
    };
  }
};
