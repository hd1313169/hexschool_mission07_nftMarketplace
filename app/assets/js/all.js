$(".search-btn").click(function (e) {
  e.preventDefault();
 $(".search").toggleClass("active");
 $(".searchBar").toggleClass("active");
 $(".search-btn-back").toggleClass("active");
 $(".logo").toggleClass("hidden");
 $(".hamberger").toggleClass("hidden");

});