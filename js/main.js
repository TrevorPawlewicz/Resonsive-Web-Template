$(function(){
    var pagePath = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);

    $('#header ul li a[href^="' + pagePath + '"]').addClass('selected');

    console.log(pagePath);
});
