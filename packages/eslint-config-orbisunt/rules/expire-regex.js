/**
 * @fileoverview Rule to find EXPIRE
 * @author Victor Sandoval
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "find EXPIRE",
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
        var regex = /expire on (\d{4}\/\d{2}\/\d{2})/i;

        comments.map((node)=> {
          var result = node.value.match(regex);

          if (!result) {
            if (node.value.includes('EXPIRE ON')) {
              context.report(node, "ERROR: DATE es inválido")
            }
            return;
          }

          var expirationDate = new Date(result[1]);

          if (expirationDate.toString() === 'Invalid Date') {
            context.report(node, "DATE es inválido")
          }


          if (Date.now() > expirationDate) {
            context.report(node, "CODE ESTÁ EXPIRADO. Porfa corrige este código")
          }
        })
      }
    };
  }
};
