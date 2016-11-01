const test = require('ava');
const syncExec = require('sync-exec');
const helpers = require('../../lib/helpers');
const testHelpers = require('./fixtures/helpers');
const testData = require('./fixtures/test-data.js');

let moduleSizes, rootDependencies, flatDependencies, allDependencies;
test.before(t => {
    testHelpers.setup();
});

test.todo('setup was complete');

test('get size for node_modules', t => {
    moduleSizes = helpers.getSizeForNodeModules();
    t.deepEqual(moduleSizes, testData.moduleSizes);
});

test('get root dependencies', t => {
    rootDependencies = helpers.getRootDependencies();
    t.deepEqual(rootDependencies, testData.rootDependencies);
});

test('attach nested dependencies', t => {
    flatDependencies = helpers.attachNestedDependencies(rootDependencies);
    t.deepEqual(flatDependencies, testData.flatDependencies);
});

test('get all dependencies', t => {
    allDependencies = helpers.getAllDependencies(flatDependencies);
    t.deepEqual(allDependencies, testData.allDependencies);
});

test.todo('show results');
