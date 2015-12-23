$(function() {

  function init() {

    function _initHeaders(confineToContainerID) {
      var header = $(confineToContainerID + ' h1');
      header.prepend('<span class="header-badge"><i class="fa fa-book"></i></span>');
    }

    function _initLinks(confineToContainerID) {
      // Ensure all anchor links which appear to be external have the appropriate target and
      // icon.
      $(confineToContainerID + ' a[href^="http"]').each(function() {
        var anchor = $(this);

        anchor.attr('target', '_blank');

        // If the link already has an font awesome icon associated skip it
        if (! anchor.find('*[class*="fa-"]').length) {
          anchor.prepend('&nbsp;<i class="fa fa-external-link"></i>&nbsp;');
        }

      });


      // Ensure all mail links have the appropriate icon.
      $('a[href^="mailto"]').prepend('&nbsp;<i class="fa fa-envelope"></i>&nbsp;');
    }

    function _initMenuNavBar(container, subContainer) {
      var menuBar = $('.menu-bar'),
        container = $(container);


      container.find(subContainer)
        .hover(function () {
            var dropdownItem = $(this);
            menuBar.css({width: dropdownItem.width(), left: dropdownItem.position().left});
          },
          function () {
            menuBar.css({width: 0});
          });
    }

    function _ensureMaxHeight(resizingEl) {
      var windowEl = $(window),
        OFFSET = -(80 + 200),
        resizeElHeight = 0;


      function _recalcMax() {
        resizeElHeight = windowEl.height() + OFFSET;
        resizingEl.css({overflow: 'auto', maxHeight: resizeElHeight + 'px'});
      }

      windowEl.scroll(_recalcMax);
      windowEl.resize(_recalcMax)
    }

    var _bsSidebar = $('.bs-sidebar');

    if (_bsSidebar.length) {
      _ensureMaxHeight(_bsSidebar);
    }

    var BODY_ID = '#body';

    _initMenuNavBar('.navbar-nav', '> li');
    _initHeaders(BODY_ID);
    _initLinks(BODY_ID);
  }

  /////////////////////////////////////////
  init();


});