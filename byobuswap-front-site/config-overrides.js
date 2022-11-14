const { useBabelRc, override, babelInclude }  = require("customize-cra");
const path = require("path");
module.exports = override(
    useBabelRc(),
    babelInclude([
        path.resolve('src'),
        path.resolve('node_modules/@oasisprotocol/sapphire-paratime')
       ]
    )
    );