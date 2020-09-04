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
const loginBtn = document.querySelector('.login-button');
const loginForm = document.querySelector('.login-form');
const before = document.getElementById('before');
const closeBtn = document.querySelector('.close-btn');
loginBtn.addEventListener('click',()=>{
    loginForm.classList.add("form-scale-in");
    loginForm.classList.remove("form-scale-out");
    loginBtn.classList.add("login-btn-animation1");
    loginBtn.classList.remove("login-btn-animation2");
    setTimeout(()=> {
      before.style.display='block';
    }, 500);
});
closeBtn.addEventListener('click', ()=>{
    before.style.display='none';
    loginForm.classList.add("form-scale-out");
    loginForm.classList.remove("form-scale-in");
    loginBtn.classList.add("login-btn-animation2");
    loginBtn.classList.remove("login-btn-animation1");
});
//end login page

