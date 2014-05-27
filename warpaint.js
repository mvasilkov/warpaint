#!/usr/bin/env node
(function () {
    function warpaint(s) {
        s = s.trim()
        return s
    }

    function cli() {
        var fs = require('fs'),
            s = fs.readFileSync(process.argv[2], {encoding: 'utf8'})
        console.log(warpaint(s))
    }

    if (typeof require == 'function' && typeof module == 'object') {
        if (require.main === module) cli()
        else if (module.exports) module.exports = warpaint
    }
    else if (typeof define == 'function' && define.amd)
        define(function () { return warpaint })
    else if (typeof window == 'object') window.warpaint = warpaint
}())
