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
console.log(loginBtn);
console.log(loginForm);
console.log(before);
console.log(closeBtn);
loginBtn.addEventListener('click',()=>{
    loginBtn.style.display='none';
    loginForm.style.display='block';
    before.style.display='block';
});
closeBtn.addEventListener('click', ()=>{
    loginBtn.style.display='block';
    loginForm.style.display='none';
    before.style.display='none';
});
//end login page