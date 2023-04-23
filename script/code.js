window.onload = function () {
    window.scrollTo(0, 0);
};
if (window.location.hash) {
    var scrollWithoutHash = window.location.href.replace(window.location.hash, '');
    window.history.replaceState('', document.title, scrollWithoutHash);
}
window.addEventListener("beforeunload", function () {
window.scrollTo(0, 0);
});



var btnTopo = document.getElementById("botao-subir");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
}

function subirFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
