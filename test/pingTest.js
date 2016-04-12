'use strict';

const assert = require('chai').assert;
const ping = require('../reactions/ping');

describe('PingTest', function() {
  it('should react `pong`', function() {
    assert.equal('pong', ping());
  });
});
