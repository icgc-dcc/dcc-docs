$(function () {

  function _isValidURL(url) {
    return  /(http(s)*:\/\/(localhost(:\d+)*)|[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?)/gi.test(url);
  }

  function _getEndpointURL() {
    return _currentBaseURL + _currentBasePath;
  }

  function _setBaseEndpointURL(url, path) {
    var isValidURL = _isValidURL(url);

    if (isValidURL) {

      _currentBaseURL = url;
      _currentBasePath = path || BASE_PATH;

      if (_isConfigControlOpen) {
        _saveServerConfigBttn.removeClass('invalid').addClass('valid');
      }

      _endpointLabelEl.text(_currentBaseURL);

      if (! _endpointInputEl.val() ) {
        _endpointInputEl.val(_currentBaseURL);
      }

      _endpointBasePathEl.text(_currentBasePath);


      updateAPIServer();

    }
    else if (! url) {
      _saveServerConfigBttn.removeClass('invalid valid');
    }
    else {
      _saveServerConfigBttn.removeClass('valid').addClass('invalid');
    }


    return url === _currentBaseURL;
  }

  function _initSwagger() {
    _setBaseEndpointURL(BASE_URL, BASE_PATH);

    // Initialize Swagger
    window.swaggerUi = new SwaggerUi({
      // Modified
      url: _getEndpointURL(),
      validatorUrl: null,
      apiKey: "",
      dom_id: "swagger-ui-container",
      supportedSubmitMethods: ['get', 'post', 'put'],
      onComplete: function(){

        $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

        // Fix static urls for images
        $('[src="images/throbber.gif"]').attr('src', '/vendor/swagger-ui/images/throbber.gif');
        $('[src="images/logo_small.png"]').attr('src', '/vendor/swagger-ui/images/logo_small.png');

        if (_hasReloadedRequest) {
          return;
        }

        _hasReloadedRequest = true;

        console.log("Loaded SwaggerUI");
        _errorAlert.hide();

        if (_isConfigControlOpen) {
          _toggleServerConfig(null, false);
        }

      },
      onFailure: function() {
        _errorAlert.fadeIn('fast');
      },
      docExpansion: "none"
    });

    window.swaggerUi.load();
  }

  function _debounce(func, wait, immediate) {
    var _timeout;

    return function () {

      var context = this,
        args = arguments,
        later = function () {
          _timeout = null;
          if (!immediate) func.apply(context, args);
        };

      var callNow = immediate && !_timeout;

      clearTimeout(_timeout);

      _timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  }



  function updateAPIServer(url) {
    if (window.swaggerUi && typeof window.swaggerUi.updateSwaggerUi === 'function') {
      _hasReloadedRequest = false;
      window.swaggerUi.updateSwaggerUi({url: (url || _getEndpointURL()) + '?t=' + new Date().getTime() });
    }
  }

  function _toggleServerConfig(e, shouldAnimate) {
    if (e) {
      e.preventDefault();
    }




    _toggleServerConfigBttn.addClass('animate-spin');

    if (_isConfigControlOpen) {
      _endpointInputContainerEl.hide();

      if (shouldAnimate !== false) {
        _endpointLabelEl.stop().show('fast', function () {
          _toggleServerConfigBttn.removeClass('invalid valid animate-spin');
        });
      }
      else {
        _endpointLabelEl.show();
        _toggleServerConfigBttn.removeClass('invalid valid animate-spin');
      }
    }
    else {

      if (! _endpointInputEl.val() ) {
        _setBaseEndpointURL(BASE_URL);
      }

      if (shouldAnimate !== false) {
        _endpointLabelEl.stop().hide('fast', function () {
          _toggleServerConfigBttn.removeClass('invalid valid animate-spin');
          _endpointInputContainerEl.css('display', 'table-cell');
        });
      }
      else {
        _endpointLabelEl.hide();
        _toggleServerConfigBttn.removeClass('invalid valid animate-spin');
        _endpointInputContainerEl.css('display', 'table-cell');
      }
    }

    _isConfigControlOpen = ! _isConfigControlOpen;

  }


  function _init() {

    _toggleServerConfigBttn.click(_toggleServerConfig);

    var debounceFn = _debounce(function() {
      _setBaseEndpointURL(_endpointInputEl.val());
    }, 400);

    _endpointInputEl.keyup(function(e) {
      e.stopPropagation();
      debounceFn();
    });

    _initSwagger();

  }

  var BASE_URL = 'https://dcc.icgc.org',
    BASE_PATH = '/api/swagger.json',
    _currentBaseURL = null,
    _currentBasePath = null;

  var _endpointLabelEl =  $('.endpoint-server-label'),
      _endpointInputEl = $('#server-endpoint-url'),
      _endpointInputContainerEl = $('.btn-group-container'),
      _endpointBasePathEl = $('#server-endpoint-url-path'),
      _toggleServerConfigBttn = $('#change-base-server-bttn'),
      _saveServerConfigBttn = $('#change-base-server-bttn'),
      _errorAlert = $('#swagger-error'),
      _isConfigControlOpen = false,
      _hasReloadedRequest = false;


  _init();



});
