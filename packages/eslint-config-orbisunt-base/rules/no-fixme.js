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
    var comments = sourceCode.getAllComments();
    console.log("ss", comments)
    return {
      LineComment: function(node) {
        console.log('node', node)
      }
    };
  }
};
