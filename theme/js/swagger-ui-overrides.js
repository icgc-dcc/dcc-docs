window.Docs.expandEndpointListForResource = function(resource) {
    var resource = Docs.escapeResourceName(resource);
    if (resource == '') {
        $('.resource ul.endpoints').slideDown();
        return;
    }

    $('li#resource_' + resource).addClass('active');

    var elem = $('li#resource_' + resource + ' ul.endpoints');
    elem.find('pre code').each(function(i, e) {hljs.highlightBlock(e)});
    elem.slideDown();
}