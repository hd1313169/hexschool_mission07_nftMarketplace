$(".searchBar-btn").click(function (e) {
  e.preventDefault();
 $(".searchBar").toggleClass("active");
 $(".navbar").toggleClass("hidden");
});