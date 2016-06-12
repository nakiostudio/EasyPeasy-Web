var pageHeight;
var contentHeight;
var pages;

function puts(string) {
  console.log(string);
}

function offsetForPage(page) {
  var initial = page * pageHeight;
  var final = initial + pageHeight;
  var offset = $(document).scrollTop();

  var visibleHeight = Math.abs(pageHeight - initial - offset);
  visibleHeight = Math.min(pageHeight, Math.max(0, visibleHeight));

  return (visibleHeight / pageHeight) * 100;
}

$(document).ready(function(){
  pageHeight = $(window).height();
  contentHeight = $(document).height();
  pages = contentHeight / pageHeight;
});

$(window).scroll(function() {
  puts("Page 0: " + offsetForPage(0));
  puts("Page 1: " + offsetForPage(1));
  puts("Page 2: " + offsetForPage(2));
});
