window.onload = function () {
    window.scrollTo(0, 0);
};
if (window.location.hash) {
window.history.replaceState(null, null, window.location.href.split("#")[0]);
}

window.addEventListener("beforeunload", function () {
window.scrollTo(0, 0);
});