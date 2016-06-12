var pageHeight;
var contentHeight;
var pages;

function fadeOutPercentage(page) {
  var initial = page * pageHeight;
  var final = initial + pageHeight;
  var offset = $(document).scrollTop();

  if (offset >= initial) {
    return 1.0 - Math.min(1.0, Math.max(0, (offset - initial) / pageHeight));
  }
  else if (offset < initial) {
    return 1.0
  }

  return 0;
}

function updateAlpha(id, alpha) {
  $(id).css("opacity", alpha);
}

$(document).ready(function(){
  pageHeight = $(window).height();
  contentHeight = $(document).height();
  pages = contentHeight / pageHeight;

  $(".github-link").on( "click", function() {
    window.open("https://github.com/nakiostudio/EasyPeasy", "_self");
  });
});

$(window).scroll(function() {
  // First page
  var opacity = fadeOutPercentage(0);
  updateAlpha(".quote", opacity);
  updateAlpha("img.device", 1 - opacity);

  // Second page
  opacity = fadeOutPercentage(1);
  if (opacity < 0.9) {
    updateAlpha(".snippet-image-1", opacity - 0.75);
  }
});
