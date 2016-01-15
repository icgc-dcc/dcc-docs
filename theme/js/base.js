$(function () {
   // Hightlight code
   hljs.initHighlightingOnLoad();

   // Stripe tables
   $('table').addClass('table table-striped table-hover');

   // Enable side ToC
   $('body').scrollspy({
      target: '.bs-sidebar',
      offset: -12
   });

   // Prevent disabled links from causing a page reload
   $("li.disabled a").click(function (e) {
      e.preventDefault();
   });

   var $query = $(".searchbox-input");
   var $results = $("#mkdocs-search-results");
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
