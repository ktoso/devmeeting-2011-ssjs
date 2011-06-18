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

  var server, staticCallback, dynamicCallback, errorCallback;

  beforeEach(function() {
    server = new mystatic.Server({});

    server.on('static', staticCallback = jasmine.createSpy('static callback'));
    server.on('dynamic', dynamicCallback = jasmine.createSpy('dynamic callback'));
    server.on('error', errorCallback = jasmine.createSpy('error callback'));
  });

  it('triggers a static event given a static file url', function() {
    server.handle(fakeRequest('GET', '/image.png') , fakeResponse());

    expect(staticCallback).toHaveBeenCalled();
    expect(dynamicCallback).not.toHaveBeenCalled();
    expect(errorCallback).not.toHaveBeenCalled();
  });

  it('triggers an error event given a static file url and POST', function() {
    server.handle(fakeRequest('POST', '/image.png') , fakeResponse());

    expect(staticCallback).not.toHaveBeenCalled();
    expect(dynamicCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
  });

  it('triggers an error event given a non-static file url and GET', function() {
    server.handle(fakeRequest('GET', '/image.rb') , fakeResponse());

    expect(staticCallback).not.toHaveBeenCalled();
    expect(dynamicCallback).not.toHaveBeenCalled();
    expect(errorCallback).toHaveBeenCalled();
  });

});
