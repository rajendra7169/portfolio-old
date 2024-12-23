$(function (a) {
  "use strict";
  jQuery(document).ready(function () {
    a(".toggle-icon").on("click", function () {
      a(".my-navbar").toggleClass("show"),
        a(".mainmenu-area").toggleClass("show");
    }),
      a("#nav-icon3").click(function () {
        a(this).toggleClass("open");
      }),
      a(".my-navbar .mynav-item").on("click", function (e) {
        if (!a(this).hasClass("active")) {
          var i = a(this).index() + 2;
          a(".my-navbar .mynav-item").removeClass("active"),
            a(this).addClass("active"),
            a("#main > section.active").removeClass("active"),
            a("#main > section:nth-child(" + i + ")").addClass("active");
        }
        e.preventDefault();
      }),
      a("#home .pagelink").on("click", function (e) {
        e.preventDefault(),
          (e.target.parentNode.id = "g-p-f-h") &&
            (a(".my-navbar .mynav-item").removeClass("active"),
            a(".my-navbar .mynav-item.portfolio").addClass("active"),
            a(".my-navbar .mynav-item .portfolio").addClass("active"),
            a(".project-gallery").addClass("active"));
      }),
      a(".project-gallery").mixItUp();
    var e = a("#typed");
    e.length > 0 &&
      e.typed({
        strings: ["Web Design", "Web Development", "UI/UX Design"],
        stringsElement: null,
        typeSpeed: 70,
        startDelay: 150,
        backSpeed: 40,
        backDelay: 350,
        loop: !0,
        loopCount: 550,
        showCursor: !0,
        cursorChar: "|",
        attr: null,
        contentType: "html",
      }),
      a("#statisticsSection").length > 0 && a(".progress-circle").loading(),
      a(".lightbox").magnificPopup({ type: "image" }),
      a(".image-preview").magnificPopup({
        type: "image",
        gallery: { enabled: !0 },
      }),
      a(".service-area-wrapper").each(function () {
        a(this).magnificPopup({
          delegate: ".service-modal:visible",
          type: "ajax",
          tLoading:
            '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
          mainClass: "mfp-fade",
          closeBtnInside: !0,
          midClick: !0,
          gallery: { enabled: !0 },
        });
      }),
      a(".project-gallery-item").each(function () {
        a(this).magnificPopup({
          delegate: ".pp:visible",
          type: "ajax",
          tLoading:
            '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
          mainClass: "mfp-fade",
          closeBtnInside: !0,
          midClick: !0,
          gallery: { enabled: !0 },
          callbacks: {
            ajaxContentAdded: function () {
              a(".owl-carousel").each(function (e) {
                var i = a(this);
                a(this).owlCarousel({
                  autoplay: i.data("autoplay"),
                  center: i.data("center"),
                  autoplayTimeout: i.data("autoplaytimeout"),
                  autoplayHoverPause: i.data("autoplayhoverpause"),
                  loop: i.data("loop"),
                  speed: i.data("speed"),
                  nav: i.data("nav"),
                  dots: i.data("dots"),
                  autoHeight: i.data("autoheight"),
                  autoWidth: i.data("autowidth"),
                  margin: i.data("margin"),
                  stagePadding: i.data("stagepadding"),
                  slideBy: i.data("slideby"),
                  lazyLoad: i.data("lazyload"),
                  navText: [
                    '<i class="fa fa-chevron-left"></i>',
                    '<i class="fa fa-chevron-right"></i>',
                  ],
                  animateOut: i.data("animateOut"),
                  animateIn: i.data("animateIn"),
                  video: i.data("video"),
                  items: i.data("items"),
                  responsive: {
                    0: { items: i.data("items-xs") },
                    576: { items: i.data("items-sm") },
                    768: { items: i.data("items-md") },
                    992: { items: i.data("items-lg") },
                  },
                });
              });
            },
          },
        });
      });
  }),
    a(window).on("load", function () {
      a("#preloader").addClass("hide");
    });
});
