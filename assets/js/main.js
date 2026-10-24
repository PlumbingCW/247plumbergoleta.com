(function () {
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");
  if (t && d && o) {
    var open = function () {
      d.classList.add("open");
      o.classList.add("visible");
      t.setAttribute("aria-expanded", "true");
      t.setAttribute("aria-label", "Close navigation menu");
      document.documentElement.style.overflow = "hidden";
    };
    var close = function () {
      d.classList.remove("open");
      o.classList.remove("visible");
      t.setAttribute("aria-expanded", "false");
      t.setAttribute("aria-label", "Open navigation menu");
      document.documentElement.style.overflow = "";
    };
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { close(); } else { open(); }
    });
    if (c) { c.addEventListener("click", close); }
    o.addEventListener("click", close);
    var links = d.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", close); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { close(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { close(); } });
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener("click", function () {
      var item = this.parentNode;
      var isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      this.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  }
})();
