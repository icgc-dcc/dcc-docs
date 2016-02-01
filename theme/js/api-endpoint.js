$(function () {

  function _isValidURL(url) {
    return /https*:\/\/[\w-]+(\.[\w-]+)+([\w.?^=%&:\/~+#-]*[\w?^=%&\/~+#-])?/i.test(url);
  }

  function _getEndpointURL() {
    return _currentBaseURL + _currentBasePath;
  }

  function _setBaseEndpointURL(url, path) {
    _currentBaseURL = _isValidURL(url) ? url : BASE_URL;
    _currentBasePath = path || BASE_PATH;

    _endpointLabelEl.text(_currentBaseURL);
    _endpointInputEl.val(_currentBaseURL);
    _endpointBasePathEl.text(_currentBasePath);

    if (window.swaggerUi && typeof window.swaggerUi.updateSwaggerUi === 'function') {
      window.swaggerUi.updateSwaggerUi({url: _getEndpointURL() });
    }

    return url === _currentBaseURL;
  }

  function _initSwagger() {
    // Initialize Swagger
    window.swaggerUi = new SwaggerUi({
      // Modified
      url: _getEndpointURL(),
      apiKey: "",
      dom_id: "swagger-ui-container",
      supportedSubmitMethods: ['get', 'post', 'put'],
      onComplete: function(){
        //log("Loaded SwaggerUI")
        $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
        $('[src="images/throbber.gif"]').attr('src', '/vendor/swagger-ui/images/throbber.gif');
      },
      onFailure: function() {
        log("Unable to Load SwaggerUI");
      },
      docExpansion: "none"
    });

    window.swaggerUi.load();
  }

  function _init() {
    _setBaseEndpointURL();

    _toggleServerConfigBttn.click(function(e) {
      e.preventDefault();


      _toggleServerConfigBttn.addClass('animate-spin');

      if (_isConfigControlOpen) {
        _endpointInputContainerEl.hide();
        _endpointLabelEl.show()
        _toggleServerConfigBttn.removeClass('animate-spin');
        _saveServerConfigBttn.hide();
        _toggleServerConfigBttn.show();
      }
      else {
        _endpointLabelEl.hide();
        _toggleServerConfigBttn.removeClass('animate-spin');
        _endpointInputContainerEl.css('display', 'table-cell');
        _toggleServerConfigBttn.hide();
        _saveServerConfigBttn.show();
      }

      _isConfigControlOpen = ! _isConfigControlOpen;

    });

    _initSwagger();

  }

  var BASE_URL = 'https://dcc.icgc.org',
    BASE_PATH = '/api/api-docs',
    _currentBaseURL = null,
    _currentBasePath = null;

  var _endpointLabelEl =  $('.endpoint-server-label'),
      _endpointInputEl = $('#server-endpoint-url'),
      _endpointInputContainerEl = $('.btn-group-container'),
      _endpointBasePathEl = $('#server-endpoint-url-path'),
      _toggleServerConfigBttn = $('#change-base-server-bttn'),
      _saveServerConfigBttn = $('#save-base-server-bttn'),
      _isConfigControlOpen = false;


  _init();



});
