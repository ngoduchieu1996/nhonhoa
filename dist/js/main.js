$(".has-sub").click(function () {
  $(this).siblings().find(".sub-menu").hide(300);

  $(this).find(".sub-menu").slideToggle(300);
});

const shows = document.querySelectorAll(".show-menu");
for (let show of shows) {
  show.addEventListener("click", (q) => {
    q.preventDefault();
    const p = show.parentElement;
    const ul = p.querySelector("ul");
    if (ul.style.display === "none") {
      ul.style.display = "block";
      ul.style.animation = `bounceUp .5s both`;
    }
  });
}

const backs = document.querySelectorAll(".back");
for (let back of backs) {
  back.addEventListener("click", (e) => {
    e.preventDefault();
    const p = back.parentElement;
    p.style.display = "none";
    p.style.animation = "";
  });
}

$(".date-picker").datepicker();
