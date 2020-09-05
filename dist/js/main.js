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

//start login page js
const loginPage = document.getElementById("login-page");
if (loginPage) {
  const loginBtn = document.querySelector(".login-button");
  const loginForm = document.querySelector(".login-form");
  const before = document.getElementById("before");
  const closeBtn = document.querySelector(".close-btn");
  loginBtn.addEventListener("click", () => {
    loginForm.classList.add("form-scale-in");
    loginForm.classList.remove("form-scale-out");
    loginBtn.classList.add("login-btn-animation1");
    loginBtn.classList.remove("login-btn-animation2");
    setTimeout(() => {
      before.style.display = "block";
    }, 500);
  });
  closeBtn.addEventListener("click", () => {
    before.style.display = "none";
    loginForm.classList.add("form-scale-out");
    loginForm.classList.remove("form-scale-in");
    loginBtn.classList.add("login-btn-animation2");
    loginBtn.classList.remove("login-btn-animation1");
  });
}

//end login page

const btnControlSide = document.getElementById("open-side-bar");

if (btnControlSide) {
  isLock = false;
  const sideBar = document.getElementById("side-bar");
  const main = document.querySelector(".page-container");
  const tables = document.querySelectorAll(".table-content table ");
  const panels = document.querySelectorAll(".tab-panel-1 .col-12 > div");

  btnControlSide.addEventListener("click", () => {
    if (isLock === false) {
      sideBar.classList.remove("sidebar-hover");
      sideBar.classList.add("sidenav-lock");
      main.style.marginLeft = "30rem";
      btnControlSide.innerHTML = `<i class="fas fa-long-arrow-alt-left t-white"></i>`;

      for (let t of tables) {
        t.parentElement.classList.add("lock");
        t.style.width = "120rem";
      }

      for (let p of panels) {
        p.style.overflowX = "scroll";
        p.querySelector("svg").style.width = "570px";
      }

      isLock = true;
    } else {
      sideBar.classList.remove("sidenav-lock");
      sideBar.classList.add("sidebar-hover");
      main.style.marginLeft = "5rem";
      btnControlSide.innerHTML = `<i class="fas fa-bars t-white"></i>`;

      for (let t of tables) {
        t.parentElement.classList.remove("lock");
        t.style.width = "";
      }

      for (let p of panels) {
        p.style.overflowX = "";
        p.querySelector("svg").style.width = "";
      }

      isLock = false;
    }
  });
}
