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
            inputBox = $('.searchbox-input'),
            isOpen = false;

          $search.submit(function (e) {
          e.preventDefault();
          submitIcon.click();
        });

        submitIcon.click(function () {
          if (isOpen == false) {
            inputBox.val('');
            $search.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
          }
          else {
            $search.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
          }
        });

        submitIcon.mouseup(function () {
          return false;
        });

        $search.mouseup(function () {
          return false;
        });

        $(document).mouseup(function () {
          if (isOpen == true) {
            $('.searchbox-icon').css('display', 'block');
            submitIcon.click();
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
        var $query = $('.searchbox-input'),
            $body = $(confineToContainerID),
            $resultsContainer = $('#mkdocs-search-results-container'),
            $results = $('#mkdocs-search-results'),
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
            var query = $query.val();


            $results.empty();

            if (query.length < 3 || query === '') {
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

              for (var i = 0; i < results.length; i++) {
                var result = results[i];
                doc = documents[result.ref];
                doc.base_url = base_url;
                doc.summary = doc.text.substring(0, 200);

                resultsHTML += '<div class="search-item animated fadeInLeft">' +
                               '<div class="doc-type-icon-container"><span class="header-badge"><i class="icon-book-open"></i></span></div>' +
                               '<div class="search-body">' +
                               '<a href="' + doc.location + '">' + doc.title + '</a>' +
                               '<p>' + doc.summary + '</p>' +
                               '</div>' +

                               '</div>';
                console.log(query);

              }

              $results.append(resultsHTML);
              $results.highlight(query);
            }
            else {
              $body.show();
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
    _initSearch(BODY_ID);
    _calcMainContentWidth();
  }

  /////////////////////////////////////////
  init();


});