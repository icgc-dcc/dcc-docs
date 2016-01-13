$(function() {

  function init() {

    // Initialize a JS global to be used with dynamic JS Apps
    if (typeof window.$icgcApp === 'undefined') {
      window.$icgcApp = {config: {}};
    }

    function _initHeaders(confineToContainerID) {
      var header = $(confineToContainerID + ' h1');
      if (header.hasClass('no-auto-render')) {
        return;
      }

      header.prepend('<span class="header-badge"><i class="icon-book-open"></i></span>');
    }

    function _initLinks(confineToContainerID) {
      // Ensure all anchor links which appear to be external have the appropriate target and
      // icon.
      $(confineToContainerID + ' a[href^="http"]').each(function() {
        var anchor = $(this);

        anchor.attr('target', '_blank');

        // If the link already has an font awesome icon associated skip it
        if (! anchor.find('*[class*="fa-"]').length) {
          anchor.prepend('&nbsp;<i class="icon-external-link"></i>&nbsp;');
        }

      });


      // Ensure all mail links have the appropriate icon.
      $('a[href^="mailto"]').prepend('&nbsp;<i class="icon-mail"></i>&nbsp;');
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

      $('.navbar.navbar-default').autoHidingNavbar({hideOffset: _hideMenuOffset});
    }

    function _ensureMaxHeight(resizingEl) {
      var windowEl = $(window),
        OFFSET = -(80 + 200),
        resizeElHeight = 0;


      function _recalcMax() {
        resizeElHeight = windowEl.height() + OFFSET;
        resizingEl.css({overflow: 'auto', maxHeight: resizeElHeight + 'px'});
      }

      var _prevScrollOffset = 0,
          _document = $(document);


      function _onScroll() {
        var currentScrollOffset = windowEl.scrollTop(),
            delta = currentScrollOffset - _prevScrollOffset,
            absDelta = Math.abs(delta),
            scrollPosition = windowEl.height() + currentScrollOffset,
            scrollHeight = _document.height(),
            shouldResetNav = (scrollPosition + _hideMenuOffset) >=  scrollHeight;

        if (delta > 0 && absDelta >= _hideMenuOffset && ! shouldResetNav) {
          resizingEl.css({top: 10});
          _prevScrollOffset = currentScrollOffset;
        }
        else if (delta < 0 && absDelta >= _hideMenuOffset || shouldResetNav) {
          resizingEl.css({top: ''});
          _prevScrollOffset = currentScrollOffset;
        }

        _recalcMax();
      }


      windowEl.scroll(_onScroll);
      windowEl.resize(_recalcMax)
    }



    function _calcMainContentWidth() {
      if ($('.full-width-content').length) {
        $('.main-container').addClass('col-md-12').removeClass('col-md-9').css({borderLeft: 'none'});
      }
    }

    var _bsSidebar = $('.bs-sidebar');

    if (_bsSidebar.length) {
      _ensureMaxHeight(_bsSidebar);
    }

    var BODY_ID = '#body';
    var _hideMenuOffset = 60;

    _initMenuNavBar('.navbar-nav', '> li');
    _initHeaders(BODY_ID);
    _initLinks(BODY_ID);
    _calcMainContentWidth();
  }

  /////////////////////////////////////////
  init();


});