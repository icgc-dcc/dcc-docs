$(function () {

   var scrollSpyTarget = '.bs-sidebar',
       scrollBody = $('html, body');

   // Hightlight code
   hljs.initHighlightingOnLoad();

   // Stripe tables
   $('table').addClass('table table-striped table-hover');

   // Enable side ToC
   $('body').scrollspy({
      target: scrollSpyTarget,
      offset: 0
   });

   $(scrollSpyTarget + ' a[href^=\'#\']').on('click', function(e) {

      // prevent default anchor click behavior
      e.preventDefault();

      // store hash
      var hash = this.hash,
          scrollTargetEl = $(hash);

      // animate
      scrollBody.animate({
         scrollTop: scrollTargetEl.offset().top + 7
      }, 300, function(){

         var targetEl = scrollTargetEl.find('a'),
             classes = 'animated-long focusText';

         targetEl.addClass(classes);

        setTimeout(function() { targetEl.removeClass(classes); }, 1100);
         // when done, add hash to url
         // (default click behaviour)
         window.location.hash = hash;
      });

   });

   // Prevent disabled links from causing a page reload
   $("li.disabled a").click(function (e) {
      e.preventDefault();
   });

   var $body = $("#body");

   // Add header links
   $(":header", $body).each(function (i, header) {
      var $header = $(header);

      if ($header.hasClass('no-auto-render')) {
         return;
      }

      var id = $header.attr('id');
      var icon = '&nbsp;<i class="icon-share-1"></i>';

      if (id) {
         var title = $header.text();
         $header.text("");
         //$header.prepend($("<a/>").addClass("header-link").attr("href", "#" + id)); //.html(icon));
         $header.append($("<a/>")
           .addClass("header-text-link")
           .attr("href", "#" + id)
           .attr("title", "Click on this header and copy URL to link to this section.")
           .append(title)
           .append(icon));
      }
   });

});
