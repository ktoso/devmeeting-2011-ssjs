var mystatic = require('../mystatic');

describe('mystatic', function() {

  function fakeRequest(method, url) {
    return {
      url: url,
      method: method,
      addListener: function(event, callback) {
        callback();
      }
    };
  }

  function fakeResponse() {
    return {};
  }

  var server;

  beforeEach(function() {
    server = new mystatic.Server({});
  });

  it('triggers a static event given a static file url', function() {
    var callback = jasmine.createSpy();
    server.on('static', callback);

    server.handle(fakeRequest('GET', '/image.png') , fakeResponse());

    expect(callback).toHaveBeenCalled();
  });

});
