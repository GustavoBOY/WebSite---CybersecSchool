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