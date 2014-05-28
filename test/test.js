var assert = require('assert'),
    exec   = require('child_process').exec,
    fs     = require('fs'),
    path   = require('path')

describe('warpaint', function () {
    var test = lsFiles(__dirname + '/war').map(getName('.txt')),
        html = lsFiles(__dirname + '/html').map(getName('.html'))

    it('test integrity', function () { assert(aEql(test, html)) })

    test.forEach(function (name) { it(name, runTest(name)) })

    function isFile(file) { return fs.statSync(file).isFile() }

    function prepend(dir) {
        return function (file) { return path.join(dir, file) }
    }

    function lsFiles(dir) {
        return fs.readdirSync(dir).map(prepend(dir)).filter(isFile)
    }

    function getName(ext) {
        return function (file) { return path.basename(file, ext) }
    }

    function aEqlFn(a) {
        return function (val, n) { return val === a[n] }
    }

    function aEql(a, b) {
        return a.length == b.length && a.every(aEqlFn(b))
    }

    function testFn(done) {
        return function (err, stdout) {
            err && console.log(stdout)
            assert(err === null)
            done()
        }
    }

    function runTest(name) {
        return function (done) { exec('make ' + name, testFn(done)) }
    }
})
