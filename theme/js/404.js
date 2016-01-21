$(function() {
  'use strict';

  function Redirector(redirectJSONURL, timeOutMS) {

    var _self = this,
        _currentPath = location.pathname,
        _redirectMap = null,
        _timeOutMS = timeOutMS || 5000,
        _redirectJSONConfigURL = redirectJSONURL || '/config/redirects.json';

    function _performRedirect(defer) {
      var redirects = _redirectMap.redirects;

      for (var i = 0; i < redirects.length; i++) {
        var redirectRule = redirects[i];

        if (_currentPath.indexOf(redirectRule.from) >= 0 && typeof redirectRule.to === 'string') {
          var targetURL = _redirectMap.defaultBaseToURL + redirectRule.to;

          defer.resolve(targetURL);

          setTimeout(function(){
            window.location.href = _redirectMap.defaultBaseToURL + redirectRule.to;
          }, _timeOutMS);

          return;
        }
      }

      defer.reject(null);
    }

    function _loadRedirectConfig(defer) {

      var loadConfigPromise = $.Deferred();;

      $.get(_redirectJSONConfigURL)
        .done(function(configRedirectData) {
          _redirectMap = configRedirectData;
        })
        .fail(function(error) {
          defer.reject(error);
        })
        .always(function() {
          loadConfigPromise.resolve();
        });

      return loadConfigPromise;
    }

    function _redirect() {

      var redirectPromise = $.Deferred();

      if (_redirectMap) {
        _performRedirect(redirectPromise);
      }
      else {
        _loadRedirectConfig()
          .then(function() {
            _performRedirect(redirectPromise);
          });
      }

      return redirectPromise;
    }


    _self.redirect = _redirect;
  }

  var redirector = new Redirector(),
      pageNotFoundContainer = $('#page-not-found-container'),
      pageFoundContainer = $('#redirect-page-found-container'),
      redirectLinkEl = $('#redirect-link'),
      loadingEl = $('#redirect-lookup-container');

  redirector
    .redirect()
    .then(function(destinationURL) {
      loadingEl.hide();
      pageNotFoundContainer.hide();
      redirectLinkEl.attr('href', destinationURL).text(destinationURL);
      pageFoundContainer.show('slow');
    })
    .fail(function(){
      loadingEl.hide();
      pageNotFoundContainer.show('slow');
    });

});