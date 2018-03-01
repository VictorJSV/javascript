/**
 * @fileoverview Plugin for Orbis UND
 * @author Victor Sandoval
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");

// Para exportar config
/*
module.exports.configs = {
  recommended: {
    // plugins: ["orbisunt-base"],
    rules: {
      "orbisunt-base/expire": "error"
    }
  }
}
*/
/*
// Para aplicar sería de esta forma:
{
  "extends": ["plugin:orbisunt-base/recommended"]
}
*/
