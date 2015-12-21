$(function () {
   // Hightlight code
   hljs.initHighlightingOnLoad();

   // Stripe tables
   $('table').addClass('table table-striped table-hover');

   // Enable side ToC
   $('body').scrollspy({
      target: '.bs-sidebar'
   });

   // Prevent disabled links from causing a page reload
   $("li.disabled a").click(function () {
      event.preventDefault();
   });

   var $query = $(".searchbox-input");
   var $results = $("#mkdocs-search-results");
   var $body = $("#body");

   // Add header links
   $(":header", $body).each(function (i, header) {
      var $header = $(header);
      var id = $header.attr('id');
      var icon = '<i class="fa fa-link"></i>';

      if (id) {
         var title = $header.text();
         $header.text("");
         $header.prepend($("<a/>").addClass("header-link").attr("href", "#" + id).html(icon));
         $header.append($("<a/>").addClass("header-text-link").attr("href", "#" + id).text(title));
      }
   });

   var submitIcon = $('.searchbox-icon');
   var inputBox = $('.searchbox-input');
   var $search = $('.searchbox');
   var isOpen = false;

   $search.submit(function (e) {
      e.preventDefault();
      submitIcon.click();
   })

   submitIcon.click(function () {
      if (isOpen == false) {
         inputBox.val("");
         $search.addClass('searchbox-open');
         inputBox.focus();
         isOpen = true;
      } else {
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

   $.get(base_url + '/mkdocs/search_index.json', function (data) {
      var index = lunr(function () {
         this.field('title', {
            boost: 10
         });
         this.field('text');
         this.ref('location');
      });

      var documents = {};

      for (var i = 0; i < data.docs.length; i++) {
         var doc = data.docs[i];
         doc.location = base_url + doc.location;
         index.add(doc);
         documents[doc.location] = doc;
      }

      var search = function () {
         var query = $query.val();
         var searchResults = $results[0];
         while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
         }

         if (query.length < 3 || query === '') {
            $body.show();
            $results.hide();

            return;
         }

         $results.delegate("a", "click", function () {
            $body.show();
            $results.hide();
         });

         var results = index.search(query);

         if (results.length > 0) {
            $body.hide();
            $results.show();

            for (var i = 0; i < results.length; i++) {
               var result = results[i];
               doc = documents[result.ref];
               doc.base_url = base_url;
               doc.summary = doc.text.substring(0, 200);

               var html = '<article><h3><a href="' + doc.location + '">' + doc.title + '</a></h3><p>' + doc.summary + '</p></article>';
               console.log(query);
               $results.append(html);
            }

            $results.highlight(query);
         } else {
            $body.show();
         }
      };

      var searchInput = document.getElementById('mkdocs-search-query');

      var term = getSearchTerm();
      if (term) {
         searchInput.value = term;
         search();
      }

      searchInput.addEventListener("keyup", debounce(search, 300));
   });

   function getSearchTerm() {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) {
         var sParameterName = sURLVariables[i].split('=');
         if (sParameterName[0] == 'q') {
            return decodeURIComponent(sParameterName[1].replace(/\+/g, '%20'));
         }
      }
   }

   function debounce(func, wait, immediate) {
      var timeout;
      return function () {
         var context = this,
            args = arguments;
         var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
         };
         var callNow = immediate && !timeout;
         clearTimeout(timeout);
         timeout = setTimeout(later, wait);
         if (callNow) func.apply(context, args);
      };
   };
});
