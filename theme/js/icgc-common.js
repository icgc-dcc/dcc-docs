$(function() {

  function init() {

    // Initialize a JS global to be used with dynamic JS Apps
    if (typeof window.$icgcApp === 'undefined') {
      window.$icgcApp = {config: {}};
    }


    function _initSearch(confineToContainerID) {

      //
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
      ////////////////////////////////////////////

      //
      function _addSearchListeners() {

        var $search = $('.searchbox'),
            submitIcon = $('.searchbox-icon'),
            searchIconEl = submitIcon.find('.search-bttn'),
            searchCancelIconEl = submitIcon.find('.search-cancel-bttn');

        function __switchToCancelIcon() {
          searchIconEl.hide();
          searchCancelIconEl.show();
        }

        function __abortQuery(e) {
            if (e) {
              e.stopPropagation();
            }

            searchCancelIconEl.hide();
            searchIconEl.show();
            $resultsContainer.hide();
            $body.show();
            submitIcon.click();
        }

        $search.submit(function (e) {
          e.preventDefault();
          submitIcon.click();
        });

        searchCancelIconEl.click(__abortQuery);

        submitIcon.click(function () {
          if (_isSearchActive == false) {
            $inputBox.val('');
            $search.addClass('searchbox-open');
            $inputBox.focus();
            _isSearchActive = true;
          }
          else {
            $search.removeClass('searchbox-open');
            $inputBox.focusout();
            _isSearchActive = false;
          }
        });

        submitIcon.mouseup(function () {
          return false;
        });

        $search.mouseup(function () {
          return false;
        });

        $(document).mouseup(function () {
          if (_isSearchActive == true) {
            var query = $.trim($inputBox.val());

            if (query.length >= _VALID_QUERY_LENGTH) {
              __switchToCancelIcon();
            }
            else {
              __abortQuery();
            }
          }
        });
      }
      ////////////////////////////////////////////

      //
      function _getSearchTerm() {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
          var sParameterName = sURLVariables[i].split('=');
          if (sParameterName[0] == 'q') {
            return decodeURIComponent(sParameterName[1].replace(/\+/g, '%20'));
          }
        }
      }
      ////////////////////////////////////////////

      function _initSearchIndex() {
        var $results = $('#mkdocs-search-results'),
            $searchContentBody = $('#search-body');

        $.get(base_url + '/mkdocs/search_index.json', function (data) {
          var index = lunr(function () {
            this.field('title', {
              boost: 10
            });
            this.field('text');
            this.ref('location');
          });

          var documents = {},
              doc;

          for (var i = 0; i < data.docs.length; i++) {
            doc = data.docs[i];
            doc.location = base_url + doc.location;
            index.add(doc);
            documents[doc.location] = doc;
          }

          function __search() {
            var query = $inputBox.val();


            $results.empty();

            if (query.length < _VALID_QUERY_LENGTH || query === '') {
              $body.show();
              $resultsContainer.hide();

              return;
            }

            $results.delegate("a", "click", function () {
              $body.show();
              $resultsContainer.hide();
            });

            var results = index.search(query),
                resultsHTML = '';

            if (results.length > 0) {
              $body.hide();
              $resultsContainer.show();
              $searchContentBody.html('<strong>' + results.length  + '</strong> results found for <strong>' + query  + '</strong>' );

              var baseHostURL = location.protocol + '//' + location.hostname + (location.port &&
                                                                            (location.port != 80 && location.port != 443) ? (':' + location.port) : '') +
                            '/';

              for (var i = 0; i < results.length; i++) {
                var result = results[i];
                doc = documents[result.ref];
                doc.base_url = base_url;
                doc.summary = doc.text.substring(0, 200);
                var hostURL = baseHostURL + doc.location.replace(/[\.]+\//g, '');


                resultsHTML += '<div class="search-item animated fadeInLeft">' +
                               '<div class="doc-type-icon-container"><span class="header-badge"><i class="icon-book-open"></i></span></div>' +
                               '<div class="search-body">' +
                               '<a href="' + doc.location + '">' + doc.title + '</a>' +
                               '<p class="location-field"><a href="' + doc.location + '">'  + hostURL + '&nbsp;<span class="icon-share-1"></span></a></p>' +
                               '<p>' + doc.summary + '</p>' +
                               '</div>' +

                               '</div>';
                //console.log(query);

              }

              $results.append(resultsHTML);
              $results.highlight(query);
            }
            else {
              if (! _isSearchActive) {
                $body.show();
              }
              else {
                $searchContentBody.html('<strong>' + results.length  + '</strong> results found for <strong>' + query  + '</strong>' );
              }
            }
          }

          var searchInput = document.getElementById('mkdocs-search-query');

          var term = _getSearchTerm();

          if (term) {
            searchInput.value = term;
            search();
          }

          searchInput.addEventListener('keyup', _debounce(__search, 300));
        });

      }



      function _init() {
        _addSearchListeners();
        _initSearchIndex();
      }

      var $body = $(confineToContainerID),
          $resultsContainer = $('#mkdocs-search-results-container'),
          $inputBox = $('.searchbox-input'),
          _isSearchActive = false,
          _VALID_QUERY_LENGTH = 3;


      _init();

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
          footer = $('#docs-footer'),
          footerHeight = footer.outerHeight(),
          footerOffsetTop = footer.offset().top,
          OFFSET = -(100 + footerHeight),
          resizeElHeight = 0;//,
          /* sideNav = $('.bs-sidenav'),
          pageContainer = $('.parent-container'),
          /*initPageProgressPercentage = parseFloat(
            Math.min(1, (windowEl.scrollTop() + windowEl.height())/pageContainer.outerHeight())
          ).toFixed(3); */


      function _recalcMax() {
        var resizeHeight = resizingEl.outerHeight(),
            distance = Math.round(footerOffsetTop - resizeHeight - windowEl.scrollTop() - footerHeight /* <-- offset */),
            windowHeight =  windowEl.height();//,
            /*sideNavHeight =  sideNav.outerHeight(),
            pageProgressPercentage = parseFloat(
              Math.min(1, (windowEl.scrollTop() + windowHeight)/pageContainer.outerHeight())
            ).toFixed(3),
            offset = Math.round(sideNavHeight * (pageProgressPercentage - initPageProgressPercentage)),
            evalPercent = pageProgressPercentage * 100;

        ///console.log(pageProgressPercentage - initPageProgressPercentage, offset);
        /*if (evalPercent > 2 && evalPercent < 98) {
          resizingEl.scrollTop(offset - 40);
        }
        else if  (evalPercent < 2) {
          resizingEl.scrollTop(0);
        }
        else {
          resizingEl.scrollTop(pageContainer.outerHeight());
        }*/

        if (distance > 0) {
          resizingEl.css({overflow: 'auto', maxHeight: (windowHeight - Math.round(1.5 * _hideMenuOffset)) + 'px'}, 'fast');
        }
        else {
          resizeElHeight = windowHeight + OFFSET;
          resizingEl.css({overflow: 'auto', maxHeight: resizeElHeight + 'px'});
        }

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

    function _initAlerts() {
      $('.alert').each(function() {
        var alertContainer = $(this),
            supportedAlertTypes = ['alert-info'];

        for (var i = 0; i < supportedAlertTypes.length; i++) {
          var alertTypeClass = supportedAlertTypes[i];

          if (!  alertContainer.hasClass(alertTypeClass)) {
            continue;
          }

          var iconClass = null,
              alertText = '';

          switch (alertTypeClass) {
            case 'alert-info':
              iconClass = 'icon-pencil';
            break;
            case 'alert-warning':
              iconClass = 'icon-attention-1';
              break;
           default:
             break;
          }

          if( ! iconClass ) {
            continue;
          }


          alertText = alertContainer.text();
          alertContainer.empty();
          alertContainer.append('<div class="alert-indicator-icon">' +
                                '<i class="' + iconClass + '"></i>' +
                                '</div>' +
                                '<div class="alert-indicator-text">' +
                                alertText + '</div>');


        }

      });
    }

    var _bsSidebar = $('.bs-sidebar');

    if (_bsSidebar.length) {
      _ensureMaxHeight(_bsSidebar);
    }

    var BODY_ID = '#body';
    var _hideMenuOffset = 64;

    _initMenuNavBar('.navbar-nav', '> li');
    _initHeaders(BODY_ID);
    _initLinks(BODY_ID);
    _initSearch(BODY_ID);
    _calcMainContentWidth();
    _initAlerts();

    setTimeout(function() {
      fontSpy('icgc-icons', {
        glyphs: '\ue800\ue8019\ue81c\ue843',
        success: function () {
          $(BODY_ID).removeClass('fadeInBlurIntro').addClass('fadeInBlur');
        },
        failure: function () {
          $(BODY_ID).removeClass('fadeInBlurIntro').addClass('fadeInBlur');
        }
      });

    }, 0);



  }

  /////////////////////////////////////////
  init();


});