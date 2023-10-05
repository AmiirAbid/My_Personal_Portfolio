window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("nav").style.boxShadow = "0px 0px 5px var(--text-color)";
  } else {
    document.getElementById("nav").style.boxShadow = "0px 0px 0px var(--text-color)";
  }
}