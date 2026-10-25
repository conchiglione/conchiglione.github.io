/* Gestisce lo sfondo scelto e lo ricorda (anche nelle altre pagine che includono questo file). */
(function () {
  var TEMI = ["neon", "80s", "rosanero", "pescanero", "notte", "confetto", "lavanda"];
  var R = document.documentElement, scelto = "neon";
  try { var s = localStorage.getItem("sfondo"); if (TEMI.indexOf(s) > -1) scelto = s; } catch (e) {}
  R.setAttribute("data-sfondo", scelto);

  function segna(v) {
    document.querySelectorAll("[data-scegli]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-scegli") === v ? "true" : "false");
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    segna(scelto);
    document.querySelectorAll("[data-scegli]").forEach(function (b) {
      b.addEventListener("click", function () {
        var v = b.getAttribute("data-scegli");
        R.setAttribute("data-sfondo", v);
        try { localStorage.setItem("sfondo", v); } catch (e) {}
        segna(v);
      });
    });
  });
})();
