!(function (o) {
  o.fn.loading = function () {
    var r = "#b3cef6",
      a = "#4b86db",
      t = 75,
      n = 2e3;
    o(this).each(function () {
      var i = o(this),
        s = {
          backgroundColor: i.data("color") ? i.data("color").split(",")[0] : r,
          progressColor: i.data("color") ? i.data("color").split(",")[1] : a,
          percent: i.data("percent") ? i.data("percent") : t,
          duration: i.data("duration") ? i.data("duration") : n,
        };
      i.append(
        '<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' +
          s.percent +
          "%</span></div>"
      ),
        i.find(".background").css("background-color", s.backgroundColor),
        i.find(".left").css("background-color", s.backgroundColor),
        i.find(".rotate").css("background-color", s.progressColor),
        i.find(".right").css("background-color", s.progressColor);
      var c = i.find(".rotate");
      if (
        (setTimeout(function () {
          c.css({
            transition: "transform " + s.duration + "ms linear",
            transform: "rotate(" + 3.6 * s.percent + "deg)",
          });
        }, 1),
        s.percent > 50)
      ) {
        var d = "toggle " + (s.duration / s.percent) * 50 + "ms step-end",
          e = "toggle " + (s.duration / s.percent) * 50 + "ms step-start";
        i.find(".right").css({ animation: d, opacity: 1 }),
          i.find(".left").css({ animation: e, opacity: 0 });
      }
    });
  };
})(jQuery);
