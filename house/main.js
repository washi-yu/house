$(function () {
  const btn = document.getElementById("btn");
  const hum = document.getElementById("hunberger");

  window.addEventListener("scroll", () => {
    const scrollValue = document.scrollingElement.scrollTop;

    if (scrollValue >= 700) {
      // btn.style.display = "block";
      $("#btn").fadeIn();
    } else {
      // btn.style.display = "none";
      $("#btn").fadeOut();
    }
  });

  hum.addEventListener("click", () => {
    // $("main").toggleClass("opacity");
    console.log("aa");
    $(".sp-link").toggleClass(".sp-link-tog");
    console.log("ss");
  });
});
